console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
  const subtitleElement = document.getElementById("subtitle");
  const originalText = "< FULL STACK SOFTWARE ENGINEER />";
  let index = 0;
  subtitleElement.textContent = "";
  subtitleElement.style.height = "2em";
  subtitleElement.style.visibility = "visible";

  function type() {
    if (index < originalText.length) {
      subtitleElement.textContent += originalText.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  setTimeout(type, 500);

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const sections = document.querySelectorAll(
    ".content-section, .sidebar-section"
  );

  sections.forEach((section) => {
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

    gsap.fromTo(
      section,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleClass: "visible",
          once: true,
        },
      }
    );
  });

  // Timeline items animation
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item, index) => {
    gsap.fromTo(
      item,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.2 * index,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
      }
    );
  });

  // Timeline line drawing animation
  if (document.querySelector(".timeline")) {
    gsap.fromTo(
      ".timeline::before",
      {
        height: 0,
      },
      {
        height: "100%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 80%",
          once: true,
        },
      }
    );
  }

  gsap.fromTo(
    ".hero-text",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  );

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (!element) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY: 50 },
      ease: "power3.inOut",
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"));
    });
  });

  const skillTags = document.querySelectorAll(".skill-tag");
  skillTags.forEach((tag) => {
    tag.addEventListener("mouseover", function () {
      this.style.transition = "all 0.3s ease";
    });
  });

  console.log("Enhanced script loaded");
});
