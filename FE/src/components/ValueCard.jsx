const ValueCard = ({ type, icon, title, image, backgroundImg, alt }) => {
  if (type === "text") {
    const cardStyle = backgroundImg
      ? { backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }
      : {};

    return (
      <div
        className="bg-[#9AD7E5] h-36 md:h-48 lg:h-64 rounded-lg md:rounded-2xl flex flex-col items-center justify-center text-center p-2 md:p-6 relative overflow-hidden"
        style={cardStyle}
      >
        {backgroundImg && (
          <div className="absolute inset-0 bg-black/20 rounded-lg md:rounded-2xl"></div>
        )}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Check if icon is an image path or emoji */}
          {icon && typeof icon === 'string' && (icon.includes('.png') || icon.includes('.jpg') || icon.includes('.svg') || icon.startsWith('data:') || icon.startsWith('/') || icon.startsWith('http')) ? (
            <img src={icon} alt="icon" className="w-8 h-8 md:w-16 lg:w-20 md:h-16 lg:h-20 mb-1 md:mb-3 object-contain" loading="lazy" />
          ) : typeof icon === 'string' ? (
            <span className="text-2xl md:text-4xl lg:text-5xl mb-1 md:mb-3 block text-center">{icon}</span>
          ) : (
            <img src={icon} alt="icon" className="w-8 h-8 md:w-16 lg:w-20 md:h-16 lg:h-20 mb-1 md:mb-3 object-contain" loading="lazy" />
          )}
          <p className={`font-medium text-xs md:text-sm lg:text-base leading-tight text-center ${backgroundImg ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </p>
        </div>
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