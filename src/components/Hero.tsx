import { ArrowRight, BookOpen } from 'lucide-react';

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] w-full overflow-hidden pt-[75px]"
    >
      <div className="mx-auto flex min-h-[calc(80vh-75px)] max-w-[1600px] flex-col md:flex-row">
        {/* Left — image */}
        <div className="relative h-[40vh] min-h-[320px] w-full overflow-hidden md:h-auto md:w-1/2">
          <img
            src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Student learning outdoors with a laptop"
            className="h-full w-full object-cover object-center md:rounded-l-[28px] md:rounded-tr-none"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-chocolate/10 to-transparent md:rounded-l-[28px]" />
        </div>

        {/* Right — content */}
        <div className="relative flex w-full items-center bg-chocolate px-7 py-16 sm:px-12 md:w-1/2 md:rounded-r-[28px] md:px-14 lg:px-20">
          <div className="animate-fade-in-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-heading text-xs font-medium text-white/80 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
              Free learning resources
            </span>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              GET MANY THINGS AT ONCE!
            </h1>
            <p className="mt-5 max-w-md font-body text-lg text-white/70">
              Easy, fun learning.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#templates"
                className="btn-primary group w-full sm:w-auto"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#courses" className="btn-outline w-full sm:w-auto">
                <BookOpen className="h-4 w-4" />
                Browse Courses
              </a>
            </div>
          </div>

          {/* decorative glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-accent-light/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
