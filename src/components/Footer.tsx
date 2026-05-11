import { Dumbbell, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-bg pt-20 pb-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-brand-red">
                <Dumbbell className="text-white" size={20} />
              </div>
              <span className="font-display text-lg font-bold tracking-tighter uppercase">
                IRON <span className="text-brand-red">FORGE</span>
              </span>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-white/50">
              Forging elite athletes and transforming lives since 2024. Our mission 
              is to provide the ultimate environment for physical evolution.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-brand-red hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Explore
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#features" className="hover:text-brand-red transition-colors">Features</a></li>
              <li><a href="#membership" className="hover:text-brand-red transition-colors">Membership</a></li>
              <li><a href="#testimonials" className="hover:text-brand-red transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-red" />
                123 Power Lane, Iron District
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red" />
                +1 (555) 012-3456
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red" />
                forge@ironforge.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
              Newsletter
            </h4>
            <p className="mb-4 text-xs text-white/40">
              Get training tips and exclusive offers.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full rounded-xl bg-white/5 border border-white/10 py-3 px-4 text-sm text-white focus:border-brand-red focus:outline-none transition-colors"
                onSubmit={(e) => e.preventDefault()}
              />
              <button 
                className="mt-4 w-full rounded-xl bg-brand-red py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-10 text-center">
          <p className="text-[10px] font-medium tracking-[0.3em] text-white/20 uppercase">
            © 2026 Iron Forge Fitness. Engineered for Dominance.
          </p>
        </div>
      </div>
    </footer>
  );
}
