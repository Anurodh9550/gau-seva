import { siteEn, siteHi } from "./messages-site";

export type Locale = "en" | "hi";

const baseEn: Record<string, string> = {
  "admin.loginTitle": "RGSS Admin Panel",
  "admin.loginSubtitle": "Login to manage donations, contacts, blogs and objectives.",
  "admin.loginErrorInvalid":
    "Invalid credentials. Use your Django user, or demo: admin / admin123 (local registrations only).",
  "admin.adminMenu": "Admin Menu",
  "admin.dashboardTitle": "Dashboard",
  "admin.dashboardSubtitle": "Quick overview of activity in the website.",
  "admin.statTotalReceived": "Total Received",
  "admin.statTotalRegistrations": "Total Registrations",
  "admin.statDonations": "Donations",
  "admin.statContactLeads": "Contact Leads",
  "admin.recentDonationsHeading": "Recent Donations",
  "admin.thId": "ID",
  "admin.thDonor": "Donor",
  "admin.thPurpose": "Purpose",
  "admin.thAmount": "Amount",
  "admin.thStatus": "Status",
  "admin.registrationsTitle": "Registered Users",
  "admin.registrationsSubtitle": "See how many users registered and for which role.",
  "admin.statTotalRegistered": "Total Registered",
  "admin.filterByRole": "Filter by role:",
  "admin.thName": "Name",
  "admin.thEmail": "Email",
  "admin.thPhone": "Phone",
  "admin.thRole": "Role",
  "admin.thPhoto": "Photo",
  "admin.thRegisteredAt": "Registered At",
  "admin.noRegistrationsRow": "No registration records found for selected role.",
  "admin.manageDonationsTitle": "Manage Donations",
  "admin.manageDonationsSubtitle": "Update payment status quickly.",
  "admin.manageContactsTitle": "Manage Contacts",
  "admin.manageContactsSubtitle": "Track lead response workflow.",
  "admin.manageBlogsTitle": "Manage Blogs",
  "admin.manageBlogsSubtitle": "Control publish state for blog cards.",
  "admin.manageObjectivesTitle": "Manage Objectives",
  "admin.manageObjectivesSubtitle": "Enable or disable objective visibility state.",
  "admin.settingsTitle": "Settings",
  "admin.settingsSubtitle": "Basic admin configuration for site controls.",
  "admin.labelSupportEmail": "Support Email",
  "admin.labelSupportPhone": "Support Phone",
  "admin.labelDefaultCurrency": "Default Currency",
  "admin.settingsSaved": "Settings saved successfully.",
  "home.heroTagline": "Be a Gau Rakshak - Be the Change!",
  "home.heroTitle":
    "Stand with us to protect these gentle beings and uphold our cultural and spiritual legacy.",
  "home.servicesEyebrow": "OUR CORE SERVICES",
  "home.servicesTitle":
    "Comprehensive Support Programs For Cow Welfare, Gausewaks, And Sustainable Gaushala Development Across India.",
  "home.service1Title": "Support for Gausewak and Gaurakshak",
  "home.service1Desc":
    "Training and resources for individuals dedicated to cow protection and welfare.",
  "home.service2Title": "Gaushala Assistance",
  "home.service2Desc":
    "Financial and logistical support for Gaushalas to ensure proper care and management of cows.",
  "home.service3Title": "Community Engagement",
  "home.service3Desc":
    "Programs to raise awareness and involve the community in cow protection activities.",
  "home.aboutEyebrow": "About Us",
  "home.aboutTitle": "Dedicated To Cow's & Gaushala's Welfare Movement",
  "home.aboutBody":
    "Rashtriya Gau Sewak Gaushala Sangh is a union of Gau Sewaks & Gaushala's in different parts of India. It is formed with the objective of spreading the message of responsible care among the masses and to look after the problems of gaushala's to make data of all gaushala's in India.",
  "home.aboutPoint1": "1800 +Gaushala's Joined Since 2012",
  "home.aboutPoint2": "144000+ Gausewak Working With RGSGS Pan India.",
  "home.faq1q": "What is Gauraksha?",
  "home.faq1a":
    "Gauraksha refers to the protection and welfare of cows. It is rooted in cultural, religious, and ecological practices aimed at safeguarding cows and promoting their well-being.",
  "home.faq2q": "Why is cow protection important?",
  "home.faq2a":
    "Cow protection helps preserve ecological balance, supports sustainable farming, and reflects compassion toward living beings.",
  "home.faq3q": "What are the ecological benefits of cow protection?",
  "home.faq3a":
    "Cow protection contributes to organic farming, natural fertilizers, and sustainable agricultural ecosystems.",
  "home.faq4q": "How does cow protection help farmers?",
  "home.faq4a":
    "Healthy cows provide milk, natural manure, and agricultural support, improving farmers' livelihoods.",
  "home.faqSectionSmall": "Frequently Asked Questions",
  "home.faqSectionTitle": "Have Any Questions For Us?",
};

const baseHi: Record<string, string> = {
  "admin.loginTitle": "आरजीएसएस एडमिन पैनल",
  "admin.loginSubtitle": "दान, संपर्क, ब्लॉग और उद्देश्यों को प्रबंधित करने के लिए लॉग इन करें।",
  "admin.loginErrorInvalid":
    "गलत क्रेडेंशियल। Django उपयोगकर्ता आज़माएँ, या डेमो: admin / admin123 (केवल स्थानीय पंजीकरण)।",
  "admin.adminMenu": "एडमिन मेनू",
  "admin.dashboardTitle": "डैशबोर्ड",
  "admin.dashboardSubtitle": "वेबसाइट गतिविधि का संक्षिप्त अवलोकन।",
  "admin.statTotalReceived": "कुल प्राप्त राशि",
  "admin.statTotalRegistrations": "कुल पंजीकरण",
  "admin.statDonations": "दान",
  "admin.statContactLeads": "संपर्क लीड",
  "admin.recentDonationsHeading": "हाल के दान",
  "admin.thId": "आईडी",
  "admin.thDonor": "दाता",
  "admin.thPurpose": "उद्देश्य",
  "admin.thAmount": "राशि",
  "admin.thStatus": "स्थिति",
  "admin.registrationsTitle": "पंजीकृत उपयोगकर्ता",
  "admin.registrationsSubtitle": "कितने उपयोगकर्ता किस भूमिका के लिए पंजीकृत हैं, देखें।",
  "admin.statTotalRegistered": "कुल पंजीकृत",
  "admin.filterByRole": "भूमिका के अनुसार फ़िल्टर:",
  "admin.thName": "नाम",
  "admin.thEmail": "ईमेल",
  "admin.thPhone": "फ़ोन",
  "admin.thRole": "भूमिका",
  "admin.thPhoto": "फ़ोटो",
  "admin.thRegisteredAt": "पंजीकरण समय",
  "admin.noRegistrationsRow": "चयनित भूमिका के लिए कोई पंजीकरण नहीं मिला।",
  "admin.manageDonationsTitle": "दान प्रबंधन",
  "admin.manageDonationsSubtitle": "भुगतान स्थिति जल्दी अपडेट करें।",
  "admin.manageContactsTitle": "संपर्क प्रबंधन",
  "admin.manageContactsSubtitle": "लीड प्रतिक्रिया कार्यप्रवाह ट्रैक करें।",
  "admin.manageBlogsTitle": "ब्लॉग प्रबंधन",
  "admin.manageBlogsSubtitle": "ब्लॉग कार्ड के प्रकाशन स्थिति नियंत्रित करें।",
  "admin.manageObjectivesTitle": "उद्देश्य प्रबंधन",
  "admin.manageObjectivesSubtitle": "उद्देश्य दृश्यता चालू या बंद करें।",
  "admin.settingsTitle": "सेटिंग्स",
  "admin.settingsSubtitle": "साइट नियंत्रण हेतु बुनियादी विन्यास।",
  "admin.labelSupportEmail": "सहायता ईमेल",
  "admin.labelSupportPhone": "सहायता फ़ोन",
  "admin.labelDefaultCurrency": "डिफ़ॉल्ट मुद्रा",
  "admin.settingsSaved": "सेटिंग्स सफलतापूर्वक सहेजी गईं।",
  "home.heroTagline": "गौ रक्षक बनें - परिवर्तन लाएँ!",
  "home.heroTitle":
    "इन सजीव प्राणियों की रक्षा और हमारी सांस्कृतिक व आध्यात्मिक विरासत के संरक्षण में हमारे साथ खड़े हों।",
  "home.servicesEyebrow": "हमारी मुख्य सेवाएँ",
  "home.servicesTitle":
    "गौ कल्याण, गौसेवकों और टिकाऊ गौशाला विकास हेतु भारत भर में व्यापक सहायता कार्यक्रम।",
  "home.service1Title": "गौसेवक व गौरक्षक के लिए सहयोग",
  "home.service1Desc":
    "गौ संरक्षण व कल्याण के लिए समर्पित व्यक्तियों हेतु प्रशिक्षण व संसाधन।",
  "home.service2Title": "गौशाला सहायता",
  "home.service2Desc":
    "गायों की उचित देखभाल व प्रबंधन हेतु गौशालाओं को वित्तीय व तार्किक सहयोग।",
  "home.service3Title": "सामुदायिक सहभागिता",
  "home.service3Desc":
    "जागरूकता बढ़ाने व गौ संरक्षण में समुदाय को जोड़ने वाले कार्यक्रम।",
  "home.aboutEyebrow": "हमारे बारे में",
  "home.aboutTitle": "गाय व गौशाला कल्याण आंदोलन के लिए समर्पित",
  "home.aboutBody":
    "राष्ट्रीय गौ सेवक गौशाला संघ भारत के विभिन्न भागों में गौ सेवकों व गौशालाओं का संगठन है। जिम्मेदार देखभाल का संदेश फैलाने व गौशालाओं की समस्याओं पर ध्यान देने तथा सभी गौशालाओं का डेटा तैयार करने के उद्देश्य से गठित।",
  "home.aboutPoint1": "2012 से 1800+ गौशालाएँ जुड़ चुकी हैं",
  "home.aboutPoint2": "1,44,000+ गौसेवक पूरे भारत में आरजीएसजीएस के साथ कार्यरत।",
  "home.faq1q": "गौरक्षा क्या है?",
  "home.faq1a":
    "गौरक्षा गायों की सुरक्षा व कल्याण से जुड़ा है। यह सांस्कृतिक, धार्मिक व पारिस्थितिक अभ्यासों में निहित है।",
  "home.faq2q": "गौ संरक्षण क्यों महत्वपूर्ण है?",
  "home.faq2a":
    "गौ संरक्षण पारिस्थितिक संतुलन व कृषि के लिए सहायक है और जीवों के प्रति करुणा दर्शाता है।",
  "home.faq3q": "गौ संरक्षण के पारिस्थितिक लाभ क्या हैं?",
  "home.faq3a":
    "यह जैविक खेती, प्राकृतिक खाद व कृषि पारिस्थितिकी तंत्र के लिए सहायक है।",
  "home.faq4q": "गौ संरक्षण किसानों की कैसे मदद करता है?",
  "home.faq4a":
    "स्वस्थ गायें दूध, प्राकृतिक खाद व कृषि सहायता देकर किसानों की आजीविका सुधारती हैं।",
  "home.faqSectionSmall": "अक्सर पूछे जाने वाले प्रश्न",
  "home.faqSectionTitle": "क्या आपके मन में कोई प्रश्न है?",
};

const en: Record<string, string> = { ...baseEn, ...siteEn };
const hi: Record<string, string> = { ...baseHi, ...siteHi };

export function translate(locale: Locale, key: string): string {
  if (locale === "hi") {
    return hi[key] ?? en[key] ?? key;
  }
  return en[key] ?? key;
}
