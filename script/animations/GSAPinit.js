document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".navbar", {
    opacity: 0,
    y: -100,
    duration: 2.8,
    ease: "power4.out"
  });

  gsap.from(".navbar-left", {
    opacity: 0,
    y: -50,
    duration: 2.4,
    ease: "power4.out"
  });

  gsap.from(".home-title", {
    y: -50,
    opacity: 0,
    duration: 2.2,
    ease: "expo.out"
  });

  gsap.from(".home-subtitle", {
    y: 50,
    opacity: 0,
    duration: 2.2,
    delay: 0.4,
    ease: "expo.out"
  });

  gsap.from(".slider-wrapper", {
    scrollTrigger: {
      trigger: ".slider-wrapper",
      start: "top 85%",
      once: true
    },
    opacity: 0,
    y: 60,
    duration: 2.4,
    ease: "power4.out"
  });

  gsap.from(".feature-item", {
    scrollTrigger: {
      trigger: ".features",
      start: "top 80%",
      once: true
    },
    y: 30,
    opacity: 0,
    duration: 1.8,
    ease: "power2.out",
    stagger: 0.25
  });

  gsap.from(".about-text h2", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      once: true
    },
    x: -50,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
  });

  gsap.from(".about-text p", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
      once: true
    },
    x: 50,
    opacity: 0,
    duration: 1.4,
    delay: 0.2,
    ease: "power3.out"
  });

  gsap.from(".about-image img", {
    scrollTrigger: {
      trigger: ".about-image",
      start: "top 80%",
      once: true
    },
    scale: 0.85,
    opacity: 0,
    duration: 1.4,
    ease: "back.out(1.7)"
  });

  document.querySelectorAll(".gallery img").forEach((img, index) => {
    gsap.fromTo(img, {
      opacity: 0,
      y: 30
    }, {
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
        toggleActions: "play none none reverse",
        once: true
      },
      opacity: 1,
      y: 0,
      duration: 2.0,
      delay: index * 0.2,
      ease: "power4.out"
    });
  });

  gsap.utils.toArray([
    ".img-big-circle",
    ".img-horizontal-rect",
    ".img-rounded-rect",
    ".img-small-rect",
    ".img-small-circle"
  ]).forEach((selector) => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        once: true
      },
      opacity: 0,
      y: 60,
      duration: 1.8,
      ease: "power4.out"
    });
  });

  gsap.from(".text-column h2", {
    scrollTrigger: {
      trigger: ".text-column",
      start: "top 85%",
      once: true
    },
    y: 40,
    opacity: 0,
    duration: 1.6,
    ease: "power4.out"
  });

  gsap.from(".text-column p", {
    scrollTrigger: {
      trigger: ".text-column",
      start: "top 85%",
      once: true
    },
    y: 40,
    opacity: 0,
    duration: 1.6,
    delay: 0.3,
    stagger: 0.3,
    ease: "power4.out"
  });

  document.querySelectorAll(".faq-item").forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none reverse",
        once: true
      },
      opacity: 0,
      y: 100,
      duration: 1.4,
      ease: "power3.out"
    });
  });

  gsap.from(".contact-title", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 85%",
      once: true
    },
    opacity: 0,
    y: 40,
    duration: 1.8,
    ease: "power3.out"
  });

  gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
    scrollTrigger: {
      trigger: ".contact-form",
      start: "top 85%",
      once: true
    },
    opacity: 0,
    y: 40,
    duration: 1.8,
    stagger: 0.3,
    ease: "power3.out"
  });

  gsap.from(".contact-info p", {
    scrollTrigger: {
      trigger: ".contact-info",
      start: "top 85%",
      once: true
    },
    opacity: 0,
    y: 30,
    duration: 1.6,
    stagger: 0.3,
    ease: "power3.out"
  });

  gsap.from(".footer-column", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      once: true
    },
    opacity: 0,
    y: 50,
    duration: 1.6,
    stagger: 0.35,
    ease: "power3.out"
  });

  gsap.from(".footer-bottom", {
    scrollTrigger: {
      trigger: ".footer-bottom",
      start: "top 98%",
      once: true
    },
    opacity: 0,
    y: 30,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(".our-products .section-title", {
    scrollTrigger: {
      trigger: ".our-products",
      start: "top 95%",
      once: true
    },
    opacity: 0,
    y: 20,
    duration: 1.4,
    ease: "power4.out"
  });

  gsap.from(".product-card", {
    scrollTrigger: {
      trigger: ".our-products .section-title",
      start: "bottom 90%",
      once: true
    },
    opacity: 0,
    y: 40,
    duration: 1.6,
    ease: "power4.out",
    stagger: 0.3
  });

  gsap.from(".testimonial-section .section-title", {
    scrollTrigger: {
      trigger: ".testimonial-section .section-title",
      start: "top 85%",
      once: true
    },
    opacity: 0,
    y: 60,
    duration: 1.6,
    ease: "power4.out"
  });

  document.querySelectorAll(".testimonial-card").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        once: true
      },
      opacity: 0,
      y: 60,
      duration: 1.6,
      ease: "power4.out"
    });
  });

  gsap.from(".gallery-section h2", {
    scrollTrigger: {
      trigger: ".gallery-section h2",
      start: "top 90%",
      once: true
    },
    opacity: 0,
    y: 40,
    duration: 1.6,
    ease: "power4.out"
  });
});