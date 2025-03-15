
export const initScrollAnimation = () => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.1,
  });

  const animatedElements = document.querySelectorAll(
    '.fade-up, .fade-right, .fade-left, .scale-up, .stagger-item'
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};
