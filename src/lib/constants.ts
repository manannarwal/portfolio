// App constants

export const SITE_CONFIG = {
  name: "Nikhila Koneru",
  description: "Master's in Computer Science student at Northeastern University | Full-stack Developer | Cloud Computing Enthusiast",
  url: "https://nikhilakoneru.com",
  ogImage: "/images/nikhila/og-image.png",
  links: {
    email: "nikhila.koneru1@gmail.com",
    github: "https://github.com/Nikhilakoneru",
    linkedin: "https://linkedin.com/in/nikhila-koneru",
    phone: "+1 2073320512"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
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