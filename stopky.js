var loadtime = Date.now();

setInterval(() => {
    let newTime = new Date();
    let dif = new Date(newTime.getTime() - loadtime);
    document.getElementById("cas").innerText = dif.toLocaleTimeString('cs-CZ', { timeZone: 'UTC' });

    document.getElementById("cas2").innerText = newTime.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' });
}, 1000);