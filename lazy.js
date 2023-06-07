const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const action = (entry) => {
  const image = entry.target;
  image.addEventListener("load", () => {
    image.classList.remove('bg-gray-300', 'w-full', 'h-64');
  });
  image.src = image.dataset.src;
  observer.unobserve(image);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(action);
});

export const registerImage = (image) => {
  // Intersetion
  observer.observe(image);
};
