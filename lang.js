const translations = {
    en: {
      'nav-about': 'About',
      'nav-projects': 'Projects',
      'nav-contact': 'Contact',
      'about-title': 'About Me',
      'about-text': "I'm a backend developer specialized in Java, Spring Boot, and MySQL. I’m currently working at GlobalLogic, where I develop microservices following best practices such as clean architecture, SOLID principles, and modern tools like Eureka, Feign, Spring Cloud Gateway, and Swagger.<br><br>My focus is on building scalable services, writing unit tests, handling exceptions, consuming REST and SOAP APIs, and working within an Agile environment. I'm also experienced with quality tools like JaCoCo, SonarQube, and DBeaver for database management.<br><br>I have a good command of English, both written and spoken, which allows me to understand technical documentation, participate in meetings, and communicate effectively with international teams.",
      'projects-title': 'Projects',
      'p1-title': '🧑‍🏫 School Manager',
      'p1-desc': 'Web app to manage students, teachers and grades. Built with Java, Spring Boot, JWT, MySQL.',
      'p2-title': '💬 Messaging API',
      'p2-desc': 'Distributed system with microservices, Eureka, Gateway, RabbitMQ and auth.',
      'p3-title': '🔁 JSON Translator',
      'p3-desc': 'GraphQL consumer that transforms and translates data via REST service.',
      'contact-title': 'Contact',
      'contact-text': 'Feel free to email me at <a href="mailto:tuemail@gmail.com">tuemail@gmail.com</a> or connect via social media.',
      'footer-text': '&copy; 2025 Damián - Backend Developer'
    },
    es: {
      'nav-about': 'Sobre mí',
      'nav-projects': 'Proyectos',
      'nav-contact': 'Contacto',
      'about-title': 'Sobre mí',
      'about-text': "Soy un desarrollador backend especializado en Java, Spring Boot y MySQL. Actualmente formo parte del equipo de GlobalLogic, donde desarrollo microservicios siguiendo buenas prácticas como arquitectura limpia, principios SOLID y uso de herramientas modernas como Eureka, Feign, Spring Cloud Gateway y Swagger.<br><br>Me enfoco en la creación de servicios escalables, pruebas unitarias, manejo de errores, consumo de APIs REST y SOAP, y trabajo dentro de un entorno ágil. También estoy familiarizado con herramientas de calidad como JaCoCo, SonarQube y DBeaver para gestión de bases de datos.<br><br>Tengo un buen dominio del idioma inglés, tanto escrito como oral, lo cual me permite entender documentación técnica, participar en reuniones y comunicarme con equipos internacionales.",
      'projects-title': 'Proyectos',
      'p1-title': '🧑‍🏫 Gestor Escolar',
      'p1-desc': 'Aplicación web para administrar estudiantes, docentes y calificaciones. Java, Spring Boot, JWT, MySQL.',
      'p2-title': '💬 API de Mensajería',
      'p2-desc': 'Sistema distribuido con microservicios, Eureka, Gateway, RabbitMQ y autenticación.',
      'p3-title': '🔁 Traductor JSON',
      'p3-desc': 'Cliente GraphQL que transforma y traduce datos vía servicio REST.',
      'contact-title': 'Contacto',
      'contact-text': 'Podés escribirme a <a href="mailto:tuemail@gmail.com">tuemail@gmail.com</a> o conectar en redes.',
      'footer-text': '&copy; 2025 Damián - Desarrollador Backend'
    }
  };
  
  let currentLang = 'en';

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';

  // Actualiza banderita
  const flag = currentLang === 'en' ? 'https://flagcdn.com/gb.svg' : 'https://flagcdn.com/es.svg';
  document.getElementById('lang-icon').src = flag;

  // Traduce textos
  const texts = translations[currentLang];
  for (const id in texts) {
    document.getElementById(id).innerHTML = texts[id];
  }
});

  