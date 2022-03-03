document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})

window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 4000);
  };
  
  document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });
  
  document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });
  