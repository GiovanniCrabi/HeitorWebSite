export type Introduction = {
  aboutMe: string
}

export type SectionJob = {
  functionJob: string;
  whereLocation: string;
  positionJob: string;
  dateJob: string;
};

export type IntroductionData = {
  introductions: Introduction[];
  sectionJob: SectionJob[];
}