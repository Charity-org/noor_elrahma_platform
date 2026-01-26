interface HomePageType {
  hero: HeroDataType[];
  how_it_works: HowItWorksDatayType;
  recent_projects: ProjectCardData[];
  completed_projects: ProjectCardData[];
  some_real_projects: SomeRealProjectsData[];
  who_we_are: WhoWeAreDataType[];
}

interface WhoWeAreDataType {
  presonalPhoto: string;
  quote: string;
  name: string;
  position: string;
  wisdome: string;
}

interface ProjectCardData {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  country: string;
  startDate: string;
  goal: number;
  raised: number;
  donations: number;
  isFavorite: boolean;
  projectImages: {
    id: number;
    projectId: number;
    image: string;
    isMain: string;
  }[];
}

interface SomeRealProjectsData {
  title: string;
  src: string;
}

interface HeroDataType {
  projectTitle: string;
  projectDescription: string;
  donation: number;
  donators: number;
  projectId: number;
  image: string;
}

interface HowItWorksDatayType {
  title: string;
  discription: string;
  image: string;
}

interface NewsType {
  author: string;
  content: string;
  description: string;
  image: string;
  title: string;
  new_link: string;
}

interface AboutUsItem {
  title: string;
  description: string;
  image: string;
  content: string;
  video: string;
}

interface SomeRealProjectsData {
  title: string;
  src: string;
}

interface AboutPageType {
  about_us: AboutUsItem[];
  some_real_projects: SomeRealProjectsData[];
}

export type {
  HomePageType,
  HeroDataType,
  HowItWorksDatayType,
  ProjectCardData,
  SomeRealProjectsData,
  WhoWeAreDataType,
  NewsType,
  AboutUsItem,
  AboutPageType,
};
