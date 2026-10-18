import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useMemo } from "react";
// @ts-ignore
import * as THREE from "three";

type Align = "left" | "center" | "right";
type VerticalAlign = "top" | "center" | "bottom";
type GradientType = "linear" | "radial";

type GradientLayer = {
  type: GradientType;

  colorA: string;
  alphaA: number;

  colorB: string;
  alphaB: number;

  centerX?: number;
  centerY?: number;
  radiusX?: number;
  radiusY?: number;

  opacity?: number;
};

type LayeredWebGLGlassTextProps = {
  text?: string;
  className?: string;

  align?: Align;
  verticalAlign?: VerticalAlign;

  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number | string;

  planeWidth?: number;
  planeHeight?: number;

  /**
   * Moves the actual glyphs inside the texture.
   * Positive = lower.
   */
  textOffsetY?: number;

  /**
   * Moves the whole WebGL mesh.
   * Negative = lower.
   */
  meshOffsetY?: number;
  meshOffsetX?: number;

  grainAmount?: number;
  edgeSoftness?: number;

  reveal?: boolean;
  revealDelay?: number;
  revealDuration?: number;
  revealDistance?: number;

  layers?: GradientLayer[];
};

type ShaderUniforms = {
  uText: { value: THREE.CanvasTexture };
  uGradientType: { value: number };

  uColorA: { value: THREE.Color };
  uColorB: { value: THREE.Color };

  uAlphaA: { value: number };
  uAlphaB: { value: number };

  uCenter: { value: THREE.Vector2 };
  uRadius: { value: THREE.Vector2 };

  uOpacity: { value: number };
  uGrainAmount: { value: number };
  uEdgeSoftness: { value: number };
};

function createTextMask({
  text,
  fontSize,
  fontFamily,
  fontWeight,
  textOffsetY,
}: {
  text: string;
  fontSize: number;
  fontFamily: string;
  fontWeight: number | string;
  textOffsetY: number;
}): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Could not create canvas 2D context.");
  }

  canvas.width = 3000;
  canvas.height = 1000;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

  ctx.fillText(
    text,
    canvas.width / 2,
    canvas.height / 2 + fontSize * 0.08 + textOffsetY
  );

  const texture = new THREE.CanvasTexture(canvas);

  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;

  return texture;
}

function getPlanePosition({
  align,
  verticalAlign,
  planeWidth,
  planeHeight,
}: {
  align: Align;
  verticalAlign: VerticalAlign;
  planeWidth: number;
  planeHeight: number;
}): [number, number, number] {
  /**
   * Approximate visible world size for:
   * camera position [0, 0, 8], fov 45, mesh at z=0.
   */
  const viewportWidth = 13.2;
  const viewportHeight = 6.3;

  const x =
    align === "left"
      ? -(viewportWidth - planeWidth) / 2
      : align === "right"
        ? (viewportWidth - planeWidth) / 2
        : 0;

  const y =
    verticalAlign === "top"
      ? (viewportHeight - planeHeight) / 2
      : verticalAlign === "bottom"
        ? -(viewportHeight - planeHeight) / 2
        : 0;

  return [x, y, 0];
}

function TextLayerPlane({
  textTexture,
  layer,
  zOffset,
  align,
  verticalAlign,
  planeWidth,
  planeHeight,
  meshOffsetX,
  meshOffsetY,
  grainAmount,
  edgeSoftness,
}: {
  textTexture: THREE.CanvasTexture;
  layer: GradientLayer;
  zOffset: number;
  align: Align;
  verticalAlign: VerticalAlign;
  planeWidth: number;
  planeHeight: number;
  meshOffsetX: number;
  meshOffsetY: number;
  grainAmount: number;
  edgeSoftness: number;
}) {
  const uniforms = useMemo<ShaderUniforms>(
    () => ({
      uText: { value: textTexture },
      uGradientType: { value: layer.type === "linear" ? 0 : 1 },

      uColorA: { value: new THREE.Color(layer.colorA) },
      uColorB: { value: new THREE.Color(layer.colorB) },

      uAlphaA: { value: layer.alphaA },
      uAlphaB: { value: layer.alphaB },

      uCenter: {
        value: new THREE.Vector2(
          layer.centerX ?? 0.5,
          1.0 - (layer.centerY ?? 0.5)
        ),
      },

      uRadius: {
        value: new THREE.Vector2(layer.radiusX ?? 1, layer.radiusY ?? 1),
      },

      uOpacity: { value: layer.opacity ?? 1 },
      uGrainAmount: { value: grainAmount },
      uEdgeSoftness: { value: edgeSoftness },
    }),
    [textTexture, layer, grainAmount, edgeSoftness]
  );

  const basePosition = getPlanePosition({
    align,
    verticalAlign,
    planeWidth,
    planeHeight,
  });

  return (
    <mesh
      position={[
        basePosition[0] + meshOffsetX,
        basePosition[1] + meshOffsetY,
        zOffset,
      ]}
      renderOrder={zOffset > 0 ? 2 : 1}
    >
      <planeGeometry args={[planeWidth, planeHeight, 1, 1]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        depthTest={false}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;

  uniform sampler2D uText;
  uniform float uGradientType;

  uniform vec3 uColorA;
  uniform vec3 uColorB;

  uniform float uAlphaA;
  uniform float uAlphaB;

  uniform vec2 uCenter;
  uniform vec2 uRadius;

  uniform float uOpacity;
  uniform float uGrainAmount;
  uniform float uEdgeSoftness;

  float maskAt(vec2 uv) {
    return texture2D(uText, uv).r;
  }

  float random(vec2 p) {
    return fract(sin(dot(p.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  void main() {
    vec2 uv = vUv;

    float mask = maskAt(uv);

    float offset = uEdgeSoftness;

    float softMask = 0.0;
    softMask += maskAt(uv + vec2(offset, 0.0));
    softMask += maskAt(uv - vec2(offset, 0.0));
    softMask += maskAt(uv + vec2(0.0, offset));
    softMask += maskAt(uv - vec2(0.0, offset));
    softMask *= 0.25;

    float finalMask = max(mask, softMask);

    vec3 gradientColor;
    float gradientAlpha;

    if (uGradientType < 0.5) {
      // CSS linear-gradient(top -> bottom)
      float cssY = 1.0 - uv.y;
      gradientColor = mix(uColorA, uColorB, cssY);
      gradientAlpha = mix(uAlphaA, uAlphaB, cssY);
    } else {
      // CSS-like radial-gradient ellipse.
      vec2 delta = (uv - uCenter) / uRadius;
      float t = clamp(length(delta), 0.0, 1.0);

      gradientColor = mix(uColorA, uColorB, t);
      gradientAlpha = mix(uAlphaA, uAlphaB, t);
    }

    float grain = random(uv * 1200.0) * uGrainAmount;

    vec3 finalColor = gradientColor + grain;
    float alpha = finalMask * gradientAlpha * uOpacity;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

function Scene({
  text,
  align,
  verticalAlign,
  fontSize,
  fontFamily,
  fontWeight,
  planeWidth,
  planeHeight,
  textOffsetY,
  meshOffsetX,
  meshOffsetY,
  grainAmount,
  edgeSoftness,
  layers,
}: {
  text: string;
  align: Align;
  verticalAlign: VerticalAlign;
  fontSize: number;
  fontFamily: string;
  fontWeight: number | string;
  planeWidth: number;
  planeHeight: number;
  textOffsetY: number;
  meshOffsetX: number;
  meshOffsetY: number;
  grainAmount: number;
  edgeSoftness: number;
  layers: GradientLayer[];
}) {
  const textTexture = useMemo(
    () =>
      createTextMask({
        text,
        fontSize,
        fontFamily,
        fontWeight,
        textOffsetY,
      }),
    [text, fontSize, fontFamily, fontWeight, textOffsetY]
  );

  return (
    <>
      {layers.map((layer, index) => (
        <TextLayerPlane
          key={index}
          textTexture={textTexture}
          layer={layer}
          zOffset={index * 0.001}
          align={align}
          verticalAlign={verticalAlign}
          planeWidth={planeWidth}
          planeHeight={planeHeight}
          meshOffsetX={meshOffsetX}
          meshOffsetY={meshOffsetY}
          grainAmount={grainAmount}
          edgeSoftness={edgeSoftness}
        />
      ))}
    </>
  );
}

export default function LayeredWebGLGlassText({
  text = "MIDU",
  className = "",

  align = "center",
  verticalAlign = "bottom",

  fontSize = 560,
  fontFamily = "Inter, Arial, Helvetica, sans-serif",
  fontWeight = 900,

  planeWidth = 12.8,
  planeHeight = 4.9,

  textOffsetY = 0,
  meshOffsetX = 0,
  meshOffsetY = 0,

  grainAmount = 0.01,
  edgeSoftness = 0.0016,

  reveal = true,
  revealDelay = 0,
  revealDuration = 1.25,
  revealDistance = 70,

  layers = [
    // {
    //   type: "radial",
    //   colorA: "#ffffff",
    //   alphaA: 0,
    //   colorB: "#d9b6b6",
    //   alphaB: 1,
    //   centerX: 0.471,
    //   centerY: 0.019,
    //   radiusX: 0.56,
    //   radiusY: 1.56,
    //   opacity: 1,
    // },
    {
      type: "linear",
      colorA: "#6d6d6d",
      alphaA: 0,
      colorB: "#ffffff",
      alphaB: 0.3,
      opacity: 0.5,
    },
  ],
}: LayeredWebGLGlassTextProps) {
  const canvas = (
    <Canvas
      className="absolute inset-0 block h-full w-full"
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{
        alpha: true,
        antialias: true,
      }}
      dpr={[1, 2]}
    >
      <Scene
        text={text}
        align={align}
        verticalAlign={verticalAlign}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        planeWidth={planeWidth}
        planeHeight={planeHeight}
        textOffsetY={textOffsetY}
        meshOffsetX={meshOffsetX}
        meshOffsetY={meshOffsetY}
        grainAmount={grainAmount}
        edgeSoftness={edgeSoftness}
        layers={layers}
      />
    </Canvas>
  );

  if (!reveal) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 z-10 m-0 h-full w-full overflow-hidden p-0 ${className}`}
      >
        {canvas}
      </div>
    );
  }

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 z-10 m-0 h-full w-full overflow-hidden p-0 ${className}`}
      initial={{
        clipPath: "inset(100% 0% 0% 0%)",
        y: revealDistance,
        opacity: 0,
      }}
      animate={{
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: revealDelay,
        duration: revealDuration,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {canvas}
    </motion.div>
  );
}