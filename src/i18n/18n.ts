import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/ru.json';

const resources = {
    'ru-RU': {
        translation: translationEn,
    },
};

i18n.use(initReactI18next).init({
    resources,
    compatibilityJSON: 'v3',
    lng: 'ru-RU',
    fallbackLng: 'ru-RU',
});

export default i18n;