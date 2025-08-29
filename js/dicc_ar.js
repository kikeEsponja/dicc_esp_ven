const phrases = {
    "Flojera": "Fiaca",
    "Eso está buenisimo": "Está piola",
    "Usted es muy bueno en lo que hace": "sos un grosso",
    "Niño": "Pendejo",
    "Chico": "Pibe / Piba",
    "Persona de alto rango": "Capo",
    "Esforzarse": "Ponerle garra",
    "Préstame atencion": "Dame bola",
}

let boton = document.createElement("button");
for (const [key, value] of Object.entries(phrases)) {
    boton = document.createElement("button");
    boton.id = key;
    // insertar texto de objeto frases en el boton.
    boton.innerText = key;
    document.querySelector(".botones").appendChild(boton);
}

Object.keys(phrases).forEach(id => {
    document.getElementById(id).addEventListener('click', () => {
        document.getElementById('resultado').innerText = phrases[id];
    });
});