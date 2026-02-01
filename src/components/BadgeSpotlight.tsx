"use client";

import { useState, useCallback, useEffect } from "react";

interface BadgeSpotlightProps {
  badgeUrl: string;
  alt: string;
  thumbnailClassName?: string;
}

export default function BadgeSpotlight({
  badgeUrl,
  alt,
  thumbnailClassName = "h-32 w-auto object-contain sm:h-36",
}: BadgeSpotlightProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Clique para visualizar o badge em destaque"
        className="shrink-0 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        <img
          src={badgeUrl}
          alt={`${alt}. Clique para ampliar.`}
          className={thumbnailClassName}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Badge em destaque"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />
          <div className="relative z-10 flex max-h-[90vh] max-w-[95vw] items-center justify-center">
            <img
              src={badgeUrl}
              alt={alt}
              className="max-h-[90vh] w-auto object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            type="button"
            onClick={close}
            className="fixed right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-800 shadow-lg hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
            aria-label="Fechar"
          >
            <span className="text-xl font-bold leading-none">&times;</span>
          </button>
        </div>
      )}
    </>
  );
}
