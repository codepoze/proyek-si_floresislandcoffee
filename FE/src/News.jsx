import { useState } from 'react';
import { Link } from 'react-router';
import SEOHead from './components/SEOHead';
import { newsData } from './data/newsData';
import NewsCard from './components/NewsCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;
  
  // Calculate pagination
  const totalPages = Math.ceil(newsData.length / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = newsData.slice(startIndex, endIndex);
  
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <>
      <SEOHead 
        title="Coffee News - Latest Updates from Flores Island Coffee Industry"
        description="Stay updated with the latest coffee news, brewing techniques, roasting guides, and industry insights from Flores Island Coffee. Expert articles on Indonesian coffee farming, export trends, and specialty coffee."
        keywords="coffee news, coffee industry news, coffee brewing techniques, coffee roasting guide, indonesian coffee news, flores island coffee updates, coffee farming news, coffee export news, specialty coffee articles, coffee processing techniques, sustainable coffee news"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-flores-primary py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
            Indonesian Coffee News & Industry Insights
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-body">
            Stay updated with the latest coffee industry news, expert brewing techniques, and sustainable farming insights from Flores Island Coffee. 
            From specialty coffee roasting to Indonesian coffee export trends, discover everything about our premium coffee journey.
          </p>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats */}
          <div className="mb-12">
            <p className="text-gray-600 font-body">
              Showing {startIndex + 1}-{Math.min(endIndex, newsData.length)} of {newsData.length} articles
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentNews.map((news) => (
              <div key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={news.image} 
                    alt={news.alt}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-flores-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-flores-primary mb-3 font-heading">
                    {news.title}: {news.category}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed font-body">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span>By {news.author}</span>
                      <span>•</span>
                      <span>{news.readTime}</span>
                    </div>
                    <span>{news.publishDate}</span>
                  </div>
                  <Link 
                    to={news.href}
                    className="inline-flex items-center text-flores-primary hover:text-flores-primary/80 transition-colors font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === 1
                    ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                    : 'text-flores-primary bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <ChevronLeftIcon className="w-4 h-4 mr-1" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex items-center space-x-1">
                {/* First page if not visible */}
                {getPageNumbers()[0] > 1 && (
                  <>
                    <button
                      onClick={() => handlePageChange(1)}
                      className="px-3 py-2 text-sm font-medium text-flores-primary bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      1
                    </button>
                    {getPageNumbers()[0] > 2 && (
                      <span className="px-2 text-gray-500">...</span>
                    )}
                  </>
                )}

                {/* Visible page numbers */}
                {getPageNumbers().map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-flores-primary text-white'
                        : 'text-flores-primary bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}

                {/* Last page if not visible */}
                {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                  <>
                    {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                      <span className="px-2 text-gray-500">...</span>
                    )}
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      className="px-3 py-2 text-sm font-medium text-flores-primary bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === totalPages
                    ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                    : 'text-flores-primary bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Next
                <ChevronRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-flores-primary mb-4 font-heading">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-10 mx-auto font-body">
            Subscribe to our newsletter to be the first to know about latest coffee news, 
            brewing tips, and updates from Flores Island Coffee
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-flores-primary focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-flores-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-flores-primary/90 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      </div>
    </>
  );
}

export default News;