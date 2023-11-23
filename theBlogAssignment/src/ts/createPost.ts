import { Posts } from "./models/Posts";

const post1 = new Posts("Äggmacka med tång", "Ingredienser: 24 ägg. 2 skivor Skogaholmslimpa. 1 paket smör.", "Gör så här: Koka äggen. Fördela smöret på skivorna med Skogaholmslimpa. När äggen kokat för länge, placera 12 stycken på vardera macka. Lyft upp dem med tång. Avnjuts bäst tillsammans med din sämsta vän.");
const post2 = new Posts("Råkostsallad", "Ingredienser: 1 Morot. 1 Palsternacka. 1 Kålhuvud. 1 Gul lök. 1 Gurka. 1 Potatis.", "Gör så här: Riv grönsakerna, blanda om, och släng bort. Gå till lokalkrogen och köp pizza istället.");
const post3 = new Posts("Gryta på fläsk", "Ingredienser: 100 liter vatten. 1 hel gris. 19 morötter. 23 gula lökar. 1 lagerblad.", "Gör inte så här: Trimma grisen och rensa avgassystemet. Fyll ett badkar till 1/19 med smör (riktigt fett smör). Gör upp en eld under badkaret. När smöret fräst klart, släng i grisen. När svinet har en fin yta, ös på med 100L vatten och grönsakerna. Låt koka i sju veckor. Besök simhallen för att hålla efter hygienen. Serveras inte till folk du känner eftersom du tillagat rätten i badkaret.");
const post4 = new Posts("Ris på maltesisk falk", "Ingredienser: 1 paket ris. 2 maltesiska falkar (hane och hona).", "Gör så här: Para falkarna. Se till att honan lägger ägg. Låt äggen värpas. Koka ris. Lägg riset i en hög på tallriken. Placera falkar ovanpå. Servera med skyddsshandskar och monockel.");
const post5 = new Posts("Currykyckling", "Ingredienser: 1 kyckling (död). 1 burk curry.", "Gör så här: Sätt ugnen på 500 grader. Häll curryn på kycklingen. Och så skjuts in i ugnen. Vänta 2 timmar. Stäng av ugnen. Ta ut kycklingen (med grytlapp/vante). Placera högt och lågt. Öppna en öl. Njut!");
const post6 = new Posts("'Självantändande' julbord", "Ingredienser: 1 julbord (dukat). 123 kronljus. 1 tändare.", "Gör så här: Laga en hel massa julmat, typ korv, skinka, lax, potatis, Jansson eller Pettsson, köttbullar, sill och skit, men ingen jävla kalvsylta. Ställ allt på bordet. Låt flertalet juldekorationer i papper hänga ner från taket, max 40cm från bordsytan. Trycker ner kronljusen lätt i maten. Tänd på och vänta.");
const post7 = new Posts("Pasta Ceausescu", "Ingredienser: 1 paket pasta (den statligt rekommenderade). 1 Gjutjärnsgryta. 1 bild på den föredetta ledaren för kommunistpartiet i Rumänien.", "Gör så här: Koka pastan enligt anvisningarna från överseende myndighet. Lägg valfria ingrredienser i gjutjärnsgrytan. När allt är klart - titta på bilden av Ceausescu.");
const post8 = new Posts("Potatis på tyskt vis", "Ingredienzen: 1 kartopfel.", "Macht på diesen zett: Kuchen die potat im wasser und salz. Essen die potät.")
const post9 = new Posts("Helstekt ko eller get", "Ingredienser: 1 ko (eller en get).", "Gör så här: Placera kon (eller geten) i pannan. Stek tills den är helt stekt. Serveras med grönsaker, frukt, pasta, potatis eller pollenta. Kan vara gott med saffransdoftande ris och balsamvinäger. En grönsallad är ju trevligt, kanske gurka, grön paprika, ärtor, kruksallat, avocado, gröna äpplen för fräschören. Ätes ej ensam då en hel ko (elelr get), tar väldigt lång tid att äta.");
const post10 = new Posts("Gubbröra", "Ingredienser: 1 liten gubbe (stor, om ni är flera). Någon typ av röra (förslagsvis en god).", "Gör så här: Häll röran över gubben låt honom servera er en middag bestående av något helt annat.");

let postList = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10];

const postsContainer = document.getElementById("blogPosts");

export const createHtml = () => {
  for (let i = 0; i < postList.length; i++) {
    const postContainer = document.createElement("article");
    postsContainer?.appendChild(postContainer);
    
    const title = document.createElement('h3');
    title.innerHTML = postList[i].title;
    postContainer.appendChild(title);

    const ingredients = document.createElement("p");
    ingredients.innerHTML = postList[i].ingredients;
    postContainer.appendChild(ingredients);

    const description = document.createElement('span');
    description.innerHTML = postList[i].description;
    postContainer.appendChild(description);

    const addFavorite = document.createElement('button');
    addFavorite.innerHTML = 'Favorit';
    postContainer.appendChild(addFavorite);

  }
};


