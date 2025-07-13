
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');

    const translations = {
        en: {
            // Nav
            nav_about: 'ABOUT ME',
            nav_projects: 'PROJECTS',
            nav_skills: 'SKILLS',
            nav_contact: 'CONTACT',
            // Hero
            hero_title: "HELLO, I'm María Cecilia Orlando",
            hero_subtitle: "I'm a Full Stack developer, self-taught by nature, with a strong inclination to create innovative and efficient solutions. Always seeking new knowledge to solve problems creatively and effectively.",
            // About Me
            about_title: 'GETTING TO KNOW María Cecilia Orlando',
            about_text: "I am a professional with over 12 years of experience in the legal sector, where I developed key skills in analysis, problem-solving, and effective communication. However, my true passion for technology has led me to redirect my career towards web development and digital marketing, merging my solid analytical experience with an innovative approach to cutting-edge technologies like Web 3.0, blockchain, and cryptocurrencies. <br></br> I am a tireless and self-taught person, always looking to learn and adapt to the latest technological trends. My goal is to solve complex problems through innovative solutions that optimize processes, improve user experience, and add value in creating products that make a real difference in the digital world.",
            // Experience
            exp_backend_title: 'Backend Development',
            exp_backend_text: 'I have developed skills to create the server-side and logic behind a web application, as well as manage databases and APIs.',
            exp_frontend_title: 'Frontend Web Development',
            exp_frontend_text: 'I have skills in designing and developing user interfaces, focusing on creating visually appealing and functional experiences for web applications.',
            exp_emerging_title: 'Cutting-Edge Technologies',
            exp_emerging_text: 'I am very excited, exploring and studying these emerging technologies in order to develop innovative solutions and contribute to the future of the decentralized web.',
            // Projects
            projects_title: 'MY RECENT PROJECTS',
            projects_subtitle: 'These are some of my featured projects...',
            project1_desc: "Skill Swap is an innovative platform designed to empower Latin American women through the exchange of skills. It offers a unique solution to connect women with different skills and knowledge, facilitating an environment of collaboration and mutual growth. <u>Technologies Used:</u> Backend: Ruby on Rails, Frontend: HTML, CSS, Bootstrap, JavaScript, React.Database: Active Record",
            project2_desc: "In this project, I developed an interactive web application dedicated to viewing and managing Pokémon cards, using the PokeAPI to get real-time data. The application allows users to explore different Pokémon, see details of their cards, and learn more about their characteristics.<u>Technologies Used:</u> HTML5, CSS3, JavaScript (Vanilla), Fetch API, Template Tag.",
            project3_desc: "This project is a contact management application, developed in Ruby on Rails. It allows users to efficiently schedule contacts by creating, editing, and deleting entries. The application features a search bar that makes it easy to find contacts by name, last name, or email. <u>Technologies Used:</u> Backend: Ruby on Rails, Frontend: Bootstrap, Active Storage, Geocoding.",
            project4_desc: "This volunteer project with Eco House Global focuses on updating their web application, with the goal of improving its functionality and user experience. In this role, I am in charge of the design and development of the new user interface (UI), which will allow me to apply and expand my skills in interface design and web development, while contributing to a cause I am passionate about. <u>What I contribute:</u>  Designing the new user interface (UI). Implement new functionalities. Improving the user experience (UX).",
            project5_desc: "In this project, I developed an interactive web application that allows searching and viewing real-time cryptocurrency information, using the public CoinGecko API. The application allows users to enter the name or symbol of a cryptocurrency and get its updated price in Argentine pesos, along with its icon and relevant information.<u>Technologies Used:</u> HTML5, CSS3, JavaScript (Vanilla), Fetch API, CoinGecko API, Template literals.",
            project6_desc: "In this project, I completed Challenge 0 by developing a basic NFT smart contract using Hardhat and deploying it on the Sepolia testnet. The contract allows the creation of unique non-fungible tokens, laying the groundwork for future Web3 developments. This exercise allowed me to become familiar with the Ethereum development environment, the use of deployment scripts, and interaction with contracts through tools like Ethers.js.<u>Technologies Used:</u>  Solidity, Hardhat, Sepolia Testnet, Ethers.js.",
            project7_desc: "This project is a click counter application, developed in React. The application includes stylized buttons that respond to clicks, and the counter updates in real-time when the action is performed. The buttons are reusable components and functions are passed as props to maintain the counter's update logic. The interface is designed with CSS to ensure a visually appealing and functional experience. <u>Technologies Used:</u> React, CSS, JavaScript.",
            project8_desc: "This project is an interactive calculator application, developed in React. It allows performing basic mathematical operations, such as addition, subtraction, multiplication, and division, with both integers and decimals. The calculator buttons are reusable components that pass functions as props to handle operations and update the screen in real-time.<u>Technologies Used:</u> React, CSS, JavaScript.",
            see_more_projects: "See more projects",
            // Skills
            skills_title: 'SKILLS',
            skills_subtitle: 'These are some of my skills and the technologies I handle, although I am continuously learning!',
            // Contact
            contact_title: "LET'S TALK!",
            contact_text: "<strong>I'm here to help you bring your ideas to life!</strong> <br> If you have a project in mind, don't hesitate to contact me, and together we can take your vision to the next level.<br>Let's make it happen!",
            // Footer
            footer_text: "Every day I learn and create something new.<br>Together we can make your vision materialize and take it to the next level.",
            footer_copyright: '© 2024 María Cecilia Orlando. All rights reserved.',
        },
        es: {
            // Nav
            nav_about: 'SOBRE MÍ',
            nav_projects: 'PROYECTOS',
            nav_skills: 'HABILIDADES',
            nav_contact: 'CONTACTO',
            // Hero
            hero_title: 'HOLA, soy María Cecilia Orlando',
            hero_subtitle: 'Soy desarrolladora Full Stack, autodidacta por naturaleza, con una fuerte inclinación a crear soluciones innovadoras y eficientes.<br> Siempre buscando nuevos conocimientos para resolver problemas de manera creativa y efectiva.',
            // About me
            about_title: 'CONOCIENDO a María Cecilia Orlando',
            about_text: "Soy una profesional con más de 12 años de experiencia en el sector legal, donde desarrollé habilidades clave en análisis, resolución de problemas y comunicación efectiva. Sin embargo, mi verdadera pasión por la tecnología me ha llevado a redirigir mi carrera hacia el desarrollo web y marketing digital, fusionando mi sólida experiencia analítica con un enfoque innovador en las tecnologías de vanguardia, como Web 3.0, blockchain y criptomonedas. <br></br>  Soy una persona incansable y autodidacta, siempre buscando aprender y adaptarme a las últimas tendencias tecnológicas. Mi objetivo es resolver problemas complejos mediante soluciones innovadoras que optimicen procesos, mejoren la experiencia del usuario y aportar valor en la creación de productos que marquen una diferencia real en el mundo digital.",
            // Experience
            exp_backend_title: 'Desarrollo Backend',
            exp_backend_text: 'He desarrollado habilidades para crear la parte del servidor y lógica detrás de una aplicación web, además de gestionar bases de datos y APIs.',
            exp_frontend_title: 'Desarrollo Web Frontend',
            exp_frontend_text: 'Tengo habilidades en el diseño y desarrollo de interfaces de usuario, enfocándome en crear experiencias visuales atractivas y funcionales para aplicaciones web',
            exp_emerging_title: 'Tecnologías de vanguardia',
            exp_emerging_text: 'Estoy muy entusiasmada, explorando y estudiando estas tecnologías emergentes con la finalidad de desarrollar soluciones innovadoras y contribuir al futuro de la web descentralizada',
            // Projects
            projects_title: 'MIS PROYECTOS RECIENTES',
            projects_subtitle: 'Estos son algunos de mis proyectos destacados...',
            project1_desc: "Skill Swap es una innovadora plataforma diseñada para empoderar a mujeres latinoamericanas mediante el intercambio de habilidades. Ofrece una solución única para conectar a mujeres con diferentes habilidades y conocimientos, facilitando un entorno de colaboración y crecimiento mutuo. <u>Tecnologías Utilizadas:</u> Backend: Ruby on Rails, Frontend: HTML, CSS, Bootstrap, JavaScript, React.Base de datos: Active Record",
            project2_desc: "En este proyecto, desarrollé una aplicación web interactiva dedicada a la visualización y gestión de tarjetas de Pokémon, utilizando la PokeAPI para obtener datos en tiempo real. La aplicación permite a los usuarios explorar diferentes Pokémon, ver detalles de sus cartas y aprender más sobre sus características.<u>Tecnologías Utilizadas:</u> HTML5, CSS3, JavaScript (Vanilla), Fetch API, Template Tag.",
            project3_desc: "Este proyecto es una aplicación de gestión de contactos, desarrollada en Ruby on Rails. Permite a los usuarios agendar contactos de manera eficiente, creando, editando y eliminando entradas. La aplicación cuenta con una barra de búsqueda que facilita encontrar contactos por nombre, apellido o correo electrónico. <u>Tecnologías Utilizadas:</u> Backend: Ruby on Rails, Frontend: Bootstrap, Active Storage, Geocoding.",
            project4_desc: "Este proyecto de voluntariado con Eco House Global se centra en la actualización de su aplicación web, con el objetivo de mejorar su funcionalidad y la experiencia del usuario. En este rol, estoy a cargo del diseño y desarrollo de la nueva interfaz de usuario (UI), lo que me permitirá aplicar y expandir mis habilidades en diseño de interfaces y desarrollo web, al mismo tiempo que contribuyo a una causa que me apasiona. <u>En que colaboro:</u>  Diseñar la nueva interfaz de usuario (UI). Implementar nuevas funcionalidades. Mejorar la experiencia del usuario (UX).",
            project5_desc: "En este proyecto desarrollé una aplicación web interactiva que permite buscar y visualizar información de criptomonedas en tiempo real, utilizando la API pública de CoinGecko. La aplicación permite a los usuarios ingresar el nombre o símbolo de una criptomoneda y obtener su precio actualizado en pesos argentinos, junto con su ícono e información relevante.<u>Tecnologías Utilizadas:</u> HTML5, CSS3, JavaScript (Vanilla), Fetch API, CoinGecko API, Template literals.",
            project6_desc: "En este proyecto completé el Desafío 0 desarrollando un contrato inteligente NFT básico utilizando Hardhat y desplegándolo en la red de prueba Sepolia. El contrato permite la creación de tokens no fungibles únicos, sentando las bases para futuros desarrollos en Web3. Este ejercicio me permitió familiarizarme con el entorno de desarrollo de Ethereum, el uso de scripts de despliegue, y la interacción con contratos a través de herramientas como Ethers.js.<u>Tecnologías Utilizadas:</u>  Solidity, Hardhat, Sepolia Testnet, Ethers.js.",
            project7_desc: "Este proyecto es una aplicación de contador de clics, desarrollada en React. La aplicación incluye botones estilizados que responden a los clics, y el contador se actualiza en tiempo real al realizar la acción. Los botones son componentes reutilizables y se pasan funciones como propiedades (props) para mantener la lógica de actualización del contador. La interfaz está diseñada con CSS para garantizar una experiencia visual atractiva y funcional. <u>Tecnologías Utilizadas:</u> React, CSS, JavaScript.",
            project8_desc: "Este proyecto es una aplicación de calculadora interactiva, desarrollada en React. Permite realizar operaciones matemáticas básicas, como suma, resta, multiplicación y división, tanto con números enteros como decimales. Los botones de la calculadora son componentes reutilizables que pasan funciones como propiedades (props) para manejar las operaciones y actualizar la pantalla en tiempo real.<u>Tecnologías Utilizadas:</u> React, CSS, JavaScript.",
            see_more_projects: "Ver más proyectos",
            // Skills
            skills_title: 'HABILIDADES',
            skills_subtitle: 'Estos son algunas de mis habilidades y tecnologías que manejo, aunque me encuentro continuamente aprendiendo!',
            // Contact
            contact_title: '¡HABLEMOS!',
            contact_text: '<strong>¡Estoy aquí para ayudarte a hacer realidad tus ideas!</strong> <br> Si tienes un proyecto en mente no dudes en contactarme y juntos podemos llevar tu visión al siguiente nivel.<br>¡Vamos a hacerlo posible!',
            // Footer
            footer_text: 'Cada día aprendo y creo algo nuevo.<br>Juntos podemos hacer que tu visión se materialice y llevarla al siguiente nivel.',
            footer_copyright: '© 2024 María Cecilia Orlando. Todos los derechos reservados.',
        }
    };

    const setLanguage = (lang) => {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                elem.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('language', lang);

        // Update active state for buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    };

    languageSelector.addEventListener('click', (event) => {
        const lang = event.target.closest('.lang-btn')?.dataset.lang;
        if (lang) {
            setLanguage(lang);
        }
    });

    // Set initial language
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});
