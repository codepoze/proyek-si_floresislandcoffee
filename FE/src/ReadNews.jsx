import { useParams, useNavigate } from 'react-router';
import SEOHead from './components/SEOHead';
import { newsData } from './data/newsData';

function ReadNews() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const getNewsFromSlug = (slug) => {
    const newsMap = {
      'coffee-roasting-guide': {
        id: 1,
        title: 'Sip Into The Cup: The Art of Coffee Roasting',
        category: 'Roasting',
        image: newsData[0].image,
        alt: 'Close up of a coffee roasting machine',
        publishDate: 'March 15, 2024',
        author: 'Maria Santos',
        readTime: '5 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Coffee roasting is both an art and a science that transforms green coffee beans into the aromatic brown beans we love. At Flores Island Coffee, our roasting process is carefully crafted to bring out the unique characteristics of our high-altitude grown beans.'
          },
          {
            type: 'heading',
            text: 'The Roasting Process'
          },
          {
            type: 'paragraph',
            text: 'Our roasting journey begins with selecting the finest green beans from local farmers across Flores Island. Each batch is carefully monitored as it progresses through various stages of roasting, from the initial drying phase to the complex chemical reactions that develop flavor.'
          },
          {
            type: 'paragraph',
            text: 'The first crack marks a crucial moment in roasting - this is when the bean structure begins to break down and oils start to develop. For our signature medium roast, we carefully control the temperature and timing to achieve the perfect balance of acidity, body, and flavor notes.'
          },
          {
            type: 'heading',
            text: 'Flavor Development'
          },
          {
            type: 'paragraph',
            text: 'Flores Island coffee beans are known for their unique terroir - the combination of volcanic soil, high altitude, and tropical climate creates distinct flavor profiles. During roasting, we work to enhance these natural characteristics while maintaining the bean\'s inherent sweetness and complexity.'
          },
          {
            type: 'paragraph',
            text: 'Our roasters use their expertise to identify the optimal roast level for each batch, ensuring that every cup delivers the rich, full-bodied flavor that Flores coffee is renowned for. The result is a coffee that captures the essence of our island\'s unique growing conditions.'
          }
        ]
      },
      'perfect-brewing-techniques': {
        id: 2,
        title: 'Sip Into The Cup: Perfect Brewing Techniques',
        category: 'Brewing',
        image: newsData[1].image,
        alt: 'Pouring freshly brewed coffee into a cup',
        publishDate: 'March 10, 2024',
        author: 'Carlos Rodriguez',
        readTime: '4 min read',
        content: [
          {
            type: 'paragraph',
            text: 'The perfect cup of coffee starts with quality beans, but the brewing method can make or break your coffee experience. Here are the essential techniques to unlock the full potential of your Flores Island coffee.'
          },
          {
            type: 'heading',
            text: 'Water Quality Matters'
          },
          {
            type: 'paragraph',
            text: 'Coffee is 98% water, so the quality of your water directly impacts the taste of your brew. Use filtered water with a balanced mineral content for the best extraction. The ideal water temperature is between 195-205°F (90-96°C).'
          },
          {
            type: 'heading',
            text: 'Grind Size and Consistency'
          },
          {
            type: 'paragraph',
            text: 'Different brewing methods require different grind sizes. For pour-over methods like V60 or Chemex, use a medium grind. For espresso, go fine. For French press, use a coarse grind. Consistency in grind size ensures even extraction.'
          },
          {
            type: 'paragraph',
            text: 'Always grind your beans just before brewing to preserve the volatile compounds that give coffee its aroma and flavor. Pre-ground coffee loses its freshness quickly, so invest in a quality burr grinder for the best results.'
          },
          {
            type: 'heading',
            text: 'Brewing Ratios'
          },
          {
            type: 'paragraph',
            text: 'A good starting point is a 1:15 to 1:17 ratio of coffee to water. This means for every gram of coffee, use 15-17 grams of water. Adjust according to your taste preferences - use more coffee for a stronger brew, less for a milder cup.'
          }
        ]
      },
      'advanced-roasting-profiles': {
        id: 3,
        title: 'Sip Into The Cup: Advanced Roasting Profiles',
        category: 'Roasting',
        image: newsData[2].image,
        alt: 'Another angle of a coffee roasting machine',
        publishDate: 'March 5, 2024',
        author: 'Ana Gutierrez',
        readTime: '6 min read',
        content: [
          {
            type: 'paragraph',
            text: 'Advanced roasting profiles allow us to fine-tune the flavor characteristics of our Flores Island coffee. By carefully controlling time, temperature, and airflow, we can highlight specific notes and create unique flavor experiences.'
          },
          {
            type: 'heading',
            text: 'Understanding Heat Application'
          },
          {
            type: 'paragraph',
            text: 'The rate of rise (ROR) during roasting is crucial for flavor development. A declining ROR throughout the roast helps avoid baked or flat flavors. We monitor the bean temperature and adjust heat application to maintain optimal development.'
          },
          {
            type: 'paragraph',
            text: 'Different phases of roasting require different heat strategies. During the drying phase, we use moderate heat to remove moisture gradually. As we approach first crack, we reduce heat input to allow for proper development without rushing the process.'
          },
          {
            type: 'heading',
            text: 'Airflow Management'
          },
          {
            type: 'paragraph',
            text: 'Proper airflow management helps control the roasting environment and affects the final flavor profile. Increased airflow can clean up the cup and reduce smokiness, while reduced airflow can increase body and intensity.'
          },
          {
            type: 'paragraph',
            text: 'We adjust airflow throughout the roast to enhance the natural characteristics of our Flores beans. This careful balance helps us achieve the complex, well-rounded profiles that our customers love.'
          },
          {
            type: 'heading',
            text: 'Development Time Ratio'
          },
          {
            type: 'paragraph',
            text: 'The development time ratio (DTR) - the percentage of total roast time spent after first crack - significantly impacts flavor. A DTR of 18-25% typically produces well-developed coffee with good sweetness and complexity, which is our target for most of our roast profiles.'
          }
        ]
      }
    };
    
    return newsMap[slug] || null;
  };

  const newsArticle = getNewsFromSlug(slug);

  if (!newsArticle) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-flores-primary text-white px-6 py-3 rounded-lg hover:bg-flores-primary/90 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={`${newsArticle.title} - Flores Island Coffee News`}
        description={newsArticle.content[0]?.text?.substring(0, 160) || 'Expert coffee insights and brewing techniques from Flores Island Coffee'}
        keywords={`${newsArticle.category.toLowerCase()}, coffee ${newsArticle.category.toLowerCase()}, flores island coffee, indonesian coffee, coffee techniques, specialty coffee, coffee industry news`}
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={newsArticle.image} 
          alt={newsArticle.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto text-white">
            <div className="mb-4">
              <span className="inline-block bg-flores-primary px-3 py-1 rounded-full text-sm font-medium">
                {newsArticle.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {newsArticle.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <span>By {newsArticle.author}</span>
              <span>•</span>
              <span>{newsArticle.publishDate}</span>
              <span>•</span>
              <span>{newsArticle.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {newsArticle.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-2xl md:text-3xl font-bold text-flores-primary mt-12 mb-6 first:mt-0">
                    {block.text}
                  </h2>
                );
              }
              
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              }
              
              return null;
            })}
          </div>

          {/* Back to News Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center text-flores-primary hover:text-flores-primary/80 transition-colors font-medium"
            >
              ← Back to Coffee News
            </button>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-flores-primary mb-8">More Coffee News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsData
                .filter(news => news.id !== newsArticle.id)
                .slice(0, 2)
                .map(news => (
                  <div key={news.id} className="group cursor-pointer" onClick={() => navigate(news.href)}>
                    <img 
                      src={news.image} 
                      alt={news.alt}
                      className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="mb-2">
                      <span className="inline-block bg-gray-100 text-flores-primary px-2 py-1 rounded text-sm font-medium">
                        {news.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-flores-primary group-hover:text-flores-primary/80 transition-colors">
                      {news.title}: {news.category}
                    </h4>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default ReadNews;