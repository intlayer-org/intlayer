import { Locales } from '@intlayer/config/client';

type Dir = 'ltr' | 'rtl' | 'auto';

export const getHTMLTextDir = (locale?: Locales): Dir => {
  switch (locale) {
    case Locales.ENGLISH:
    case Locales.FRENCH:
    case Locales.SPANISH:
    case Locales.PORTUGUESE:
    case Locales.GERMAN:
    case Locales.AFRIKAANS:
    case Locales.AZERI_LATIN:
    case Locales.BELARUSIAN:
    case Locales.BULGARIAN:
    case Locales.BOSNIAN:
    case Locales.CATALAN:
    case Locales.CZECH:
    case Locales.WELSH:
    case Locales.DANISH:
    case Locales.ESPERANTO:
    case Locales.ESTONIAN:
    case Locales.BASQUE:
    case Locales.FINNISH:
    case Locales.FAROESE:
    case Locales.GALICIAN:
    case Locales.GREEK:
    case Locales.CROATIAN:
    case Locales.HUNGARIAN:
    case Locales.ARMENIAN:
    case Locales.INDONESIAN:
    case Locales.ICELANDIC:
    case Locales.ITALIAN:
    case Locales.JAPANESE:
    case Locales.GEORGIAN:
    case Locales.KAZAKH:
    case Locales.KANNADA:
    case Locales.KOREAN:
    case Locales.KONKANI:
    case Locales.KYRGYZ:
    case Locales.LITHUANIAN:
    case Locales.LATVIAN:
    case Locales.MAORI:
    case Locales.FYRO_MACEDONIAN:
    case Locales.MONGOLIAN:
    case Locales.MARATHI:
    case Locales.MALAY:
    case Locales.MALTESE:
    case Locales.NORWEGIAN_BOKMAL:
    case Locales.DUTCH:
    case Locales.NORTHERN_SOTHO:
    case Locales.PUNJABI:
    case Locales.POLISH:
    case Locales.QUECHUA:
    case Locales.ROMANIAN:
    case Locales.RUSSIAN:
    case Locales.SANSKRIT:
    case Locales.SAMI_NORTHERN:
    case Locales.SLOVAK:
    case Locales.SLOVENIAN:
    case Locales.ALBANIAN:
    case Locales.SERBIAN_LATIN:
    case Locales.SWEDISH:
    case Locales.SWAHILI:
    case Locales.TAMIL:
    case Locales.TELUGU:
    case Locales.THAI:
    case Locales.TAGALOG:
    case Locales.TSWANA:
    case Locales.TURKISH:
    case Locales.UKRAINIAN:
    case Locales.UZBEK_LATIN:
    case Locales.VIETNAMESE:
    case Locales.XHOSA:
    case Locales.CHINESE_SIMPLIFIED:
    case Locales.CHINESE_TRADITIONAL:
    case Locales.ZULU:
    case Locales.AFRIKAANS_SOUTH_AFRICA:
    case Locales.AZERI_LATIN_AZERBAIJAN:
    case Locales.BELARUSIAN_BELARUS:
    case Locales.BULGARIAN_BULGARIA:
    case Locales.BOSNIAN_BOSNIA_AND_HERZEGOVINA:
    case Locales.CATALAN_SPAIN:
    case Locales.CZECH_CZECH_REPUBLIC:
    case Locales.WELSH_UNITED_KINGDOM:
    case Locales.DANISH_DENMARK:
    case Locales.GERMAN_AUSTRIA:
    case Locales.GERMAN_SWITZERLAND:
    case Locales.GERMAN_GERMANY:
    case Locales.GERMAN_LIECHTENSTEIN:
    case Locales.GERMAN_LUXEMBOURG:
    case Locales.GREEK_GREECE:
    case Locales.ENGLISH_AUSTRALIA:
    case Locales.ENGLISH_BELIZE:
    case Locales.ENGLISH_CANADA:
    case Locales.ENGLISH_CARIBBEAN:
    case Locales.ENGLISH_UNITED_KINGDOM:
    case Locales.ENGLISH_IRELAND:
    case Locales.ENGLISH_JAMAICA:
    case Locales.ENGLISH_NEW_ZEALAND:
    case Locales.ENGLISH_PHILIPPINES:
    case Locales.ENGLISH_TRINIDAD_AND_TOBAGO:
    case Locales.ENGLISH_UNITED_STATES:
    case Locales.ENGLISH_SOUTH_AFRICA:
    case Locales.ENGLISH_ZIMBABWE:
    case Locales.SPANISH_ARGENTINA:
    case Locales.SPANISH_BOLIVIA:
    case Locales.SPANISH_CHILE:
    case Locales.SPANISH_COLOMBIA:
    case Locales.SPANISH_COSTA_RICA:
    case Locales.SPANISH_DOMINICAN_REPUBLIC:
    case Locales.SPANISH_ECUADOR:
    case Locales.SPANISH_SPAIN:
    case Locales.SPANISH_GUATEMALA:
    case Locales.SPANISH_HONDURAS:
    case Locales.SPANISH_MEXICO:
    case Locales.SPANISH_NICARAGUA:
    case Locales.SPANISH_PANAMA:
    case Locales.SPANISH_PERU:
    case Locales.SPANISH_PUERTO_RICO:
    case Locales.SPANISH_PARAGUAY:
    case Locales.SPANISH_EL_SALVADOR:
    case Locales.SPANISH_URUGUAY:
    case Locales.SPANISH_VENEZUELA:
    case Locales.ESTONIAN_ESTONIA:
    case Locales.BASQUE_SPAIN:
    case Locales.FINNISH_FINLAND:
    case Locales.FAROESE_FAROE_ISLANDS:
    case Locales.FRENCH_BELGIUM:
    case Locales.FRENCH_CANADA:
    case Locales.FRENCH_SWITZERLAND:
    case Locales.FRENCH_FRANCE:
    case Locales.FRENCH_LUXEMBOURG:
    case Locales.FRENCH_PRINCIPALITY_OF_MONACO:
    case Locales.GALICIAN_SPAIN:
    case Locales.GUJARATI_INDIA:
    case Locales.HEBREW_ISRAEL:
    case Locales.HINDI_INDIA:
    case Locales.CROATIAN_BOSNIA_AND_HERZEGOVINA:
    case Locales.CROATIAN_CROATIA:
    case Locales.HUNGARIAN_HUNGARY:
    case Locales.ARMENIAN_ARMENIA:
    case Locales.INDONESIAN_INDONESIA:
    case Locales.ICELANDIC_ICELAND:
    case Locales.ITALIAN_SWITZERLAND:
    case Locales.ITALIAN_ITALY:
    case Locales.JAPANESE_JAPAN:
    case Locales.GEORGIAN_GEORGIA:
    case Locales.KAZAKH_KAZAKHSTAN:
    case Locales.KANNADA_INDIA:
    case Locales.KOREAN_KOREA:
    case Locales.KONKANI_INDIA:
    case Locales.KYRGYZ_KYRGYZSTAN:
    case Locales.LITHUANIAN_LITHUANIA:
    case Locales.LATVIAN_LATVIA:
    case Locales.MAORI_NEW_ZEALAND:
    case Locales.FYRO_MACEDONIAN_MACEDONIA:
    case Locales.MONGOLIAN_MONGOLIA:
    case Locales.MARATHI_INDIA:
    case Locales.MALAY_BRUNEI_DARUSSALAM:
    case Locales.MALAY_MALAYSIA:
    case Locales.MALTESE_MALTA:
    case Locales.NORWEGIAN_BOKMAL_NORWAY:
    case Locales.DUTCH_BELGIUM:
    case Locales.DUTCH_NETHERLANDS:
    case Locales.NORWEGIAN_NYNORSK_NORWAY:
    case Locales.NORTHERN_SOTHO_SOUTH_AFRICA:
    case Locales.PUNJABI_INDIA:
    case Locales.POLISH_POLAND:
    case Locales.PORTUGUESE_BRAZIL:
    case Locales.PORTUGUESE_PORTUGAL:
    case Locales.QUECHUA_BOLIVIA:
    case Locales.QUECHUA_ECUADOR:
    case Locales.QUECHUA_PERU:
    case Locales.ROMANIAN_ROMANIA:
    case Locales.RUSSIAN_RUSSIA:
    case Locales.SANSKRIT_INDIA:
    case Locales.SAMI_NORTHERN_FINLAND:
    case Locales.SAMI_NORTHERN_NORWAY:
    case Locales.SAMI_NORTHERN_SWEDEN:
    case Locales.SLOVAK_SLOVAKIA:
    case Locales.SLOVENIAN_SLOVENIA:
    case Locales.ALBANIAN_ALBANIA:
    case Locales.SERBIAN_LATIN_BOSNIA_AND_HERZEGOVINA:
    case Locales.SERBIAN_LATIN_SERBIA_AND_MONTENEGRO:
    case Locales.SWAHILI_KENYA:
    case Locales.TAMIL_INDIA:
    case Locales.TELUGU_INDIA:
    case Locales.THAI_THAILAND:
    case Locales.TAGALOG_PHILIPPINES:
    case Locales.TSWANA_SOUTH_AFRICA:
    case Locales.TURKISH_TURKEY:
    case Locales.TATAR_RUSSIA:
    case Locales.TSOGA:
    case Locales.UKRAINIAN_UKRAINE:
    case Locales.UZBEK_LATIN_UZBEKISTAN:
    case Locales.VIETNAMESE_VIET_NAM:
    case Locales.XHOSA_SOUTH_AFRICA:
    case Locales.CHINESE_HONG_KONG:
    case Locales.CHINESE_MACAU:
    case Locales.CHINESE_SINGAPORE:
    case Locales.ZULU_SOUTH_AFRICA:
      return 'ltr';

    case Locales.ARABIC:
    case Locales.FARSI:
    case Locales.URDU:
    case Locales.PASHTO:
    case Locales.SYRIAC:
    case Locales.ARABIC_UNITED_ARAB_EMIRATES:
    case Locales.ARABIC_BAHRAIN:
    case Locales.ARABIC_ALGERIA:
    case Locales.ARABIC_EGYPT:
    case Locales.ARABIC_IRAQ:
    case Locales.ARABIC_JORDAN:
    case Locales.ARABIC_KUWAIT:
    case Locales.ARABIC_LEBANON:
    case Locales.ARABIC_LIBYA:
    case Locales.ARABIC_MOROCCO:
    case Locales.ARABIC_OMAN:
    case Locales.ARABIC_QATAR:
    case Locales.ARABIC_SAUDI_ARABIA:
    case Locales.ARABIC_SYRIA:
    case Locales.ARABIC_TUNISIA:
    case Locales.ARABIC_YEMEN:
    case Locales.FARSI_IRAN:
    case Locales.URDU_ISLAMIC_REPUBLIC_OF_PAKISTAN:
    case Locales.PASHTO_AFGHANISTAN:
    case Locales.SYRIAC_SYRIA:
      return 'rtl';

    default:
      return 'auto';
  }
};