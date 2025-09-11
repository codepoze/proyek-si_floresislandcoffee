const ValueCard = ({ type, icon, title, image, alt }) => {
  if (type === "text") {
    return (
      <div className="bg-[#9AD7E5] h-96 rounded-2xl flex flex-col items-center justify-center text-center p-10">
        {/* Check if icon is an image path or emoji */}
        {icon && typeof icon === 'string' && (icon.includes('.png') || icon.includes('.jpg') || icon.includes('.svg') || icon.startsWith('data:') || icon.startsWith('/') || icon.startsWith('http')) ? (
          <img src={icon} alt="icon" className="w-32 h-32 mb-4 object-contain" loading="lazy" />
        ) : typeof icon === 'string' ? (
          <span className="text-6xl mb-4">{icon}</span>
        ) : (
          <img src={icon} alt="icon" className="w-32 h-32 mb-4 object-contain" loading="lazy" />
        )}
        <p className="text-gray-800 font-medium text-lg">
          {title}
        </p>
      </div>
    );
  }

  if (type === "image") {
    return (
      <div className="h-96 rounded-2xl overflow-hidden">
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