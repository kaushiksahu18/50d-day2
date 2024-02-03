const previus = document.getElementById("previus");
const next = document.getElementById("next");
const progress_bar_filler = document.getElementById("progress-bar-filler");
const head = document.getElementsByTagName("head")[0];
const style = document.createElement("style");
head.appendChild(style);

let count = 1;

const haha = () => {
  if (count === 1) {
    previus.disabled = true;
    previus.style.cursor = "not-allowed";
  } else if (count === 5) {
    next.disabled = true;
    previus.style.cursor = "not-allowed";
  } else {
    previus.disabled = false;
    next.disabled = false;
    previus.style.pointerEvents = "auto";
    next.style.pointerEvents = "auto";
  }
};

previus.addEventListener("click", () => {
  if (count > 1 && count <= 5) {
    count--;
    const page_cover = document.getElementById(`page-index-cover-${count + 1}`);
    page_cover.classList.remove("bg-sky-600");
    page_cover.classList.add("bg-gray-300");
    style.innerHTML = `.now{width: ${(count - 1) * 25}%; transition: width 0.4s ease-in-out;}`;
    progress_bar_filler.classList.add("now");
  }
  haha();
});
next.addEventListener("click", () => {
  if (count >= 1 && count <= 5) {
    count++;
    const page_cover = document.getElementById(`page-index-cover-${count}`);
    page_cover.classList.remove("bg-gray-300");
    page_cover.classList.add("bg-sky-600");
    style.innerHTML = `.now{width: ${(count - 1) * 25}%; transition: width 0.4s ease-in-out;}`;
    progress_bar_filler.classList.add("now");
  }
  haha();
});
