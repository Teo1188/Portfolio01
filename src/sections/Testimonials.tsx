import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

export const TestimonialsSection = () => {
  // 1. Array movido adentro del componente para forzar actualizaciones dinámicas
  const testimonials = [
    {
      name: "Cristian Franco",
      position: "Graphic Designer @ cr_franksaw",
      text: "Teo was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
      avatar: memojiAvatar1,
    },
    {
      name: "Isabel Villegas",
      position: "Music Producer and Flautist @ isavilart",
      text: "I have known Teo for 16 years and can vouch for his relentless passion. He recently brought my web portfolio to life, meeting every complex requirement with absolute precision. He doesn’t just build websites; he perfectly captures the essence of who you are.",
      avatar: memojiAvatar2,
    },
    {
      name: "Daniel Londoño",
      position: "Senior Designer @ InnovateCo",
      text: "Teo's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
      avatar: memojiAvatar3,
    },
    {
      name: "Daniela Mira",
      position: "Product Manager @ GlobalTech",
      text: "Teo is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
      avatar: memojiAvatar4,
    },
    {
      name: "Michael Brown",
      position: "Director of IT @ ImpulsoEnergy",
      text: "Teo's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
      avatar: memojiAvatar5,
    },
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Clients Say"
          description="Don't just take my word for it. Here's what some of my clients have to say about their experience working with me."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] lg:[animation-duration:80s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  // 2. Key única combinando el índice del bucle de duplicación y el nombre
                  <Card
                    key={`${index}-${testimonial.name}`}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
