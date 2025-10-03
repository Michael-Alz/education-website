// Sample course data
interface Course {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  currentSchedule?: string;
  image: string;
  duration: string;
  level: string;
  price: string;
  features: string[];
  color: string;
}

const courses: Course[] = [
  {
    id: "math",
    title: "Mathematics Tutoring",
    description: "From basic arithmetic to advanced calculus, we provide personalized math instruction for all levels. Our experienced tutors work with students to build strong mathematical foundations and develop problem-solving skills that will serve them throughout their academic journey.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "Ongoing",
    level: "All Levels",
    price: "$80/hr",
    features: ["One-on-One", "Homework Help", "Exam Prep", "Concept Mastery"],
    color: '#388e3c'
  },
  {
    id: "english",
    title: "English & Literature",
    description: "Improve writing skills, reading comprehension, and literary analysis with expert guidance. Our English program focuses on developing critical thinking skills, enhancing vocabulary, and mastering the art of effective communication through writing and speaking.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "8 weeks",
    level: "All Levels",
    price: "$75/hr",
    features: ["Essay Writing", "Grammar", "Reading Skills", "Critical Analysis"],
    color: '#7b1fa2'
  },
  {
    id: "physics",
    title: "Physics Programs",
    description: "Comprehensive physics education covering mechanics, thermodynamics, electromagnetism, and modern physics. Our hands-on approach combines theoretical understanding with practical experiments to help students grasp complex physical concepts and their real-world applications.",
    image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "Flexible",
    level: "High School",
    price: "$90/hr",
    features: ["Lab Work", "AP Prep", "Concept Building", "Research Skills"],
    color: '#f57c00'
  },
  {
    id: "sat-prep",
    title: "SAT/ACT Preparation",
    description: "Comprehensive test preparation with personalized study plans and practice tests to maximize your scores. Our proven strategies and expert guidance help students achieve their target scores and gain admission to their dream colleges.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "12 weeks",
    level: "Intermediate",
    price: "$1,200",
    features: ["Practice Tests", "Score Analysis", "Time Management", "Strategy Sessions"],
    color: '#1976d2'
  },
  {
    id: "computer-science",
    title: "Computer Science",
    description: "Programming fundamentals, algorithms, and computer science concepts for beginners to advanced students. Learn popular programming languages, develop problem-solving skills, and build impressive projects for your portfolio.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    price: "$100/hr",
    features: ["Programming Languages", "Algorithm Design", "Project Work", "Portfolio Building"],
    color: '#0288d1'
  },
  {
    id: "college-prep",
    title: "College Application Prep",
    description: "Complete college application support including essay writing, interview prep, and application strategy. Our comprehensive program guides students through every step of the college admission process, from choosing the right schools to crafting compelling personal statements.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    duration: "6 months",
    level: "High School",
    price: "$2,000",
    features: ["Essay Review", "Interview Prep", "Application Strategy", "Scholarship Guidance"],
    color: '#d32f2f'
  }
];

export default courses;