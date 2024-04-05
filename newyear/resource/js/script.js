
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const snowflakesContainer = document.querySelector(".snowflakes");

  // 添加更多的雪花元素，根据需要调整数量
  for (let i = 0; i < 15; i++) {
    createSnowflake();
  }

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 10+ 3}s`;
    snowflakesContainer.appendChild(snowflake);


  }
});
