import {
  VerticalTimeline, VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import type { RichTextContent } from '@graphcms/rich-text-types';

import { motion } from "framer-motion";
import { gql, request } from 'graphql-request';
import { Barbell } from "phosphor-react";
import { useEffect, useState } from "react";
import { SubHeader } from "../components/SubHeader";
import { RichText } from "../components/rich-text";

type Introduction = {
  aboutMe: {
    text: string;
  }[];

  sectionsJob: {
    functionJob: {
      text: string;
      raw: RichTextContent;
    };
    whereLocation: {
      text: string;
      raw: RichTextContent;
    };
    dateJob: {
      text: string;
      raw: RichTextContent;
    };
  }[];
};

type IntroductionProps = {
  introduction: Introduction;
};

const About = () => {
  const [introduction, setIntroduction] = useState<IntroductionProps | null>(null);

  useEffect(() => {
    const fetchIntroduction = async () => {
      const query = gql`
      query MyQuery {
        introduction(where: {slug: "sobre"}) {
          aboutMe {
            text
            raw
          }
          sectionsJob {
            ... on SectionJob {
              id
              dateJob {
                text
                raw
              }
              functionJob {
                text
                raw
              }
              whereLocation {
                text
                raw
              }
            }
          }
        }
      }
      
      `;

      try {
        const { introduction } = await request<{ introduction: Introduction }>(
          'https://api-eu-west-2.hygraph.com/v2/clhysrfcp27uz01ta7k1p7ves/master',
          query
        );

        setIntroduction({ introduction });
      } catch (error) {
        console.error('Error fetching introduction:', error);
      }
    };

    fetchIntroduction();
  }, []);

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
        <div className="bg-black.5 rounded-md  py-8 mt-8 w-11/12  h-full">
          <div className="space-y-4">
            {introduction?.introduction.aboutMe.map((intro, i) => {
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-white text- md:text-lg font-bold text-center px-8 md:px-24"
                >
                  {intro.text}
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
          {introduction?.introduction.sectionsJob.map((item, i) => {
            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work transition-all duration-500"
                contentStyle={{ background: "#eab308", color: "#050101" }}
                contentArrowStyle={{ borderRight: "7px solid  #eab308" }}
                icon={<Barbell />}
                iconClassName="bg-yellow-500 w-2 h-2 rounded-full"
              >
                <h1 className="text-xl font-bold text-gray-200">
                  <RichText content={item.functionJob.raw} />
                </h1>

                <RichText content={item.whereLocation.raw} />

                <RichText content={item.functionJob.raw} />

                <RichText content={item.dateJob.raw} />
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
