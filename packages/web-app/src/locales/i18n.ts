import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { sharedTranslations } from "@my-monorepo/shared";
import enApp from "./en/app.json";
import koApp from "./ko/app.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      app: enApp,
      ...sharedTranslations.en,
    },
    ko: {
      app: koApp,
      ...sharedTranslations.ko,
    },
  },
  lng: "ko",
  fallbackLng: "en",
  defaultNS: "app",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
