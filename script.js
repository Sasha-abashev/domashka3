

const images = document.querySelectorAll(".container img.lazy")
console.log(images)

const onEntry = (elements,observer) => {
    elements.forEach(element => {
        console.log(element)
        if (element.isIntersecting) {
          const img = element.target;
          const src = img.getAttribute("data-src");
          img.src = src;
          observer.unobserve(img);
        }
    });
}

const observer = new IntersectionObserver(onEntry, {threshold: 0.5})

images.forEach(img => {
    observer.observe(img)
})

