import Image from "next/image";
import { type Tech } from "./tech";

type TechCubeProps = {
  tech: Tech;
};

export default function TechCube({ tech }: TechCubeProps) {
  return (
    <div className="group relative flex h-36 w-36 sm:h-40 sm:w-40 flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-300/50 hover:bg-teal-900/20 hover:shadow-[0_0_24px_rgba(45,212,191,0.3),inset_0_0_16px_rgba(45,212,191,0.15)]">
      
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-teal-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* The Tech Logo - Significantly Increased Size */}
      {tech.icon && (
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
          <Image 
            src={tech.icon} 
            alt={`${tech.name} logo`} 
            fill 
            className="object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100 drop-shadow-md" 
          />
        </div>
      )}
      
      {/* Tech Name */}
      <span className="text-sm sm:text-base font-semibold tracking-tight text-white/70 transition-all duration-300 group-hover:text-teal-50 group-hover:[text-shadow:0_0_12px_rgba(153,246,228,0.8)]">
        {tech.name}
      </span>
      
      {/* Subtle bottom reflection */}
      <div className="absolute -bottom-1 h-2 w-1/2 rounded-[100%] bg-teal-400/30 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}