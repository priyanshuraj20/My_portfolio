import {
  Github,
  Linkedin,
  Code,
  Terminal,
  Brain,
  Cpu,
  Database,
  Globe,
  Server,
  FileCode,
  Layers,
  Coffee,
  Binary,
  Box,
  Sparkles,
  Layout,
  Smartphone,
  Cloud,
  GitBranch,
  Settings,
  MessageSquare,
  Workflow,
  Bot,
  Image,
  Zap,
  BarChart,
  Container,
  HardDrive,
  Share2,
  Eye,
  Command,
  Hash,
  Instagram,
} from "lucide-react";

export const DATA = {
  name: "Priyanshu Raj",
  role: "B.Tech CSE Student | Aspiring Software Engineer",
  tagline: "AI | ML | Generative AI | NLP | DSA (Java)",
  about: {
    title: "About Me",
    description:
      "I am a B.Tech CSE student passionate about teaching machines to learn. My journey began with strong foundations in Java & DSA, evolving into a deep focus on Artificial Intelligence and Machine Learning. I love building intelligent systems, exploring Generative AI, and solving complex problems with code.",
    timeline: [
      {
        year: "2024",
        title: "Explored Different Tech Fields",
        description:
          "Gained exposure to multiple domains including Web Development and Machine Learning. Learned the basics of programming languages and foundational coding concepts. Explored various tools and frameworks to understand the tech landscape.",
      },

      {
        year: "2025",
        title: "Focused on Machine Learning and Data Structures and Algorithm",
        description:
          "Gained hands-on experience in Machine Learning concepts and algorithms. Strengthened problem-solving skills by practicing Data Structures and Algorithms in Java. Built foundational knowledge to tackle real-world programming and ML challenges.",
      },
      {
        year: "2026",
        title: "Generative AI & Research",
        description:
          "Focusing on Large Language Models (LLMs), NLP, and building next-generation AI applications.",
      },
    ],
  },
  skillCategories: [
    { name: "Machine Learning", icon: Brain, progress: 90 },
    { name: "Generative AI", icon: Sparkles, progress: 85 },
    { name: "Deep Learning", icon: Cpu, progress: 80 },
    { name: "NLP", icon: MessageSquare, progress: 75 },
    { name: "Computer Vision", icon: Eye, progress: 70 },
    { name: "Model Deployment", icon: Container, progress: 65 },
  ],
  techStack: [
    // Languages
    { name: "Python", icon: FileCode },
    { name: "Java", icon: Coffee },
    { name: "JavaScript", icon: Code },
    { name: "Typescript", icon: Code },
    { name: "SQL", icon: Database },

    // ML/DL Frameworks
    { name: "PyTorch", icon: Cpu },
    { name: "TensorFlow", icon: Box },
    { name: "Keras", icon: Layers },
    { name: "Scikit-learn", icon: Binary },

    // Data Processing & Viz
    { name: "NumPy", icon: Hash },
    { name: "Pandas", icon: BarChart },
    { name: "Matplotlib", icon: Image },

    // GenAI & NLP
    { name: "LangChain", icon: Workflow },
    { name: "Hugging Face", icon: Bot },
    { name: "OpenAI", icon: Zap },

    // Deployment & Tools
    { name: "Docker", icon: Container },
    { name: "Kubernetes", icon: Server },
    { name: "FastAPI", icon: Globe },
    { name: "Git", icon: GitBranch },
    { name: "VS Code", icon: Terminal },
    { name: "Jupyter", icon: Terminal },
  ],
  projects: [
    {
      title: "Vyana - The Jharkhand Journeys",
      description:
        "A smart platform promoting eco-tourism with AI-based personalized itinerary recommendations & cultural tourism in Jharkhand🌿✨.",
      tech: [
        "Typescript",
        "Next.js",
        "Prisma ORM",
        "Tailwind CSS",
        "PostgreSQL",
        "Javascript (ES6+)",
        "React.js",
      ],
      github: "https://github.com/priyanshuraj20/vyana--The-Jharkhand-Journeys",

      demo: "https://youtu.be/qCby-DDYGmI",
      liveDemo: "https://vyana.vercel.app", // optional

      status: "completed", // 👈 completed | pending
      category: "Hackathon(Team Project)",
      isTeamProject: true,
      image: "vyana.png",
    },

    // =======================
    // 🚧 UPCOMING PROJECTS
    // =======================
    {
      title: "GenAI Personal Assistant",
      description:
        "A Generative AI–powered assistant capable of contextual conversations, task automation, and intelligent responses using large language models.",
      tech: [
        "Generative AI",
        "LLMs",
        "Prompt Engineering",
        "LangChain",
        "Python",
      ],
      github: "",
      demo: "",
      liveDemo: "",
      status: "pending",
      category: "Generative AI",
      isTeamProject: false,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    },

    {
      title: "AI-Based Product Recommendation System",
      description:
        "A recommendation engine that suggests products using user behavior, similarity metrics, and machine learning algorithms.",
      tech: [
        "Machine Learning",
        "Collaborative Filtering",
        "Python",
        "Scikit-learn",
        "Data Analysis",
      ],
      github: "",
      demo: "",
      liveDemo: "",
      status: "pending",
      category: "Machine Learning",
      isTeamProject: false,
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070",
    },

    {
      title: "Medical Diagnosis Prediction System",
      description:
        "An ML-based medical diagnosis system that predicts potential diseases based on patient symptoms and historical healthcare data.",
      tech: [
        "Machine Learning",
        "Healthcare AI",
        "Python",
        "Pandas",
        "Scikit-learn",
      ],
      github: "",
      demo: "",
      liveDemo: "",
      status: "pending",
      category: "AI in Healthcare",
      isTeamProject: false,
      image:
        "https://images.unsplash.com/photo-1580281657527-47e7b47f42f2?q=80&w=2070",
    },

    {
      title: "Music & Video Recommendation System",
      description:
        "A personalized music and video recommendation system leveraging user preferences, content similarity, and ML models.",
      tech: [
        "Recommendation Systems",
        "Content-Based Filtering",
        "Machine Learning",
        "Python",
      ],
      github: "",
      demo: "",
      liveDemo: "",
      status: "pending",
      category: "Recommendation System",
      isTeamProject: false,
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070",
    },

    {
      title: "Financial Fraud Detection System",
      description:
        "A fraud detection system that identifies suspicious financial transactions using anomaly detection and supervised ML models.",
      tech: [
        "Machine Learning",
        "Anomaly Detection",
        "Financial Data Analysis",
        "Python",
        "Scikit-learn",
      ],
      github: "",
      demo: "",
      liveDemo: "",
      status: "pending",
      category: "AI in Finance",
      isTeamProject: false,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070",
    },
  ],
  certifications: [
    {
      title: "Basics of Operating Systems",
      issuer: "Cisco",
      year: "2025",
      description:
        "Gained a solid understanding of core operating system concepts including process management, memory management, file systems, scheduling algorithms, and basic system architecture.",
      file: "cisco.pdf",
      platform: "Cisco",
      platformLogo: "/Logo/Cisco.png",
      credential: {
        id: "CCNA-2022-ABC",
        url: "",
      },
    },
    {
      title: "Python by IBM ",
      issuer: "IBM",
      year: "2025",
      description:
        "Learned Python programming for data analysis and AI applications, including data structures, control flow, and basic use of libraries for data handling and computation.",
      file: "IBM_python.pdf",
      platform: "Ibm",
      platformLogo: "/Logo/Ibm.png",
      credential: {
        id: "139e6db661a5498c9a7fc44b44568cea",
        url: "https://courses.etrain.skillsnetwork.site/certificates/139e6db661a5498c9a7fc44b44568cea",
      },
    },
    {
      title: "Basic Git and Github ",
      issuer: "Udemy",
      year: "2025",
      description:
        "Learned to use Git for version control, including repository management, branching, merging, and commit workflows. Gained hands-on experience with GitHub for collaboration, pull requests, code reviews, and managing open-source and personal projects.",
      file: "git.png",
      platform: "Udemy",
      platformLogo: "/Logo/images.png",
      credential: {
        id: "139e6db661a5498c9a7fc44b44568cea",
        url: "",
      },
    },
    {
      title: "JavaScript",
      issuer: "Udemy",
      year: "2025",
      description:
        "Developed a strong foundation in JavaScript covering variables, functions, DOM manipulation, events, and asynchronous programming concepts.",
      file: "Udemy javascript.png",
      platform: "Ibm",
      platformLogo: "/Logo/images.png",
      credential: {
        id: "139e6db661a5498c9a7fc44b44568cea",
        url: "",
      },
    },
    {
      title: "Java & DSA (ongoing)",
      issuer: "Apna College",
      year: "2025",
      description: "Completed core Java and DSA coursework on Apna College.",
      file: "apna-java-dsa.png",
      platform: "Apna College",
      platformLogo: "/Logo/Apna college.png",
      credential: { id: "APNA-JAVA-2025", url: "" },
    },
    {
      title: "React & Next.js (ongoing)",
      issuer: "Udemy",
      year: "2025",
      description: "In-progress course on React and Next.js (project-based).",
      file: "udemy-react-next.png",
      platform: "Udemy",
      platformLogo: "/Logo/images.png",
      credential: { id: "UD-REACT-ONGOING", url: "" },
    },
    {
      title: "Html and Css ",
      issuer: "IT Specialist",
      year: "2025",
      description:
        "Learned to build responsive and accessible web pages using semantic HTML and modern CSS techniques including layouts, styling, and basic animations.",
      file: "It specialist Html and css.png",
      platform: "Ethnotech",
      platformLogo: "/Logo/It specilist.png",
      credential: {
        id: "139e6db661a5498c9a7fc44b44568cea",
        url: "",
      },
    },

    {
      title: "JavaScript",
      issuer: "IT Specialist",
      year: "2025",
      description:
        "Developed a strong foundation in JavaScript covering variables, functions, DOM manipulation, events, and asynchronous programming concepts.",
      file: "It specialist Javascript.png",
      platform: "Ethnotech",
      platformLogo: "/Logo/It specilist.png",
      credential: {
        id: "139e6db661a5498c9a7fc44b44568cea",
        url: "",
      },
    },

    {
      title: "Full Stack Web Development (ongoing)",
      issuer: "Apna College",
      year: "2025",
      description: "Full stack curriculum covering MERN stack projects.",
      file: "apna-fullstack.png",
      platform: "Apna College",
      platformLogo: "/Logo/Apna college.png",
    },
  ],
  codingProfiles: [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Priyanshuagr2005",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      color: "text-[#FFA116]", // LeetCode Orange
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/priyanshu2005",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codeforces-512.png",
      color: "text-[#1F8ACB]", // Codeforces Blue
    },
    {
      name: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/profile/priyanshuagrwl",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
      color: "text-[#2F8D46]", // GFG Green
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/steam_steel_61",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codechef.svg",
      color: "text-[#5B4638]", // Codechef Brown
    },
    {
      name: "Codolio",
      url: "https://codolio.com/profile/priyanshu2005",
      icon: "terminal", // Fallback to icon
      color: "text-[#8B5CF6]", // Purple for modern feel
    },
  ],
  contact: {
    email: "priyanshu.raj.dev@gmail.com",
    social: {
      github: "https://github.com/priyanshuraj20",
      linkedin: "https://www.linkedin.com/in/priyanshuraj2005/",
      instagram: "https://www.instagram.com/priyanshu_agrawal08/",
      twitter: "https://twitter.com",
    },
  },
};
