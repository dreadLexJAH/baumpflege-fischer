import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="
            fixed inset-0 z-[100]
            bg-black/72
            backdrop-blur-xl
            flex items-center justify-center
            p-4 md:p-8
          "
          onClick={onClose}
        >
          {/* BACKGROUND ATMOSPHERE */}
          <motion.img
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.18, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            src={images[index].src}
            alt=""
            className="
              absolute inset-0
              w-full h-full
              object-cover
              blur-3xl
              scale-110
            "
          />

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="
              absolute top-5 right-5 md:top-8 md:right-8
              z-20
              h-12 w-12
              rounded-full
              bg-white/12
              backdrop-blur-xl
              border border-white/10
              text-white/85
              flex items-center justify-center
              hover:bg-white/24
              hover:text-white
              transition-all duration-300
            "
          >
            <X size={24} />
          </button>

          {/* PREV BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Vorheriges"
            className="
              absolute left-3 md:left-6
              z-20
              h-12 w-12
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              text-white/80
              flex items-center justify-center
              hover:bg-white/20
              hover:text-white
              transition-all duration-300
            "
          >
            <ChevronLeft size={28} />
          </button>

          {/* MAIN IMAGE */}
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            src={images[index].src}
            alt={images[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="
              relative z-10
              max-w-[92vw]
              max-h-[88vh]
              object-contain
              rounded-[28px]
              shadow-[0_40px_120px_rgba(0,0,0,0.45)]
            "
          />

          {/* NEXT BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Nächstes"
            className="
              absolute right-3 md:right-6
              z-20
              h-12 w-12
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              text-white/80
              flex items-center justify-center
              hover:bg-white/20
              hover:text-white
              transition-all duration-300
            "
          >
            <ChevronRight size={28} />
          </button>

          {/* COUNTER */}
          <div
            className="
              absolute bottom-5 md:bottom-8
              left-1/2 -translate-x-1/2
              z-20
              px-4 py-2
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              text-white/75
              text-xs tracking-[0.3em]
            "
          >
            {index + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}