import { useHoverAnimation } from '../hooks/useGSAP';

const ProductCard = ({ type, title, subtitle, image, backgroundImg, alt, className = "" }) => {
  const hoverRef = useHoverAnimation();
  if (type === "category") {
    return (
      <div ref={hoverRef} className={`bg-[#264653] text-white p-6 flex flex-col items-center justify-center rounded-xl text-center transition-transform duration-500 hover:scale-105 ${className}`}>
        <h3 className="text-6xl font-bold mb-2">{title}</h3>
        <p className="text-2xl opacity-90">{subtitle}</p>
      </div>
    );
  }

  if (type === "image") {
    return (
      <div 
        ref={hoverRef}
        className={`relative group overflow-hidden rounded-xl h-80 bg-cover bg-center ${className}`}
        style={{ backgroundImage: backgroundImg ? `url(${backgroundImg})` : 'none' }}
      >
        {/* Product image overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image}
            alt={alt}
            className="w-64 h-64 object-contain transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {title && (
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-bold">{title}</h3>
            {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ProductCard;