document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');

    const translations = {
        en: {
            // Metadata
            page_title: "Maria Cecilia Orlando's Portfolio",
            meta_description: "Maria Cecilia Orlando's Portfolio",
            meta_keywords: "Web Development, Full Stack, Ruby, Ruby on Rails, JavaScript, HTML, CSS, Bootstrap, Hotwire, React, Angular, PostgreSQL",
            logo_alt: "Website logo",
            project1_img_alt: "Project Skill Swap",
            project2_img_alt: "Project Pokedex",
            project3_img_alt: "Project Agenda 2024",
            project4_img_alt: "Project Eco House",
            project5_img_alt: "Project API-CRYPYO",
            project6_img_alt: "Project Web3 Challenge 0",
            project7_img_alt: "Project Click Counter",
            project8_img_alt: "Project Interactive Calculator",
            project9_img_alt: "Project Web3 PiggyBank",
            project10_img_alt: "Project Web3 Simple Vault System",
            project11_img_alt: "Project Web3 Blockchain Messenger",
            // Nav
            nav_about: 'ABOUT ME',
            nav_projects: 'PROJECTS',
            nav_skills: 'SKILLS',
            nav_contact: 'CONTACT',
            nav_blog: 'BLOG',
            // Hero
            hero_title: "HELLO, I'm María Cecilia Orlando",
            hero_subtitle: "I'm a Full Stack developer, self-taught by nature, with a strong inclination to create innovative and efficient solutions. Always seeking new knowledge to solve problems creatively and effectively.",
            hero_profile_alt: "Profile picture",
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
            filter_all: "All",
            filter_rails: "Ruby on Rails",
            filter_react: "React",
            filter_javascript: "JavaScript",
            filter_web3: "Web3",
            project1_title: "<strong>SKILL SWAP</strong>",
            project1_desc: "Skill Swap is an innovative platform designed to empower Latin American women through the exchange of skills. It offers a unique solution to connect women with different skills and knowledge, facilitating an environment of collaboration and mutual growth. <u>Technologies Used:</u> Backend: Ruby on Rails, Frontend: HTML, CSS, Bootstrap, JavaScript, React. Database: Active Record",
            project2_title: "<strong>POKEDEK</strong>",
            project2_desc: "In this project, I developed an interactive web application dedicated to viewing and managing Pokémon cards, using the PokeAPI to get real-time data. The application allows users to explore different Pokémon, see details of their cards, and learn more about their characteristics.<u>Technologies Used:</u> HTML5, CSS3, JavaScript (Vanilla), Fetch API, Template Tag.",
            project3_title: "<strong>AGENDA 2024</strong>",
            project3_desc: "This project is a contact management application, developed in Ruby on Rails. It allows users to efficiently schedule contacts by creating, editing, and deleting entries. The application features a search bar that makes it easy to find contacts by name, last name, or email. <u>Technologies Used:</u> Backend: Ruby on Rails, Frontend: Bootstrap, Active Storage, Geocoding.",
            project4_title: "<strong>ECO HOUSE</strong>",
            project4_desc: "This volunteer project with Eco House Global focuses on updating their web application, with the goal of improving its functionality and user experience. In this role, I am in charge of the design and development of the new user interface (UI), which will allow me to apply and expand my skills in interface design and web development, while contributing to a cause I am passionate about. <u>What I contribute:</u>  Designing the new user interface (UI). Implement new functionalities. Improving the user experience (UX).",
            project5_title: "<strong>API-CRYPYO</strong>",
            project5_desc: "In this project, I developed an interactive web application that allows searching and viewing real-time cryptocurrency information, using the public CoinGecko API. The application allows users to enter the name or symbol of a cryptocurrency and get its updated price in Argentine pesos, along with its icon and relevant information.<u>Technologies Used:</u> HTML5, CSS3, JavaScript (Vanilla), Fetch API, CoinGecko API, Template literals.",
            project6_title: "<strong>CHALLENGE 0</strong>",
            project6_desc: "In this project, I completed Challenge 0 by developing a basic NFT smart contract using Hardhat and deploying it on the Sepolia testnet. The contract allows the creation of unique non-fungible tokens, laying the groundwork for future Web3 developments. This exercise allowed me to become familiar with the Ethereum development environment, the use of deployment scripts, and interaction with contracts through tools like Ethers.js.<u>Technologies Used:</u>  Solidity, Hardhat, Sepolia Testnet, Ethers.js.",
            project7_title: "<strong>CLICK COUNTER</strong>",
            project7_desc: "This project is a click counter application, developed in React. The application includes stylized buttons that respond to clicks, and the counter updates in real-time when the action is performed. The buttons are reusable components and functions are passed as props to maintain the counter's update logic. The interface is designed with CSS to ensure a visually appealing and functional experience. <u>Technologies Used:</u> React, CSS, JavaScript.",
            project8_title: "<strong>INTERACTIVE CALCULATOR</strong>",
            project8_desc: "This project is an interactive calculator application, developed in React. It allows performing basic mathematical operations, such as addition, subtraction, multiplication, and division, with both integers and decimals. The calculator buttons are reusable components that pass functions as props to handle operations and update the screen in real-time.<u>Technologies Used:</u> React, CSS, JavaScript.",
            project9_title: "<strong>PiggyBank</strong>",
            project9_desc: "Auditing and Correcting Vulnerability in a Vault Contract This repository contains a practical example of a security audit for an Ethereum smart contract, demonstrating a common vulnerability and its correction. It includes the vulnerable version, the corrected and secure version, and an attack contract designed to exploit the original vulnerability. <u>Technologies Used:</u> Solidity, Hardhat, Ethers.js, React.",
            project10_title: "<strong>SISTEMA DE BOVEDA SIMPLE</strong>",
            project10_desc: "Simple Vault System (Vault) This repository contains an Ethereum smart contract that implements a basic vault system, allowing users to securely deposit and withdraw Ether (ETH). The contract has been designed with an emphasis on security, modularity (through inheritance), and traceability of operations. <u>Technologies Used:</u> Solidity, Hardhat, Ethers.js, React.",
            project11_title: "<strong>BLOCKCHAIN MESSENGER</strong>",
            project11_desc: "The BlockchainMessenger contract is a simple contract that allows: Storing a message on the blockchain. Viewing the publicly stored message. Allowing only the person who created (deployed) the contract to update the message. Counting how many times the message has been updated. This project is an introduction to the basic concepts of smart contracts, such as state variables, the constructor, and functions with access restrictions. <u>Technologies Used:</u> Solidity, Hardhat, Ethers.js, React.",
            project12_title: "<strong>SHOPPING CART</strong>",
            project12_desc: "This project is an interactive application developed in React, focused on product management and shopping cart functionality. It allows users to browse a list of products, add items to the cart, adjust their quantities, and remove them, all while the cart total updates in real-time, providing a smooth and intuitive user experience.<u>Technologies Used:</u> React, CSS, JavaScript.",
            project13_title: "<strong>CLICK COUNTER</strong>",
            project13_desc: "A simple digital counter implemented as a smart contract on the blockchain. This project is a fundamental proof of concept of how smart contracts can store and manipulate state, laying the groundwork for more complex decentralized applications (dApps).<u>Technologies Used:</u> Solidity, Ethereum Virtual Machine (EVM), Remix IDE.",
            see_more_projects: "See more projects",
            // Technologies
            tech_ruby: "Ruby",
            tech_rails: "Ruby on Rails",
            tech_nodejs: "Node.js",
            tech_nextjs: "Next.js",
            tech_mongodb: "MongoDB",
            tech_postgresql: "PostgreSQL",
            tech_html5: "HTML5",
            tech_css3: "CSS3",
            tech_javascript: "JavaScript",
            tech_bootstrap: "Bootstrap",
            tech_react: "React",
            tech_tailwind: "Tailwind CSS",
            tech_blockchain: "Blockchain",
            tech_web3: "Web 3.0",
            tech_solidity: "Solidity",
            tech_ethereum: "Ethereum",
            tech_crypto: "Crypto",
            tech_smart_contracts: "Smart Contracts",
            // Skills
            skills_title: 'SKILLS',
            skills_subtitle: 'These are some of my skills and the technologies I handle, although I am continuously learning!',
            skill_ruby: "Ruby",
            skill_rails: "Ruby on Rails",
            skill_html5: "HTML5",
            skill_css3: "CSS3",
            skill_javascript: "JavaScript",
            skill_bootstrap: "Bootstrap",
            skill_angular: "AngularJS",
            skill_react: "React",
            skill_nodejs: "Node.js",
            skill_nestjs: "NestJS",
            skill_nextjs: "Next.js",
            skill_postgresql: "PostgreSQL",
            skill_jquery: "jQuery",
            skill_mongodb: "MongoDB",
            skill_vercel: "Vercel",
            skill_vite: "Vite",
            skill_solidity: "Solidity",
            skill_hardhat: "Hardhat",
            // Contact
            contact_title: "LET'S TALK!",
            contact_text: "<strong>I'm here to help you bring your ideas to life!</strong> <br> If you have a project in mind, don't hesitate to contact me, and together we can take your vision to the next level.<br>Let's make it happen!",
            // Footer
            footer_text: "Every day I learn and create something new.<br>Together we can make your vision materialize and take it to the next level.",
            footer_copyright: '© 2024 María Cecilia Orlando. All rights reserved.',
            // Blog
            blog_title: 'BLOG',
            blog_article1_title: 'CRYPTOGRAPHY FOR BEGINNERS: THE ART OF DIGITAL SECRETS IN A CONNECTED WORLD 🌐',
            blog_article1_intro: 'Have you ever wondered how your private message securely reaches a friend over the Internet? 🤫 Or how your bank protects your money when you make an online transfer? 💰 The answer to these questions, and many others in our digital world, lies hidden behind an ancient and fascinating science: cryptography. ✨',
            blog_article1_read_more: 'Read more',
            blog_article2_title: 'MONEY UNVEILED: A JOURNEY FROM BARTER TO CRYPTOCURRENCIES! 🚀',
            blog_article2_intro: 'Have you ever wondered why money is so fundamental in our lives? Or how we ended up using bills and coins instead of exchanging chickens for shoes? Get ready for a fascinating journey through the history of money and discover why we are on the cusp of a revolution with cryptocurrencies!',
            blog_article2_read_more: 'Read more',
            blog_article3_title: 'BITCOIN FOR BEGINNERS: MAGIC, DIGITAL, AND BOSS-FREE MONEY! 🚀',
            blog_article3_intro: 'Have you ever wondered why we trust our money to a bank, an entity you do not even know in person? 🧐 Or how is it possible that we send photos to a friend in seconds, but an international transfer takes days and costs a fortune? 💸 Get ready to question the basis of digital trust! In a world where everything is online, the rules of money have changed. I invite you on a journey to unravel the mystery of Bitcoin, the digital money that works without bosses and has become the basis of the new internet economy. Discover why cryptography is the true superpower of this revolution! 🚀',
            blog_article3_read_more: 'Read more',
        },
        es: {
            // Metadata
            page_title: "Portfolio de Maria Cecilia Orlando",
            meta_description: "Portfolio de Maria Cecilia Orlando",
            meta_keywords: "Desarrollo Web, Full Stack, Ruby, Ruby on Rails, JavaScript, HTML, CSS, Bootstrap, Hotwaire, React, Angular, PostgreSQL",
            logo_alt: "Logo de la página web",
            project1_img_alt: "Proyecto Skill Swap",
            project2_img_alt: "Proyecto Pokedex",
            project3_img_alt: "Proyecto Agenda 2024",
            project4_img_alt: "Proyecto Eco House",
            project5_img_alt: "Proyecto API-CRYPYO",
            project6_img_alt: "Proyecto Web3 Desafío 0",
            project7_img_alt: "Proyecto Contador de Clics",
            project8_img_alt:"Proyecto Calculadora Interactiva",
            project9_img_alt: "Proyecto Web3 PiggyBank",
            project10_img_alt: "Proyecto Web3 Sistema de Bóveda Simple",
            project11_img_alt: "Proyecto Web3 Blockchain Messenger",
            // Nav
            nav_about: 'SOBRE MÍ',
            nav_projects: 'PROYECTOS',
            nav_skills: 'HABILIDADES',
            nav_contact: 'CONTACTO',
            nav_blog: 'BLOG',
            // Hero
            hero_title: 'HOLA, soy María Cecilia Orlando',
            hero_subtitle: 'Soy desarrolladora Full Stack, autodidacta por naturaleza, con una fuerte inclinación a crear soluciones innovadoras y eficientes.<br> Siempre buscando nuevos conocimientos para resolver problemas de manera creativa y efectiva.',
            hero_profile_alt: "Foto de perfil",
            // About me
            about_title: 'CONOCIENDO a María Cecilia Orlando',
            about_text: "Soy una profesional con más de 12 años de experiencia en el sector legal, donde desarrollé habilidades clave en análisis, resolución de problemas y comunicación efectiva. Sin embargo, mi verdadera pasión por la tecnología me ha llevado a redirigir mi carrera hacia el desarrollo web y marketing digital, fusionando mi sólida experiencia analítica con un enfoque innovador en las tecnologías de vanguardia, como Web 3.0, blockchain y criptomonedas. <br></br>  Soy una persona incansable y autodidacta, siempre buscando aprender y adaptarme a las últimas tendencias tecnológicas. Mi objetivo es resolver problemas complejos mediante soluciones innovadoras que optimicen procesos, mejoren la experiencia del usuario y aportar valor en la creación de productos que marquen una diferencia real en el mundo digital.",
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
            filter_all: "Todos",
            filter_rails: "Ruby on Rails",
            filter_react: "React",
            filter_javascript: "JavaScript",
            filter_web3: "Web3",
            project1_title: "<strong>SKILL SWAP</strong>",
            project1_desc: "Skill Swap es una innovadora plataforma diseñada para empoderar a mujeres latinoamericanas mediante el intercambio de habilidades. Ofrece una solución única para conectar a mujeres con diferentes habilidades y conocimientos, facilitando un entorno de colaboración y crecimiento mutuo. <u>Tecnologías Utilizadas:</u> Backend: Ruby on Rails, Frontend: HTML, CSS, Bootstrap, JavaScript, React.Base de datos: Active Record",
            project2_title: "<strong>POKEDEK</strong>",
            project2_desc: "En este proyecto, desarrollé una aplicación web interactiva dedicada a la visualización y gestión de tarjetas de Pokémon, utilizando la PokeAPI para obtener datos en tiempo real. La aplicación permite a los usuarios explorar diferentes Pokémon, ver detalles de sus cartas y aprender más sobre sus características.<u>Tecnologías Utilizadas:</u> HTML5, CSS3, JavaScript (Vanilla), Fetch API, Template Tag.",
            project3_title: "<strong>AGENDA 2024</strong>",
            project3_desc: "Este proyecto es una aplicación de gestión de contactos, desarrollada en Ruby on Rails. Permite a los usuarios agendar contactos de manera eficiente, creando, editando y eliminando entradas. La aplicación cuenta con una barra de búsqueda que facilita encontrar contactos por nombre, apellido o correo electrónico. <u>Tecnologías Utilizadas:</u> Backend: Ruby on Rails, Frontend: Bootstrap, Active Storage, Geocoding.",
            project4_title: "<strong>ECO HOUSE</strong>",
            project4_desc: "Este proyecto de voluntariado con Eco House Global se centra en la actualización de su aplicación web, con el objetivo de mejorar su funcionalidad y la experiencia del usuario. En este rol, estoy a cargo del diseño y desarrollo de la nueva interfaz de usuario (UI), lo que me permitirá aplicar y expandir mis habilidades en diseño de interfaces y desarrollo web, al mismo tiempo que contribuyo a una causa que me apasiona. <u>En que colaboro:</u>  Diseñar la nueva interfaz de usuario (UI). Implementar nuevas funcionalidades. Mejorar la experiencia del usuario (UX).",
            project5_title: "<strong>API-CRYPYO</strong>",
            project5_desc: "En este proyecto desarrollé una aplicación web interactiva que permite buscar y visualizar información de criptomonedas en tiempo real, utilizando la API pública de CoinGecko. La aplicación permite a los usuarios ingresar el nombre o símbolo de una criptomoneda y obtener su precio actualizado en pesos argentinos, junto con su ícono e información relevante.<u>Tecnologías Utilizadas:</u> HTML5, CSS3, JavaScript (Vanilla), Fetch API, CoinGecko API, Template literals.",
            project6_title: "<strong>DESAFIO 0</strong>",
            project6_desc: "En este proyecto completé el Desafío 0 desarrollando un contrato inteligente NFT básico utilizando Hardhat y desplegándolo en la red de prueba Sepolia. El contrato permite la creación de tokens no fungibles únicos, sentando las bases para futuros desarrollos en Web3. Este ejercicio me permitió familiarizarme con el entorno de desarrollo de Ethereum, el uso de scripts de despliegue, y la interacción con contratos a través de herramientas como Ethers.js.<u>Tecnologías Utilizadas:</u>  Solidity, Hardhat, Sepolia Testnet, Ethers.js.",
            project7_title: "<strong>CONTADOR DE CLICS</strong>",
            project7_desc: "Este proyecto es una aplicación de contador de clics, desarrollada en React. La aplicación incluye botones estilizados que responden a los clics, y el contador se actualiza en tiempo real al realizar la acción. Los botones son componentes reutilizables y se pasan funciones como propiedades (props) para mantener la lógica de actualización del contador. La interfaz está diseñada con CSS para garantizar una experiencia visual atractiva y funcional. <u>Tecnologías Utilizadas:</u> React, CSS, JavaScript.",
            project8_title: "<strong>CALCULADORA INTERACTIVA</strong>",
            project8_desc: "Este proyecto es una aplicación de calculadora interactiva, desarrollada en React. Permite realizar operaciones matemáticas básicas, como suma, resta, multiplicación y división, tanto con números enteros como decimales. Los botones de la calculadora son componentes reutilizables que pasan funciones como propiedades (props) para manejar las operaciones y actualizar la pantalla en tiempo real.<u>Tecnologías Utilizadas:</u> React, CSS, JavaScript.",
            project9_title: "<strong>PiggyBank</strong>",
            project9_desc: "Auditoría y Corrección de Vulnerabilidad en Contrato de Bóveda Este repositorio contiene un ejemplo práctico de auditoría de seguridad para un contrato inteligente de Ethereum, demostrando una vulnerabilidad común y su corrección. Incluye la versión vulnerable, la corregida y segura, y un contrato de ataque diseñado para explotar la vulnerabilidad originaL. <u>Tecnologías Utilizadas:</u> Solidity, Hardhat, Ethers.js, React.",
            project10_title: "<strong>SISTEMA DE BOVEDA SIMPLE</strong>",
            project10_desc: "Sistema de Bóveda Simple (Vault) Este repositorio contiene un contrato inteligente de Ethereum que implementa un sistema de bóveda (Vault) básico, permitiendo a los usuarios depositar y retirar Ether (ETH) de forma segura. El contrato ha sido diseñado con énfasis en la seguridad, la modularidad (a través de la herencia) y la trazabilidad de las operaciones. <u>Tecnologías Utilizadas:</u> Solidity, Hardhat, Ethers.js, React.",
            project11_title: "<strong>BlockchainMessenger</strong>",
            project11_desc: "El contrato BlockchainMessenger es un contrato simple que permite: Almacenar un mensaje en la blockchain. Ver el mensaje almacenado públicamente. Permitir que solo la persona que creó (implementó) el contrato pueda actualizar el mensaje. Contar cuántas veces se ha actualizado el mensaje. Este proyecto es una introducción a los conceptos básicos de los contratos inteligentes, como variables de estado, el constructor y funciones con restricciones de acceso.. <u>Tecnologías Utilizadas:</u> Solidity, Hardhat, Ethers.js, React..",
            project12_title: "<strong>CARRITO DE COMPRAS</strong>",
            project12_desc: "Este proyecto es una aplicación interactiva desarrollada en React, enfocada en la gestión de productos y la funcionalidad de un carrito de compras. Permite a los usuarios navegar por una lista de productos, añadir ítems al carrito, ajustar sus cantidades y eliminarlos, todo mientras el total del carrito se actualiza en tiempo real, proporcionando una experiencia de usuario fluida e intuitiva.<u>Tecnologías Utilizadas:</u> React, CSS, JavaScript.",
            project13_title: "<strong>CONTADOR DE CLICKS</strong>",
            project13_desc: "Un contador digital simple implementado como un smart contract en la blockchain. Este proyecto es una prueba de concepto fundamental sobre cómo los contratos inteligentes pueden almacenar y manipular el estado, sentando las bases para aplicaciones descentralizadas (dApps) más complejas.<u>Tecnologías Utilizadas:</u> Solidity, Ethereum Virtual Machine (EVM), Remix IDE.",
            see_more_projects: "Ver más proyectos",
            // Technologies
            tech_ruby: "Ruby",
            tech_rails: "Ruby on Rails",
            tech_nodejs: "Node.js",
            tech_nextjs: "Next.js",
            tech_mongodb: "MongoDB",
            tech_postgresql: "PostgreSQL",
            tech_html5: "HTML5",
            tech_css3: "CSS3",
            tech_javascript: "JavaScript",
            tech_bootstrap: "Bootstrap",
            tech_react: "React",
            tech_tailwind: "Tailwind CSS",
            tech_blockchain: "Blockchain",
            tech_web3: "Web 3.0",
            tech_solidity: "Solidity",
            tech_ethereum: "Ethereum",
            tech_crypto: "Crypto",
            tech_smart_contracts: "Smart Contracts",
            // Skills
            skills_title: 'HABILIDADES',
            skills_subtitle: 'Estos son algunas de mis habilidades y tecnologías que manejo, aunque me encuentro continuamente aprendiendo!',
            skill_ruby: "Ruby",
            skill_rails: "Ruby on Rails",
            skill_html5: "HTML5",
            skill_css3: "CSS3",
            skill_javascript: "JavaScript",
            skill_bootstrap: "Bootstrap",
            skill_angular: "AngularJS",
            skill_react: "React",
            skill_nodejs: "Node.js",
            skill_nestjs: "NestJS",
            skill_nextjs: "Next.js",
            skill_postgresql: "PostgreSQL",
            skill_jquery: "jQuery",
            skill_mongodb: "MongoDB",
            skill_vercel: "Vercel",
            skill_vite: "Vite",
            skill_solidity: "Solidity",
            skill_hardhat: "Hardhat",
            // Contact
            contact_title: '¡HABLEMOS!',
            contact_text: '<strong>¡Estoy aquí para ayudarte a hacer realidad tus ideas!</strong> <br> Si tienes un proyecto en mente no dudes en contactarme y juntos podemos llevar tu visión al siguiente nivel.<br>¡Vamos a hacerlo posible!',
            // Footer
            footer_text: 'Cada día aprendo y creo algo nuevo.<br>Juntos podemos hacer que tu visión se materialice y llevarla al siguiente nivel.',
            footer_copyright: '© 2024 María Cecilia Orlando. Todos los derechos reservados.',
            // Blog
            blog_title: 'BLOG',
            blog_article1_title: 'CRIPTOGRAFÍA PARA PRINCIPIANTES: EL ARTE DE LOS SECRETOS DIGITALES EN UN MUNDO CONECTADO 🌐',
            blog_article1_intro: '¿Alguna vez te has preguntado cómo tu mensaje privado llega de forma segura a un amigo a través de Internet? 🤫 ¿O cómo tu banco protege tu dinero cuando realizas una transferencia online? 💰 La respuesta a estas preguntas, y a muchas otras de nuestro mundo digital, se esconde detrás de una ciencia antigua y fascinante: la criptografía. ✨',
            blog_article2_title: '¡EL DINERO DESVELADO: UN VIAJE DESDE EL TRUEQUE HASTA LAS CRIPTOMONEDAS! 🚀',
            blog_article2_intro: '¿Alguna vez te has preguntado por qué el dinero es tan fundamental en nuestras vidas? ¿O cómo llegamos a usar billetes y monedas en lugar de intercambiar gallinas por zapatos? ¡Prepárense para un viaje fascinante a través de la historia del dinero y descubrir por qué estamos en la cúspide de una revolución con las criptomonedas!',
            blog_article3_title: '¡BITCOIN PARA PRINCIPIANTES: DINERO MÁGICO, DIGITAL Y SIN JEFES! 🚀',
            blog_article3_intro: '¿Alguna vez te has preguntado por qué confiamos nuestro dinero a un banco, una entidad que ni siquiera conoces en persona? 🧐 ¿O cómo es posible que enviemos fotos a un amigo en segundos, pero una transferencia internacional tarde días y cueste una fortuna? 💸 ¡Prepárense para cuestionar la base de la confianza digital! En un mundo donde todo es online, las reglas del dinero han cambiado. Te invito a un viaje para desentrañar el misterio de Bitcoin, el dinero digital que funciona sin jefes y que se ha convertido en la base de la nueva economía del internet. ¡Descubre por qué la criptografía es el verdadero superpoder de esta revolución! 🚀',
            blog_article1_read_more: 'Leer más',
            blog_article2_read_more: 'Leer más',
            blog_article3_read_more: 'Leer más',


        }
    };

    const setLanguage = (lang) => {
        console.log('Setting language to:', lang);
        const elements = document.querySelectorAll('[data-key]');
        console.log('Found elements with data-key:', elements.length);
        
        elements.forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (elem.tagName === 'META') {
                    elem.setAttribute('content', translations[lang][key]);
                } else if (elem.tagName === 'IMG' && elem.hasAttribute('alt')) {
                    elem.setAttribute('alt', translations[lang][key]);
                } else {
                    elem.innerHTML = translations[lang][key];
                }
            } else {
                console.log('Translation not found for key:', key, 'in language:', lang);
            }
        });

        // Actualizar el título de la página y las meta tags específicas
        if (translations[lang]) {
            document.title = translations[lang].page_title;

            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', translations[lang].meta_description);
            }

            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', translations[lang].meta_keywords);
            }
        }
        
        localStorage.setItem('language', lang);

        // Actualizar el estado activo de los botones de idioma
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeLangButton = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (activeLangButton) {
            activeLangButton.classList.add('active');
        }
    };

    languageSelector.addEventListener('click', (event) => {
        console.log('Language selector clicked:', event.target);
        const langBtn = event.target.closest('.lang-btn');
        if (langBtn) {
            const lang = langBtn.dataset.lang;
            console.log('Language selected:', lang);
            if (lang) {
                setLanguage(lang);
            }
        }
    });

    // Establecer el idioma inicial (usa 'es' como predeterminado si no hay uno guardado)
    const savedLang = localStorage.getItem('language');
    setLanguage(savedLang || 'es'); // Cambiado a 'es' como predeterminado si no hay guardado

    // Filtrado de proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Estado activo del botón de filtro
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtrar proyectos
            projects.forEach(project => {
                const categories = project.dataset.category.split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});