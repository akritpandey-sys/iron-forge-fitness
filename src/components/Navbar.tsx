import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-red shadow-lg shadow-brand-red/20">
            <Dumbbell className="text-white" size={24} />
          </div>
          <span className="font-display text-xl font-bold tracking-tighter uppercase">
            IRON <span className="text-brand-red">FORGE</span>
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {["Features", "Membership", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-brand-red transition-all group-hover:w-full" />
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-brand-red hover:text-white"
          >
            Join Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/5 bg-black/90 px-6 py-10 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {["Features", "Membership", "Testimonials"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-bold uppercase tracking-tighter text-white/70"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 w-full rounded bg-brand-red py-4 font-display text-sm font-bold uppercase tracking-widest text-white">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
