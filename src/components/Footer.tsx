import { useState } from 'react';
import { ArrowRight, Mail, Send, Sparkles } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Reviews', href: '#reviews' },
];

const RESOURCES = [
  { label: 'Presentations', href: '#templates' },
  { label: 'Templates', href: '#templates' },
  { label: 'Downloads', href: '#templates' },
];

function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <footer className="bg-cream-100 pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-chocolate text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-heading text-xl font-bold text-chocolate">
                Tec<span className="text-accent">Wiz</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-chocolate/60">
              A free educational platform providing presentations, templates,
              and learning resources for students everywhere.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-chocolate">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 font-body text-sm text-chocolate/60 transition-colors hover:text-accent"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-chocolate">
              Resources
            </h3>
            <ul className="mt-5 space-y-3">
              {RESOURCES.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 font-body text-sm text-chocolate/60 transition-colors hover:text-accent"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-chocolate">
              Contact
            </h3>
            <a
              href="mailto:hello@tecwiz.com"
              className="mt-5 inline-flex items-center gap-2 font-body text-sm text-chocolate/60 transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              hello@tecwiz.com
            </a>

            <form onSubmit={subscribe} className="mt-5">
              <label className="font-heading text-xs font-medium text-chocolate/70">
                Newsletter
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-xl bg-white p-1.5 shadow-soft ring-1 ring-chocolate/5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 font-body text-sm text-chocolate placeholder:text-chocolate/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-chocolate text-white transition-all duration-300 hover:bg-accent active:scale-95"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {sent && (
                <p className="mt-2 font-body text-xs font-medium text-accent">
                  Thanks! You're subscribed.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-chocolate/10 py-7">
          <p className="text-center font-body text-sm text-chocolate/50">
            © 2025 TecWiz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
