document.getElementById('downloadBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'snehithresume.pdf'; // Replace with actual PDF path
  link.download = 'snehithresume.pdf';
  link.click();
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});