const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Si el elemento es visible, añade la clase 'active'
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.2 // Se activa cuando el 10% del elemento es visible
});

// Seleccionamos todos los elementos con la clase .reveal y los observamos
const elementos = document.querySelectorAll('.reveal');
elementos.forEach((el) => observer.observe(el));