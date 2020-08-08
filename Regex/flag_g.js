//Finding all possible matches for a pattern using g flag
//Created by Aashish Loknath Panigrahi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
console.log(result);