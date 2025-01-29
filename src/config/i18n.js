import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Menu from "../components/Menu";

// Define your translations here
const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Developments: "Developments",
      Contact: "Contact",
      Menu: "Menu",
      Location: "Russia, Moscow, Moscow city, Capital City",
      Address: "54 Floor, Office 541",
      OUR_VISION: "OUR VISION",
      VISION_TEXT: "To redefine the perception of luxury as an overall elevated customer experience within all the Group’s services; pioneering in diverse business concepts through well-designed, sustainable and innovative concepts, with strategic global partnerships and ventures in Qatar and the region.",
      OUR_PASSION: "OUR PASSION",
      PASSION_TEXT: "for luxury, attention to detail and precision is a culture we witness every day and is translated in every aspect of our business, as the fundamental essence of our strive towards success – because building success stories is our business.",
      OUR_MISSION: "OUR MISSION",
      MISSION_TEXT: "Our commitment is to deliver luxury, value and quality excellence, by continuously striving to transform our passion into reality within each of our developments; through creative innovation, industry knowledge and expertise.",
      PROPERTY_DEVELOPMENT: "PROPERTY DEVELOPMENT",
      HOSPITALITY_SERVICES: "HOSPITALITY SERVICES",
      AVIATION_MAINTENANCE: "AVIATION MAINTENANCE",
      TRADING_AND_CONTRACTING: "TRADING AND CONTRACTING",
      A_LEGACY: "A LEGACY .....",
      IN_THE_MAKING: "IN THE MAKING",
      BUILDING_SUCCESS: "BUILDING SUCCESS .....",
      DAILY_BUSINESS: "IS OUR DAILY BUSINESS",
      OUR_WORK_IS: "OUR WORK IS .....",
      DRIVE_AND_PASSION: "OUR DRIVE & PASSION",
      WE_ARE: "WE ARE ....",
      EVERYWHERE: "EVERYWHERE",
      GHI_DESCRIPTION_1: "Gordon House International (GHI), is a family owned conglomerate established in Qatar in 2018 and has successfully established itself as a lucrative development and investment company in the GCC with diverse businesses in Qatar and Dubai. Gordon House has evolved over the years from real estate developments and contracting to go on to diverse ventures entering the field of Hospitality, Asset Management, Aviation, Oil and Gas and Agriculture.",
      GHI_DESCRIPTION_2: "A pioneer in turn-key business solutions Gordon House International’s ability to understand the varying trends within the market has allowed the company to achieve high investment returns through various ventures within the GCC. The company is headed by astute Qatari businessman Ali AlKhayarin, as Chairman; with his sons on the Board of Directors – Sultan Ali Alkhayarin, Group CEO; Abdulhadi Ali AlKhayarin, Group CEO; Mohamed AlKhayarin, COO and Fahad AlKhayarin as Board Director.",
      GHI_DESCRIPTION_3: "Driven by the Board’s passion for luxury, elegance, and beauty, merged with punctuality, precision and quality; Trading & Contracting was established to ensure the company’s developments embedded both concepts with excellence and attention to detail in every corner - from the moment of conception to project launching.",
      GHI_DESCRIPTION_4: "To ensure quality and excellence within a corporate governance, Gordon House was established as Group company with businesses under its management with the role to ensure the translation of the company’s vision and expand Gordon House’s operations outside of Qatar. Hospitality was also established to fully manage, operate, and oversee all the developments within Gordon House in every hospitality aspect essential for the project from project management to asset and facilities management. Agriculture was established in 2021 for the development of Agriculture and farming solutions in support of the local country demands of fresh produce. Aviation Maintenance and Manpower solutions was also launched in 2024 to oversee aircraft technical maintenance requirements and the acquiring of professional aviation specialists.",
      GHI_DESCRIPTION_5: "GHI is currently expanding its operations within the diverse business of property development and oil and gas in Dubai and the GCC with aggressive future expansions in the pipeline.",
      PROPERTY_DEVELOPMENT:"PROPERTY DEVELOPMENT",
      HOSPITALITY_SERVICES: "HOSPITALITY SERVICES",
      AVIATION_MAINTENANCE: "AVIATION MAINTENANCE AND MANPOWER SOLUTIONS",
      TRADING_AND_CONTRACTING: "TRADING AND CONTRACTING",
      FACILITY_ASSET:"FACILITY AND ASSET MANAGEMENT",
      BUSINESS_DEVELOPMENT:"BUSINESS DEVELOPMENT & \n INNOVATIVE STRATEGIES",
      AGRICULTURE: "AGRICULTURE",
      INVESTMENTS_VENTURES: "INVESTMENTS & VENTURES IN OIL & GAS",
      ABOUT_THE_COMPANY: "ABOUT THE COMPANY",
      OUR_DEVELOPMENTS: "OUR DEVELOPMENTS",
      CONTACT_US: "CONTACT US",
      OUR_SERVICES: "OUR SERVICES",
    },
  },
  ru: {
    translation: {
      Home: "Главная",
      About: "О нас",
      Developments: "Развитие",
      Contact: "Контакты",
      Menu: "Меню",
      Location: "Россия, Москва, Москва, Столичный Город",
      Address: "54 этаж, офис 541",
      OUR_VISION: "НАШЕ ВИДЕНИЕ ...",
      VISION_TEXT: "Переосмысление восприятия роскоши как общего повышенного уровня обслуживания для всех услуг Группы; пионерство в различных бизнес-концепциях через хорошо продуманные, устойчивые и инновационные концепции с глобальными стратегическими партнёрствами и предприятиями в Катаре и регионе.",
      OUR_PASSION: "НАША СТРАСТЬ ...",
      PASSION_TEXT: "К роскоши, вниманию к деталям и точности – это культура, которую мы наблюдаем каждый день и которая находит отражение в каждом аспекте нашего бизнеса, как основная суть нашей стремящейся к успеху работы – потому что создание успешных историй – наш бизнес.",
      OUR_MISSION: "НАША МИССИЯ ...",
      MISSION_TEXT: "Наша цель - предоставить роскошь, ценность и превосходное качество, постоянно стремясь превращать нашу страсть в реальность в каждом нашем проекте; через креативные инновации, знания отрасли и экспертность.",
      PROPERTY_DEVELOPMENT: "РАЗВИТИЕ НЕДВИЖИМОСТИ",
      HOSPITALITY_SERVICES: "ГОСТЕПРИИМСТВО",
      AVIATION_MAINTENANCE: "ТОРГОВЛЯ И КОНТРАКТИНГ",
      TRADING_AND_CONTRACTING: "ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ АВИАЦИИ",
      A_LEGACY: "НАШЕ НАСЛЕДИЕ .....",
      IN_THE_MAKING: "В ПРОЦЕССЕ СОЗДАНИЯ",
      BUILDING_SUCCESS: "СТРОИТЕЛЬСТВО УСПЕХА .....",
      DAILY_BUSINESS: "ЕЖЕДНЕВНАЯ РАБОТА",
      OUR_WORK_IS: "НАША РАБОТА .....",
      DRIVE_AND_PASSION: "НАШ ДРИВ И СТРАСТЬ",
      WE_ARE: "МЫ И ЕСТЬ ....",
      EVERYWHERE: "ВЕЗДЕ",
      GHI_DESCRIPTION_1: "Gordon House International (GHI), это семейный конгломерат, основанный в Катаре в 2018 году, который успешно зарекомендовал себя как прибыльная компания по разработке и инвестициям в ГСА с различными бизнесами в Катаре и Дубае. Gordon House эволюционировала за эти годы от девелопмента недвижимости и контрактных работ до разнообразных направлений, включая гостиничный бизнес, управление активами, авиацию, нефтегазовый сектор и сельское хозяйство.",
      GHI_DESCRIPTION_2: "Гордон Хаус Интернешнл, пионер в области комплексных бизнес-решений, благодаря своей способности понимать изменения рыночных тенденций добился высоких доходов от инвестиций в различных направлениях ГСА. Компания возглавляется опытным катарским бизнесменом Али Аль-Хаяриным в качестве председателя правления; с его сыновьями в Совете директоров – Султаном Али Аль-Хаяриным, генеральным директором группы; Абдулхады Али Аль-Хаяриным, генеральным директором группы; Мохамедом Аль-Хаяриным, операционным директором и Фахадом Аль-Хаяриным, членом совета директоров.",
      GHI_DESCRIPTION_3: "Вдохновленные страстью Совета по роскоши, элегантности и красоте, слиянной с точностью, пунктуальностью и качеством, было основано направление Торговли и Контракта, чтобы обеспечить воплощение этих концепций в каждом проекте, начиная с концептуализации и до запуска.",
      GHI_DESCRIPTION_4: "Для обеспечения качества и эффективности корпоративного управления был основан Группа Gordon House, управляющая бизнесами, для того чтобы передать видение компании и расширить деятельность компании за пределы Катара. Также было основано подразделение Hospitality для полноценного управления, эксплуатации и контроля всех проектов в области гостиничного сервиса, включая управление проектами, управление активами и услугами. В 2021 году было основано подразделение Agriculture для разработки сельскохозяйственных решений и поддержки местного спроса на свежую продукцию. В 2024 году также был запущен проект Aviation Maintenance и Manpower Solutions для контроля технического обслуживания воздушных судов и набора профессиональных специалистов в области авиации.",
      GHI_DESCRIPTION_5: "На данный момент GHI активно расширяет свою деятельность в области разработки недвижимости и нефтегазового сектора в Дубае и ГСА с амбициозными планами дальнейших расширений.",
      PROPERTY_DEVELOPMENT: "РАЗВИТИЕ НЕДВИЖИМОСТИ",
      HOSPITALITY_SERVICES: "ГОСТЕПРИИМСТВО",
      AVIATION_MAINTENANCE: "ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ АВИАЦИИ И РЕШЕНИЯ ПО ПОДБОРУ КАДРОВ",
      TRADING_AND_CONTRACTING: "ТОРГОВЛЯ И КОНТРАКТИНГ",
      FACILITY_ASSET: "УПРАВЛЕНИЕ ОБЪЕКТАМИ И АКТИВАМИ",
      BUSINESS_DEVELOPMENT: "РАЗВИТИЕ БИЗНЕСА И ИННОВАЦИОННЫЕ СТРАТЕГИИ",
      AGRICULTURE: "СЕЛЬСКОЕ ХОЗЯЙСТВО",
      INVESTMENTS_VENTURES: "ИНВЕСТИЦИИ И ПРЕДПРИЯТИЯ В НЕФТЕГАЗОВОМ СЕКТОРЕ",
      ABOUT_THE_COMPANY: "О КОМПАНИИ",
      OUR_DEVELOPMENTS: "НАШИ РАЗВИТИЯ",
      CONTACT_US: "КОНТАКТЫ",
      OUR_SERVICES: "НАШИ УСЛУГИ"
    
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
