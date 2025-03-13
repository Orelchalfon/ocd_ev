import { createContext, ReactNode, useEffect, useState } from "react";
import { en, he } from "../config/translation";

// Define the type for our translations object.
// const translations: Translations = {
//   // Navigation
//   "nav.home": {
//     en: "Home",
//     he: "בית",
//   },
//   "nav.services": {
//     en: "Services",
//     he: "שירותים",
//   },
//   "nav.portfolio": {
//     en: "Portfolio",
//     he: "תיק עבודות",
//   },
//   "nav.about": {
//     en: "About",
//     he: "אודות",
//   },
//   "nav.contact": {
//     en: "Contact",
//     he: "צור קשר",
//   },

//   // Hero Section
//   "hero.name": {
//     en: "Orel Chalfon",
//     he: "אוראל חלפון",
//   },
//   "hero.title": {
//     en: "Build Your Awesome Platform",
//     he: "בנה את הפלטפורמה המדהימה שלך",
//   },
//   "hero.description": {
//     en: " Crafting futuristic digital experiences with cutting-edge technology and innovative design",
//     he: "יצירת חוויות דיגיטליות עתידניות עם טכנולוגיה מתקדמת ועיצוב חדשני",
//   },
//   "hero.cta": {
//     en: "Our Services",
//     he: "השירותים שלנו",
//   },

//   // Services Section
//   "services.title": {
//     en: "The Service We Provide For You",
//     he: "השירותים שאנחנו מספקים עבורך",
//   },
//   "services.additional.title": {
//     en: "Additional Services",
//     he: "שירותים נוספים",
//   },
//   "services.consulting": {
//     en: "Consulting",
//     he: "ייעוץ",
//   },
//   "services.consulting.description": {
//     en: "Expert advice to help you make the right decisions for your digital projects.",
//     he: "ייעוץ מקצועי שיעזור לך לקבל את ההחלטות הנכונות עבור הפרויקטים הדיגיטליים שלך.",
//   },
//   "services.consulting.feature1": {
//     en: "Technical Architecture",
//     he: "ארכיטקטורה טכנית",
//   },
//   "services.consulting.feature2": {
//     en: "Digital Strategy",
//     he: "אסטרטגיה דיגיטלית",
//   },
//   "services.consulting.feature3": {
//     en: "Technology Selection",
//     he: "בחירת טכנולוגיה",
//   },
//   "services.maintenance": {
//     en: "Maintenance",
//     he: "תחזוקה",
//   },
//   "services.maintenance.description": {
//     en: "Ongoing support and maintenance to keep your digital assets running smoothly.",
//     he: "תמיכה ותחזוקה שוטפת לשמירה על הנכסים הדיגיטליים שלך.",
//   },
//   "services.maintenance.feature1": {
//     en: "24/7 Support",
//     he: "תמיכה 24/7",
//   },
//   "services.maintenance.feature2": {
//     en: "Regular Updates",
//     he: "עדכונים שוטפים",
//   },
//   "services.maintenance.feature3": {
//     en: "Performance Monitoring",
//     he: "ניטור ביצועים",
//   },

//   // Portfolio Section
//   "portfolio.title": {
//     en: "Our Awesome Portfolio",
//     he: "תיק העבודות המדהים שלנו",
//   },
//   "portfolio.filter.all": {
//     en: "All",
//     he: "הכל",
//   },
//   "portfolio.filter.web": {
//     en: "Web",
//     he: "אינטרנט",
//   },
//   "portfolio.filter.mobile": {
//     en: "Mobile",
//     he: "מובייל",
//   },
//   "portfolio.filter.design": {
//     en: "Design",
//     he: "עיצוב",
//   },
//   "portfolio.featured.title": {
//     en: "Featured Projects",
//     he: "פרויקטים מובילים",
//   },
//   "portfolio.viewProject": {
//     en: "View Project",
//     he: "צפה בפרויקט",
//   },
//   "portfolio.featured.project1.title": {
//     en: "E-commerce Platform",
//     he: "פלטפורמת מסחר אלקטרוני",
//   },
//   "portfolio.featured.project1.description": {
//     en: "A modern e-commerce solution with advanced features and seamless user experience.",
//     he: "פתרון מסחר אלקטרוני מודרני עם תכונות מתקדמות וחוויית משתמש חלקה.",
//   },
//   "portfolio.featured.project2.title": {
//     en: "Mobile Banking App",
//     he: "אפליקציית בנקאות",
//   },
//   "portfolio.featured.project2.description": {
//     en: "Secure and user-friendly mobile banking application with innovative features.",
//     he: "אפליקציית בנקאות מאובטחת וידידותית למשתמש עם תכונות חדשניות.",
//   }, 

//   // About Section
//   "about.title": {
//     en: "About OCD{'ev'} Studio",
//     he: "אודות סטודיו OCD{'ev'}",
//   },
//   "about.description": {
//     en: "We are a team of passionate digital creators who love to build amazing digital experiences.",
//     he: "אנחנו צוות של יוצרים דיגיטליים נלהבים שאוהבים לבנות חוויות דיגיטליות מדהימות.",
//   },
//   "about.stats.years": {
//     en: "Years of Experience",
//     he: "שנות ניסיון",
//   },
//   "about.stats.clients": {
//     en: "Happy Clients",
//     he: "לקוחות מרוצים",
//   },
//   "about.stats.projects": {
//     en: "Projects Completed",
//     he: "פרויקטים הושלמו",
//   },
//   "about.stats.awards": {
//     en: "Awards Won",
//     he: "פרסים",
//   },
//   "about.mission.title": {
//     en: "Our Mission",
//     he: "המשימה שלנו",
//   },
//   "about.mission.description": {
//     en: "To deliver exceptional digital solutions that empower businesses and enhance user experiences.",
//     he: "לספק פתרונות דיגיטליים יוצאי דופן המעצימים עסקים ומשפרים את חוויית המשתמש.",
//   },
//   "about.vision.title": {
//     en: "Our Vision",
//     he: "החזון שלנו",
//   },
//   "about.vision.description": {
//     en: "To be the leading digital studio that sets new standards in digital innovation and creativity.",
//     he: "להיות הסטודיו הדיגיטלי המוביל שקובע סטנדרטים חדשים בחדשנות ויצירתיות דיגיטלית.",
//   },
//   "about.team.title": {
//     en: "Meet Our Team",
//     he: "הכירו את הצוות שלנו",
//   },
//   "about.team.member1.name": {
//     en: "John Doe",
//     he: "ג׳ון דו",
//   },
//   "about.team.member1.role": {
//     en: "Creative Director",
//     he: "מנהל קריאייטיב",
//   },
//   "about.team.member2.name": {
//     en: "Jane Smith",
//     he: "ג׳יין סמית",
//   },
//   "about.team.member2.role": {
//     en: "Lead Developer",
//     he: "מפתחת ראשית",
//   },
//   "about.team.member3.name": {
//     en: "Mike Johnson",
//     he: "מייק ג׳ונסון",
//   },
//   "about.team.member3.role": {
//     en: "UI/UX Designer",
//     he: "מעצב UI/UX",
//   },

//   // Contact Section
//   "contact.title": {
//     en: "Get in Touch",
//     he: "צור קשר",
//   },
//   "contact.phone.title": {
//     en: "Phone",
//     he: "טלפון",
//   },
//   "contact.email.title": {
//     en: "Email",
//     he: "דוא״ל",
//   },
//   "contact.address.title": {
//     en: "Address",
//     he: "כתובת",
//   },
//   "contact.form.name": {
//     en: "Your Name",
//     he: "השם שלך",
//   },
//   "contact.form.email": {
//     en: "Your Email",
//     he: "הדוא״ל שלך",
//   },
//   "contact.form.message": {
//     en: "Your Message",
//     he: "ההודעה שלך",
//   },
//   "contact.form.submit": {
//     en: "Send Message",
//     he: "שלח הודעה",
//   },
// };
// Define type for translations
type NestedTranslation = {
  [key: string]: string | NestedTranslation;
};

type TranslationsType = {
  [key: string]: NestedTranslation;
};

// Define the shape of our LanguageContext.

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Create the LanguageContext.
const defaultLanguage= "en";

 const LanguageContext = createContext<LanguageContextType | undefined>({
     language: defaultLanguage,
     t: (key: string) => key,
     toggleLanguage: () => {},
} );
// Define the LanguageProvider component.

 const LanguageContextProvider = ({ children }: { children: ReactNode }) => {

  const translations: TranslationsType= { en, he }


   const [language, setLanguage] = useState<string>(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage ||defaultLanguage;
  });
   

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === "en" ? "he" : "en");
  };
  // Function to translate keys
   const t = (key: string): string => (
     key.split('.').reduce((obj: any, key) => obj?.[key], translations[language])|| key
   );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext.
export { LanguageContextProvider as default, LanguageContext };

