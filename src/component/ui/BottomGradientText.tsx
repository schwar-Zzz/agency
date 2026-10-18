

const BottomGradientText = ({ children, gradientColors }: { children: string; gradientColors?: string }) => {
  return (
    <div className="relative w-full h-full">
      {/* The actual text, positioned at bottom with justify-end */}
      <div className="flex flex-col justify-end items-center h-full pb-8">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
          {children}
        </h2>
      </div>

      {/* See-through gradient overlay (bottom to top) */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t ${gradientColors} pointer-events-none`}
      />
    </div>
  );
};

export default BottomGradientText;