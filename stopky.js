var loadtime = Date.now();

setInterval(() => {
    let newTime = new Date();
    let dif = new Date(newTime.getTime() - loadtime);
    document.getElementById("cas3").innerText = "Aktuální čas: "+newTime.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' });
}, 1000);

    document.getElementById("cas2").innerText = "Čas strávený na naší stránce: "+dif.toLocaleTimeString('cs-CZ', { timeZone: 'UTC' });



