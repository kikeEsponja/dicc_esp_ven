const phrases = {
    "Amigo": "Pana",
    "Delator": "Pajúo",
    "Pertenencias": "Macundales",
    "Debes elegir": "Deja el culipandeo",
    "Flojera": "Caligüeva",
    "Es una molestia": "Es una ladilla",
    "Es una situacion confusa": "Es un arroz con mango",
    "Se salió de control": "Se formó un cojeculo",
    "Me vengare": "Lo agarro en la bajaíta",
    "Eso está buenisimo": "Está arrecho",
    "Eso está muy bueno": "Eso está de pinga",
    "Usted es un atrevido": "Tú si eres arrecho",
    "Usted es muy bueno en lo que hace": "Usted es un arrecho",
    "Está muy difícil": "Eso está arrecho",
    "Está molesto": "Está arrecho",
    "Eres un mentiroso": "Eres mojonero",
    "Eres un miedoso": "Eres un culillúo",
    "Niño inquieto": "Muchacho er coño",
    "Niño": "Guaricho",
    "Chico": "Chamo / Chama",
    "Nicolás Maduro": "El coño e tu madre!",
    "Persona de alto rango": "El chivo que más mea",
    "Persona de alto intelecto": "Caja de machete",
    "Esforzarse": "Echarle pichón / Echarle bola",
    "Le pusiste empeño / Lo lograste": "Le echaste bolas",
    "Persona con contactos": "Enchufao",
    "Creído": "Mojoniao",
    "Despistado": "Aguevoniao",
    "No te lo permitiré": "Me lo vas a mamar",
    "Usted está equivocado": "Está meando fuera del perol",
    "Te ha quedado muy bien": "Te quedó de pinga / Te la comiste",
    "Se fue muy rápido": "Dejó la peluca",
    "Corre muy rapido": "Va esmojonao",
    "Tiene gestos amanerados": "Tiene un meneíto raro / está rullío 'e ratón",
    "Es homosexual": "Es marico / Es pargo",
    "Toma las cosas con seriedad": "Deja la guachafita",
    "Espero que eso no suceda": "Sape gato",
    "No toque eso": "Jorúngate el culo",
    "Préstame atencion": "Párame bola",
    "Eso está muy lejos": "Eso queda en el quinto coño",
    "Eso está muy junto": "Eso está amuñuñao",
    "No te creo nada": "Siiii Luiiis",
    "Se hace el desentendido": "Se hace el loco / Se hace el Willie Mays",
    "Anda a molestar a otro lugar": "Zapatea pa otro lado",
    "Estoy cansado": "Estoy mamao",
    "Estoy harto": "Sácamelo",
    "Otra vez con lo mismo?": "Vas a seguir Abigail?",
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