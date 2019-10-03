function GUIImage(scene, img,x,y, xInImage, yInImage, width, height, depth){
    Drawable.call(this,scene,img,x,y, xInImage, yInImage, width, height, depth);
    this.scene.GUILayer.addElement(this);
}

GUIImage.prototype = Object.create(Drawable.prototype);
GUIImage.prototype.constructor = GUIImage;

GUIImage.prototype.draw = function(camera){
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext('2d');

    if(this.img){
        context.drawImage(this.img,this.pos.x,this.pos.y);
    }
}

GUIImage.prototype.destroy = function(){
    this.scene.GUILayer.removeElement(this);
}