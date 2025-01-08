import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./ProjectCard";
import { Section, SectionTitle } from "./Section";

export const Projects = () => {
  const ProjectList = PROJECTS.map((project) => (
    <CarouselItem
      className="h-[100px] md:h-[250px] md:basis-1/3 basis-1/2 pl-2"
      key={project.title}
    >
      <ProjectCard
        title={project.title}
        description={project.description}
        image={project.image}
        link={project.link}
      />
    </CarouselItem>
  ));

  return (
    <Section>
      <SectionTitle>Recent projects</SectionTitle>
      <Carousel className="w-full">
        <CarouselContent>{ProjectList}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

const PROJECTS = [
  {
    title: "Password Generator",
    description:
      "this website will generate a ramdom password. Depending on the chosen criteria we'll have a weak, medium, strong and very strong ",
    image:
      "https://github.com/johnOfGod33/password-generator/raw/main/assets/passwordGenerator.PNG",
    link: "https://johnofgod33.github.io/password-generator/",
  },
  {
    title: "Personal Blog API",
    description:
      "A RESTful API that would power a personal blog.The client interface can be found",
    image:
      "https://github.com/johnOfGod33/Personal-Blog-API/raw/main/assets/Personal%20blog%20api.png",
    link: "https://personal-blog-api-7cge.onrender.com/api-docs/",
  },
  {
    title: "Admin Blog Panel",
    description:
      "A web application that allows users to create and manage blog posts ",
    image:
      "https://github.com/johnOfGod33/admin-blog-panel/raw/main/src/assets/img/articles_homepage.png",
    link: "https://github.com/johnOfGod33/admin-blog-panel",
  },
  {
    title: "Caching Proxy CLI",
    description:
      "A command-line interface that runs a server to intercept requests and save responses in cache ",
    image:
      "https://github.com/johnOfGod33/Caching-Proxy-CLI/raw/main/asset/cli%20example.png",
    link: "https://github.com/johnOfGod33/Caching-Proxy-CLI",
  },
];
