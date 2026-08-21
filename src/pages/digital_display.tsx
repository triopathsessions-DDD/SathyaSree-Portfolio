import { Link } from "react-router-dom";
import ScrollRevealGallery from "@/components/ScrollRevealGallery";

export default function DigitalDisplay() {
  return (
    <main className="min-h-screen bg-[#111111]">

      {/* Home */}
      <div className="fixed left-5 top-5 z-[100] sm:left-8 sm:top-8">
        <Link
          to="/"
          className="
            inline-flex
            items-center
            rounded-lg
            border
            border-white/20
            bg-black/30
            px-5
            py-2.5
            text-xs
            font-medium
            uppercase
            tracking-wider
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-white/50
            hover:bg-white/10
          "
        >
          Home
        </Link>
      </div>

      <ScrollRevealGallery />

    </main>
  );
}