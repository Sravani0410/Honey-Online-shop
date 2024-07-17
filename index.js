document.addEventListener("DOMContentLoaded", function() {
    const aboutText = document.getElementById("about-text");
    const moreBtn = document.getElementById("more-btn");
  
    moreBtn.addEventListener("click", function() {
      if (aboutText.classList.contains("expanded")) {
        aboutText.classList.remove("expanded");
        aboutText.textContent = aboutText.dataset.fullText.substring(0, 350) + "...";
        moreBtn.querySelector("span").textContent = "More";
      } else {
        aboutText.classList.add("expanded");
        aboutText.textContent = aboutText.dataset.fullText;
        moreBtn.querySelector("span").textContent = "Less";
      }
    });
  });
  
//   document.addEventListener("DOMContentLoaded", function() {
//     const beautyText = document.getElementById("beauty-text");
//     const moreBtn = document.getElementById("more-btn");
  
//     moreBtn.addEventListener("click", function() {
//       if (beautyText.classList.contains("expanded")) {
//         beautyText.classList.remove("expanded");
//         beautyText.textContent = beautyText.dataset.fullText.substring(0, 350) + "...";
//         moreBtn.querySelector("span").textContent = "More";
//       } else {
//         beautyText.classList.add("expanded");
//         beautyText.textContent = beautyText.dataset.fullText;
//         moreBtn.querySelector("span").textContent = "Less";
//       }
//     });
//   });
  