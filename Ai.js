function Animatronic(name,lvl,state) {
this.name = name;
  this.state = state;
  this.lvl = lvl;
  this.update = function(){
  var rand = Math.floor(Math.random()*21)+1;
  if(rand <= this.lvl){
  this.state +=1;
      }; 
   p.textContent = this.state;
  if(this.state > 5){this.state = 5; p.textContent = "Game Over"; };
 
  };
}


