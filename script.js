function revealOnScroll() {
    const elements = document.querySelectorAll('.animate-fade, .animate-zoom');
    const trigger = window.innerHeight * 0.9;
  
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // чек-апы — показать/скрыть
  function toggleCheckups() {
    const container = document.getElementById('checkup-list');
    container.classList.toggle('hidden');
    if (!container.classList.contains('hidden')) {
      setTimeout(() => {
        const cards = document.querySelectorAll('.checkup-card');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), i * 150);
        });
      }, 100);
    }
  }
  
  // добавить чек-апы
  window.addEventListener('DOMContentLoaded', () => {
    const checkups = [
      { title: 'GOLD Чек-ап — Мужчины', desc: '4 осмотра, 32 анализа, 2 радиологии, 2 кардио', price: '600 USD' },
      { title: 'GOLD Чек-ап — Женщины до 40', desc: '4 осмотра, 33 анализа, 3 радиологии, 2 кардио, 1 патология', price: '600 USD' },
      { title: 'GOLD Чек-ап — Дети', desc: '5 осмотров, 19 анализов, 2 радиологии', price: '500 USD' },
      { title: 'GOLD Premium — Женщины 40+', desc: '10 осмотров, 58 анализов, 9 радиологии, 3 кардио, 1 патология', price: '2000 USD' },
      { title: 'Чек-ап для руководителей', desc: '6 осмотров, 43 анализа, 5 радиологии, 3 кардио', price: '1600 USD' }
    ];
  
    const list = document.getElementById('checkup-list');
    if (list) {
      checkups.forEach(item => {
        const card = document.createElement('div');
        card.className = 'checkup-card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p><p><strong>${item.price}</strong></p>`;
        list.appendChild(card);
      });
    }
  });
  
  // раскрытие преимущества
  function toggleDetail(el) {
    el.classList.toggle('active');
  }
  
  // открытие формы
  function openContactForm() {
    alert('Пожалуйста, отправьте диагноз через WhatsApp, и мы свяжемся с вами.');
  }

  function toggleAccordion(header) {
    const item = header.parentElement;
    item.classList.toggle('active');
  }

  const images = [
    'images/photo1.png',
    'images/photo2.webp',
    'images/photo3.webp',
    'images/photo4.webp',
    'images/photo5.webp',
    'images/photo6.jpg',
    'images/photo7.jpg',
    'images/photo8.webp',
    'images/photo9.jpg',
    'images/photo10.webp'
  ];
  
  let current = 0;
  
  const imageElement = document.getElementById('carousel-image');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  
  function changeImage(index) {
    imageElement.classList.add('fade-out');
    setTimeout(() => {
      imageElement.src = images[index];
      imageElement.classList.remove('fade-out');
    }, 300); // время должно быть чуть меньше transition
  }
  
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    changeImage(current);
  });
  
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    changeImage(current);
  });
  