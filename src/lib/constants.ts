// App constants

export const SITE_CONFIG = {
  name: "Manan Narwal",
  description: "Master's in lauda student at Northeastern University | Full-stack Developer | Cloud Computing Enthusiast",
  url: "https://manannarwal.vercel.app",
  ogImage: "/images/nikhila/og-image.png",
  links: {
    email: "manannarwal12345@gmail.com",
    github: "https://github.com/manannarwal",
    linkedin: "https://linkedin.com/in/manannarwal",
    phone: "+91 8506055966"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};