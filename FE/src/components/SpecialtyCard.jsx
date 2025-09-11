const SpecialtyCard = ({ image, alt, title, buttonText }) => {
  return (
    <div className="relative h-[32rem] w-full overflow-hidden group text-white">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-end p-8 text-center">
        <h3 className="text-5xl font-semibold font-serif mb-4">
          {title}
        </h3>
        <button className="border border-white rounded-md px-5 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-black">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SpecialtyCard;