export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable Applications with Microservices",
    excerpt: "Exploring the benefits and challenges of microservices architecture in modern web development.",
    date: "2024-12-15",
    readTime: "5 min read",
    tags: ["Microservices", "Architecture", "Docker"],
    image: "/images/blog/microservices.jpg",
    published: true,
    content: `
      Microservices architecture has revolutionized how we build and deploy modern applications...
      
      [Content would go here]
    `
  },
  {
    id: 2,
    title: "My Journey with Cloud Computing and AWS",
    excerpt: "How I leveraged AWS services to build cost-effective and scalable solutions.",
    date: "2024-11-20",
    readTime: "7 min read",
    tags: ["AWS", "Cloud", "DevOps"],
    image: "/images/blog/aws-journey.jpg",
    published: true,
    content: `
      Cloud computing has been a game-changer in my development journey...
      
      [Content would go here]
    `
  },
  {
    id: 3,
    title: "Real-time Applications with WebSockets",
    excerpt: "Building responsive real-time features using WebSockets and Node.js.",
    date: "2024-10-10",
    readTime: "6 min read",
    tags: ["WebSockets", "Node.js", "Real-time"],
    image: "/images/blog/websockets.jpg",
    published: true,
    content: `
      Real-time communication is essential for modern web applications...
      
      [Content would go here]
    `
  }
];
