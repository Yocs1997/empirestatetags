"use client";

import { useState } from "react";
import VideoSection from "./components/VideoSection";

export default function Home() {
  const specificServices = [
    "Rebuilt Titles",
    "Salvage Titles",
    "Registration Renewals",
    "Replacement Plates",
    "Regular Titles"
  ];

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <a href="#contact" className="bg-empire-blue text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-800 transition shadow-lg text-center">
                Get Your Tags
              </a>
              <a href="#services" className="bg-white text-empire-blue border-2 border-empire-blue px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 transition text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 hidden lg:flex justify-center relative">
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
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-empire-blue text-white rounded-lg flex items-center justify-center text-2xl mb-6">🗺️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Out-of-State Tags</h3>
              <p className="text-gray-600">Struggling with home-state requirements? We facilitate legal vehicle registration in alternate states quickly and efficiently.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-empire-blue text-white rounded-lg flex items-center justify-center text-2xl mb-6">🗽</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">NY Resident Specialists</h3>
              <p className="text-gray-600">New York DMV can be notoriously difficult. We have tailored strategies specifically designed to help NY drivers get tagged.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50">
              <div className="w-12 h-12 bg-empire-blue text-white rounded-lg flex items-center justify-center text-2xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Save time & Money</h3>
              <p className="text-gray-600">With over 1000 clients registered and titled out of state since 2025, Empire State Tags positions as your best option when it comes to save money in the long run and still be safe when hitting the road, Empire State Tags specializes in helping register your vehicle in Virginia without changing your current address within 5 business days, contact our team and let us get you back on the road.</p>
            </div>
          </div>

          {/* Types of Services */}
          <div className="text-center border-t border-gray-100 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Types of Registrations We Handle</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {specificServices.map((service, index) => (
                <span key={index} className="bg-empire-light text-empire-blue px-6 py-3 rounded-full font-semibold shadow-sm border border-blue-100 text-sm md:text-base">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-empire-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">We provide a premium, stress-free experience from start to finish.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-green-400 mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Fast & Easy Registration</h4>
                <p className="text-blue-100 text-sm">Skip the DMV lines. We make the entire vehicle registration process effortless.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-green-400 mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">5-7 Day Turnaround</h4>
                <p className="text-blue-100 text-sm">Get your plates fast. Our standard turnaround time is just 5 to 7 business days.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-green-400 mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Start for Just 75% Down</h4>
                <p className="text-blue-100 text-sm">Begin any process with a 75% down payment. Pay the remaining balance only when your plates are done.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-green-400 mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Long-Term Savings</h4>
                <p className="text-blue-100 text-sm">Save money in the long run by avoiding hefty tickets, lowering insurance premiums, and reducing taxes.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-span-2 md:w-1/2 md:mx-auto">
              <div className="text-green-400 mt-1 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">End-to-End Support</h4>
                <p className="text-blue-100 text-sm">If you have missing documents, our team will guide you on exactly how to get them to expedite your process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-empire-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-empire-blue mb-16">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
            <div className="bg-white p-8 rounded-xl shadow-md flex-1 text-center relative z-10 w-full">
              <div className="w-10 h-10 bg-empire-blue text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2">1</div>
              <h4 className="font-bold text-lg mb-2 mt-4">Consultation</h4>
              <p className="text-gray-600 text-sm">Contact us with your specific registration hurdles.</p>
            </div>

            <div className="hidden md:block w-8 border-t-2 border-dashed border-empire-blue shrink-0"></div>

            <div className="bg-white p-8 rounded-xl shadow-md flex-1 text-center relative z-10 w-full">
              <div className="w-10 h-10 bg-empire-blue text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2">2</div>
              <h4 className="font-bold text-lg mb-2 mt-4">Document Prep</h4>
              <p className="text-gray-600 text-sm">We process your paperwork for an out-of-state title and tag.</p>
            </div>

            <div className="hidden md:block w-8 border-t-2 border-dashed border-empire-blue shrink-0"></div>

            <div className="bg-white p-8 rounded-xl shadow-md flex-1 text-center relative z-10 w-full">
              <div className="w-10 h-10 bg-empire-blue text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 absolute -top-5 left-1/2 transform -translate-x-1/2">3</div>
              <h4 className="font-bold text-lg mb-2 mt-4">Hit the Road</h4>
              <p className="text-gray-600 text-sm">Receive your new plates and insurance documents securely.</p>
            </div>
          </div>
        </div>
      </section>
      
      <VideoSection />

      {/* Contact Section - Main outer container holding id="contact" permanently */}
      <section id="contact" className="py-20 bg-gray-50 text-left">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-empire-blue text-white p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-300">
            
            {!submitted ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to solve your registration headaches?</h2>
                  <p className="text-lg text-blue-100">
                    Reach out to our team today. Fill out the form below and we will get right back to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 text-gray-900">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-blue-100 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-100 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-blue-100 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  {/* Legal Marketing Disclaimer */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="marketingConsent"
                      name="marketingConsent"
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer shrink-0"
                    />
                    <label htmlFor="marketingConsent" className="text-xs sm:text-sm text-blue-100 select-none cursor-pointer leading-tight">
  By signing up, you agree to receive recurring text messages for appointment reminders, confirmations, marketing texts from Empire State Tags at the cell number used when signing up. Consent is not a condition of any purchase. Msg & data rates may apply. Message frequency varies. Text HELP for help, STOP to cancel. View our{" "}
  <a 
    href="https://www.empirestatetags.com/privacy" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="underline hover:text-white font-semibold"
  >
    Privacy Policy
  </a>{" "}
  and{" "}
  <a 
    href="#" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="underline hover:text-white font-semibold"
  >
    Terms
  </a>.
</label>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="w-full bg-white text-empire-blue px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition shadow-lg"
                    >
                      Submit Details
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-blue-800 text-center">
                  <p className="text-sm text-blue-200 mb-2">Prefer to speak directly?</p>
                  <a href="tel:3474244569" className="text-white hover:underline font-bold text-lg">
                    📞 Call Us Now: 347 424 4569
                  </a>
                </div>
              </>
            ) : (
              /* Success Screen Content */
              <div className="text-center py-8 px-4 flex flex-col items-center justify-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl mb-2">
                  ✓
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Thank You!</h2>
                <p className="text-xl text-blue-100 max-w-xl mx-auto leading-relaxed">
                  Thanks for submitting the form, we'll get back to you shortly.
                </p>
                <div className="pt-4 border-t border-blue-800 w-full max-w-md">
                  <p className="text-sm text-blue-200 mb-3">Need help quicker?</p>
                  <a 
                    href="tel:3474244569" 
                    className="inline-flex items-center gap-2 bg-white text-empire-blue px-8 py-4 rounded-md font-bold text-xl hover:bg-gray-100 transition shadow-xl"
                  >
                    📞 Call Us: 347 424 4569
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}