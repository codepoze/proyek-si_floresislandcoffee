import { Link } from 'react-router';
import { useHoverAnimation } from '../hooks/useGSAP';

const NewsCard = ({ image, alt, category, title, href = "#" }) => {
  const hoverRef = useHoverAnimation();

  return (
    <div ref={hoverRef} className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
      <img 
        src={image} 
        alt={alt} 
        className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold">
          {title}: {category}
        </h3>
        {href !== "#" && (
          <Link 
            to={href} 
            className="inline-block mt-3 text-sm font-medium tracking-wide transition-colors hover:text-gray-300"
          >
            Continue Reading →
          </Link>
        )}
      </div>
    </div>
  );
};


export default NewsCard;