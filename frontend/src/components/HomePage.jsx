import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoModal from './InfoModal';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Lottie from 'lottie-react';
import secureAnim from '../assets/secure-lottie.json'; // Your Lottie file

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 via-amber-100 to-teal-200 flex flex-col justify-between text-gray-800 p-6 space-y-12">


      {/* Header Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-sm">
          Raptor
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          Identify, analyze, and eliminate risks from your system design — beautifully and efficiently.
        </p>

        {/* Lottie Animation */}
        <div className="w-64 h-64 mx-auto hover:scale-105 transition-transform">
          <Lottie animationData={secureAnim} loop={true} />
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mb-10">
          <button
            className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-xl text-lg font-semibold text-white transition shadow-lg hover:shadow-teal-400/50"
            onClick={() => navigate('/product-spec')}
          >
            Get Started <ArrowRightIcon className="h-5 w-5 inline ml-2" />
          </button>
          <button
            className="border border-teal-500 text-teal-700 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-teal-100 transition"
            onClick={() => setShowModal(true)}
          >
            Learn More
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-6">
          {[
            {
              title: "⚡ Rapid Threat Modeling",
              desc: "Define product specs and get threat models instantly."
            },
            {
              title: "🔒 Security by Design",
              desc: "Incorporate security at architecture level with smart diagrams."
            },
            {
              title: "🎯 AI-Assisted Insights",
              desc: "Get suggestions and vulnerabilities based on real models."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/70 shadow-md rounded-xl p-6 border border-teal-100 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
        <br /><br />

        {/* Trusted By Logos */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Trusted by</h2>
          <br />
          <div className="flex justify-center gap-8 grayscale hover:grayscale-0 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-12 w-auto" />
            <img src="https://cdn.worldvectorlogo.com/logos/ibm.svg" alt="IBM" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-12 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-12 w-auto" />
          </div>
        </div>
        <br /><br /><br />

        {/* Testimonials */}
        <div className="mt-12 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl font-semibold">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Alex Johnson", text: "Raptor made our threat modeling 3x faster and incredibly intuitive!" },
              { name: "Maria Lee", text: "As a startup CTO, this tool saves hours. Highly recommended." },
              { name: "David Kim", text: "Clear diagrams and AI suggestions made our architecture much safer." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/70 shadow-md rounded-xl p-4 border border-teal-100 hover:scale-105 transition-transform">
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <p className="mt-2 text-sm font-semibold text-teal-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
        <br />

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto space-y-6 text-left">
          <h2 className="text-2xl font-semibold text-center">Frequently Asked Questions</h2>
          {[
            { q: "Is Raptor free to use?", a: "Yes, Raptor offers a free tier with all core features accessible." },
            { q: "Do I need technical skills?", a: "No, Raptor is designed to be user-friendly for all skill levels." },
            { q: "Can I export diagrams?", a: "Yes, you can export PlantUML, PNG, and other formats easily." }
          ].map((faq, index) => (
            <div key={index} className="bg-white/70 shadow-md rounded-xl p-4 border border-teal-100 hover:scale-105 transition-transform">
              <h3 className="font-semibold text-teal-700">{faq.q}</h3>
              <p className="text-gray-700 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Modal */}
      <InfoModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-12">
        © 2025 Raptor. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
