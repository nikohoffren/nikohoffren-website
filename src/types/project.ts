export interface Project {
  title: string;
  titleFi?: string;
  type: string;
  description: string;
  descriptionFi: string;
  image: string;
  links: {
    type: "external" | "github" | "playstore" | "npm" | "chrome";
    url: string;
    text: string;
    textFi: string;
  }[];
  technologies: string[];
}
