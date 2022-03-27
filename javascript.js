console.log("Hello!");

window.addEventListener("DOMContentLoaded", init);

function init() {
  loadData();
}

async function loadData() {
  const response = await fetch(
    "https://abarela.dk/Re-create/re-create_bikes/wp-json/wp/v2/bike?_embed"
  );
  console.log("response", response);

  const showBikes = await response.json();

  displayBike(showBikes);
}

async function displayBike(bike) {
  console.log(bike);
  bike.forEach((bike) => {
    const template = document.querySelector("#tcard").content;
    const copy = template.cloneNode(true);

    /* console.log("hej"); */

    copy.querySelector("img").src =
      bike._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium_large.source_url;

    copy.querySelector(".bikename1").textContent = bike.bikename;
    copy.querySelector(".price1").textContent = bike.price1;
    copy.querySelector(".price2").textContent = bike.price2;

    copy.querySelector(".stock1").textContent = bike.stock1;
    copy.querySelector(".stock2").textContent = bike.stock2;

    copy.querySelector(".colorno").textContent = bike.colorno;
    copy.querySelector(".colorblack").textContent = bike.colorblack;
    copy.querySelector(".colorcream").textcontent = bike.colorcream;
    copy.querySelector(".colorred").textContent = bike.colorred;
    copy.querySelector(".colorblue").textContent = bike.colorblue;
    copy.querySelector(".colorgreen").textContent = bike.colorgreen;

    const parent = document.querySelector("section");
    parent.appendChild(copy);
  });
}
