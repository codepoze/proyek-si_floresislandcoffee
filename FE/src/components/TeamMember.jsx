function TeamMember({ name, position, image, alt }) {
  return (
    <div className="text-center">
      <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={alt || `${name} - ${position}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-gray-900 text-sm mb-1">{name}</h3>
      {position && <p className="text-xs text-gray-600">{position}</p>}
    </div>
  );
}

export default TeamMember;