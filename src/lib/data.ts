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
    title: "About Our Agency",
    description: "We are a team of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences. With over a decade of experience, we've helped hundreds of businesses transform their online presence and achieve their goals.",
    mission: "Our mission is to empower businesses with innovative digital solutions that drive growth, engage audiences, and create lasting impact in the digital landscape.",
    statistics: [
      { value: 50, label: "Projects Completed", suffix: "+" },
      { value: 50, label: "Happy Clients", suffix: "+" },
      { value: 1, label: "Expert Team" },
    ],
  },

  services: {
    title: "Our Services",
    subtitle: "We offer a comprehensive range of digital services to help your business thrive in the modern world.",
    services: [
      {
        id: "1",
        icon: "code",
        title: "Website Building",
        description: "Build fast, responsive, and scalable websites using the latest technologies and best practices.",
      },
      {
        id: "2",
        icon: "palette",
        title: "Portfolio Development",
        description: "Create stunning portfolio websites that showcase your work and attract potential clients.",
      },
      {
        id: "3",
        icon: "smartphone",
        title: "App Development",
        description: "Design and develop intuitive mobile and web applications that provide seamless user experiences.",
      },
      {
        id: "4",
        icon: "cpu",
        title: "AI Automation/Integration",
        description: "Integrate cutting-edge AI solutions to automate workflows and enhance business efficiency.",
      },
      {
        id: "5",
        icon: "settings",
        title: "In-house System Development",
        description: "Custom internal systems tailored to your business needs for improved operations and productivity.",
      },
      {
        id: "6",
        icon: "message-circle",
        title: "AI Bot Services",
        description: "Automated call and messaging bots powered by AI to enhance customer engagement and support.",
      },
    ],
  },

  portfolio: {
    title: "Our Work",
    subtitle: "Take a look at some of our recent projects and see how we've helped businesses achieve their goals.",
    items: [
      {
        id: "1",
        title: "E-Commerce Platform",
        category: "Web Development",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      },
      {
        id: "2",
        title: "Brand Identity",
        category: "Branding",
        imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      },
      {
        id: "3",
        title: "Mobile Banking App",
        category: "Mobile App",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      },
      {
        id: "4",
        title: "Corporate Website",
        category: "Web Development",
        imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
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
