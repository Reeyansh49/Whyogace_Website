function About() {
  return (
    <section id="about" className="px-5 py-28 sm:px-8 lg:py-36">
      <div className="reveal mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-9 h-32 w-32 overflow-hidden rounded-full ring-4 ring-cream-200 shadow-soft-lg">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="TecWiz team collaborating"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Who we are
        </span>
        <h2 className="mt-4 font-heading text-4xl font-bold text-chocolate sm:text-5xl">
          ABOUT US
        </h2>

        <p className="mx-auto mt-8 max-w-xl font-body text-lg leading-[1.9] text-chocolate/70">
          TecWiz is an educational platform dedicated to providing free
          presentations, learning resources, templates, and useful digital
          content for students. Our goal is to make quality educational material
          accessible, organized, and easy to download.
        </p>

        <div className="mx-auto mt-10 h-1 w-16 rounded-full bg-accent/40" />
      </div>
    </section>
  );
}

export default About;
