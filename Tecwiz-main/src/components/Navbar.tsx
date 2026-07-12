import { useEffect, useState } from 'react';
import { LogIn, Menu, ShoppingBag, Sparkles, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About Us', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Team', href: '#team' },
  { label: 'Forum', href: '#forum' },
  { label: 'Members', href: '#members' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[75px] transition-all duration-500 ${
        scrolled
          ? 'bg-cream/80 shadow-soft backdrop-blur-md'
          : 'bg-cream/95 shadow-none'
      }`}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-chocolate text-white shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-chocolate">
            Tec<span className="text-accent">Wiz</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Login"
            className="grid h-10 w-10 place-items-center rounded-xl text-chocolate transition-all duration-300 hover:bg-cream-200 hover:text-accent"
          >
            <LogIn className="h-5 w-5" />
          </button>
          <button
            aria-label="Shopping cart"
            className="relative grid h-10 w-10 place-items-center rounded-xl text-chocolate transition-all duration-300 hover:bg-cream-200 hover:text-accent"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-white">
              2
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl text-chocolate transition-colors hover:bg-cream-200 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? 'max-h-[640px] shadow-soft' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-heading text-sm font-medium text-chocolate/80 transition-colors hover:bg-cream-200 hover:text-chocolate"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
