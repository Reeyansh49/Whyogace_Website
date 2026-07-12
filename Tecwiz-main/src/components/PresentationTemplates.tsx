import planetThumb from '../assets/planet.svg';
import phoneThumb from '../assets/phone.svg';
import volcanoThumb from '../assets/volcano.svg';
import spotifyThumb from '../assets/spotify.svg';
import PresentationCard, { type Presentation } from './PresentationCard';

const PRESENTATIONS: Presentation[] = [
  {
    id: 'planet',
    title: 'Planet Presentation',
    description: 'Explore the solar system with a clean, visual slide deck.',
    thumbnail: planetThumb,
    fileUrl: '/presentations/planet-presentation.pptx',
    fileName: 'planet-presentation.pptx',
  },
  {
    id: 'phone',
    title: 'Phone Presentation',
    description: 'A modern template for tech and mobile product showcases.',
    thumbnail: phoneThumb,
    fileUrl: '/presentations/phone-presentation.pptx',
    fileName: 'phone-presentation.pptx',
  },
  {
    id: 'volcano',
    title: 'Science Project — Volcanoes',
    description: 'A ready-to-use deck for earth science and geology reports.',
    thumbnail: volcanoThumb,
    fileUrl: '/presentations/science-volcanoes.pptx',
    fileName: 'science-volcanoes.pptx',
  },
  {
    id: 'spotify',
    title: 'Spotify Presentation',
    description: 'A vibrant, music-inspired template for creative pitches.',
    thumbnail: spotifyThumb,
    fileUrl: '/presentations/spotify-presentation.pptx',
    fileName: 'spotify-presentation.pptx',
  },
];

function PresentationTemplates() {
  return (
    <section
      id="templates"
      className="bg-cream-50 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-14 text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Downloadable resources
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold text-chocolate sm:text-5xl">
            Free Presentation Templates
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-chocolate/60 sm:text-lg">
            Professionally designed, fully editable slide decks — free to
            download and ready for your next class or project.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PRESENTATIONS.map((p) => (
            <PresentationCard key={p.id} presentation={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PresentationTemplates;
