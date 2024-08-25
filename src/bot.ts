import dotenv from 'dotenv';
import { Bot } from "grammy";

dotenv.config();
// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env.TOKEN_CABALLERISTICO + ''); // <-- put your bot token between the ""
//console.log("Bot is running", process.env.TOKEN_CABALLERISTICO);

bot.command("start", (ctx) => ctx.reply("¿Que pasa caballerex?"));

bot.hears([
    "di lo tuyo salcedo",
    "Di lo tuyo salcedo",
    "di lo tuyo Emmanuel",
    "Di lo tuyo Emmanuel",
    "di lo tuyo Salcedo",
    "Di lo tuyo Salcedo",
    "di lo tuyo emmanuel",
    "Di lo tuyo emmanuel",
    "di lo tuyo Salcedinho",
    "Di lo tuyo Salcedinho",
    "di lo tuyo salcedinho",
    "Di lo tuyo salcedinho",
    "Emmanuel di lo tuyo",
    "Salcedo di lo tuyo",
    "Salcedinho di lo tuyo",
    "emmanuel di lo tuyo",
    "salcedo di lo tuyo",
    "salcedinho di lo tuyo",
], async (ctx) => {

    const randomPhareses = [
        "En efecto Hector es el ejemplo de que si no es necesario quitarse las cordales si no te andas muriendo de ello",
        "Y yo ª",
        "Mrc es que la lavadita, cafe, una toalla.caliente para luego afeitarse",
        "Yo veo a Hector dando clases a los de derecho",
        "Caballerex",
        "Huele boxer",
        "Vamos contra unos huele boxer",
        "EPAAAAAAAAAAAAAAAAAA",
        "Lo volvi mi mascota",
        "Ya me tenian con dolor de coco los de la embajada",
        "No he ni estudiado io",
        "Somos backend, nos gusta el Elastic 🎵🎺",
        "FALSOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        "FA FA FA FA FA FA FA FA FA FALSOOOO",
        "GOL GOL GOL GOL",
        "MI INTERNET NO SIRVEEEEE",
        "Eres cara de culo",
        "30109748\nBanco de venezuela\n04129497968",
        "ELASTICSEEEEEEEEEEEEEEEEEEEEEEEEERCH",
        "COCOCOCOÑOOOOOOOOOOOO CABALLEROOOOO PASE PA CA",
        "ESA GENTE SON UNOS FALSOOOOOOOOOOOOOS",
        "Y no invitan",
        "¿Como asi caballero?",
        "el backend.",
        "Sexo",
        "😳😳😳",
        "CABALLEROOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        "Como asi caballerooooo",
        "TA LOCOOOOOOOOOOOO",
        "Eso es falso caballero",
        "eu falo portuguêsinhoou",
        "Eu sou um bot muito engraçado",
        "Você é um cavalheiro engraçado",
        "É o que acontece por não me convidar para festas.",
        "SE VOLVIO LOCOOOO"
    ];

    const message = randomPhareses[Math.floor(Math.random() * randomPhareses.length)];

    await ctx.reply(message, {
        reply_parameters: { message_id: ctx.msg.message_id },
    });
});

bot.hears([
    "da clases de backend",
    "da consejos de backend",
    "consejos de backend",
    "backend consejo",
    "clases de backend"
], async (ctx) => {

    const randomPhrases = [
        "Caballerooo el mejor consejo es usar un servidor de 10GB para un proyecto de 10MB así siempre estarás bien equipao para nada",
        "Falsoooooo no necesitas saber qué hace tu código solo necesitas que funcione ¡El misterio es la clave del éxito caballerooo!",
        "Caballerooo si tu código no está roto no lo toques mejor cambia los nombres de las variables a algo más confuso para que nadie entienda nada",
        "¿Backend? Eso es fácil solo copia y pega lo que encuentres en Stack Overflow y reza para que funcione ¡Así de simple caballerooo!",
        "Recuerda si tu base de datos está lenta solo agrégale más servidores ¡Más servidores más velocidad más diversión caballerooo!",
        "Caballerooo nunca subestime el poder de un buen console.log si ve errores imprima más cosas y espera a que se arregle el peo así como suena",
        "¿Documentación? Eso es para gente que no sabe codificar si alguien pregunta cómo funciona dile que es magia y sigue adelante caballerooo",
        "Cuando en duda reinicia el servidor si sigue fallando reinícialo más veces ¡La paciencia es una virtud caballerooo!",
        "Siempre utiliza nombres de variables en otro idioma para que nadie entienda tu código ¡Así mantienes el misterio y el caos caballerooo!",
        "Si tu API no responde simplemente cambia el puerto y el nombre de la API ¡Es como un truco de magia para programadores caballerooo!",
        "El secreto para un código limpio es no tenerlo en absoluto ¡Cuanto más desordenado más carácter tiene caballerooo!",
        "¿Optimización? Eso es para los que tienen tiempo mejor agrega más comentarios en tu código para que parezca que sabes lo que haces caballerooo",
        "Cuando alguien te pregunte por qué tu sistema se cae simplemente dile que está en mantenimiento ¡Todos creen en el mantenimiento eterno caballerooo!",
        "¿Errores en producción? Eso significa que estás haciendo algo bien ¡Los errores son solo una forma de dar sabor a tu trabajo caballerooo!",
        "Falsoooooo si piensas que el backend es fácil solo haz como que estás trabajando duro y todo saldrá bien caballerooo",
        "Pongale un console.log y ya",
        "Pongale elastic search.",
        "Pongale un try catch",
        "Caballerooooo como asi que no tienes elastic search en tu codigo?",
    ];

    const message = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];

    await ctx.reply(message, {
        reply_parameters: { message_id: ctx.msg.message_id }
    });
});

bot.start();
