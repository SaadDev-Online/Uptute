const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header .navbar");
const closeNavbar = document.querySelector("#close-navbar");
const registerBtn = document.querySelector(".account-form .register-btn");
const loginBtn = document.querySelector(".account-form .login-btn");
const registerForm = document.querySelector(".account-form .register-form");
const loginForm = document.querySelector(".account-form .login-form");
const accountBtn = document.querySelector("#account-btn");
const accountForm = document.querySelector(".account-form");
const closeForm = document.querySelector("#close-form");
const loadMore = document.querySelector(".load-more .btn");
const hide = document.querySelectorAll(".courses .box-container .hide");
const accordion = document.querySelectorAll(".faq .accordion-container .accordion");

menuBtn.onclick = () => {
    navbar.classList.add("active");
}

closeNavbar.onclick = () => {
    navbar.classList.remove("active");
}

registerBtn.onclick = () => {
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
};

loginBtn.onclick = () => {
    registerBtn.classList.remove("active");
    loginBtn.classList.add("active");
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
}

accountBtn.onclick = () => {
    accountForm.classList.add("active");
}

closeForm.onclick = () => {
    accountForm.classList.remove("active");
}

var swiper = new Swiper('.home-slider', {
    loop: true, // Enables looping of slides
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // 3 seconds between slides
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".home-courses-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 3000, // 3 seconds between slides
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".subjects .box-container", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // 3 seconds between slides
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".teachers-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(dion => {
            dion.classList.remove("active");
        })
        acco.classList.toggle("active");
    }
})

if (loadMore) {
    loadMore.onclick = () => {
        if (hide.length > 0) {
            hide.forEach(show => {
                show.style.display = "block"; // Make hidden elements visible
            });
        }
        loadMore.style.display = "none"; // Hide the "Load More" button after click
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.about .content .icons-container .icons h3'); // all counters
    const duration = 2000; // 2 seconds

    const animateCounter = (counter) => {
        const targetText = counter.textContent.replace(/\D/g, ''); // remove non-numeric
        const targetNumber = parseInt(targetText);
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increment = targetNumber / steps;
        let currentNumber = 0;

        const interval = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(interval);
            }
            counter.textContent = Math.floor(currentNumber).toLocaleString() + (counter.textContent.includes('+') ? '+' : '');
        }, intervalTime);
    };

    const observerOptions = {
        root: null, // viewport
        threshold: 0.5 // trigger when 50% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // stop observing once animated
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
});

document.addEventListener("DOMContentLoaded", function () {

    // Custom popup
    function showAlert(message) {
        document.getElementById("alertMessage").innerText = message;
        document.getElementById("customAlert").style.display = "flex";
    }

    function closeAlert() {
        document.getElementById("customAlert").style.display = "none";
    }

    window.closeAlert = closeAlert;

    /* NEWSLETTER FORM */
    const form = document.getElementById("newsletterForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (form.checkValidity()) {
            showAlert("🎉 Congratulations, you have successfully subscribed to our newsletter!");
            form.reset();
        } else {
            showAlert("❌ Please enter a valid email.");
        }
    });
});