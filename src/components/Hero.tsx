import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
          alt="Iron Forge Gym"
          className="h-full w-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
        <div className="absolute inset-0 bg-brand-red/10 mix-blend-color" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-1 text-xs font-semibold tracking-widest text-brand-red uppercase">
            Future of Fitness
          </span>
          <h1 className="mb-6 font-display text-6xl font-extrabold tracking-tight md:text-8xl lg:text-9xl uppercase">
            TRAIN LIKE A <br />
            <span className="text-white/20 outline-text">MACHINE.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
             AI-powered fitness experience with elite training systems, modern 
             equipment, and personalized performance guidance.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded bg-brand-red px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
            >
              Start Training <ArrowRight size={18} />
            </motion.button>
            <button className="px-10 py-4 font-display text-sm font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-white">
              View Plans
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute right-10 bottom-20 hidden flex-col gap-4 mix-blend-overlay opacity-20 lg:flex">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 w-[1px] bg-white" />
        ))}
      </div>
    </section>
  );
}
