import {
  balancedDiet,
  buildMuscle,
  edward,
  email,
  facebook,
  harris,
  homeTraining,
  hTraining,
  instagram,
  john,
  josh,
  location,
  motivated,
  phone,
  sam,
  service1,
  service2,
  service3,
  service4,
  steven,
  tom,
  tool1,
  tool2,
  tool3,
  tool4,
  x,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    hasChildren: false,
  },
  {
    id: 2,
    title: "Programs",
    hasChildren: true,
  },
  {
    id: 3,
    title: "Coaching",
    hasChildren: true,
  },
  {
    id: 4,
    title: "Membership",
    hasChildren: false,
  },
  {
    id: 5,
    title: "About Us",
    hasChildren: false,
  },
];

export const stats = [
  {
    id: 1,
    figures: "+ 80",
    desc: "Coaches",
    positionClass: "top-1/3 -translate-x-1/3",
  },
  {
    id: 2,
    figures: "+ 1300",
    desc: "Positive Reviews",
    positionClass: "right-0 translate-y-24 xl:translate-y-1/2",
  },
  {
    id: 3,
    figures: "+ 1000",
    desc: "Workout Videos",
    positionClass: "bottom-0",
  },
  {
    id: 4,
    figures: "+ 1500",
    desc: "Trainers",
    positionClass: "bottom-0 right-0 -translate-y-1/3",
  },
];

export const ourWebsite = [
  {
    id: 1,
    numbers: "96%",
    title: "Client Satisfaction",
    description: "Our members love their results and experience",
  },
  {
    id: 2,
    numbers: "+5",
    title: "years of Experience",
    description: "Trust in our proven track record of transforming",
  },
  {
    id: 3,
    numbers: "+800",
    title: "Active Members",
    description: "Join our thriving fitness community",
  },
  {
    id: 4,
    numbers: "24/7",
    title: "Support Available",
    description: "Expert assistance whenever you need it",
  },
];

export const services = [service1, service2, service3, service4];

export const plans = [
  {
    id: 1,
    package: "Pro Plan",
    description:
      "Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!",
    features: [
      "Access to All Of Our Exercise Videos ",
      "Progress Tracking",
      "Supportive Online Community",
      "Advanced, Personalized Workout Plans",
      "Comprehensive Nutrition Coaching",
      "Access to Advanced Workout Programs",
      "Body Composition Analysis",
    ],
    price: "99",
  },
  {
    id: 2,
    package: "Custom Plan",
    description:
      "Experience a fully tailored fitness experience with our Custom Plan. Work one-on-one with a dedicated trainer to achieve your goals.",
    features: [
      "Access to All Of Our Exercise Videos ",
      "Progress Tracking",
      "Supportive Online Community",
      "Fully Customized Workout and Nutrition Plan",
      "Weekly Check-ins with Your Trainer",
      "Access to All Platform Features",
      "Exclusive Gear Discounts",
    ],
    price: "149",
  },
  {
    id: 3,
    package: "Begginer Plan",
    description:
      "Start your fitness journey with our Beginner Plan. Build a strong foundation with basic workouts and essential nutrition guidance.",
    features: [
      "Access to All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Personalized Workout Plans",
      "Basic Nutrition Guidance",
      "Access to Group Fitness Classes",
    ],
    price: "49",
  },
];

export const tools = [tool1, tool2, tool3, tool4, tool3];

export const testimonials = [
  {
    id: 1,
    name: "Steven Haward",
    about: "Our Trainer",
    review:
      "I’ve been using Fitmaker for the past three months, and I’m genuinely impressed. The website is easy to navigate, and everything is laid out clearly. I purchased the Premium Plan, and the personalized coaching has been a game-changer for me. My coach is incredibly supportive and always available to answer my questions.",
    image: steven,
  },
  {
    id: 2,
    name: "Josh Oliver",
    about: "Our Trainer",
    review:
      "Fitmaker has been a great help in my fitness journey. I opted for the group coaching plan, and it has been wonderful. The workout plans are detailed and adaptable. The trainers are encouraging and keep me motivated throughout my progress. I highly recommend Fitmaker to anyone who needs professional guidance.",
    image: josh,
  },
  {
    id: 3,
    name: "Edward Hawley",
    about: "Our Trainer",
    review:
      "Choosing Fitmaker was one of the best decisions for my health goals. The variety of workout plans keeps it exciting, and the nutritional tips are very practical. The trainers are approachable and skilled, always making sure I’m on track. I’ve noticed significant improvements, and I feel more confident now.",
    image: edward,
  },
];

export const trainers = [
  {
    id: 1,
    name: "Sam Cole",
    role: "Pesonal Trainer",
    image: sam,
  },
  {
    id: 2,
    name: "M. Harris",
    role: "Pesonal Trainer",
    image: harris,
  },
  {
    id: 3,
    name: "John Haley",
    role: "Pesonal Trainer",
    image: john,
  },
  {
    id: 4,
    name: "Tom Blake",
    role: "Pesonal Trainer",
    image: tom,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "5 Essential Exercises for Building Muscle",
    category: "Strength Training",
    date: "August 14",
    image: buildMuscle,
  },
  {
    id: 2,
    title: "The Ultimate Guide to a Balanced Diet",
    category: "Nutrition",
    date: "August 14",
    image: balancedDiet,
  },
  {
    id: 3,
    title: "the Benefits of HIIT Training",
    category: "Cardio",
    date: "August 14",
    image: hTraining,
  },
  {
    id: 4,
    title: "Home Workouts for Busy people",
    category: "Home Workouts",
    date: "August 14",
    image: homeTraining,
  },
  {
    id: 1,
    title: "How to Always Stay Motivated ",
    category: "Motivation",
    date: "August 14",
    image: motivated,
  },
];

export const communityBenefits = [];

export const faq = [
  {
    id: 1,
    question: "What is FitMaker and how can it help me reach my fitness goals?",
    answer:
      "FitMaker is an online fitness platform that provides personalized workout plans, expert coaching, and nutritional guidance. It helps you set clear fitness goals, stay motivated, and achieve results, whether you're aiming to lose weight, gain muscle, or improve overall health.",
  },
  {
    id: 2,
    question: "How do I get started with a workout plan on FitMaker?",
    answer:
      "Getting started is easy. Sign up on the FitMaker platform, complete a fitness assessment, and choose a plan based on your goals. Your personalized workout plan will be available immediately to help you start your journey.",
  },
  {
    id: 3,
    question: "What is included in the Custom Plan?",
    answer:
      "The Custom Plan includes a tailored workout program, personalized nutritional recommendations, progress tracking tools, and access to a personal fitness coach who provides guidance and support throughout your journey.",
  },
  {
    id: 4,
    question: "Can I change my plan after signing up?",
    answer:
      "Yes, you can modify your plan at any time to suit your changing needs. Simply update your preferences in the FitMaker dashboard, and your program will adjust accordingly.",
  },
  {
    id: 5,
    question: "What kind of support can I expect from my trainer?",
    answer:
      "Your trainer will provide personalized guidance, answer your questions, offer feedback on your progress, and help you stay motivated. They are available for consultations and to adjust your plan as needed.",
  },
];

export const socialIcons = [facebook, instagram, x, youtube];

export const companyLinks = [
  "About us",
  "Our Services",
  "Careers",
  "Blog",
  "Testimonial",
  "Contact Us",
];

export const resourcesLinks = [
  "Fitness tools",
  "Workout Videos",
  "Nutrition Guides",
  "FAQ",
  "Success Stories",
  "Membership",
];

export const programsLinks = [
  "Weight Loss",
  "Building muscles",
  "Home Workout",
  "Gym Plan",
  "Our Plans",
  "Fitness group",
];

export const contactInfo = [
  {
    icon: location,
    info: "Usa - Washngton DC",
  },
  {
    icon: phone,
    info: "1234-56789",
  },
  {
    icon: email,
    info: "Fitmakerrr@Gmail.com",
  },
];
