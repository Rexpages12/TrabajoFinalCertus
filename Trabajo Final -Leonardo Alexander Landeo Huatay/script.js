document.addEventListener("DOMContentLoaded", function () {
    // Efecto de escritura en el título
    const text = "Bienvenido a mi Portafolio";
    let index = 0;
    const typingElement = document.getElementById("typing-text");

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // Suaviza el desplazamiento al hacer clic en los enlaces del menú
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Fondo dinámico con líneas conectadas en toda la página
    const canvas = document.getElementById("animatedCanvas");
    const ctx = canvas.getContext("2d");
    let width, height;
    let points = [];

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        points = [];

        for (let i = 0; i < 50; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5
            });
        }
    }

    function updateCanvas() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < points.length; i++) {
            let p = points[i];

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.fillStyle = "rgba(255, 255, 255, 0.52)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < points.length; j++) {
                let p2 = points[j];
                let distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 120})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(updateCanvas);
    }

    window.addEventListener("resize", initCanvas);
    initCanvas();
    updateCanvas();
});



document.addEventListener("DOMContentLoaded", function () {
    // Efecto de escritura en el título
    const text = "Bienvenido a mi Portafolio";
    let index = 0;
    const typingElement = document.getElementById("typing-text");

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // Suaviza el desplazamiento al hacer clic en los enlaces del menú
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animación de habilidades al hacer scroll
    const skills = document.querySelectorAll(".skill");

    function showSkills() {
        const windowHeight = window.innerHeight;
        
        skills.forEach(skill => {
            const skillPosition = skill.getBoundingClientRect().top;
            
            if (skillPosition < windowHeight - 50) {
                skill.style.opacity = "1";
                skill.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", showSkills);
    showSkills(); // Llamar una vez para mostrar las habilidades si ya están en pantalla

    // Fondo animado con líneas conectadas
    const canvas = document.getElementById("animatedCanvas");
    const ctx = canvas.getContext("2d");
    let width, height;
    let points = [];

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        points = [];

        for (let i = 0; i < 50; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5
            });
        }
    }

    function updateCanvas() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < points.length; i++) {
            let p = points[i];

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < points.length; j++) {
                let p2 = points[j];
                let distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 120})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(updateCanvas);
    }

    window.addEventListener("resize", initCanvas);
    initCanvas();
    updateCanvas();
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Ejecutar al cargar la página
});



document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        status.textContent = "Por favor, completa todos los campos.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Mensaje enviado correctamente.";
    status.style.color = "green";

    // Simulación de envío
    setTimeout(() => {
        document.getElementById("contact-form").reset();
        status.textContent = "";
    }, 2000);
});


document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add("active");
    }

    setInterval(showNextTestimonial, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-fill");

    function animateSkills() {
        skillBars.forEach(skill => {
            skill.style.width = skill.getAttribute("style").split(":")[1];
        });
    }

    setTimeout(animateSkills, 500);
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});


document.addEventListener("DOMContentLoaded", function () {
    // Efecto de escritura en el título
    const text = "Bienvenido a mi Portafolio";
    let index = 0;
    const typingElement = document.getElementById("typing-text");

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // Suaviza el desplazamiento al hacer clic en los enlaces del menú
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animación de aparición de secciones al hacer scroll
    const sections = document.querySelectorAll(".fade-in-up");

    function revealSections() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("form-status");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            statusMessage.textContent = "Por favor, completa todos los campos.";
            statusMessage.style.color = "red";
            return;
        }

        statusMessage.textContent = "Mensaje enviado correctamente.";
        statusMessage.style.color = "green";

        // Simulación de envío con retraso
        setTimeout(() => {
            form.reset();
            statusMessage.textContent = "";
        }, 2000);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Efecto de escritura en el título
    const text = "Bienvenido a mi Portafolio";
    let index = 0;
    const typingElement = document.getElementById("typing-text");

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    typeText();

    // Suaviza el desplazamiento al hacer clic en los enlaces del menú
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animación de aparición de secciones al hacer scroll
    const sections = document.querySelectorAll(".fade-in-up");

    function revealSections() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // Animación de habilidades al hacer scroll
    const skills = document.querySelectorAll(".skill");

    function showSkills() {
        const windowHeight = window.innerHeight;

        skills.forEach(skill => {
            const skillPosition = skill.getBoundingClientRect().top;

            if (skillPosition < windowHeight - 50) {
                skill.style.opacity = "1";
                skill.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", showSkills);
    showSkills();

    // Efecto de hover en botones de proyectos
    const projectButtons = document.querySelectorAll(".project-btn");

    projectButtons.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.1)";
            button.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.6)";
        });

        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Validación del formulario de contacto
    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("form-status");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            statusMessage.textContent = "Por favor, completa todos los campos.";
            statusMessage.style.color = "red";
            return;
        }

        statusMessage.textContent = "Mensaje enviado correctamente.";
        statusMessage.style.color = "green";

        // Simulación de envío con retraso
        setTimeout(() => {
            form.reset();
            statusMessage.textContent = "";
        }, 2000);
    });

    // Fondo animado con líneas conectadas
    const canvas = document.getElementById("animatedCanvas");
    const ctx = canvas.getContext("2d");
    let width, height;
    let points = [];

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        points = [];

        for (let i = 0; i < 50; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5
            });
        }
    }

    function updateCanvas() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < points.length; i++) {
            let p = points[i];

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();

            for (let j = i + 1; j < points.length; j++) {
                let p2 = points[j];
                let distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 120})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(updateCanvas);
    }

    window.addEventListener("resize", initCanvas);
    initCanvas();
    updateCanvas();
});
