import { motion } from "motion/react";
import { ShieldCheck, Zap, HeartPulse } from "lucide-react";

const features = [
  {
    title: "Personal Training",
    description: "One-on-one sessions with elite performance coaches tailored to your biology.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Modern Equipment",
    description: "Latest Hammer Strength and Eleiko equipment in a precision-engineered space.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Nutrition Guidance",
    description: "Data-driven meal plans and supplement protocols for maximum recovery.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-dark-bg py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            Our Edge
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            FORGED FOR <span className="text-white/40">PURPOSE.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-dark-card p-1"
            >
              <div className="relative z-10 h-full rounded-[inherit] bg-dark-card p-8 transition-transform group-hover:scale-[0.98]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <feature.icon size={28} />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-8 overflow-hidden rounded-xl bg-black">
                   <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="h-48 w-full object-cover opacity-50 grayscale transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                   />
                </div>
              </div>
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-red/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
