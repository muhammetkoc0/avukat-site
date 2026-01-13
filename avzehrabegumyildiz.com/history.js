// time line //
const milestones = {
    
    "2023": "Yıldız hukuk bürosu öğrenci ",
    "2024": "keser & keser law firm stajyer",
    "2025": "Avukatlık Ruhsat Töreni",
    "2026": "Serbest avukatlık"
  };
  
  const yearElements = document.querySelectorAll('.year');
  const milestoneBox = document.getElementById('milestoneBox');
  
  yearElements.forEach(year => {
    year.addEventListener('click', () => {
      // Remove 'active' class from all
      yearElements.forEach(y => y.classList.remove('active'));
  
      // Add to clicked one
      year.classList.add('active');
  
      // Update milestone text
      const yearValue = year.getAttribute('data-year');
      milestoneBox.innerText = milestones[yearValue];
      milestoneBox.style.display = 'block';
    });
  });