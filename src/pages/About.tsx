import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Barbell } from "phosphor-react";
import { useEffect, useState } from "react";
import { aboutHim, experienceData } from "../components/Contents";
import { SubHeader } from "../components/SubHeader";
import { useScroll, useTransform, motion } from "framer-motion";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScrollParagraph = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollParagraph);

    return () => {
      window.removeEventListener("scroll", handleScrollParagraph);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const yOffset = useTransform(scrollYProgress, [0, 1], [20, 0]);

  const [lineColor, setLineColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(".vertical-timeline");
      const timelineTop = timeline?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      if (timelineTop != null && timelineTop < windowHeight * 0.1) {
        setLineColor("yellow");
      } else {
        setLineColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex-col">
      <SubHeader title="Sobre" />
      <div className="flex justify-center items-center">
        <div className="bg-black.5 rounded-md  py-8 mt-8 w-11/12 md:w-3/4 h-full">
          <div className="space-y-4">
            {aboutHim.map((about, i) => {
              return (
                <motion.p
                  key={i}
                  initial="hidden"
                  animate={scrollY > 0 ? "visible" : "hidden"} // Animação é ativada quando houver um scroll
                  variants={paragraphVariants}
                  style={{}}
                  className="text-white text- md:text-lg font-bold text-center px-8 md:px-48"
                >
                  {about.paragraph}
                </motion.p>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" w-full h-full mt-3">
        <VerticalTimeline
          lineColor={lineColor}
          className="transition-all duration-1000"
        >
          {experienceData.map((experience, i) => {
            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work transition-all duration-500"
                contentStyle={{ background: "#eab308", color: "#050101" }}
                contentArrowStyle={{ borderRight: "7px solid  #eab308" }}
                date={experience.date}
                dateClassName="text-black-100 md:text-white"
                icon={<Barbell />}
                iconClassName="bg-yellow-500 w-2 h-2 rounded-full"
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.whatWas}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.where}
                </h4>
                <p>{experience.position}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
