import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import Languages Files
import enJson from "./en.json";
import arJson from "./ar.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      ...enJson,
    },
    ar: {
      ...arJson,
    },
  },
});
