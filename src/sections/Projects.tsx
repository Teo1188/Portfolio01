import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Antivirus Fundation",
    year: "2024",
    title: "Antivirus Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://mcmendezm.github.io/FundacionAntivirus/",
    image: darkSaasLandingPage,
  },
  {
    company: "MWbusiness group",
    year: "2025",
    title: "MWbusinessgroup Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://teo1188.github.io/MwBusinessGroup/",
    image: lightSaasLandingPage,
  },
  {
    company: "Amadeus",
    year: "2025",
    title: "Amadeus overtime aplication",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://cloud-native-amadeus.vercel.app/login",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into enganging digital experiences." />
        
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((Project) => (
            <div 
            key={Project.title}
            className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-['']
            after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2
            after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div className="absolute insent-0 -z-10 opacity-5" 
                style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
              ></div>
                <div className="lg:grid lg:grid-cols-2 gap-16">
                <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2
                 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{Project.company}</span>
                  <span>&bull;</span>
                  <span>{Project.year}</span>
                </div>
              
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{Project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {Project.results.map((result) => (
                  <li className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={Project.link} target="_blank">
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl 
                font-semibold inline-flex items-center justify-center gap-2 mt-8">
                  <span>Visit Live Site</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              </div>
              <div className="relative">
              <Image
               src={Project.image}
               alt={Project.title}
               className="mt-8 -mb-4 md:-mb-0
               lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:rounded-xl"
               />
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
