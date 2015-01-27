window.onload = function () {
	enchant();
	var game = new Core (589, 167);
	game.preload('Noteblock.png')
	game.onload = function () {
    var aa=1;
		var whitepitch = [5.3,6,6.7,7,8,9,9.5,10.5,12,13.2,14,16,18,19];
		var buttons = [];
		for(i=0;i<14;i++){
      buttons[i] = new Button("","light",24,37);
      buttons[i].moveTo(17+40*(i),140);
    	buttons[i].i=i;
    	game.rootScene.addChild(buttons[i]);
    	console.log(whitepitch[i]);
    	buttons[i].ontouchstart = function(){
     		$('#pitch').val(whitepitch[this.i]);
    		console.log(whitepitch[this.i]);
    	}
    }
    var blackpitch = [0,5.6,6.3,777,7.5,8.5,777,10,11,12.5,777,15,17,777,20];
		var buttones = [];
		for(k=0;k<15;k++){
    	buttones[k] = new Button("","dark",24,30);
     	buttones[k].moveTo(40*(k),76);
      buttones[k].k=k;
      if(k==3||k==6||k==10||k==13){
      }else{
      game.rootScene.addChild(buttones[k]);
      console.log(blackpitch[k]);
      buttones[k].ontouchstart = function(){
        $('#pitch').val(blackpitch[this.k]);
        console.log(blackpitch[this.k]);
      }
   }
 }
 

		/*----- ここから書き始める -----*/

		var background = new Sprite(589,167);
		background.image = game.assets['Noteblock.png'];
		game.rootScene.addChild(background);
		game.rootScene.addEventListener('enterframe', function() {
      game.keybind( ' '.charCodeAt(0), 'a' );
      game.keybind( 'Q'.charCodeAt(0), 'b' );
      if(game.input.a){
        if((game.input.b)&&(aa==0)){

        aa=1;
        $('#outkey').val(123);
        console.log(123);
      }else if((!game.input.b)){
        aa=0;
      }
    }
    });
    

    }
	game.start();
}