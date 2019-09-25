/*Por ahora solo llama al constructor del padre, en este caso GameObject*/
function Player(scene, x, y, sprite, depth){
    GameObject.call(this, scene, x, y, sprite, depth);

}
/*Hererncia protoripica con GameObject */
Player.prototype = Object.create(GameObject.prototype);
Player.prototype.constructor = Player;

/*Aquí metemos el comportamento del personaje en cada actualización */
Player.prototype.update = function(){
    //si se ve un delay ponerlo abajo
    GameObject.prototype.update.call(this);
    
    this.pos.x += input.isPressedKey("d"); 
    this.pos.x -= input.isPressedKey("a"); 
    this.pos.y -= input.isPressedKey("w");
    this.pos.y += input.isPressedKey("s");
    
}