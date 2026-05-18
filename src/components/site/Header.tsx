import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "../../assets/logo_certs/logo_transparent.png";

const navLinks = [
  { href: "#start", label: "Start" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber", label: "Über mich" },
  { href: "#galerie", label: "Galerie & Einblicke" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const left = navLinks.slice(0, 2);
  const right = navLinks.slice(2);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        open
          ? "bg-transparent py-5"
          : scrolled
            ? "bg-[rgba(245,242,235,0.82)] backdrop-blur-[10px] border-b border-black/5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "bg-transparent py-5"
      }`}
    >
      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8 flex items-center justify-center">

        {/* DESKTOP NAV LEFT */}
        <nav className="hidden 2xl:flex flex-1 items-center gap-10 justify-end pr-12">
          {left.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[15px] tracking-[0.02em] transition-colors hover:text-[var(--forest)] ${
                !open && scrolled
                  ? "text-[var(--forest-deep)]"
                  : "text-white/90 drop-shadow"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* LOGO BLOCK */}
        <a
          href="#start"
          className={`relative z-10 shrink-0 flex items-center gap-3 sm:gap-4 rounded-full pl-2 pr-5 sm:pl-3 sm:pr-7 py-2 transition-all duration-500 ${
            !open && scrolled
              ? "bg-white/70 backdrop-blur-[10px] ring-1 ring-black/5 shadow-[0_6px_22px_rgba(0,0,0,0.08)]"
              : "bg-white/[0.09] backdrop-blur-[2px] ring-1 ring-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.22)]"
          }`}
        >
          <motion.img
            src={logo}
            alt="Baumpflege Fischer Logo"
            animate={{
              height: scrolled ? 56 : 78,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="w-auto rounded-full opacity-90"
            style={{
              height: scrolled ? 56 : 78,
              mixBlendMode: "normal",
            }}
          />

          <span
            className={`font-serif tracking-wide leading-tight whitespace-nowrap transition-all duration-500 ${
              !open && scrolled
                ? "text-[var(--forest-deep)] text-xl sm:text-2xl"
                : "text-white text-2xl sm:text-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            }`}
            style={{
              fontFamily:
                '"Cormorant Garamond", "Playfair Display", Georgia, serif',
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            Baumpflege Fischer
          </span>
        </a>

        {/* DESKTOP NAV RIGHT */}
        <nav className="hidden 2xl:flex flex-1 items-center gap-10 pl-12">
          {right.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[15px] tracking-[0.02em] transition-colors hover:text-[var(--forest)] ${
                !open && scrolled
                  ? "text-[var(--forest-deep)]"
                  : "text-white/90 drop-shadow"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* BURGER */}
        <button
          onClick={() => setOpen(!open)}
          className={`absolute right-4 md:right-8 2xl:hidden flex items-center justify-center w-14 h-14 rounded-2xl border transition-all duration-300 backdrop-blur-[10px] ${
            !open && scrolled
              ? "bg-white/40 border-black/10 hover:bg-white/60"
              : "bg-white/5 border-white/10 hover:bg-white/10"
          }`}
          aria-label="Menü"
        >
          {open ? (
            <X
              size={30}
              strokeWidth={1.8}
              className={!open && scrolled ? "text-[var(--forest-deep)]" : "text-white"}
            />
          ) : (
            <Menu
              size={34}
              strokeWidth={1.8}
              className={!open && scrolled ? "text-[var(--forest-deep)]" : "text-white"}
            />
          )}
        </button>

      </div>

      {/* CONTACT BAR */}
      <div
        className={`hidden md:flex justify-center items-center flex-wrap gap-x-7 gap-y-2 text-[12px] mt-2 px-4 transition-all duration-500 ${
          !open && scrolled
            ? "text-[var(--forest-deep)]/80"
            : "text-white/82"
        }`}
      >
        <a
          href="tel:+436765096778"
          className="flex items-center gap-2 hover:text-[var(--cream)] transition-colors"
        >
          <Phone size={13} />
          +43 676 50 96 778
        </a>

        <span className={!open && scrolled ? "text-black/20" : "text-white/25"}>
          •
        </span>

        <a
          href="mailto:office@baumpflegefischer.at"
          className="flex items-center gap-2 hover:text-[var(--cream)] transition-colors"
        >
          <Mail size={13} />
          <span>office@baumpflegefischer.at</span>
        </a>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] 2xl:hidden"
        >

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          />

          {/* PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute right-0 top-0 h-screen
              w-full sm:w-[420px]
              bg-[#111915]/95
              border-l border-white/10
              shadow-2xl
              backdrop-blur-2xl
            "
          >
            <div className="flex flex-col h-full px-8 pt-32 pb-10">

              {/* NAVIGATION */}
              <nav className="flex flex-col gap-2">

                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="
                      group relative overflow-hidden
                      rounded-2xl px-5 py-4
                      text-[24px]
                      tracking-wide
                      text-white/88
                      transition-all duration-300
                      hover:bg-white/8
                      hover:text-white
                      active:scale-[0.98]
                    "
                  >
                    <span className="relative z-10">
                      {l.label}
                    </span>

                    <div
                      className="
                        absolute inset-0 opacity-0
                        bg-gradient-to-r
                        from-white/10 to-transparent
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />
                  </motion.a>
                ))}

              </nav>

              {/* FOOTER */}
              <div className="mt-auto pt-10 border-t border-white/10">

                <div className="space-y-4 text-sm text-white/65">

                  <a
                    href="tel:+436765096778"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Phone size={16} />
                    <span>+43 676 50 96 778</span>
                  </a>

                  <a
                    href="mailto:office@baumpflegefischer.at"
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                    <span>office@baumpflegefischer.at</span>
                  </a>

                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}