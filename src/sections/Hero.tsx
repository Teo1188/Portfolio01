import memojiImage from '@/assets/images/memoji-avatar-6.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-50 relative z-100 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>

        <HeroOrbit size={580} rotation={-15} shouldOrbit={true} orbitDuration="30s" shouldSpin={true} spinDuration="10s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={630} rotation={79} shouldOrbit={true} orbitDuration="32s" shouldSpin={true} spinDuration="10s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit> 
        <HeroOrbit size={680} rotation={180} shouldOrbit={true} orbitDuration="34s" shouldSpin={true} spinDuration="10s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={690} rotation={20} shouldOrbit={true} orbitDuration="36s" shouldSpin={true} spinDuration="10s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={-45} shouldOrbit={true} orbitDuration="38s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={120} shouldOrbit={true} orbitDuration="40s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={850} rotation={98} shouldOrbit={true} orbitDuration="40s" shouldSpin={true} spinDuration="10s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={0} shouldOrbit={true} orbitDuration="42s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={880} rotation={144} shouldOrbit={true} orbitDuration="44s" shouldSpin={true} spinDuration="10s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={940} rotation={-72} shouldOrbit={true} orbitDuration="46s" shouldSpin={true} spinDuration="8s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={990} rotation={86} shouldOrbit={true} orbitDuration="48s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>   
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 blur-3xl scale-90 group-hover:scale-110 transition-all duration-500 -z-10 transform-gpu overflow-visible bg-blue-500 hover:bg-purple-500 focus:bg-emerald-500 active:bg-cyan-500"
              style={{ transform: "translateZ(0)" }}
            ></div>
            <div
              className="origin-bottom transition-transform duration-300 group-hover:scale-[1.03]"
              style={{ transformOrigin: "bottom center" }}
            >
              <Image
                src={memojiImage}
                className="size-[300px] h-auto"
                alt="personality character based in teo"
              />
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 px-4 py-3 inline-flex items-center justify-center rounded-lg">
            <div className="font-serif text-center items-center tracking-wide">
              <div className="font-serif text-center ">
            <div className="text-4xl text-white md:text-5xl bg-clip-text text-transparent">
                Tadeo Gaviria
            </div>
            <div className="text-2xl md:text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                Fullstack Developer
            </div>
        </div>
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-2xl md:text-4xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional, I achieve
            goals with quality. Driven by curiosity, I solve problems
            creatively, designing intuitive interfaces that prioritize user
            experience through innovation.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work!</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white/15 bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👽</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
