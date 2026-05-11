/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Cinematic Split Section */}
        <section className="bg-white text-black py-24 flex flex-col md:flex-row items-center overflow-hidden">
          <div className="w-full md:w-1/2 px-12 lg:px-24 mb-12 md:mb-0">
            <h2 className="font-display text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
              BEYOND <br />
              <span className="text-brand-red">AVERAGE.</span>
            </h2>
            <p className="mt-8 text-lg font-medium leading-relaxed opacity-70">
              We don't settle for "good enough." Every detail of Iron Forge was 
              meticulously designed to push the boundaries of what is possible.
              Join the elite 1%.
            </p>
            <button className="mt-10 rounded-full border-2 border-black px-10 py-4 font-display text-sm font-extrabold uppercase tracking-widest hover:bg-brand-red hover:border-brand-red hover:text-white transition-all">
              Discover Our History
            </button>
          </div>
          <div className="w-full md:w-1/2 relative h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1548690312-e3b507d17a12?q=80&w=1974&auto=format&fit=crop" 
              alt="Gym Interior" 
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

