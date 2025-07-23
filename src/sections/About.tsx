import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTML5Icon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { TechIcon } from "@/components/TechIcon";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: ChromeIcon,
  },
]

export const AboutSection = () => {
  return <div className="pb-96">
    <SectionHeader 
      eyebrow="About Me"
      title="A Glimpse Into My World" 
      description="Learn more about who I am, what I do, and what inspires me." 
    />
    <div>
      <Card>
        <div>
          <StarIcon />
          <h3 className="">My Reads</h3>
          <p>Explore the books shaping my perspectives</p>
        </div>
        <Image src={bookImage} alt="Book Cover" />
      </Card>
      <Card>
        <div>
          <StarIcon />
          <h3 className="">My Toolbox</h3>
          <p>
            Explore the technologies and tools I use yo craft exceptional 
            digital experiences.
          </p>
        </div>
        <div>
          {toolboxItems.map(item => (
            <div key={item.title}>
              <TechIcon component={item.iconType} />
              <span>{item.title}</span>
              
            </div>
          ))}
        </div>
      </Card>
    </div>
  </div>;
};
