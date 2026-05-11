import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "49",
    features: ["Access to Gym Floor", "Locker Room Access", "Basic Fitness Assessment", "Standard Equipment"],
    popular: false
  },
  {
    name: "Pro",
    price: "89",
    features: ["Unlimited Classes", "Personal Training (2x/mo)", "Body Composition Scaling", "Sauna & Steam Room", "Juice Bar Discount"],
    popular: true
  },
  {
    name: "Elite",
    price: "199",
    features: ["24/7 VIP Access", "Dedicated Coach", "Nutrition Integration", "Private Recovery Suite", "Iron Forge Gear Kit", "Global Access"],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="membership" className="relative overflow-hidden bg-dark-bg py-32 px-6">
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            Investment
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            CHOOSE YOUR <span className="text-white/40">PATH.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-3xl p-8 border ${
                plan.popular 
                  ? "bg-white text-black border-white shadow-2xl shadow-brand-red/20 scale-105 z-10" 
                  : "bg-dark-card text-white border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-red px-4 py-1 text-[10px] font-black tracking-widest text-white uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <span className="text-sm font-bold opacity-60 uppercase tracking-widest">{plan.name}</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-5xl font-black font-display tracking-tighter">${plan.price}</span>
                  <span className="text-sm font-medium opacity-60">/month</span>
                </div>
              </div>

              <ul className="mb-10 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <Check className={plan.popular ? "text-brand-red" : "text-brand-red"} size={16} />
                    <span className={plan.popular ? "text-black/80" : "text-white/70"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-xl py-4 font-display text-sm font-bold uppercase tracking-widest transition-all ${
                plan.popular
                  ? "bg-black text-white hover:bg-brand-red"
                  : "bg-white/10 text-white hover:bg-brand-red hover:text-white"
              }`}>
                Join {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
