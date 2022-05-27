var loadtime = Date.now();

setInterval(() => {
    let newTime = new Date();
    let dif = new Date(newTime.getTime() - loadtime);
    document.getElementById("cas").innerText = dif.toLocaleTimeString('cs-CZ', { timeZone: 'UTC' });

    document.getElementById("cas2").innerText = newTime.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' });
}, 1000);


let slideIndex = 0;
zmena();

function zmena() {
  let i;
  let slides = document.getElementsByClassName("slidy");
  let tecky = document.getElementsByClassName("tecka");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < tecky.length; i++) {
    tecky[i].className = tecky[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  tecky[slideIndex-1].className += " active";
  setTimeout(zmena, 2000);
}