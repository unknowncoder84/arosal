export const siteData = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "AROSAL Software Solutions",
    subheadline: "Transforming ideas into powerful digital solutions. We specialize in AI automation, web development, and custom software that drives your business forward.",
    ctaText: "Start Your Project",
    ctaHref: "#contact",
  },

  about: {
    title: "Our Impact",
    description: "We are a team of passionate developers and innovators dedicated to creating exceptional digital solutions. With cutting-edge technology and creative expertise, we transform ideas into reality.",
    mission: "Our mission is to empower businesses with next-generation software solutions that drive growth, innovation, and success in the digital age.",
    statistics: [
      { value: 60, label: "Projects Delivered", suffix: "+" },
      { value: 100, label: "Happy Clients", suffix: "+" },
    ],
  },

  services: {
    title: "Our Services",
    subtitle: "Cutting-edge solutions powered by innovation and expertise.",
    services: [
      {
        id: "1",
        icon: "bot",
        title: "AI Bot Services",
        description: "Intelligent chatbots and automated systems that enhance customer engagement and streamline operations with advanced AI technology.",
        link: "/services/ai-bot-services",
      },
      {
        id: "2",
        icon: "code",
        title: "In-house System Dev",
        description: "Custom internal systems and enterprise solutions tailored to your unique business requirements for maximum efficiency.",
        link: "/services/in-house-system-dev",
      },
      {
        id: "3",
        icon: "globe",
        title: "Web Solutions",
        description: "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
        link: "/services/web-solutions",
      },
    ],
  },

  portfolio: {
    title: "Our Work",
    subtitle: "Innovative projects that showcase our expertise and commitment to excellence.",
    items: [
      {
        id: "1",
        title: "Selectz.in",
        category: "Job Portal",
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
        size: "large" as const,
      },
      {
        id: "2",
        title: "Katneswarkar",
        category: "Law Management",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
        size: "medium" as const,
      },
      {
        id: "3",
        title: "Pixcelcut.studio",
        category: "Creative Studio",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        size: "medium" as const,
      },
    ],
  },

  team: {
    title: "Meet Our Team",
    subtitle: "The talented people behind our success. Each member brings unique skills and passion to every project.",
    members: [
      {
        id: "1",
        name: "Sarah Johnson",
        role: "Creative Director",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        socialLinks: [
          { platform: "twitter" as const, url: "https://twitter.com" },
          { platform: "linkedin" as const, url: "https://linkedin.com" },
          { platform: "dribbble" as const, url: "https://dribbble.com" },
        ],
      },
      {
        id: "2",
        name: "Michael Chen",
        role: "Lead Developer",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        socialLinks: [
          { platform: "twitter" as const, url: "https://twitter.com" },
          { platform: "linkedin" as const, url: "https://linkedin.com" },
          { platform: "github" as const, url: "https://github.com" },
        ],
      },
      {
        id: "3",
        name: "Emily Davis",
        role: "UX Designer",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        socialLinks: [
          { platform: "twitter" as const, url: "https://twitter.com" },
          { platform: "linkedin" as const, url: "https://linkedin.com" },
          { platform: "dribbble" as const, url: "https://dribbble.com" },
        ],
      },
      {
        id: "4",
        name: "James Wilson",
        role: "Marketing Lead",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        socialLinks: [
          { platform: "twitter" as const, url: "https://twitter.com" },
          { platform: "linkedin" as const, url: "https://linkedin.com" },
        ],
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Ready to start your next project? Contact us today and let's create something amazing together.",
    contactInfo: {
      email: "arosal1925@gmail.com",
      phone: "+91 8693852452 / +91 8591545882",
      address: "123 Creative Street, Design City, DC 10001",
    },
  },

  footer: {
    companyName: "AROSAL Software Solutions",
    socialLinks: [
      { platform: "twitter" as const, url: "https://twitter.com" },
      { platform: "linkedin" as const, url: "https://linkedin.com" },
      { platform: "github" as const, url: "https://github.com" },
      { platform: "dribbble" as const, url: "https://dribbble.com" },
    ],
    contactInfo: {
      email: "arosal1925@gmail.com",
      phone: "+91 8693852452 / +91 8591545882",
      address: "123 Creative Street, Design City, DC 10001",
    },
  },
};
