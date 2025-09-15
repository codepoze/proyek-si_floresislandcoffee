const ValueCard = ({ type, icon, title, image, alt }) => {
  if (type === "text") {
    return (
      <div className="bg-[#9AD7E5] h-36 md:h-48 lg:h-64 rounded-lg md:rounded-2xl flex flex-col items-center justify-center text-center p-2 md:p-6">
        {/* Check if icon is an image path or emoji */}
        {icon && typeof icon === 'string' && (icon.includes('.png') || icon.includes('.jpg') || icon.includes('.svg') || icon.startsWith('data:') || icon.startsWith('/') || icon.startsWith('http')) ? (
          <img src={icon} alt="icon" className="w-8 h-8 md:w-16 lg:w-20 md:h-16 lg:h-20 mb-1 md:mb-3 object-contain" loading="lazy" />
        ) : typeof icon === 'string' ? (
          <span className="text-2xl md:text-4xl lg:text-5xl mb-1 md:mb-3">{icon}</span>
        ) : (
          <img src={icon} alt="icon" className="w-8 h-8 md:w-16 lg:w-20 md:h-16 lg:h-20 mb-1 md:mb-3 object-contain" loading="lazy" />
        )}
        <p className="text-gray-800 font-medium text-xs md:text-sm lg:text-base leading-tight">
          {title}
        </p>
      </div>
    );
  }

  if (type === "image") {
    return (
      <div className="h-36 md:h-48 lg:h-64 rounded-lg md:rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return null;
};

export default ValueCard;