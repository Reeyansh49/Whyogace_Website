import { Download } from 'lucide-react';

export interface Presentation {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  fileUrl: string;
  fileName: string;
}

interface PresentationCardProps {
  presentation: Presentation;
}

function PresentationCard({ presentation }: PresentationCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-chocolate/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={presentation.thumbnail}
          alt={presentation.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-chocolate/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-lg font-semibold text-chocolate sm:text-xl">
          {presentation.title}
        </h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-chocolate/60">
          {presentation.description}
        </p>
        <a
          href={presentation.fileUrl}
          download={presentation.fileName}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cream-100 px-4 py-2.5 font-heading text-sm font-semibold text-chocolate transition-all duration-300 hover:bg-chocolate hover:text-white sm:w-auto sm:px-6"
        >
          <Download className="h-4 w-4" />
          Download
        </a>
      </div>
    </article>
  );
}

export default PresentationCard;
