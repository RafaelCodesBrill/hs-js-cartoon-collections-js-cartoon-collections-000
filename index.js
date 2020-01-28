var dwarves = ["Doc", "Dopey", "Grumpy", "Bashful"]


function dwarfRollCall(dwarves) {
  
var solution = "" ;

for (let i = 0; i < dwarves.length; i++) {
   solution += i+1 + "." + " " + dwarves[i] + " "
  
}
return   solution

}

  var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]

function summonCaptainPlanet(planeteerCalls) {
  return planeteerCalls.map(a => a.toUpperCase() + "!")
}


function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++){
    if(words[i].length>4){
      return true
    }
  }
  return false
}
//idx is index since we are trying to find the first cheese

function findTheCheese (foods) {
  var cheese = ["cheddar", "banana", "gouda", "camembert"];
  
  for(var i = 0; i < foods.length; i++){
    
    var cheeseIdx = cheese.indexOf(foods[i]);
   
    if(cheeseIdx !== -1){
      return foods[i]
    }
    }
    return "no cheese!"
}
