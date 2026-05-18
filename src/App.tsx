import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TreeDeciduous, Scissors, Axe, Sprout, Apple, Fence, CloudLightning, SearchCheck, LeafyGreen, Heart,
  ShieldCheck, Eye, Award, MapPin, Phone, Mail, ExternalLink, ChevronDown,
Play,
} from "lucide-react";
import { Header } from "./components/site/Header";
import { Lightbox } from "./components/site/Lightbox";
import hero from "./assets/hero_ubermich/hero_breit_v1_optimized.jpg";
import owner from "./assets/hero_ubermich/owner_final_ersatz.png";
import logo from "./assets/logo_certs/logo_transparent.png";
import maibaum from "./assets/signature_gallery/maibaum.JPG";
import wipfell_peace from "./assets/before_after/wipfel_before.jpg";
import pritschn_quer from "./assets/dokumentarisch/pritschn_quer.jpg";
import stefanstihl_original from "./assets/dokumentarisch/stefanstihl_original.jpg";
import pritsche_anhaenger from "./assets/dokumentarisch/pritsche_anhaenger.jpg";
import seilaction_scharf from "./assets/dokumentarisch/seilaction_scharf.jpg";
import rettung from "./assets/dokumentarisch/rettung.JPG";
import dickerstamm_hubwagen from "./assets/dokumentarisch/dickerstamm_hubwagen.JPG";
import certEtw from "./assets/logo_certs/etw-1.jpg";
import certFll from "./assets/logo_certs/fll-1.jpg";
import certLand from "./assets/logo_certs/land-1.jpg";
import certLehre from "./assets/logo_certs/lehre-1.jpg";
import introMountain from "./assets/signature_gallery/nature2.jpg";
import schneeberg from "./assets/signature_gallery/schneeberg.png";
import bigtree from "./assets/signature_gallery/bigtree.jpg";
import glashausdone from "./assets/signature_gallery/glashausdone.jpg";
import baumpflege_gutenstein from "./assets/signature_gallery/baumpflegefischer_gutenstein.jpg";
import stammdurch from "./assets/signature_gallery/stammdurch_optimized.png";

import videoA from "./assets/videos/signal-2023-08-30-11-42-12-462-1.mp4";
import videoB from "./assets/videos/signal-2023-02-02-14-50-00-903.mp4";
import videoC from "./assets/videos/5c705ec1-e933-43e9-a8b5-6619346c60d0 2.MP4";
import videoD from "./assets/videos/signal-2024-05-22-19-58-38-417.mp4";

import apfelBefore from "./assets/before_after/Apfelbaum_vorher.jpg";
import apfelAfter from "./assets/before_after/apfelbaum_nachher.jpg";

import glashausBefore from "./assets/before_after/glashaus_vorher.jpg";
import glashausAfter from "./assets/before_after/glashaus_nachher.jpg";

import wipfelBefore from "./assets/before_after/wipfel_before.jpg";
import wipfelAfter from "./assets/before_after/wipfel_after.jpg";


const services = [
  { icon: Sprout, title: "Baumpflanzung", text: "Nachhaltiges Grün für die Zukunft - fachgerecht gepflanzt und optimal\nversorgt." },
  { icon: TreeDeciduous, title: "Baumpflege", text: "Erziehungs-, Form- und Reduktionsschnitt nach Norm L1122. Von der Jungbaumerziehung bis zur Erhaltung alter Baumbestände - schonend und biologisch korrekt." },
  { icon: SearchCheck, title: "Baumkontrolle", text: "Überprüfung auf Stand- und Bruchsicherheit zur Erfüllung der Verkehrssicherungspflicht - fachgerecht und rechtssicher." },
  { icon: Axe, title: "Baumabtragung", text: "Sicheres und kontrolliertes Abtragen von Bäumen, auch auf engstem Raum - mittels Seilklettertechnik oder Hubsteiger, unter vollem Schutz Ihres Eigentums." },
  { icon: Apple, title: "Obstbaumschnitt", text: "Ertrags- und Erziehungs­schnitt mit besonderem Fokus auf alte Obstbaumbestände." },
  { icon: CloudLightning, title: "Sturmschäden", text: "Rasche, sichere Beseitigung von Sturmschäden – auch in Notfällen." },
  { icon: Heart, title: "Kronensicherung", text: "Baumerhalt durch moderne Technik - Stabilität ohne unnötigen Rückschnitt" },
  { icon: LeafyGreen, title: "Heckenschnitt", text: "Saubere Schnitte für dichte, gesunde Hecken in jeder Form und Höhe." },
];

const trust = [
  { icon: Award, label: "ETW zertifiziert" },
  { icon: Eye, label: "Kostenlose Besichtigung" },
  { icon: ShieldCheck, label: "Langjährige Erfahrung" },
  { icon: MapPin, label: "Regionale Baumpflege" },
];

const galleryImages = [
  { src: schneeberg, alt: "Baumpflege Fischer mit Blick auf den Schneeberg" },

  { src: glashausdone, alt: "Professionelle Baumarbeiten beim Glashaus" },

  { src: stammdurch, alt: "Detailaufnahme eines Baumstammes" },

  { src: bigtree, alt: "Großbaum-Baumpflege in Niederösterreich" },

  { src: baumpflege_gutenstein, alt: "Baumpflege Fischer in Gutenstein" },

  { src: introMountain, alt: "Naturaufnahme aus dem Piestingtal" },

  { src: maibaum, alt: "Traditioneller Maibaumtransport" },
];

const workImages = [
  {
    src: stefanstihl_original,
    alt: "Arbeitsdetail mit Motorsäge",
  },
  {
    src: seilaction_scharf,
    alt: "Seilklettertechnik in der Baumkrone",
  },
  {
    src: rettung,
    alt: "Dokumentation eines Rettungseinsatzes",
  },
  {
    src: pritsche_anhaenger,
    alt: "Transport und Arbeitsalltag",
  },
  {
    src: dickerstamm_hubwagen,
    alt: "Großer Stamm beim Abtransport",
  },
];

const beforeAfterItems = [
  {
    before: apfelBefore,
    after: apfelAfter,
    title: "Obstbaumschnitt",
  },
  {
    before: glashausBefore,
    after: glashausAfter,
    title: "Baumpflege beim Glashaus",
  },
  {
    before: wipfelBefore,
    after: wipfelAfter,
    title: "Kronenpflege",
  },
];

const certificates = [
  { src: certEtw, alt: "ETW Zertifikat — European Tree Worker" },
  { src: certFll, alt: "FLL Zertifikat — Baumkontrolleur" },
  { src: certLand, alt: "Zertifikat Landschaftspflege" },
  { src: certLehre, alt: "Lehrabschlusszeugnis" },
];

const regions = ["Region Ostösterreich, Wien"];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function BeforeAfterSlider({
  before,
  after,
  title,
  aspect = "aspect-[4/3]",
}: {
  before: string;
  after: string;
  title: string;
  aspect?: string;
}) {

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (x: number) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();

    const position = ((x - rect.left) / rect.width) * 100;

    sliderRef.current.style.setProperty(
      "--position",
      `${Math.min(100, Math.max(0, position))}%`
    );
  };

  return (
    <div className="space-y-4">

      <div
  ref={sliderRef}
  style={{ ["--position" as any]: "50%" }}
  className="relative w-full overflow-hidden rounded-2xl group select-none touch-none shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)]"
  onMouseMove={(e) => {
    if (e.buttons === 1) handleMove(e.clientX);
  }}
  onTouchMove={(e) => {
    handleMove(e.touches[0].clientX);
  }}
>

<img
  src={after}
  alt=""
  className="w-full h-auto opacity-0 pointer-events-none select-none"
/>

{/* AFTER */}
<img
  src={after}
  alt={title}
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* BEFORE */}
<div
  className="absolute inset-0"
  style={{
    clipPath: "inset(0 calc(100% - var(--position)) 0 0)",
  }}
>
  <img
    src={before}
    alt={title}
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>

        {/* DIVIDER */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/90"
          style={{ left: "var(--position)" }}
        />

        {/* HANDLE */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-xl border border-black/10 flex items-center justify-center"
          style={{ left: "var(--position)" }}
        >
          <div className="flex gap-1">
            <div className="w-[2px] h-4 bg-black/70" />
            <div className="w-[2px] h-4 bg-black/70" />
          </div>
        </div>

        {/* LABEL LEFT */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-xs tracking-wider uppercase text-white">
          Vorher
        </div>

        {/* LABEL RIGHT */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-xs tracking-wider uppercase text-white">
          Nachher
        </div>

      </div>

      <h3 className="text-xl md:text-2xl text-white">
        {title}
      </h3>

    </div>
  );
}

export default function App() {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 800], [0, 120]);
  const heroTextY = useTransform(scrollY, [0, 600], [0, 40]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.92]);

  const [lightbox, setLightbox] = useState<number | null>(null);
  const [workBox, setWorkBox] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [certBox, setCertBox] = useState<number | null>(null);
  const [overlay, setOverlay] = useState<null | "impressum" | "datenschutz">(null);

  return (
    <>
    <Header />

      {/* JSON-LD local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Baumpflege Fischer",
            image: "https://baumpflege-fischer.at/og.jpg",
            telephone: "+43 676 50 96 778",
            email: "office@baumpflegefischer.at",
            address: { "@type": "PostalAddress", addressLocality: "Gutenstein", addressCountry: "AT" },
            areaServed: regions,
            description: "Baumpflege, Baumschnitt, Baumabtragung, Gartenpflege und Obstbaumschnitt. ETW-zertifizierter Baumpfleger im Piestingtal, Triestingtal und Bezirk Wr. Neustadt.",
          }),
        }}
      />


{/* HERO */}
<section
  id="start"
  className="relative min-h-[920px] md:min-h-screen w-full overflow-hidden"
>

  {/* PARALLAX IMAGE */}
  <motion.div
    style={{ y: heroY }}
    className="absolute inset-0 scale-[1.08]"
  >
    <img
      src={hero}
      alt="Baumpflege mit Blick auf den wunderschönen Schneeberg"
      className="absolute inset-0 w-full h-full object-cover object-center"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
  </motion.div>

  {/* CINEMATIC OVERLAY */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.38)_58%,rgba(0,0,0,0.72)_100%)]" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />

  {/* HERO CONTENT */}
  <motion.div
    style={{
      y: heroTextY,
      opacity: heroOpacity,
    }}
    className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-56 md:pt-64 pb-40 md:pb-32"
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      className="max-w-5xl"
    >

      <p className="text-[var(--cream)]/82 tracking-[0.38em] text-[11px] md:text-xs uppercase mb-12 md:mb-14">
        Baumpflege Fischer · Gutenstein
      </p>

      <h1 className="font-display text-[3.7rem] leading-[0.92] sm:text-[4.2rem] md:text-7xl lg:text-8xl text-white font-normal">
        Ihre Bäume —
        <br />
        <em className="italic text-[var(--cream)]">
          meine Leidenschaft.
        </em>
      </h1>

      <p className="mt-10 text-white/88 text-[1.55rem] md:text-xl max-w-3xl mx-auto font-light leading-relaxed whitespace-pre-line">
        Handwerk, Erfahrung und tiefer Respekt vor der Natur.
        {"\n"}
        In der Region Ostösterreichs.
      </p>

      <div className="mt-24 md:mt-28 flex flex-col sm:flex-row items-center justify-center gap-5">

        <a
          href="#kontakt"
          className="px-10 py-5 bg-[var(--cream)] text-[var(--forest-deep)] text-sm tracking-[0.12em] uppercase hover:bg-white transition-all duration-300 hover:scale-[1.02]"
        >
          Kostenlose Besichtigung
        </a>

        <a
          href="#leistungen"
          className="px-10 py-5 border border-white/30 text-white text-sm tracking-[0.12em] uppercase hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
        >
          Leistungen
        </a>

      </div>
    </motion.div>
  </motion.div>

  {/* TRUST STRIP */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
    className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-[8px]"
  >
    <div className="mx-auto max-w-6xl px-6 py-5 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-8">
      {trust.map((t) => (
        <div
          key={t.label}
          className="flex items-center gap-3 text-white/90 text-sm md:text-[15px]"
        >
          <t.icon
            size={18}
            className="text-[var(--cream)] shrink-0"
            strokeWidth={1.5}
          />

          <span className="tracking-wide leading-snug">
            {t.label}
          </span>
        </div>
      ))}
    </div>
  </motion.div>

  {/* SCROLL INDICATOR */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
    className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 text-white/70"
  >
    <ChevronDown size={22} />
  </motion.div>

</section>

      {/* INTRO */}
      <section className="py-28 md:py-36 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p {...fadeUp()} className="tracking-[0.3em] uppercase mb-6 text-base">
            Kompetent · Fair · Zuverlässig
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-5xl text-foreground leading-tight">
            Ihr Spezialist in Sachen <em className="italic text-[var(--forest)]">Baumpflege</em>.
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="mt-8 text-muted-foreground text-lg leading-relaxed font-light">
            Seit vielen Jahren pflanze, pflege und fälle ich Bäume im Piestingtal und in der gesamten Region vom Gletscher bis zum Steppensee. Jede Arbeit beginnt mit einem genauen Blick — und einer kostenlosen Besichtigung vor Ort.
          </motion.p>
        </div>
        <motion.figure
          {...fadeUp(0.3)}
          className="mx-auto max-w-5xl mt-16 md:mt-20 overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
        >
          <img
            src={introMountain}
            alt="Baumpfleger im Baum mit Blick auf das verschneite Schneeberg-Massiv im Piestingtal"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </motion.figure>
      </section>

  {/* SERVICES */}
<section
  id="leistungen"
  className="relative py-28 md:py-36 px-6 bg-[linear-gradient(to_bottom,#F4F1EA,#ECE7DC)] overflow-hidden"
>

  {/* SUBTLE BACKGROUND GLOW */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_top_left,#3D5A40_0%,transparent_42%)]" />

  <div className="relative mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="text-center mb-24">

      <motion.p
        {...fadeUp()}
        className="text-[var(--forest)] tracking-[0.3em] text-xs uppercase mb-5"
      >
        Leistungen
      </motion.p>

      <motion.h2
        {...fadeUp(0.1)}
        className="text-4xl md:text-5xl"
      >
        Handwerk an Ihren Bäumen
      </motion.h2>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1500px] mx-auto">

      {services.map((s, i) => (
        <motion.div
          key={s.title}
          {...fadeUp(i * 0.05)}
          whileHover={{
  scale: 1.025,
}}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group relative overflow-hidden
            rounded-[28px]
            border border-black/[0.04]
            bg-white/72
            backdrop-blur-[6px]
            p-9
            min-h-[340px] lg:min-h-[380px] xl:min-h-[340px]
            flex flex-col
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            hover:shadow-[0_28px_90px_rgba(0,0,0,0.10)]
            transition-all duration-500
          "
        >

          {/* HOVER GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_left,rgba(61,90,64,0.08)_0%,transparent_58%)]" />

          {/* ICON */}
          <div className="relative mb-7">

            <div className="absolute -inset-3 rounded-full bg-[var(--forest)]/6 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <s.icon
              size={38}
              strokeWidth={1.2}
              className="relative text-[var(--forest)] transition-transform duration-500 group-hover:scale-[1.06]"
            />

          </div>

          {/* TITLE */}
          <h3 className="relative text-[2rem] leading-tight mb-4 text-[var(--forest-deep)]">
            {s.title}
          </h3>

          {/* TEXT */}
          <p className="relative text-muted-foreground font-light leading-relaxed text-[15px]">
            {s.text}
          </p>

        </motion.div>
      ))}

      {/* CTA CARD */}
      <motion.div
        {...fadeUp(services.length * 0.05)}
        whileHover={{
  scale: 1.04,
}}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative overflow-hidden
          rounded-[32px]
          bg-[linear-gradient(to_bottom_right,#203326,#16241D)]
          p-10
          flex flex-col justify-center
          text-[var(--cream)]
          shadow-[0_24px_90px_rgba(0,0,0,0.20)]
hover:shadow-[0_34px_120px_rgba(0,0,0,0.26)]

          sm:col-span-2
          lg:col-span-1
          xl:col-span-4
          xl:min-h-[260px]
          xl:items-center
          xl:text-center
        "
      >

        {/* GLOW */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12)_0%,transparent_55%)]" />

        <p className="relative text-[var(--cream)]/70 tracking-[0.25em] text-xs uppercase mb-4">
          Unverbindlich
        </p>

        <h3 className="relative text-3xl mb-5 text-white leading-tight">
          Kostenlose Besichtigung & Angebot
        </h3>

        <p className="relative font-light text-white/80 mb-8 leading-relaxed">
          Persönlich, vor Ort, ohne Aufpreis.
        </p>

        <a
          href="#kontakt"
          className="
            relative inline-flex items-center gap-2
            text-sm tracking-[0.14em] uppercase
            border-b border-[var(--cream)]/30
            pb-1
            hover:border-[var(--cream)]
            transition-colors

            xl:self-center
          "
        >
          Anfrage senden
        </a>

      </motion.div>

    </div>
  </div>
</section>

      {/* ABOUT */}
      <section
  id="ueber"
  className="relative py-32 md:py-40 px-6 overflow-hidden bg-[linear-gradient(to_bottom,#F7F3EC,#F1ECE3)]"
>
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.95fr_1.05fr] gap-16 lg:gap-24 items-center">
          <motion.div {...fadeUp()} className="relative">
            <img src={owner} alt="Inhaber von Baumpflege Fischer - Stefan Fischer" className="w-full aspect-[4/5] object-cover rounded-[30px] shadow-[0_24px_80px_rgba(0,0,0,0.10)]" loading="lazy" width={960} height={1200} />
            <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 border border-[var(--forest)]/30" />
          </motion.div>

          <div>
            <motion.p {...fadeUp()} className="text-[var(--forest)] tracking-[0.34em] text-[11px] uppercase mb-7">Über mich</motion.p>
            <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-6xl mb-10 leading-[1.04] max-w-2xl">
              Aus Liebe zum Baum, aus Achtung vor der Natur.
            </motion.h2>
            <motion.div {...fadeUp(0.2)} className="space-y-7 text-[17px] text-foreground/72 font-light leading-[1.95] max-w-2xl">
              <p>
                Mein Weg führte mich über die Landschaftsgärtner-Lehre — mit besonderem Fokus auf Obstbäume — direkt in die Baumkrone. Was als Lehre begann, ist heute Berufung.
              </p>
              <p>
                Jeder Baum erzählt eine Geschichte. Meine Aufgabe ist es, sie zu lesen, zu verstehen und mit ruhiger, sorgfältiger Hand zu pflegen — damit Ihr Baum lange gesund und sicher bleibt.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "ETW", s: "European Tree Worker — zertifiziert" },
                { t: "FLL", s: "Zertifizierter Baumkontrolleur" },
                { t: "Lehre", s: "Landschaftsgärtner mit Fokus Obstbau" },
                { t: "Erfahrung", s: "Langjährige Praxis in der Region" },
              ].map((q) => (
                <div key={q.t} className="border-l-2 border-[var(--forest)] pl-4 py-1">
                  <div className="text-[var(--forest)] font-display text-xl">{q.t}</div>
                  <div className="text-sm text-muted-foreground font-light">{q.s}</div>
                </div>
              ))}
            </motion.div>

{/* ZERTIFIKATE */}
<motion.div
  {...fadeUp(0.4)}
  className="mt-14"
>
  <p className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-5">
    Zertifikate & Urkunden
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

    {certificates.map((cert, i) => (
      <button
        key={cert.alt}
        onClick={() => setCertBox(i)}
        className="group relative overflow-hidden rounded-md border border-border bg-background hover:border-[var(--forest)]/40 transition-colors cursor-zoom-in"
      >
        <img
          src={cert.src}
          alt={cert.alt}
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </button>
    ))}

  </div>
</motion.div>

</div>
</div>

</section>

{/* GALLERY */}
<section
  id="galerie"
  className="relative py-28 md:py-36 px-6 bg-[radial-gradient(circle_at_top,#1A241D_0%,#111512_58%)] text-[var(--cream)] overflow-hidden"
>
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="text-center mb-16">
      <motion.p
        {...fadeUp()}
        className="text-[var(--cream)]/60 tracking-[0.3em] text-xs uppercase mb-5"
      >
        Galerie & Einblicke
      </motion.p>

      <motion.h2
        {...fadeUp(0.1)}
        className="text-4xl md:text-5xl text-white"
      >
        Echte Arbeit. Echte Bäume.
      </motion.h2>

      <motion.p
        {...fadeUp(0.2)}
        className="mt-6 text-[var(--cream)]/70 font-light max-w-xl mx-auto"
      >
        Eindrücke aus meinem Arbeitsalltag — vom Kletterseil bis zum
        Obstbaumschnitt im Piestingtal.
      </motion.p>
    </div>

{/* GRID */}
<div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[220px] gap-4 max-w-[1500px] mx-auto">

  {/* SCHNEEBERG */}
  <motion.button
    {...fadeUp(0)}
    onClick={() => setLightbox(0)}
    className="col-span-2 md:col-span-4 row-span-2 group relative overflow-hidden rounded-sm cursor-zoom-in"
  >
    <img
      src={galleryImages[0].src}
      alt={galleryImages[0].alt}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </motion.button>

  {/* STAMMDURCH */}
  <motion.button
    {...fadeUp(0.05)}
    onClick={() => setLightbox(2)}
    className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-sm cursor-zoom-in"
  >
    <img
      src={galleryImages[2].src}
      alt={galleryImages[2].alt}
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />
  </motion.button>

  {/* NATURE2 */}
  <motion.button
    {...fadeUp(0.1)}
    onClick={() => setLightbox(5)}
    className="col-span-1 md:col-span-2 row-span-1 group relative overflow-hidden rounded-sm cursor-zoom-in"
  >
    <img
      src={galleryImages[5].src}
      alt={galleryImages[5].alt}
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />
  </motion.button>

  {/* BIGTREE */}
  <motion.button
    {...fadeUp(0.15)}
    onClick={() => setLightbox(3)}
    className="col-span-1 md:col-span-1 row-span-1 group relative overflow-hidden rounded-sm cursor-zoom-in"
  >
    <img
      src={galleryImages[3].src}
      alt={galleryImages[3].alt}
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />
  </motion.button>

  {/* MAIBAUM */}
  <motion.button
    {...fadeUp(0.2)}
    onClick={() => setLightbox(6)}
    className="col-span-1 md:col-span-1 row-span-2 group relative overflow-hidden rounded-sm cursor-zoom-in"
  >
    <img
      src={galleryImages[6].src}
      alt={galleryImages[6].alt}
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />
  </motion.button>

  {/* WALDBILD */}
  <motion.button
    {...fadeUp(0.25)}
    onClick={() => setLightbox(4)}
    className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-sm cursor-zoom-in"
  >
    <img
      src={galleryImages[4].src}
      alt={galleryImages[4].alt}
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />
  </motion.button>

  {/* GLASHAUS */}
  <motion.button
    {...fadeUp(0.3)}
    onClick={() => setLightbox(1)}
    className="col-span-2 md:col-span-3 row-span-1 group relative overflow-hidden rounded-sm cursor-zoom-in"
  >
    <img
      src={galleryImages[1].src}
      alt={galleryImages[1].alt}
      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />
  </motion.button>

</div>

   
  </div>
</section>


{/* VIDEO + ARBEITSALLTAG GRID */}

<section className="relative py-24 px-6 bg-[linear-gradient(to_bottom,#16241D,#223328)] border-y border-white/5 overflow-hidden">
  <div className="mx-auto max-w-7xl">

```
{/* HEADER */}
<motion.div {...fadeUp()} className="mb-16 text-center">
  <p className="text-[var(--cream)]/60 tracking-[0.3em] text-xs uppercase mb-5">
    Arbeitsalltag
  </p>

  <h2 className="text-3xl md:text-5xl text-white">
    Bewegte Einblicke.
  </h2>

  <p className="mt-6 text-[var(--cream)]/70 font-light max-w-2xl mx-auto">
    Ruhige Eindrücke echter Arbeit — direkt aus dem Alltag der
    Baumpflege Fischer.
  </p>
</motion.div>

{/* ORGANIC GRID */}
<div className="hidden md:grid md:grid-cols-12 auto-rows-[190px] gap-4 grid-flow-dense">

{/* VIDEO A */}
<motion.button
  {...fadeUp(0)}
  onClick={() => setActiveVideo(videoA)}
  className="group relative overflow-hidden rounded-sm bg-black md:col-span-7 md:row-span-2 cursor-pointer"
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
  >
    <source src={videoA} type="video/mp4" />
  </video>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

  {/* PLAY BUTTON */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/35 backdrop-blur-md border border-white/20">
      <Play
        size={26}
        className="ml-1 text-white"
        fill="white"
      />
    </div>
  </div>
</motion.button>

{/* VIDEO B */}
<motion.button
  {...fadeUp(0.04)}
  onClick={() => setActiveVideo(videoB)}
  className="group relative overflow-hidden rounded-sm bg-black md:col-span-5 md:row-span-3 cursor-pointer"
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
  >
    <source src={videoB} type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/35 backdrop-blur-md border border-white/20">
      <Play
        size={26}
        className="ml-1 text-white"
        fill="white"
      />
    </div>
  </div>
</motion.button>

  {/* SEILACTION */}
  <motion.button
    {...fadeUp(0.06)}
    onClick={() => setWorkBox(1)}
    className="group relative overflow-hidden rounded-sm md:col-span-4 md:row-span-2 cursor-zoom-in bg-black/20"
  >
    <img
      src={seilaction_scharf}
      alt="Seilklettertechnik in der Baumkrone"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  </motion.button>

  {/* GRÜNFLÄCHE 1 */}
  <motion.div
    {...fadeUp(0.07)}
    className="rounded-sm md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#22382B] to-[#1B2A22]"
  />

{/* VIDEO C */}
<motion.button
  {...fadeUp(0.08)}
  onClick={() => setActiveVideo(videoC)}
  className="group relative overflow-hidden rounded-sm bg-black md:col-span-3 md:row-span-2 cursor-pointer"
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
  >
    <source src={videoC} type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/35 backdrop-blur-md border border-white/20">
      <Play
        size={26}
        className="ml-1 text-white"
        fill="white"
      />
    </div>
  </div>
</motion.button>

  {/* RETTUNG */}
  <motion.button
    {...fadeUp(0.1)}
    onClick={() => setWorkBox(2)}
    className="group relative overflow-hidden rounded-sm md:col-span-2 md:row-span-1 cursor-zoom-in bg-black/20"
  >
    <img
      src={rettung}
      alt="Dokumentation eines Rettungseinsatzes"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  </motion.button>

  {/* PRITSCHE */}
  <motion.button
    {...fadeUp(0.12)}
    onClick={() => setWorkBox(3)}
    className="group relative overflow-hidden rounded-sm md:col-span-5 md:row-span-1 cursor-zoom-in bg-black/20"
  >
    <img
      src={pritsche_anhaenger}
      alt="Transport und Arbeitsalltag"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  </motion.button>

  {/* HUBWAGEN */}
  <motion.button
    {...fadeUp(0.13)}
    onClick={() => setWorkBox(4)}
    className="group relative overflow-hidden rounded-sm md:col-span-3 md:row-span-2 cursor-zoom-in bg-black/20"
  >
    <img
      src={dickerstamm_hubwagen}
      alt="Großer Stamm beim Abtransport"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  </motion.button>

{/* VIDEO D */}
<motion.button
  {...fadeUp(0.14)}
  onClick={() => setActiveVideo(videoD)}
  className="group relative overflow-hidden rounded-sm bg-black md:col-span-6 md:row-span-2 cursor-pointer"
>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
  >
    <source src={videoD} type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/35 backdrop-blur-md border border-white/20">
      <Play
        size={26}
        className="ml-1 text-white"
        fill="white"
      />
    </div>
  </div>
</motion.button>

  {/* STIHL — groß & präsent */}
  <motion.button
    {...fadeUp(0.16)}
    onClick={() => setWorkBox(0)}
    className="group relative overflow-hidden rounded-sm md:col-span-3 md:row-span-2 cursor-zoom-in bg-black/20"
  >
    <img
      src={stefanstihl_original}
      alt="Arbeitsdetail mit Motorsäge"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  </motion.button>

  {/* GRÜNFLÄCHE 2 */}
  <motion.div
    {...fadeUp(0.17)}
    className="rounded-sm md:col-span-3 md:row-span-1 bg-gradient-to-br from-[#2A4434] to-[#1E3126]"
  />

  {/* GRÜNFLÄCHE 3 */}
  <motion.div
    {...fadeUp(0.18)}
    className="rounded-sm md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#314D3C] to-[#22382B]"
  />

</div>

{/* MOBILE VIDEO + IMAGE LAYOUT */}
<div className="md:hidden mt-10 space-y-4">

  {/* VIDEOS */}
  {[videoA, videoB, videoC, videoD].map((video, i) => (
    <motion.button
      key={i}
      {...fadeUp(i * 0.05)}
      onClick={() => setActiveVideo(video)}
      className="group relative overflow-hidden rounded-2xl bg-black cursor-pointer"
    >
      <video
        muted
        playsInline
        preload="metadata"
        className="w-full aspect-[9/16] object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* PLAY OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-all duration-300">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20">
          <Play
            size={28}
            className="ml-1 text-white"
            fill="white"
          />
        </div>
      </div>
    </motion.button>
  ))}

  {/* BILDER */}
  <div className="grid grid-cols-2 gap-3 pt-3">

    {[
      {
        src: seilaction_scharf,
        alt: "Seilklettertechnik in der Baumkrone",
        index: 1,
      },
      {
        src: rettung,
        alt: "Dokumentation eines Rettungseinsatzes",
        index: 2,
      },
      {
        src: pritsche_anhaenger,
        alt: "Transport und Arbeitsalltag",
        index: 3,
      },
      {
        src: dickerstamm_hubwagen,
        alt: "Großer Stamm beim Abtransport",
        index: 4,
      },
      {
        src: stefanstihl_original,
        alt: "Arbeitsdetail mit Motorsäge",
        index: 0,
      },
    ].map((img, i) => (
      <motion.button
        key={i}
        {...fadeUp(i * 0.04)}
        onClick={() => setWorkBox(img.index)}
        className="group relative overflow-hidden rounded-2xl cursor-zoom-in"
      >
        <img
          src={img.src}
          alt={img.alt}
          className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </motion.button>
    ))}

  </div>
</div>

  </div>
</section>


{/* BEFORE / AFTER */}
<section
  id="before-after"
  className="relative py-28 md:py-36 px-6 bg-[linear-gradient(to_bottom,#263028,#343C34)] overflow-hidden"
>
  <div className="mx-auto max-w-7xl">

    {/* HEADER */}
    <div className="text-center mb-20">

      <motion.p
        {...fadeUp()}
        className="text-[var(--cream)]/60 tracking-[0.3em] text-xs uppercase mb-5"
      >
        Vorher & Nachher
      </motion.p>

      <motion.h2
        {...fadeUp(0.1)}
        className="text-4xl md:text-5xl text-white"
      >
        Sichtbare Ergebnisse.
      </motion.h2>

      <motion.p
        {...fadeUp(0.2)}
        className="mt-6 text-[var(--cream)]/70 font-light max-w-2xl mx-auto"
      >
        Fachgerechte Baumpflege bedeutet nicht nur Sicherheit —
        sondern auch langfristige Gesundheit und eine harmonische
        Erscheinung Ihrer Bäume.
      </motion.p>

    </div>

    {/* LAYOUT */}
    <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 items-start">

  {/* LINKE SPALTE */}
  <div className="grid gap-8">

    <motion.div {...fadeUp(0)}>
      <BeforeAfterSlider
        before={beforeAfterItems[0].before}
        after={beforeAfterItems[0].after}
        title={beforeAfterItems[0].title}
        aspect="aspect-[4/3]"
      />
    </motion.div>

    <motion.div {...fadeUp(0.08)}>
      <BeforeAfterSlider
        before={beforeAfterItems[1].before}
        after={beforeAfterItems[1].after}
        title={beforeAfterItems[1].title}
        aspect="aspect-[16/10]"
      />
    </motion.div>

  </div>

  {/* RECHTE SPALTE */}
  <motion.div {...fadeUp(0.12)}>

    <BeforeAfterSlider
      before={beforeAfterItems[2].before}
      after={beforeAfterItems[2].after}
      title={beforeAfterItems[2].title}
      aspect="aspect-[3/5]"
    />

  </motion.div>

</div>
  </div>
</section>

      {/* CONTACT */}
<section
  id="kontakt"
  className="relative py-32 md:py-40 px-6 overflow-hidden bg-[linear-gradient(to_bottom,#F5F2EA,#ECE7DC)]"
>

  {/* SOFT BACKGROUND GLOW */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_top_left,#3D5A40_0%,transparent_42%)]" />

  <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.05fr] gap-16 lg:gap-24 items-start">

    {/* LEFT SIDE */}
    <div>

      <motion.p
        {...fadeUp()}
        className="text-[var(--forest)] tracking-[0.3em] text-xs uppercase mb-6"
      >
        Kontakt
      </motion.p>

      <motion.h2
        {...fadeUp(0.1)}
        className="text-4xl md:text-6xl leading-[1.05] mb-10"
      >
        Ich freue mich auf Ihre Anfrage
        <br />
        <em className="italic text-[var(--forest)]">
          und Ihre Bäume.
        </em>
      </motion.h2>

      <motion.p
        {...fadeUp(0.15)}
        className="text-lg text-foreground/70 leading-relaxed font-light max-w-xl mb-12"
      >
        Ob Baumpflege, Schnitt, Kontrolle oder sichere Abtragung —
        ich nehme mir persönlich Zeit für Ihr Anliegen und berate Sie direkt vor Ort.
      </motion.p>

      {/* CONTACT INFOS */}
      <motion.div
        {...fadeUp(0.2)}
        className="space-y-5 text-foreground/80"
      >

        <a
          href="tel:+436765096778"
          className="
  group flex items-center gap-4
  hover:text-[var(--forest)]
  hover:translate-x-[4px]
  transition-all duration-300
  cursor-pointer
"
        >
          <div className="
  w-11 h-11 rounded-full
  bg-white
  shadow-sm
  flex items-center justify-center
  transition-all duration-300
  group-hover:bg-[var(--cream)]
  group-hover:shadow-md
">
            <Phone size={18} strokeWidth={1.5} />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Telefon
            </div>

            <div className="font-light text-lg">
              +43 676 50 96 778
            </div>
          </div>
        </a>

        <a
          href="mailto:office@baumpflegefischer.at"
          className="
  group flex items-center gap-4
  hover:text-[var(--forest)]
  hover:translate-x-[4px]
  transition-all duration-300
  cursor-pointer
"
        >
          <div className="
  w-11 h-11 rounded-full
  bg-white
  shadow-sm
  flex items-center justify-center
  transition-all duration-300
  group-hover:bg-[var(--cream)]
  group-hover:shadow-md
">
            <Mail size={18} strokeWidth={1.5} />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
              E-Mail
            </div>

            <div className="font-light text-lg break-all">
              office@baumpflegefischer.at
            </div>
          </div>
        </a>

        <a
  href="https://www.google.com/maps/place/Baumpflege+Fischer/@47.8766412,15.8843535,17z/data=!3m1!4b1!4m6!3m5!1s0x476deb63bb4adea9:0xe1420a66db17c97f!8m2!3d47.8766412!4d15.8843535!16s%2Fg%2F11x0w690sd?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noreferrer"
  className="
    group flex items-center gap-4
    hover:text-[var(--forest)]
    hover:translate-x-[4px]
    transition-all duration-300
    cursor-pointer
  "
>
  <div
    className="
      w-11 h-11 rounded-full
      bg-white shadow-sm
      flex items-center justify-center
      transition-all duration-300
      group-hover:bg-[var(--cream)]
      group-hover:shadow-md
    "
  >
    <MapPin
      size={18}
      strokeWidth={1.5}
      className="text-[var(--forest)]"
    />
  </div>

  <div>
    <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground mb-1">
      Standort
    </div>

    <div>2770 Gutenstein, Niederösterreich</div>
  </div>
</a>

      </motion.div>

      {/* REGIONS */}
      <motion.div
        {...fadeUp(0.3)}
        className="mt-14 pt-8 border-t border-black/5"
      >

        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
          Einsatzgebiete
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xl">
          {regions.join(" · ")}
        </p>

      </motion.div>

    </div>

    {/* FORM */}
    <motion.form
      {...fadeUp(0.25)}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Vielen Dank! Ich melde mich umgehend bei Ihnen.");
      }}
      className="
        relative overflow-hidden
        rounded-[34px]
        border border-black/[0.04]
        bg-white/72
        backdrop-blur-[8px]
        p-8 md:p-12
        shadow-[0_20px_70px_rgba(0,0,0,0.06)]
      "
    >

      {/* FORM GLOW */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(circle_at_top_left,#3D5A40_0%,transparent_45%)]" />

      <div className="relative space-y-7">

        <div>
          <label className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3 block">
            Name
          </label>

          <input
            required
            type="text"
            className="
              w-full rounded-xl
              bg-white/80
              border border-black/5
              px-5 py-4
              focus:outline-none
              focus:border-[var(--forest)]
              focus:bg-white
              transition-all
            "
          />
        </div>

        <div>
          <label className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3 block">
            Telefonnummer
          </label>

          <input
            required
            type="tel"
            className="
              w-full rounded-xl
              bg-white/80
              border border-black/5
              px-5 py-4
              focus:outline-none
              focus:border-[var(--forest)]
              focus:bg-white
              transition-all
            "
          />
        </div>

        <div>
          <label className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3 block">
            Nachricht
          </label>

          <textarea
            required
            rows={5}
            className="
              w-full rounded-xl
              bg-white/80
              border border-black/5
              px-5 py-4
              resize-none
              focus:outline-none
              focus:border-[var(--forest)]
              focus:bg-white
              transition-all
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full mt-4
            rounded-2xl
            px-8 py-5
            bg-[linear-gradient(to_bottom_right,#203326,#16241D)]
            text-[var(--cream)]
            text-sm tracking-[0.18em] uppercase
            hover:scale-[1.015]
            hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]
            transition-all duration-500
          "
        >
          Anfrage senden
        </button>

      </div>

    </motion.form>

  </div>
</section>

{/* FOOTER */}
<footer className="relative overflow-hidden bg-[linear-gradient(to_bottom,#16241D,#0F1813)] text-[var(--cream)] px-6 py-20 md:py-24">

  {/* SUBTLE TOP LINE */}
  <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

  {/* SOFT GLOW */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(circle_at_top_left,#6F8B74_0%,transparent_40%)]" />

  <div className="relative mx-auto max-w-7xl">

    {/* MAIN FOOTER */}
    <div className="flex flex-col items-center text-center">

      {/* LOGO */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Baumpflege Fischer"
          className="h-20 md:h-24 w-auto opacity-90"
        />
      </div>

      {/* CLAIM */}
      <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-[var(--cream)]/45 mb-6">
        Baumpflege Fischer · Gutenstein
      </p>

      {/* TEXT */}
      <p className="max-w-xl text-[15px] md:text-base leading-relaxed text-[var(--cream)]/68 font-light mb-10">
        Fachgerechte Baumpflege mit Respekt vor Natur,
        Sicherheit und langlebiger Qualität —
        persönlich betreut in Ostösterreich.
      </p>

      {/* LINKS */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-10">

        <button
          onClick={() => setOverlay("impressum")}
          className="
            px-5 py-2.5
            rounded-full

            text-[14px]
            tracking-[0.12em]

            text-[var(--cream)]/88
            bg-white/[0.04]

            border border-white/[0.06]

            hover:bg-white/[0.09]
            hover:text-white
            hover:border-white/[0.12]

            transition-all duration-300
          "
        >
          Impressum
        </button>

        <button
          onClick={() => setOverlay("datenschutz")}
          className="
            px-5 py-2.5
            rounded-full

            text-[14px]
            tracking-[0.12em]

            text-[var(--cream)]/88
            bg-white/[0.04]

            border border-white/[0.06]

            hover:bg-white/[0.09]
            hover:text-white
            hover:border-white/[0.12]

            transition-all duration-300
          "
        >
          Datenschutz
        </button>

      </div>

      {/* COPYRIGHT */}
      <div className="text-[13px] text-[var(--cream)]/40 font-light">
        © {new Date().getFullYear()} Baumpflege Fischer · Gutenstein, Niederösterreich
      </div>

    </div>
  </div>
</footer>


{/* VIDEO OVERLAY */}
{activeVideo && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
    onClick={() => setActiveVideo(null)}
  >

    {/* CLOSE */}
    <button
      onClick={() => setActiveVideo(null)}
      className="absolute top-6 right-6 z-10 h-12 w-12 rounded-full bg-white/10 border border-white/15 text-white text-2xl backdrop-blur-md hover:bg-white/20 transition-all"
    >
      ✕
    </button>

    {/* VIDEO */}
    <motion.div
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.96, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-sm md:max-w-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <video
        src={activeVideo}
        controls
        autoPlay
        playsInline
        className="w-full rounded-2xl shadow-2xl"
      />
    </motion.div>

  </motion.div>
)}
      {/* Legal overlay */}
      {overlay && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOverlay(null)}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background max-w-2xl w-full max-h-[85vh] overflow-y-auto p-10"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl">{overlay === "impressum" ? "Impressum" : "Datenschutz"}</h3>
              <button onClick={() => setOverlay(null)} className="text-muted-foreground hover:text-foreground">✕</button>
            </div>
            <div className="text-sm text-muted-foreground space-y-3 font-light leading-relaxed">
              {overlay === "impressum" ? (
                <>
                  <p><strong className="text-foreground">Baumpflege Fischer</strong></p>
                  <p>Inhaber: Hr. Fischer<br/>2770 Gutenstein, Niederösterreich</p>
                  <p>Tel: +43 676 50 96 778<br/>E-Mail: office@baumpflegefischer.at</p>
                  <p>UID-Nr.: ATU XXXXXXXX<br/>Mitglied der WKO Niederösterreich</p>
                </>
              ) : (
                <>
                  <p>Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Ich behandle Ihre Daten vertraulich und entsprechend der gesetzlichen Datenschutz­vorschriften (DSGVO).</p>
                  <p>Über das Kontaktformular übermittelte Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.</p>
                  <p>Verantwortlich: Baumpflege Fischer, 2770 Gutenstein.</p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

<Lightbox
  images={galleryImages}
  index={lightbox}
  onClose={() => setLightbox(null)}
  onPrev={() =>
    setLightbox((i) =>
      i === null
        ? null
        : (i - 1 + galleryImages.length) % galleryImages.length
    )
  }
  onNext={() =>
    setLightbox((i) =>
      i === null
        ? null
        : (i + 1) % galleryImages.length
    )
  }
/>

<Lightbox
  images={workImages}
  index={workBox}
  onClose={() => setWorkBox(null)}
  onPrev={() =>
    setWorkBox((i) =>
      i === null
        ? null
        : (i - 1 + workImages.length) % workImages.length
    )
  }
  onNext={() =>
    setWorkBox((i) =>
      i === null
        ? null
        : (i + 1) % workImages.length
    )
  }
/>

<Lightbox
  images={certificates}
  index={certBox}
  onClose={() => setCertBox(null)}
  onPrev={() =>
    setCertBox((i) =>
      i === null
        ? null
        : (i - 1 + certificates.length) % certificates.length
    )
  }
  onNext={() =>
    setCertBox((i) =>
      i === null
        ? null
        : (i + 1) % certificates.length
    )
  }
/>

    </>
  );
}
