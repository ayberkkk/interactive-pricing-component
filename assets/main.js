let pg = document.getElementById("pageViews");
let cost = document.getElementById("cost");
let cost2 = document.getElementById("cost2");
let price_slider = document.getElementById("price__slider");
let bill_toggle = document.getElementById("billing__toggle");
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

price_slider.value = 2;
pg.innerHTML = pageViews[price_slider.value];

updateValue(); // İlk açıldığında cost ve cost2 öğelerinin varsayılan değerini ayarlamak için eklendi.

price_slider.addEventListener("input", function () {
  updateValue();
  pg.innerHTML = pageViews[price_slider.value];

  let value = this.value * 25;

  this.style.background = `linear-gradient(to right,
              hsl(174, 77%, 80%) 0%,
              hsl(174, 77%, 80%) ${value}%,
              hsl(224, 65%, 95%) 0%,
              hsl(224, 65%, 95%) 100%)`;
});

bill_toggle.addEventListener("change", function () {
  if (isYearly == false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updateValue();
});

function updateValue() {
  if (isYearly) {
    cost.innerHTML = perMonth[price_slider.value] * 0.75;
    cost2.innerHTML = perMonth[price_slider.value] * 0.75;
  } else {
    cost.innerHTML = perMonth[price_slider.value];
    cost2.innerHTML = perMonth[price_slider.value];
  }
}
