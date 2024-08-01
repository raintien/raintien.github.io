const follower = document.querySelector(".follower");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  follower.style.left = x + "px";
  follower.style.top = y + "px";
});