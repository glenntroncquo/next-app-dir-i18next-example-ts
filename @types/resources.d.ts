interface Resources {
  "client-page": {
    "back-to-home": "Back to home";
    counter_one: "one selected";
    counter_other: "{{count}} selected";
    counter_zero: "none selected";
    h1: "A client page, to demonstrate client side i18n";
    title: "Client page";
    "to-second-client-page": "to second client page";
  };
  footer: {
    description: "This is a non-page component that requires its own namespace";
    helpLocize: "With using <1>locize</1> you directly support the future of <3>i18next</3>.";
    languageSwitcher: "Switch from <1>{{lng}}</1> to: ";
  };
  "second-client-page": {
    "back-to-home": "Back to home";
    h1: "A second client page, to demonstrate client side i18n";
    title: "Second client page";
    "to-client-page": "to client page";
  };
  "second-page": {
    "back-to-home": "Back to home";
    h1: "A second page, to demonstrate routing";
    title: "Second page";
  };
  translation: {
    h1: "A simple example";
    title: "Home";
    "to-client-page": "To client page";
    "to-second-page": "To second page";
    welcome: "Welcome to Next.js 13 <1>with the new app directory features</1> and i18next";
    home: "Home";
    about: "About Us";
    services: "Services";
    contact: "Contact";
    bookAppointment: "Book Appointment";
    footerDescription: "Your expert in Brazilian keratin and hair botox treatments in Merelbeke. Service for Gent, Oudenaarde and surrounding areas.";
    quickLinks: "Quick Links";
    contactInfo: "Contact Info";
    serviceKeratinFooter: "Keratin Treatment";
    serviceBotoxFooter: "Botox Treatment";
    serviceRitualFooter: "Ritual Nutrition – Nuance Brazil + LED Light Therapy";
    allRightsReserved: "All rights reserved";
    privacyPolicy: "Privacy Policy";
    termsOfService: "Terms of Service";
    cookiePolicy: "Cookie Policy";
    mondayTuesday: "Mon-Tue: Closed";
    wednesday: "Wed: 13:30 - 21:00";
    thursday: "Thu: 17:00 - 21:00";
    fridaySaturday: "Fri-Sat: 09:00 - 17:00";
    sunday: "Sun: Closed";
    blog: {
      text: "Check out the corresponding <1>blog post</1> describing this example.";
      link: "https://locize.com/blog/next-app-dir-i18n/";
    };
  };
}

export default Resources;
