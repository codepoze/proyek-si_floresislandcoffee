import SEOHead from './components/SEOHead';
import TeamMember from './components/TeamMember';
import mapAbout from './assets/about-us-island.png';
import coffeeIcon from './assets/coffe.png';
import LeafIcon from './assets/leaf.png';
import cupIcon from './assets/cup.png';
import sunIcon from './assets/sun.png';
import logoAlt from './assets/logo/logoAlt.png';
import { teamData } from './data/teamData';

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
        <section className="py-18 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Small Header */}
            <div className="text-center mb-8">
              <p className="text-teal-600 text-xl font-semibold tracking-wide uppercase mb-6">
                OUR STORY
              </p>
              <h1 className="text-2xl md:text-5xl lg:text-4xl font-serif text-teal-800 leading-tight max-w-4xl mx-auto">
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
            {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-teal-800 mb-2">FLORES ISLAND</h2>
            <p className="text-xl text-teal-600">INDONESIA</p>
          </div> */}

            {/* Map Section */}
            <div className="mb-16">
              <div className="relative">
                <img src={mapAbout} alt='coffee map' />
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
        <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl lg:max-w-5xl mx-auto p-4 lg:p-12 bg-gradient-to-br from-blue-100/70 to-blue-200/50 rounded-lg shadow-xl">
            <div className="text-center mb-8 lg:mb-16">
              <h2 className="text-xl lg:text-4xl xl:text-5xl font-serif text-slate-700 mb-4 lg:mb-12 font-light">Mission Statement</h2>
              <div className="space-y-3 lg:space-y-6 text-sm lg:text-xl xl:text-2xl text-slate-700 leading-relaxed max-w-3xl lg:max-w-4xl mx-auto">
                <p className="font-light">
                  Within 3 years achieve the aggregation of coffee production from
                  <span className="font-medium text-slate-800"> 3% of the 75,000 Flores smallholder coffee farmer households</span>, into
                  a high quality, globally significant production centre, and to reach a
                  target of <span className="font-medium text-slate-800">6% of these farmer households within 5 years</span>.
                </p>
              </div>
            </div>

            {/* Four Values Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-12 mt-6 lg:mt-16">
              <div className="text-center lg:border-r-2 lg:pr-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={coffeeIcon} alt="Ethical Labour & Gender Neutral Practices" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2 leading-tight">Ethical Labour &<br />Gender Neutral</h3>
                <p className="text-sm text-slate-700 font-medium">Practices</p>
              </div>

              <div className="text-center lg:border-r-2 lg:pr-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={LeafIcon} alt="Deforestation Free" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2">Deforestation</h3>
                <p className="text-sm text-slate-700 font-medium">Free</p>
              </div>

              <div className="text-center lg:border-r-2 lg:pr-8">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={cupIcon} alt="Biodiversity & Ecosystem Services" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2 leading-tight">Biodiversity &<br />Ecosystem Services</h3>
                <p className="text-sm text-slate-700 font-medium"></p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img src={sunIcon} alt="Emissions & Circular Economy" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-semibold text-slate-800 mb-2 leading-tight">Emissions & Circular</h3>
                <p className="text-sm text-slate-700 font-medium">Economy</p>
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
                    src="https://www.kbvresearch.com/images/blog/coffee-machine.jpg"
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white"> {/* Light background */}
          <div className="max-w-5xl mx-auto">

            <div className="bg-[#2D415A] rounded-lg p-8 md:p-12 shadow-lg text-white"> {/* Dark blue card background */}
              <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Strategic Leadership</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                {/* Left Column: Logo */}
                <div className="flex-shrink-0 w-40 h-40">
                  <img src={logoAlt} alt="PT. Pintu Air Kopi Flores Logo" className="w-full h-full object-contain" />
                </div>

                {/* Right Column: Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-8">
                    {/* Text color is a lighter gray on the dark blue background, as in Image 1 */}
                    <p className="text-gray-300 leading-relaxed"> {/* Lighter text on dark card */}
                      FIC investment is led by Greg Hickman and Haigan Murray from Old
                      Station Road New Zealand with Indonesian partner Pintu Air Credit
                      Union. The partnership was signed in 2023 and is structured as a
                      long-term profit share joint venture.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold uppercase tracking-wider mb-3">PT. PINTU AIR KOPI FLORES</h3>
                    {/* Second paragraph text color is also light, matching Image 1 */}
                    <p className="text-gray-200 text-sm leading-relaxed"> {/* Slightly different light text */}
                      Indonesian based commercial entity, established specifically to carry
                      out FIC operations in Indonesia, incorporated and led by Pintu Air
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

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {teamData.map((member) => (
                <TeamMember
                  key={member.id}
                  name={member.name}
                  position={member.position}
                  image={member.image}
                  alt={member.alt}
                />
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default About;