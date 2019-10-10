function InGameOptionsMenuGUI(scene){
    GUISet.call(this,scene);
    this.create();
    this.TEXT_OFFSET_Y = 0;
}

InGameOptionsMenuGUI.prototype = Object.create(GUISet.prototype);
InGameOptionsMenuGUI.prototype.constructor = InGameOptionsMenuGUI;

InGameOptionsMenuGUI.prototype.create = function(){

    let font = "30px CartoonRegular";
    let viewportMiddleX = viewport.width/2;

    //fondo
    let bgAlpha = new GUIImage(this.scene, null, 0,0,0,0,viewport.width,viewport.height);
    bgAlpha.setColor(new Color(155,175,183,255));
    bgAlpha.setAlpha(0.75);

    //tablero
    let board = new GUIImage(this.scene,"board", viewport.width/2,125,0,0,289,322,0);
    board.pos.x -= board.width/2;

    //texto OPCIONES
    let textOptions = new Text(this.scene,i18n.translate(Game.lang, "options"),viewportMiddleX ,120,"60px CartoonRegular");
    //texto volumen
    let textVolume = new Text(this.scene,i18n.translate(Game.lang, "volume"),viewportMiddleX,170,"40px CartoonRegular");
    
    let buttonReduceVolumeSprite = new GUIImage(this.scene,"flechaIzq",50,50,0,0,114,52,0);
    let buttonIncrementVolumeSprite = new GUIImage(this.scene, "flechaDer", 50,50,0,0,114,52,0);
    var teapotVolumeSprite = new GUIImage(this.scene, "teapotVolume", viewportMiddleX-110+(audio.music.volume*180), 200,0,0,32,32,0);


    let incrementVolume = function(){
        if(audio.setVolume(0.1))     
        teapotVolumeSprite.pos.x +=0.1*180;
  
        
    }
    let decrementVolume = function(){
        if(audio.setVolume(-0.1))
        teapotVolumeSprite.pos.x -= 0.1*180;

    }
    


    let buttonVolumeUp = new Button(this.scene,viewportMiddleX+105, 200,0,buttonIncrementVolumeSprite, incrementVolume);
    let buttonVolumeDown = new Button(this.scene,viewportMiddleX-125,200,0,buttonReduceVolumeSprite, decrementVolume);

    //boton volver al juego
    let buttonSpriteResume = new GUIImage(this.scene,"button",50,50,0,0,114,52,0);
    viewportMiddleX = viewport.width/2 - buttonSpriteResume.width/2;
    viewportMiddleY = viewport.height/2 - buttonSpriteResume.height/2 + 80;
    let that = this;
    let resume = function(){
       that.hide();
    };
    let buttonResume = new Button(this.scene,viewportMiddleX,viewportMiddleY,0,buttonSpriteResume, resume,i18n.translate(Game.lang, "resume"),font);
    
    //boton volver a la seleccion de niveles
    let buttonSpriteLevel = new GUIImage(this.scene,"button",50,50,0,0,114,52,0);
    viewportMiddleX = viewport.width/2 - buttonSpriteLevel.width/2;
    viewportMiddleY = viewport.height/2 - buttonSpriteLevel.height/2 + 150;
    let goLevelSelection = function(){
        Game.changeScene(new LevelSelectionScene(20 * Game.TILE_SIZE,20 * Game.TILE_SIZE));
    };
    let buttonLevel = new Button(this.scene,viewportMiddleX,viewportMiddleY,0,buttonSpriteLevel, goLevelSelection,i18n.translate(Game.lang, "levels"),font);

    this.guiSprites.push(bgAlpha,board,textVolume,textOptions, teapotVolumeSprite);
    this.guiObjects.push(buttonResume, buttonLevel, buttonVolumeDown, buttonVolumeUp);
    
};