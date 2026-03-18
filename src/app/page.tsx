export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-empire-light py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-empire-blue leading-tight mb-6">
              Vehicle Registration, <br/> Without the Hassle.
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Having issues registering your vehicle in your home state? We specialize in out-of-state tags and comprehensive insurance solutions, tailored especially for New York residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-empire-blue text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-800 transition shadow-lg">
                Get Your Tags
              </a>
              <a href="#services" className="bg-white text-empire-blue border-2 border-empire-blue px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 transition">
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 hidden lg:flex justify-center relative">
             {/* Decorative graphic behind the logo */}
            <div className="w-80 h-80 bg-empire-blue rounded-full opacity-10 absolute blur-3xl"></div>
            <img src="/logo.png" alt="Empire State Graphic" className="relative z-10 w-3/4 drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-empire-blue mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We cut through the red tape so you can get on the road legally and safely.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-empire-blue text-white rounded-lg flex items-center justify-center text-2xl mb-6">🗺️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Out-of-State Tags</h3>
              <p className="text-gray-600">Struggling with home-state requirements? We facilitate legal vehicle registration in alternate states quickly and efficiently.</p>
            </div>
            {/* Service 2 */}
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-empire-blue text-white rounded-lg flex items-center justify-center text-2xl mb-6">🗽</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">NY Resident Specialists</h3>
              <p className="text-gray-600">New York DMV can be notoriously difficult. We have tailored workarounds specifically designed to help NY drivers get tagged.</p>
            </div>
            {/* Service 3 */}
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-empire-blue text-white rounded-lg flex items-center justify-center text-2xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Auto Insurance</h3>
              <p className="text-gray-600">Get the right coverage to match your out-of-state registration. We connect you with policies that keep you compliant and protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-empire-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-empire-blue mb-16">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            
            <div className="bg-white p-8 rounded-xl shadow-md flex-1 text-center relative z-10 w-full">
              <div className="w-10 h-10 bg-empire-blue text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
              <h4 className="font-bold text-lg mb-2 mt-4">Consultation</h4>
              <p className="text-gray-600 text-sm">Contact us with your specific registration hurdles.</p>
            </div>

            <div className="hidden md:block w-8 border-t-2 border-dashed border-empire-blue flex-shrink-0"></div>

            <div className="bg-white p-8 rounded-xl shadow-md flex-1 text-center relative z-10 w-full">
              <div className="w-10 h-10 bg-empire-blue text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
              <h4 className="font-bold text-lg mb-2 mt-4">Document Prep</h4>
              <p className="text-gray-600 text-sm">We process your paperwork for an out-of-state title and tag.</p>
            </div>

            <div className="hidden md:block w-8 border-t-2 border-dashed border-empire-blue flex-shrink-0"></div>

            <div className="bg-white p-8 rounded-xl shadow-md flex-1 text-center relative z-10 w-full">
              <div className="w-10 h-10 bg-empire-blue text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
              <h4 className="font-bold text-lg mb-2 mt-4">Hit the Road</h4>
              <p className="text-gray-600 text-sm">Receive your new plates and insurance documents securely.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-empire-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to solve your registration headaches?</h2>
          <p className="text-lg text-gray-200 mb-8">Reach out to our team today. We'll review your case and get you set up with valid tags and insurance.</p>
          <a href="mailto:support@empirestatetags.com" className="inline-block bg-white text-empire-blue px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}