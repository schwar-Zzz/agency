const GradientShader = () => {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg bg-black shadow-lg">
      <iframe
        src="https://gradientshader-nine.vercel.app/"
        loading="lazy"
        title="Gradient Shader"
        sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        className="h-full w-full border-none opacity-80"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default GradientShader;