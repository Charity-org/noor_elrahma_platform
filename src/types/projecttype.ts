interface ProjectData {
  projectId: number;
  image: string;
  projectName: string;
  country: string;
  projectDescription: string;
  progress: number;
  goal: number;
  raised: number;
  donations: number;
  projectImages: {
    id: number;
    projectId: number;
    image: string;
    isMain: string;
  }[];
}

export type { ProjectData };
