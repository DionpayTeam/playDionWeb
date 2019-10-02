
class SectionData{
	constructor(image,group){
		this.pic = image;
		this.oliY = image.y;
		this.group = group;
		this.upTween;
		this.dnTween;
	}
	getGropup(image){
		var retn=null;
		if(this.pic.name === image.name){
			retn = this.group;
		}
		return retn;
	}
}
var Sections = [];

function getSectionData(gobj) {
	var retn = null;
	for(var i=0; i < Sections.length;i++){
		var _group = Sections[i].getGropup(gobj);
		if( _group === null)	continue;
		retn = Sections[i];
		break;
	}
	return retn;
}

/* START OF COMPILED CODE */

class playDionLand extends Phaser.Scene {
	
	constructor() {
	
		super("playDionLand");
		
	}
	
	_create() {

		var Background_1_ = this.add.image(640.0, 640.0, "1Background(1)");

		var simulation01_png = this.add.sprite(1064.298, 91.14533, "playDionData", "simulation01.png");
		simulation01_png.anims.play("simul");
		
//====== Adult ======== Start
		var AdultPolygon = new Phaser.Geom.Polygon([
			1, 1,
			100, 1,
			100, 107,
			1, 107
		]);
		var adult_2__png = this.add.image(859.02155, 135.82372, "playDionData", "2adult(2).png").setInteractive(AdultPolygon,Phaser.Geom.Polygon.Contains); // -- Adult
		adult_2__png.name='Adult';

		this.fAdult = this.add.group([ adult_2__png ]);
		var gAdult = new SectionData(adult_2__png,this.fAdult);
		Sections.push(gAdult);
	//====== RPG ======== End
		
		this.add.image(856.1735, 162.2611, "playDionData", "3adult-cover(3).png");
		

//====== Gamble ======== Start
		var GamblePolygon = new Phaser.Geom.Polygon([
			85,0,
			142,56,
			75,111,
			0,53
		]);
		var gamble_4__png = this.add.image(938.04724, 283.70682, "playDionData", "4gamble(4).png").setInteractive(GamblePolygon,Phaser.Geom.Polygon.Contains);// -- Gamble
		gamble_4__png.name='Gamble';
		var coin01_png = this.add.sprite(924.3783, 201.91898, "playDionData", "coin01.png");
		coin01_png.setOrigin(0.5, 1.0);
		coin01_png.anims.play("Chip");

		this.fGamble = this.add.group([ gamble_4__png, coin01_png ]);
		var gGamble = new SectionData(gamble_4__png,this.fGamble);
		Sections.push(gGamble);
	//====== Gamble ======== End
		
		this.add.image(931.3562, 299.52164, "playDionData", "5gamble-cover(5).png");

		
//====== Casino ======== Start
		var CasinoPolygon = new Phaser.Geom.Polygon([
			128, 1,
			171, 136,
			171, 252,
			1, 252,
			1, 164
		]);
		var casino_6__png = this.add.image(1117.5743, 382.63208, "playDionData", "6casino(6).png").setInteractive(CasinoPolygon,Phaser.Geom.Polygon.Contains);// -- Casino
		casino_6__png.name = 'Casino';
		var light01_png = this.add.sprite(1130.8354, 308.02216, "playDionData", "light01.png");
		light01_png.anims.play("light");

		this.fCasino = this.add.group([ casino_6__png, light01_png ]);
		var gCasino = new SectionData(casino_6__png,this.fCasino);
		Sections.push(gCasino);
	//====== Casino ======== End


		this.add.image(1118.8271, 459.50952, "playDionData", "7casino-cover-(7).png");
		

//====== Village ======== Start
		var VillagePolygon = new Phaser.Geom.Polygon([
			7, 112,
			158, 39,
			251, 241,
			110, 320,
			3, 258
		]);
		var village__8__png = this.add.image(541.8944, 272.53543, "playDionData", "8village-(8).png").setInteractive(VillagePolygon,Phaser.Geom.Polygon.Contains);// -- Village
		village__8__png.name='Village';
		var Monitor01_png = this.add.sprite(452.5888, 172.31104, "playDionData", "Monitor01.png");
		Monitor01_png.anims.play("Monitor");

		this.fVillage = this.add.group([ village__8__png, Monitor01_png]);
		var gVillage = new SectionData(village__8__png,this.fVillage);
		Sections.push(gVillage);
	//====== Village ======== End

		
		this.add.image(543.857, 364.68066, "playDionData", "9village-cover-(9).png");
		
		
//====== Board ======== Start
		var BoardPolygon = new Phaser.Geom.Polygon([
			244, 35,
			321,189,
			221,247,
			120,188
		]);
		var board_10_png =this.add.image(780.0012, 384.2691, "playDionData", "10board-(10).png").setInteractive(BoardPolygon,Phaser.Geom.Polygon.Contains);// -- Board
		board_10_png.name='Board';
		var smoke01_png_2 = this.add.sprite(709.20624, 293.20868, "playDionData", "smoke01.png");
		smoke01_png_2.setOrigin(0.5, 1.0);
		smoke01_png_2.anims.play("smog02");

		this.fBoard = this.add.group([ board_10_png, smoke01_png_2]);
		var gBoard = new SectionData(board_10_png,this.fBoard);
		Sections.push(gBoard);
	//====== Board ======== End


		this.add.image(775.8147, 451.30377, "playDionData", "11board-cover-(11).png");
		var Worker1_01_png_1 = this.add.sprite(741.6925, 463.56985, "playDionData", "Worker1_01.png");
		Worker1_01_png_1.anims.play("worker05");
		var car01_png = this.add.sprite(894.65686, 481.53833, "playDionData", "car01.png");
		car01_png.setOrigin(0.6390798, 0.6390798);
		car01_png.anims.play("Car_chees");
		var tween_car01 = this.tweens.add({
	        targets: car01_png,
	        x: 791.5145,
			y: 535.8696,
	        ease: 'Power0',
	        duration: 3000,
	        yoyo: true,
	        repeat: -1,
	    });


		
//====== Strategy ======== Start
		var StrategyPolygon = new Phaser.Geom.Polygon([
			182,8,
			230,10,
			253,203,
			19,216
		]);
		var strategy__12__png = this.add.image(917.9483, 616.60614, "playDionData", "12strategy-(12).png").setInteractive(StrategyPolygon,Phaser.Geom.Polygon.Contains);// -- Strategy
		strategy__12__png.name='Strategy';
		var Wrench01_png = this.add.sprite(1031.7341, 541.70935, "playDionData", "Wrench01.png");
		Wrench01_png.anims.play("Wrench");

		this.fStrategy = this.add.group([ strategy__12__png, Wrench01_png]);
		var gStrategy = new SectionData(strategy__12__png,this.fStrategy);
		Sections.push(gStrategy);
	//====== Strategy ======== End
		
		this.add.image(928.7103, 731.0195, "playDionData", "13strateg-cover-(13).png");
	
//====== FPS ======== Start
		var FPSPolygon = new Phaser.Geom.Polygon([
			88,91,
			208,27,
			319,126,
			139,240,
			86,203
		]);
		var FPS_14__png = this.add.image(290.47775, 505.24915, "playDionData", "14FPS(14).png").setInteractive(FPSPolygon,Phaser.Geom.Polygon.Contains);// -- FPS
		FPS_14__png.name='FPS';
		var smoke01_png_1 = this.add.sprite(139.88951, 488.08313, "playDionData", "smoke01.png");
		smoke01_png_1.setOrigin(0.5, 1.0);
		smoke01_png_1.anims.play("smog01");

		this.fFPS = this.add.group([ FPS_14__png, smoke01_png_1]);
		var gFPS = new SectionData(FPS_14__png,this.fFPS);
		Sections.push(gFPS);
	//====== FPS ======== End


		this.add.image(217.60957, 657.31396, "playDionData", "15FPS-cover-(15).png");


//====== RPG ======== Start
		var RPGPolygon = new Phaser.Geom.Polygon([
			76, 156,
			70, 324,
			239, 420,
			563, 220,
			312, 27
		]);
		var main__16__png = this.add.image(518.64813, 652.071, "playDionData", "16main-(16).png").setInteractive(RPGPolygon,Phaser.Geom.Polygon.Contains);// -- RPG
		main__16__png.name='RPG';
		var Flag01_png = this.add.sprite(423.04327, 475.1824, "playDionData", "Flag01.png");
		Flag01_png.setOrigin(0.0, 1.0);
		Flag01_png.anims.play("flag");
		var Crane2_01_png = this.add.sprite(650.3626, 453.19754, "playDionData", "Crane2_01.png");
		Crane2_01_png.anims.play("Crane01");
		var rpg01_png = this.add.sprite(562.1344, 524.84735, "playDionData", "rpg01.png");
		rpg01_png.anims.play("RPG");
		var Crane1_01_png = this.add.sprite(413.94775, 628.2865, "playDionData", "Crane1_01.png");
		Crane1_01_png.anims.play("Crane00");
		var block01_png_1 = this.add.sprite(475.50412, 775.7056, "playDionData", "block01.png");
		block01_png_1.setOrigin(0.5, 1.0);
		block01_png_1.anims.play("block00");
		var Worker3_01_png = this.add.sprite(531.5548, 782.94727, "playDionData", "Worker3_01.png");
		Worker3_01_png.anims.play("Worker02");

		this.fRPG = this.add.group([ main__16__png, Flag01_png, Crane2_01_png, rpg01_png, Crane1_01_png, block01_png_1, Worker3_01_png]);

		var gRPG = new SectionData(main__16__png,this.fRPG);
		Sections.push(gRPG);
	//====== RPG ======== End

		this.add.image(581.24524, 786.06006, "17main-cover(17)");		


		var ship01 = this.add.image(152.02478, 759.36163, "playDionData", "ship01.png");
		var tween_ship01 = this.tweens.add({
	        targets: ship01,
	        x: 60.02478,
			y: 820.36163,
	        ease: 'Power0',
	        duration: 5000,
	        yoyo: true,
	        repeat: -1,
	    });



//====== Action ======== Start
		var ActionPolygon = new Phaser.Geom.Polygon([
			201, 0,
			138, 162,
			286, 252,
			357, 212,
			357, 88
		]);
		var action__18__png = this.add.image(305.3028, 917.7569, "playDionData", "18action-(18).png").setInteractive(ActionPolygon, Phaser.Geom.Polygon.Contains);// -- Action
		action__18__png.name='Action';
		var Worker1_01_png = this.add.sprite(255.83554, 912.4835, "playDionData", "Worker1_01.png");
		Worker1_01_png.anims.play("Worker00");
		var garaga = this.add.image(307.0285, 739.91895, "playDionData", "19action2-(19).png");
		var tween_garaga = this.tweens.add({
			targets: garaga,
			y: 802.91895,
	        ease: 'Bounce',
	        duration: 2000,
	        yoyo: true,
	        repeat: -1,
		});
		this.fAction = this.add.group([ action__18__png , Worker1_01_png, tween_garaga]);

		var gAction = new SectionData(action__18__png,this.fAction);
		Sections.push(gAction);
	//====== Action ======== End




		var ship02 = this.add.image(611.33765, 824.31165, "playDionData", "ship02.png");
		var tween_ship02 = this.tweens.add({
	        targets: ship02,
	        x: 731.33765,
			y: 758.31165,
	        ease: 'Power0',
	        duration: 7000,
	        yoyo: true,
	        repeat: -1,
	    });
		var ship02_1 = this.add.image(722.1299, 820.93555, "playDionData", "ship02.png");
		var tween_ship02_1 = this.tweens.add({
	        targets: ship02_1,
	        x: 658.1299,
			y: 859.93555,
	        ease: 'Power0',
	        duration: 4000,
	        yoyo: true,
	        repeat: -1,
	    });



//====== Puzzle ======== Start
		var PuzzlePolygon = new Phaser.Geom.Polygon([
			56,186,
			174,120,
			251,252,
			128,329,
			56,288
		]);
		var puzzle__20__png = this.add.image(875.6828, 835.7126, "playDionData", "20puzzle-(20).png").setInteractive(PuzzlePolygon, Phaser.Geom.Polygon.Contains);// -- Puzzle
		puzzle__20__png.name='Puzzle';
		var Crane3_01_png = this.add.sprite(964.1345, 724.75775, "playDionData", "Crane3_01.png");
		Crane3_01_png.anims.play("Crane02");

		this.fPuzzle = this.add.group([ puzzle__20__png, Crane3_01_png ]);
		var gPuzzle = new SectionData(puzzle__20__png,this.fPuzzle);
		Sections.push(gPuzzle);
	//====== Puzzle ======== End

//====== Sport ======== Start
		var SportPolygon = new Phaser.Geom.Polygon([
			103,95,
			236,19,
			348,166,
			205,248,
			99,188

		]);
		var sports__21__png = this.add.image(581.2979, 1043.3184, "playDionData", "21sports-(21).png").setInteractive(SportPolygon, Phaser.Geom.Polygon.Contains);// -- Sport
		sports__21__png.name='Sport';
		var Worker2_01_png = this.add.sprite(715.5364, 918.2191, "playDionData", "Worker2_01.png");
		Worker2_01_png.anims.play("Worker01");

		this.fSport = this.add.group([ sports__21__png, Worker2_01_png]);
		var gSport = new SectionData(sports__21__png,this.fSport);
		Sections.push(gSport);
	//====== Sport ======== End
		
		this.add.image(554.49164, 1030.113, "22main-cover(22)");
		var block01_png = this.add.sprite(142.53322, 1038.4548, "playDionData", "block01.png");
		block01_png.setOrigin(0.5, 1.0);
		block01_png.anims.play("block00");
		var smoke01_png = this.add.sprite(888.07556, 1012.0964, "playDionData", "smoke01.png");
		smoke01_png.setOrigin(0.5, 1.0);
		smoke01_png.anims.play("smog");



		//  Draw the polygon
		// var graphics = this.add.graphics({ x: main__16__png.x - main__16__png.displayOriginX, y: main__16__png.y - main__16__png.displayOriginY });
		// graphics.lineStyle(2, 0x000000);
		// graphics.beginPath();
		// graphics.moveTo(RPGPolygon.points[0].x, RPGPolygon.points[0].y);
		// for (var i = 1; i < RPGPolygon.points.length; i++)	{
		// 	graphics.lineTo(RPGPolygon.points[i].x, RPGPolygon.points[i].y);
		// }
		// graphics.closePath();
		// graphics.strokePath();




	//=========== Mouse Action ============
		this.input.on('gameobjectover', function (pointer, gameObject) {
			gameObject.setTint(0xaaaaff);

			var _section = getSectionData(gameObject);
			if(_section === null) return;

			if(_section.upTween != null){
				if(_section.upTween.isPlaying()){
					_section.upTween.remove();
				}
			}
			if(_section.dnTween != null){
				if(_section.dnTween.isPlaying()){
					_section.dnTween.remove();
				}
			}

			var gan = gameObject.y - _section.oliY + 50;
			_section.upTween = gameObject.scene.tweens.add({
				targets: _section.group.getChildren(),
				y: '-='+gan,
				duration: 500,
				onComplete: function () {
					this.remove();
				}
			});
		});

		this.input.on('gameobjectout', function (pointer, gameObject) {
			gameObject.clearTint();

			var _section = getSectionData(gameObject);
			if(_section === null) return;

			if(_section.upTween != null){
				if(_section.upTween.isPlaying()){
					_section.upTween.remove();
				}
			}
			if(_section.dnTween != null){
				if(_section.dnTween.isPlaying()){
					_section.dnTween.remove();
				}
			}

			var gan = _section.oliY - gameObject.y;
			_section.dnTween = gameObject.scene.tweens.add({
				targets: _section.group.getChildren(),
				y: '+='+gan,
				duration: 1500,
				onComplete: function () {
					this.remove();
				}
			});
		});

	}
	
	
	
	
	
	
	
	
	
	
	
	
	/* START-USER-CODE */
	_MoveObj(){
		var airplane = this.add.image(1869.5873, 305.60193, "playDionData", "airplane.png");
		var tween_airplane = this.tweens.add({
	        targets: airplane,
	        x: -36.550938,
			y: 1570.0885,
	        ease: 'Power0',
	        duration: 4000,
	        yoyo: false,
	        repeat: -1,
	    });
		
		
		var balloon = this.add.image(86.87746, 327.3585, "playDionData", "balloon.png");
		var tween_balloon = this.tweens.add({
	        targets: balloon,
			y: 273.07224,
	        ease: 'Power0',
	        duration: 6000,
	        yoyo: true,
	        repeat: -1,
	    });
		
		var cloud02 = this.add.image(261.44592, 194.81578, "playDionData", "cloud02.png");
		var tween_cloud02 = this.tweens.add({
	        targets: cloud02,
			y: 68.453636,
	        ease: 'Power0',
	        duration: 16000,
	        yoyo: true,
	        repeat: -1,
	    });
		
		var cloud01 = this.add.image(161.23068, 207.74678, "playDionData", "cloud01.png");
		var tween_cloud01 = this.tweens.add({
	        targets: cloud01,
			y: 164.83133,
	        ease: 'Power0',
	        duration: 8000,
	        yoyo: true,
	        repeat: -1,
	    });
		
		
		var cloud03 = this.add.image(1117.0469, 677.573, "playDionData", "cloud03.png");
		var tween_cloud03 = this.tweens.add({
	        targets: cloud03,
			y: 516.6401,
	        ease: 'Power0',
	        duration: 13000,
	        yoyo: true,
	        repeat: -1,
	    });
		
		var cloud06 = this.add.image(1067.478, 693.73676, "playDionData", "cloud06.png");
		var tween_cloud06 = this.tweens.add({
	        targets: cloud06,
			y: 595.9849,
	        ease: 'Power0',
	        duration: 20000,
	        yoyo: true,
	        repeat: -1,
	    });
		
		var cloud04 = this.add.image(62.093044, 493.30627, "playDionData", "cloud04.png");
		var tween_cloud04 = this.tweens.add({
	        targets: cloud04,
			y: 384.82556,
	        ease: 'Power0',
	        duration: 9000,
	        yoyo: true,
	        repeat: -1,
	    });
		
		var cloud05 = this.add.image(752.8238, 134.47113, "playDionData", "cloud05.png");
		var tween_cloud05 = this.tweens.add({
	        targets: cloud05,
			y: 28.37461,
	        ease: 'Power0',
	        duration: 10000,
	        yoyo: true,
	        repeat: -1,
		});
	}

	create() {
		this._create();
		this._MoveObj();
	}

	update() {

	}



	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
