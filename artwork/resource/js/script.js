const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
const carousel = document.querySelector('.carousel');
let allowClick = true;

// 阻止拖動圖片和連結的預設行為
items.forEach((item) => {
  const images = item.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
  });
});

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active', 'left', 'right');
    
    if (index === currentIndex) {
      item.classList.add('active');
    } else if (index === (currentIndex - 1 + items.length) % items.length) {
      item.classList.add('left');
    } else {
      item.classList.add('right');
    }
  });
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function touchStart(index) {
  return function (event) {
    isDragging = true;
    allowClick = true; // 初始時允許點擊
    startPos = getPositionX(event);
    carousel.style.cursor = 'grabbing';
    animationID = requestAnimationFrame(animation);
  }
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;

    // 如果移動超過一定距離，禁用點擊事件
    if (Math.abs(currentTranslate - prevTranslate) > 10) {
      allowClick = false;
    }
  }
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100) {
    currentIndex = (currentIndex + 1) % items.length;
  }

  if (movedBy > 100) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
  }

  setPositionByIndex();
  carousel.style.cursor = 'grab';
}

function setPositionByIndex() {
  currentTranslate = 0;
  prevTranslate = 0;
  updateCarousel();
}

function animation() {
  requestAnimationFrame(animation);
}

// 監聽超連結的點擊事件
items.forEach((item, index) => {
  const touchStartEvent = touchStart(index);
  item.addEventListener('mousedown', touchStartEvent);
  item.addEventListener('touchstart', touchStartEvent);
  
  item.addEventListener('mousemove', touchMove);
  item.addEventListener('touchmove', touchMove);

  item.addEventListener('mouseup', touchEnd);
  item.addEventListener('touchend', touchEnd);

  item.addEventListener('mouseleave', touchEnd);

  // 禁用滑動時的點擊事件
  item.addEventListener('click', function (e) {
    if (!allowClick) {
      e.preventDefault();
    }
  });
});

// 初始化
updateCarousel();
