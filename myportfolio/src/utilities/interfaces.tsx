// Project-related interfaces
export interface Responsibility {
    title: string;
    description: string;
  }
  
  export interface Project {
    title: string;
    images: string[];
    description: string;
    responsibilities: Responsibility[];
  }
  
  export interface ProjectData {
    [key: string]: Project;
  }
  