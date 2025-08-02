
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "movflix",
    title: "MovFlix",
    description: "A streaming platform for movies, series, and anime.",
    longDescription: "MovFlix is a cutting-edge streaming platform that offers a vast library of movies, series, and anime. With a user-friendly interface and advanced recommendation algorithms, users can easily discover and enjoy their favorite content. The platform supports multiple devices and provides features like offline viewing, personalized playlists, and social sharing.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Tailwind CSS", "React Router", "Cloud Storage"],
    features: [
      "Extensive library of movies, series, and anime",
      "User-friendly interface with advanced search capabilities",
      "Personalized recommendations based on user preferences",
      "Offline viewing for on-the-go access",
      "Social sharing features for seamless content discovery",
      "Multi-device support for a unified experience"
    ],
    image: "/images/projects/movflix/movflix.png",
    demoUrl: "https://movflixx.vercel.app",
    githubUrl: "https://github.com/manannarwal/movflix",
    category: "web"
  },
  {
    id: "musemate",
    title: "MuseMate",
    description: "Chatbot based ticketing website for museums",
    longDescription: "MuseMate is an innovative ticketing platform designed specifically for museums. It leverages advanced chatbot technology to provide visitors with a seamless and interactive experience. Users can easily inquire about exhibits, book tickets, and receive personalized recommendations through a conversational interface.",
    technologies: ["React.js", "Node.js", "Express.js", "Particle.js", "MongoDB", "GSAP", "Python", "PHP", "Ollama"],
    features: [
      "Interactive chatbot for ticket booking and inquiries",
      "Real-time exhibit information and recommendations",
    ],
    image: "/images/projects/musemate/musemate.png",
    demoUrl: "https://musemate-demo.vercel.app",
    githubUrl: "https://github.com/manannarwal/SIH24",
    category: "ai"
  },
  
];