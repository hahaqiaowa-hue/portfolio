const revealTargets = document.querySelectorAll(
  [
    ".hero-heading",
    ".cover-card",
    ".project-section .section-head",
    ".project-cover",
    ".project-summary",
    ".detail-card",
    ".project-01-side-mini",
    ".project-01-side-image",
    ".storyboard-panel",
    ".storyboard-shot",
    ".gallery-tile",
    ".about-copy"
  ].join(", ")
);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => {
    target.classList.add("reveal-on-scroll", "is-visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal-on-scroll");
    target.style.setProperty("--reveal-delay", `${Math.min(index * 24, 180)}ms`);
    revealObserver.observe(target);
  });
}
