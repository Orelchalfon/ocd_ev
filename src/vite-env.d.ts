/// <reference types="vite/client" />
type Language = "en" | "he";
type Theme = "light" | "dark";

type LanguageContextType = {

  language: Language;
  setLanguage: (lang: Language) => void;

}
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

interface Translations {
  [key: string]: {
    en: string;
    he: string;
  };
}