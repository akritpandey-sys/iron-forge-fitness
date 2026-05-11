import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus Thorne",
    role: "Professional Athlete",
    text: "The atmosphere here is unmatched. It's not just a gym; it's a high-performance lab. The attention to detail in the equipment selection changed my recovery game.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Tech Executive",
    text: "Iron Forge fits my lifestyle. The Pro plan with personal training keeps me sharp despite a 60-hour week. Truly the Tesla of fitness facilities.",
    rating: 5
  },
  {
    name: "James Chen",
    role: "Bodybuilding Competitor",
    text: "Actually premium. Most gyms say they are, but Iron Forge delivers. The lighting, the air quality, and the community are top tier.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-dark-bg py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="font-display text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
            FORGED BY <span className="text-white/40">EXPERIENCE.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-3xl border border-white/5 bg-white/5 p-10 transition-colors hover:bg-white/10"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="fill-brand-red text-brand-red" size={16} />
                ))}
              </div>
              <p className="mb-8 font-serif text-lg leading-relaxed text-white/80 italic">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-display text-lg font-bold">{review.name}</h4>
                <p className="text-xs font-semibold tracking-widest text-brand-red uppercase opacity-70">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
