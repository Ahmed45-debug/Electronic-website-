
alert("Note: This website is a demo project designed and developed by Muhammad Ahmed for portfolio purposes only. Link: own portfolio website");

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
  
  
  /*timer section */
 
  function getResetDate() {
    const stored = localStorage.getItem("promoEndDate");
    const now = new Date();

    if (stored) {
      const endDate = new Date(stored);
      if (now < endDate) return endDate;
    }

    const newEndDate = new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000);
    localStorage.setItem("promoEndDate", newEndDate.toISOString());
    return newEndDate;
  }

  const endDate = getResetDate();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate.getTime() - now;

    if (distance <= 0) {
      localStorage.removeItem("promoEndDate");
      location.reload(); // Restart the cycle
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }

  setInterval(updateTimer, 1000);
  updateTimer();
  
  
  /*catagories*/
   const buttons = document.querySelectorAll('.nav-btn');
    const section = document.getElementById('content-section');
    const text = document.getElementById('section-text');
    const imagesContainer = document.getElementById('images-container');

    const contents = [
      {
        text: "Explore latest Mobile Phones.",
        images: ["mobiles.jpg", "mobiles1.png", "mobile2.jpg"]
      },
      {
        text: "Shop high-performance Laptops.",
        images: ["loptops.jpg", "laptop 1.jpg", "laptop2.jpg"]
      },
      {
        text: "Discover powerful Computers.",
        images: ["computer.jpg", "computer1.jpg", "computer2.jpg"]
      }
    ];

    function setActive(index) {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.style.backgroundColor = "#ccc";
      });

      const activeBtn = buttons[index];
      const color = activeBtn.dataset.color;

      activeBtn.classList.add('active');
      activeBtn.style.backgroundColor = color;
      section.style.backgroundColor = color;
      text.textContent = contents[index].text;

      // Clear old images
      imagesContainer.innerHTML = "";

      // Add new images
      contents[index].images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Product Image";
        imagesContainer.appendChild(img);
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const index = btn.dataset.index;
        setActive(index);
      });
    });

    window.addEventListener('DOMContentLoaded', () => {
      setActive(0);
    });