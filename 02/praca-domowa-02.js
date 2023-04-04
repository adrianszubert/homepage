console.log("Witaj! Oto moja pierwsza wypocina w postaci czegoś takiego, jak widzisz. Niejako jest to strona WWW... Czy może jednak nie? Pozdrawiam całą Legnicę, dobrych chłopaków i niech się to trzyma, dobry przekaz leci.");

let przycisk = document.querySelector(".js-przycisk");
let zdjecie = document.querySelector(".zdjecie");

przycisk.addEventListener("click", () => { zdjecie.remove(); });


