const docs = {
  introduction: {
    en: require('./docs/introduction_en.md'),
    fr: require('./docs/introduction_fr.md'),
    es: require('./docs/introduction_es.md'),
  },
  how_works_intlayer: {
    en: require('./docs/how_works_intlayer_en.md'),
    fr: require('./docs/how_works_intlayer_fr.md'),
    es: require('./docs/how_works_intlayer_es.md'),
  },
  configuration: {
    en: require('./docs/configuration_en.md'),
    fr: require('./docs/configuration_fr.md'),
    es: require('./docs/configuration_es.md'),
  },
  interest_of_intlayer: {
    en: require('./docs/interest_of_intlayer_en.md'),
    fr: require('./docs/interest_of_intlayer_fr.md'),
    es: require('./docs/interest_of_intlayer_es.md'),
  },
  intlayer_cli: {
    en: require('./docs/intlayer_cli_en.md'),
    fr: require('./docs/intlayer_cli_fr.md'),
    es: require('./docs/intlayer_cli_es.md'),
  },
  intlayer_editor: {
    en: require('./docs/intlayer_editor_en.md'),
    fr: require('./docs/intlayer_editor_fr.md'),
    es: require('./docs/intlayer_editor_es.md'),
  },
  intlayer_with_create_react_app: {
    en: require('./docs/intlayer_with_create_react_app_en.md'),
    fr: require('./docs/intlayer_with_create_react_app_fr.md'),
    es: require('./docs/intlayer_with_create_react_app_es.md'),
  },
  intlayer_with_i18next: {
    en: require('./docs/intlayer_with_i18next_en.md'),
    fr: require('./docs/intlayer_with_i18next_fr.md'),
    es: require('./docs/intlayer_with_i18next_es.md'),
  },
  intlayer_with_nextjs: {
    en: require('./docs/intlayer_with_nextjs_en.md'),
    fr: require('./docs/intlayer_with_nextjs_fr.md'),
    es: require('./docs/intlayer_with_nextjs_es.md'),
  },
  intlayer_with_express: {
    en: require('./docs/intlayer_with_express_en.md'),
    fr: require('./docs/intlayer_with_express_fr.md'),
    es: require('./docs/intlayer_with_express_es.md'),
  },
  intlayer_with_vite_react: {
    en: require('./docs/intlayer_with_vite+react_en.md'),
    fr: require('./docs/intlayer_with_vite+react_fr.md'),
    es: require('./docs/intlayer_with_vite+react_es.md'),
  },
  content_declaration__translation: {
    en: require('./docs/content_declaration/translation_en.md'),
    fr: require('./docs/content_declaration/translation_fr.md'),
    es: require('./docs/content_declaration/translation_es.md'),
  },
  content_declaration__enumeration: {
    en: require('./docs/content_declaration/enumeration_en.md'),
    fr: require('./docs/content_declaration/enumeration_fr.md'),
    es: require('./docs/content_declaration/enumeration_es.md'),
  },
  content_declaration__function_fetching: {
    en: require('./docs/content_declaration/function_fetching_en.md'),
    fr: require('./docs/content_declaration/function_fetching_fr.md'),
    es: require('./docs/content_declaration/function_fetching_es.md'),
  },
  content_declaration__get_started: {
    en: require('./docs/content_declaration/get_started_en.md'),
    fr: require('./docs/content_declaration/get_started_fr.md'),
    es: require('./docs/content_declaration/get_started_es.md'),
  },
  content_declaration__content_extention_customization: {
    en: require('./docs/content_declaration/content_extention_customization_en.md'),
    fr: require('./docs/content_declaration/content_extention_customization_fr.md'),
    es: require('./docs/content_declaration/content_extention_customization_es.md'),
  },
  terms_of_service: {
    en: require('./docs/terms_of_service_en.md'),
    fr: require('./docs/terms_of_service_fr.md'),
    es: require('./docs/terms_of_service_es.md'),
  },
  privacy_notice: {
    en: require('./docs/privacy_notice_en.md'),
    fr: require('./docs/privacy_notice_fr.md'),
    es: require('./docs/privacy_notice_es.md'),
  },
};

const getDocs = (lang) =>
  Object.fromEntries(
    Object.entries(docs).map(([key, value]) => [key, value[lang]])
  );

const getDoc = (docName, lang) => {
  const docs = getDocs(lang);
  return docs[docName];
};

module.exports = { getDoc, getDocs };
