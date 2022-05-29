var loadtime = Date.now();

setInterval(() => {
    let newTime = new Date();
    let dif = new Date(newTime.getTime() - loadtime);
    document.getElementById("cas3").innerText = "Aktuální čas: "+dif.toLocaleTimeString('cs-CZ', { timeZone: 'UTC' });

    document.getElementById("cas2").innerText = "Čas strávený na naší stránce: "+newTime.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' });
}, 1000);
