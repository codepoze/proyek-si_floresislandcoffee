import SEOHead from './components/SEOHead';

function About() {
  return (
    <>
      <SEOHead 
        title="About Flores Island Coffee - Indonesian Coffee Export & Sustainable Farming Partnership"
        description="Learn about Flores Island Coffee - a strategic New Zealand-Indonesia partnership driving sustainable growth in specialty coffee. 370,000+ members, 222,000 smallholder farmers, premium coffee export from Flores Island."
        keywords="about flores island coffee, indonesian coffee partnership, sustainable coffee farming, specialty coffee export, flores island coffee company, coffee cooperative indonesia, smallholder coffee farmers, premium coffee production, coffee supply chain indonesia, sustainable agriculture flores"
      />
      <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Small Header */}
          <div className="text-center mb-8">
            <p className="text-teal-600 text-sm font-semibold tracking-wide uppercase mb-6">
              OUR STORY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-teal-800 leading-tight max-w-4xl mx-auto">
              The richness of Flores coffee echoes the depth of its emerald hills and ocean skies.
            </h1>
          </div>
          
          {/* Team Photo */}
          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Flores Island Coffee team standing in front of facility with lush green trees" 
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Flores Island Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-800 mb-2">FLORES ISLAND</h2>
            <p className="text-xl text-teal-600">INDONESIA</p>
          </div>
          
          {/* Map Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg p-8 mb-8">
              <div className="relative">
                {/* Map illustration - simplified representation */}
                <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-200 to-teal-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Island shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-3/4 bg-teal-300 rounded-full transform rotate-12 opacity-80"></div>
                  </div>
                  
                  {/* Location markers */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Komodo National Park */}
                      <div className="absolute top-1/4 left-1/4 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Komodo National Park
                      </div>
                      
                      {/* Labuan Bajo */}
                      <div className="absolute top-1/2 left-1/3 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Labuan Bajo
                      </div>
                      
                      {/* Maumere */}
                      <div className="absolute top-1/3 right-1/4 bg-teal-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Maumere
                      </div>
                      
                      {/* Various small dots for other locations */}
                      <div className="absolute top-2/5 left-2/5 w-2 h-2 bg-teal-800 rounded-full"></div>
                      <div className="absolute top-3/5 left-1/2 w-2 h-2 bg-teal-800 rounded-full"></div>
                      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-teal-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Description Text */}
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">
              Flores Island Coffee (FIC) is a strategic partnership between New Zealand and Indonesia, driving 
              sustainable growth in the Flores coffee industry.
            </p>
            
            <p className="text-lg">
              The venture is led by Old Station Road Limited (New Zealand), a brand owner and investor in 
              agriculture, food, and beverages, together with Kopdit Pintu Air, Indonesia's largest cooperative 
              credit union with 370,000+ members, including 222,000 smallholder farmers managing around 
              400,000 hectares of land.
            </p>
            
            <p className="text-lg">
              Based in Maumere, East Flores, FIC works closely with farming communities across Mt. Egon and 
              Nilo, building a vertically integrated, sustainable coffee supply chain that delivers global impact 
              while empowering local farmers.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Farming Photos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Coffee farmers harvesting beans in traditional hats" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Farmers examining coffee plants" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Coffee cherry harvesting" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-800 mb-8">Mission Statement</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                Within 3 years achieve the aggregation of coffee production from 
                <span className="font-semibold text-teal-700"> 3% of the 75,000 Flores smallholder coffee farmer households</span>, into 
                a high quality, globally significant production centre, and to reach a 
                target of 6% of these farmer households within 5 years.
              </p>
            </div>
          </div>
          
          {/* Four Values Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-teal-600">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M30 50 Q50 30 70 50 Q50 70 30 50" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="35" cy="45" r="3" fill="currentColor"/>
                  <circle cx="65" cy="45" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Ethical Labour &</h3>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Gender Neutral</h3>
              <p className="text-xs text-gray-600">Practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-teal-600">
                  <path d="M50 20 L35 35 L50 50 L65 35 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M35 35 Q50 45 65 35" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M40 55 Q50 65 60 55" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M45 70 Q50 75 55 70" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Deforestation</h3>
              <p className="text-xs text-gray-600">Free</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-teal-600">
                  <path d="M20 60 Q50 40 80 60" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="30" cy="55" r="4" fill="currentColor"/>
                  <circle cx="50" cy="50" r="4" fill="currentColor"/>
                  <circle cx="70" cy="55" r="4" fill="currentColor"/>
                  <path d="M25 70 Q50 65 75 70" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Biodiversity &</h3>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Ecosystem Services</h3>
              <p className="text-xs text-gray-600">Protection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 100 100" className="w-full h-full text-teal-600">
                  <circle cx="50" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M35 55 L50 70 L65 55" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M25 65 Q50 75 75 65" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">Emissions & Circular</h3>
              <p className="text-xs text-gray-600">Economy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - 4-Step Methodology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-teal-600 text-sm font-semibold tracking-wide uppercase mb-4">
              OUR STORY
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-teal-800 leading-tight max-w-4xl mx-auto">
              Our 4-step methodology ensures quality, sustainability, and global competitiveness
            </h2>
          </div>
          
          {/* 4-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6">
              <div className="mb-4">
                <p className="text-teal-700 text-sm leading-relaxed">
                  Implement a sustainability KPI system (FESS) to improve farming practices, boost productivity, and strengthen farmer livelihoods.
                </p>
              </div>
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Sustainable coffee farm with greenhouse structures" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6">
              <div className="mb-4">
                <p className="text-teal-700 text-sm leading-relaxed">
                  Establish a near-source, high-tech processing facility to add value, ensure traceability, and reduce supply chain emissions.
                </p>
              </div>
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Modern coffee processing facility building" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6">
              <div className="mb-4">
                <p className="text-teal-700 text-sm leading-relaxed">
                  Develop bulk high-quality cold brew concentrate for global B2B supply using coffee as the core ingredient.
                </p>
              </div>
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1559496417-e7f25cb247cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Industrial coffee brewing equipment" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6">
              <div className="mb-4">
                <p className="text-teal-700 text-sm leading-relaxed">
                  Partner with local and international organizations to enhance farm-level yield and quality across Flores Island.
                </p>
              </div>
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Partnership meeting between coffee farmers and experts" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Landscape Photo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Flores Island Coffee team with company truck in rural landscape" 
              className="w-full h-80 md:h-96 object-cover rounded-lg"
            />
          </div>
          
          {/* Cold Brew Text */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif text-teal-800 mb-6 leading-tight">
              With modern cold brew production located near origin, 
              FIC solves the <em>"green bean problem"</em> of traditional 
              commodity exports and unlocks both margin expansion 
              and economic development.
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              The company projects scaling production from 0.9 million litres in 2025 to 8.5 million litres by 
              2028, with export value growing to over USD 50 million. Supported by an experienced 
              international management team and a well-developed supply chain, FIC is positioned to become 
              a globally recognised cold coffee leader powered by Indonesian smallholder resilience and 
              fourth-wave coffee innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-12">Strategic Leadership</h2>
          
          <div className="bg-slate-700 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
                    <circle cx="50" cy="30" r="15" fill="currentColor"/>
                    <path d="M20 70 Q50 50 80 70 L80 85 L20 85 Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-sm text-gray-300">
                  <p className="font-semibold">PT. PINTU AIR</p>
                  <p className="font-semibold">KOPI FLORES</p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    FIC investment is led by Greg Hickman and Haligan Murray from Old 
                    Station Road New Zealand with Indonesian partner Pintu Air Credit 
                    Union. The partnership was signed in 2023 and is structured as a 
                    long-term profit share joint venture.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold mb-2">PT. PINTU AIR KOPI FLORES</h3>
                  <p className="text-gray-300 text-sm">
                    Indonesian based commercial entity, established specifically to carry 
                    out FIC operations in Indonesia. Incorporated and led by Pintu Air 
                    Cooperative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-teal-800 text-center mb-12">Our Team</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Row 1 */}
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Mustika Ridwan</h3>
              <p className="text-xs text-gray-600">Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Haligan Murray</h3>
              <p className="text-xs text-gray-600">Director / Founder</p>
            </div>
            
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Vivi</h3>
              <p className="text-xs text-gray-600">Finance Director</p>
            </div>
            
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Greg Hickman</h3>
              <p className="text-xs text-gray-600">Director / Founder</p>
            </div>
            
            {/* Row 2 */}
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Theresia Ine RuThi</h3>
              <p className="text-xs text-gray-600">Senior Agri GM</p>
            </div>
            
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Yakobus Jano</h3>
              <p className="text-xs text-gray-600"></p>
            </div>
            
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Fulgentius S.</h3>
              <p className="text-xs text-gray-600"></p>
            </div>
            
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Mike Rowe-Roberts</h3>
              <p className="text-xs text-gray-600"></p>
            </div>
            
            {/* Row 3 */}
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Natasha E. Letik</h3>
              <p className="text-xs text-gray-600"></p>
            </div>
            
            <div className="text-center">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-gray-900 text-sm">Bibiana O. Ndoi</h3>
              <p className="text-xs text-gray-600"></p>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}

export default About;