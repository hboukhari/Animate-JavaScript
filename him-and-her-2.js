(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.FlippingPanels = function() {
	this.initialize(img.FlippingPanels);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1190,524);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.z2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjVD/IAAhOIELlMIkCAAIAAhjIGdAAIAABPIkJFLIEOAAIAABjg");
	this.shape.setTransform(26.7,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.9,93);


(lib.Z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjVD/IAAhOIELlMIkCAAIAAhjIGdAAIAABPIkJFLIEOAAIAABjg");
	this.shape.setTransform(26.7,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.9,93);


(lib.w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABvD/IhvlhIhuFhIhVAAIiyn9IB7AAIBlElIBaklIB3AAIBZElIBmklIB7AAIiyH9g");
	this.shape.setTransform(39.2,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.6,93);


(lib.t = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ag4D/IAAmaIiRAAIAAhjIGTAAIAABjIiRAAIAAGag");
	this.shape.setTransform(24.2,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.6,93);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ACrD/IAAlAIiJEWIhDAAIiJkWIAAFAIhzAAIAAn9ICaAAICDEXICEkXICaAAIAAH9g");
	this.shape.setTransform(40.6,-6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag4D/IAAn9IBxAAIAAH9g");
	this.shape_1.setTransform(-6.2,-6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABmD/IAAjIIjKAAIAADIIhzAAIAAn9IBzAAIAADVIDKAAIAAjVIBxAAIAAH9g");
	this.shape_2.setTransform(-46,-6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(15,1,1).p("A1NoYMAqsAAAIAAQxMgq9AAAg");
	this.shape_3.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-146,-61.2,290,122.5), null);


(lib.r2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABTD/IhwijIhOAAIAACjIhzAAIAAn9IDCAAQB2AAAzAoQAyAoAABZQAAB6hhAkICBC2gAhrgFIBSAAQA6AAAVgTQAVgTAAgpQAAgqgWgPQgVgPg3AAIhUAAg");
	this.shape.setTransform(30.6,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.3,93);


(lib.R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABTD/IhwijIhOAAIAACjIhzAAIAAn9IDCAAQB2AAAzAoQAyAoAABZQAAB6hhAkICBC2gAhrgFIBSAAQA6AAAVgTQAVgTAAgpQAAgqgWgPQgVgPg3AAIhUAAg");
	this.shape.setTransform(30.6,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.3,93);


(lib.M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ACrD/IAAlAIiJEWIhDAAIiJkWIAAFAIhzAAIAAn9ICaAAICDEXICEkXICaAAIAAH9g");
	this.shape.setTransform(36.8,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.9,93);


(lib.j2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AijC6IA7hSQAuAzAyAAQAXgBARgSQASgTAAglIAAjuIiXAAIAAhiIEJAAIAAFLQAABbgvAuQgvAthJAAQhcABhEhIg");
	this.shape.setTransform(20.3,47.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.8,93);


(lib.j = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AijC6IA7hSQAuAzAyAAQAXgBARgSQASgTAAglIAAjuIiXAAIAAhiIEJAAIAAFLQAABbgvAuQgvAthJAAQhcABhEhIg");
	this.shape.setTransform(20.3,47.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.8,93);


(lib.i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ag4D/IAAn9IBxAAIAAH9g");
	this.shape.setTransform(14,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,93);


(lib.e3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape.setTransform(27.1,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,93);


(lib.e2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape.setTransform(27.1,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,93);


(lib.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape.setTransform(27.1,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,93);


(lib.d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjnD/IAAn9IC1AAQCHAABJBDQBKBCAAB4QAAB2hIBFQhHBFiRAAgAh0CaIBIAAQBNAAAqgnQAqgnAAhMQAAhKgqgoQgqgphWAAIg/AAg");
	this.shape.setTransform(31.4,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,93);


(lib.d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjnD/IAAn9IC1AAQCHAABJBDQBKBCAAB4QAAB2hIBFQhHBFiRAAgAh0CaIBIAAQBNAAAqgnQAqgnAAhMQAAhKgqgoQgqgphWAAIg/AAg");
	this.shape.setTransform(31.4,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,93);


(lib.btnHer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTD/IhwijIhPAAIAACjIhyAAIAAn9IDCAAQB2AAAzAoQAyAoAABZQAAB6hhAkICBC2gAhsgFIBTAAQA6AAAVgTQAVgTAAgpQAAgqgWgPQgVgPg2AAIhWAAg");
	this.shape.setTransform(194.1,54.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape_1.setTransform(142.9,54.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABlD/IAAjIIjJAAIAADIIhyAAIAAn9IByAAIAADVIDJAAIAAjVIBzAAIAAH9g");
	this.shape_2.setTransform(90,54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(15,1,1).p("ARxIZMgjhAAAIAAwxMAjhAAA");
	this.shape_3.setTransform(113.7,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC6699").s().p("ABTD/IhwijIhPAAIAACjIhyAAIAAn9IDCAAQB2AAAyAoQAzAoAABZQAAB6hhAkICBC2gAhsgFIBUAAQA5AAAVgTQAVgTAAgpQAAgqgWgPQgWgPg1AAIhWAAg");
	this.shape_4.setTransform(191.2,54.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6699").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape_5.setTransform(139.9,54.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6699").s().p("ABlD/IAAjIIjJAAIAADIIhzAAIAAn9IBzAAIAADVIDJAAIAAjVIByAAIAAH9g");
	this.shape_6.setTransform(87,54.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("ABTD/IhwijIhPAAIAACjIhyAAIAAn9IDCAAQB2AAAyAoQAzAoAABZQAAB6hhAkICBC2gAhsgFIBUAAQA5AAAVgTQAVgTAAgpQAAgqgWgPQgWgPg1AAIhWAAg");
	this.shape_7.setTransform(191.2,54.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape_8.setTransform(139.9,54.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("ABlD/IAAjIIjJAAIAADIIhzAAIAAn9IBzAAIAADVIDJAAIAAjVIByAAIAAH9g");
	this.shape_9.setTransform(87,54.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("ABTD/IhwijIhPAAIAACjIhyAAIAAn9IDCAAQB2AAAzAoQAyAoAABZQAAB6hhAkICBC2gAhsgFIBTAAQA6AAAVgTQAVgTAAgpQAAgqgWgPQgWgPg1AAIhWAAg");
	this.shape_10.setTransform(196.5,54.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_9,p:{x:87}},{t:this.shape_8,p:{x:139.9}},{t:this.shape_7}]},1).to({state:[{t:this.shape_3},{t:this.shape_9,p:{x:92.3}},{t:this.shape_8,p:{x:145.2}},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,248.2,122.5);


(lib.a3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ACaD/IgvhuIjVAAIgvBuIh6AAIDdn9IBtAAIDdH9gAg/AtIB/AAIg/iTg");
	this.shape.setTransform(29.2,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,93);


(lib.a2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ACaD/IgvhuIjVAAIgvBuIh6AAIDdn9IBtAAIDdH9gAg/AtIB/AAIg/iTg");
	this.shape.setTransform(29.2,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,93);


(lib.a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ACaD/IgvhuIjVAAIgvBuIh6AAIDdn9IBtAAIDdH9gAg/AtIB/AAIg/iTg");
	this.shape.setTransform(29.2,47.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,93);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AigC9QhMhKgBhxQAAhxBOhMQBOhMBtAAQBuAABRBIIg7BWQgjgegcgLQgegLghAAQhAAAgtAsQgsAsAABHQAABIArAsQAqArA7AAQA6AAAogXIAAiLIByAAIAAC0QhLBViGAAQhwAAhMhLg");
	this.shape.setTransform(29.1,46.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,93);


(lib._0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai9C8QhOhMAAhwQAAhvBOhMQBNhLBwgBQBxABBOBLQBNBMAABvQAABwhNBMQhOBLhxABQhwgBhNhLgAhqhzQgsAxAABDQAABEAsAvQAsAxA/AAQA/AAAsgxQAsgvAAhEQAAhDgsgxQgsgwg/AAQg/AAgsAwg");
	this.shape.setTransform(32.1,46.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,93);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btnHer();
	this.instance.parent = this;
	this.instance.setTransform(-20.8,0,1,1,0,0,0,116.6,53.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHer(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(15,1,1).p("AjtoYIHbAAIAAQxInbAA");
	this.shape.setTransform(113.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.9,-61.2,290,122.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btnHer();
	this.instance.parent = this;
	this.instance.setTransform(-14.6,0,1,1,0,0,0,116.6,53.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHer(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(15,1,1).p("AjtoYIHbAAIAAQxInbAA");
	this.shape.setTransform(107.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.7,-61.2,277.5,122.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-144.9,-61.2,290,122.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("pages/dames.htm", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_2 = new lib.Symbol2();
	this.movieClip_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-144.9,-61.2,290,122.5), null);


(lib.btnhima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_4.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("pages/mannen.htm", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.movieClip_4 = new lib.Symbol3();
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(137.4,53.7,1,1,0,0,0,-1.1,0);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnhima, new cjs.Rectangle(-7.5,-7.5,290,122.5), null);


(lib.btnHim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACrD/IAAlAIiJEWIhDAAIiJkWIAAFAIhzAAIAAn9ICaAAICDEXICEkXICaAAIAAH9g");
	this.shape.setTransform(177.2,54.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4D/IAAn9IBxAAIAAH9g");
	this.shape_1.setTransform(130.4,54.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABlD/IAAjIIjJAAIAADIIhzAAIAAn9IBzAAIAADVIDJAAIAAjVIByAAIAAH9g");
	this.shape_2.setTransform(90.6,54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(15,1,1).p("A1eoYMAq9AAAIAAQxMgq9AAAg");
	this.shape_3.setTransform(137.5,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("ACrD/IAAlAIiJEWIhDAAIiJkWIAAFAIhzAAIAAn9ICaAAICDEXICEkXICaAAIAAH9g");
	this.shape_4.setTransform(177.2,54.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("Ag4D/IAAn9IBxAAIAAH9g");
	this.shape_5.setTransform(130.4,54.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("ABlD/IAAjIIjJAAIAADIIhzAAIAAn9IBzAAIAADVIDJAAIAAjVIByAAIAAH9g");
	this.shape_6.setTransform(90.6,54.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("ACrD/IAAlAIiJEWIhDAAIiJkWIAAFAIhzAAIAAn9ICaAAICDEXICEkXICaAAIAAH9g");
	this.shape_7.setTransform(177.2,54.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag4D/IAAn9IBxAAIAAH9g");
	this.shape_8.setTransform(130.4,54.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("ABlD/IAAjIIjJAAIAADIIhzAAIAAn9IBzAAIAADVIDJAAIAAjVIByAAIAAH9g");
	this.shape_9.setTransform(90.6,54.1);

	this.instance = new lib.btnhima();
	this.instance.parent = this;
	this.instance.setTransform(137.5,53.7,1,1,0,0,0,137.5,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,290,122.5);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("pages/mannen.htm", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.button_3 = new lib.btnHim();
	this.button_3.parent = this;
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.btnHim(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-7.5,-7.5,290,122.5), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(137.5,53.7,1,1,0,0,0,137.5,53.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7.5,290,122.5);


// stage content:
(lib.himandher2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_61 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(1));

	// R
	this.instance = new lib.R("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-87.9,312.8,1,1,0,0,0,28.6,46.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({_off:false},0).to({x:717.8},4).wait(1));

	// E
	this.instance_1 = new lib.E("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-138.3,312.8,1,1,0,0,0,25.9,46.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({x:667.4},4).wait(5));

	// M
	this.instance_2 = new lib.M("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-197,312.8,1,1,0,0,0,36.9,46.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({x:608.7},3).wait(9));

	// O
	this.instance_3 = new lib._0("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-261.9,312.8,1,1,0,0,0,32.3,46.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({x:543.8},3).wait(12));

	// Z
	this.instance_4 = new lib.Z("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-316.9,312.8,1,1,0,0,0,26.9,46.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({x:488.8},3).wait(15));

	// E
	this.instance_5 = new lib.e2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-384.9,312.8,1,1,0,0,0,25.9,46.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({x:420.8},3).wait(18));

	// Z
	this.instance_6 = new lib.z2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-433.6,312.8,1,1,0,0,0,26.9,46.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({_off:false},0).to({x:372.1},3).wait(21));

	// E
	this.instance_7 = new lib.e3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-482.3,312.8,1,1,0,0,0,25.9,46.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({_off:false},0).to({x:323.4},3).wait(24));

	// D
	this.instance_8 = new lib.d("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-534.2,312.8,1,1,0,0,0,30.2,46.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({x:271.5},3).wait(27));

	// J
	this.instance_9 = new lib.j("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-37.3,221.9,1,1,0,0,0,22.4,46.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({x:768.4},3).wait(30));

	// I
	this.instance_10 = new lib.i("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-69.6,221.9,1,1,0,0,0,14.1,46.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(26).to({_off:false},0).to({x:736.1},3).wait(33));

	// J
	this.instance_11 = new lib.j2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-101.9,221.9,1,1,0,0,0,22.4,46.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(23).to({_off:false},0).to({x:703.8},3).wait(36));

	// G
	this.instance_12 = new lib._1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-168.9,221.9,1,1,0,0,0,29.4,46.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({x:636.8},3).wait(39));

	// A
	this.instance_13 = new lib.a("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-223.4,221.9,1,1,0,0,0,29.3,46.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(17).to({_off:false},0).to({x:582.3},3).wait(42));

	// A
	this.instance_14 = new lib.a2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-277.8,221.9,1,1,0,0,0,29.3,46.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({_off:false},0).to({x:527.9},3).wait(45));

	// R
	this.instance_15 = new lib.r2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-331.5,221.9,1,1,0,0,0,28.6,46.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(11).to({_off:false},0).to({x:474.2},3).wait(48));

	// D
	this.instance_16 = new lib.d2("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-386.1,221.9,1,1,0,0,0,30.2,46.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(8).to({_off:false},0).to({x:419.6},3).wait(51));

	// T
	this.instance_17 = new lib.t("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-455.6,221.9,1,1,0,0,0,24.3,46.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(5).to({_off:false},0).to({x:350.1},3).wait(54));

	// A
	this.instance_18 = new lib.a3("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-505,221.9,1,1,0,0,0,29.3,46.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({_off:false},0).to({x:300.7},3).wait(57));

	// W
	this.instance_19 = new lib.w("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-569.4,221.9,1,1,0,0,0,39.3,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:236.3},2).wait(60));

	// btnHer
	this.instance_20 = new lib.Tween1("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(763.6,847.4,0.123,0.258,0,180,0);

	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(703,496.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.movieClip_1}]},61).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true,scaleX:1,scaleY:1,skewX:0,x:703,y:496.5,mode:"independent"},61).wait(1));

	// btnHim
	this.instance_21 = new lib.btnHim();
	this.instance_21.parent = this;
	this.instance_21.setTransform(290.5,847.3,0.108,0.258,0,180,0,137.5,53.8);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 2, false, new lib.btnHim(), 3);

	this.instance_22 = new lib.Symbol4("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(302.5,496.1,1,1,0,0,0,137.5,53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_22}]},61).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true,regY:53.7,scaleX:1,scaleY:1,skewX:0,x:302.5,y:496.1,mode:"synched",startPosition:0},61).wait(1));

	// Layer 2
	this.instance_23 = new lib.FlippingPanels();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-9,-2,0.87,1.47);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTD/IhwijIhOAAIAACjIhzAAIAAn9IDCAAQB2AAAyAoQAzAoAABZQAAB6hhAkICBC2gAhrgFIBTAAQA5AAAVgTQAVgTAAgpQAAgqgWgPQgVgPg3AAIhUAAg");
	this.shape.setTransform(309.9,255.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape_1.setTransform(258.7,255.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACrD/IAAlAIiJEWIhDAAIiJkWIAAFAIhzAAIAAn9ICaAAICDEXICEkXICaAAIAAH9g");
	this.shape_2.setTransform(198.8,255.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai9C8QhOhLAAhxQAAhvBOhMQBNhLBwAAQBxAABOBLQBNBMAABvQAABxhNBLQhOBMhxgBQhwABhNhMgAhqhzQgsAxAABDQAABEAsAwQAsAvA/AAQA/AAAsgvQAsgwAAhEQAAhDgsgxQgsgwg/AAQg/AAgsAwg");
	this.shape_3.setTransform(133.8,255);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjVD/IAAhOIELlMIkCAAIAAhjIGdAAIAABPIkJFLIEOAAIAABjg");
	this.shape_4.setTransform(78.7,255.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape_5.setTransform(841.4,164.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjVD/IAAhOIELlMIkCAAIAAhjIGdAAIAABPIkKFLIEPAAIAABjg");
	this.shape_6.setTransform(791.4,164.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai7D/IAAn9IFvAAIAABlIj9AAIAABqIDkAAIAABgIjkAAIAABpIEFAAIAABlg");
	this.shape_7.setTransform(744,164.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjnD/IAAn9IC1AAQCHAABJBDQBKBCAAB4QAAB2hIBFQhHBFiRAAgAh0CaIBIAAQBNAAAqgnQAqgnAAhMQAAhKgqgoQgqgphWAAIg/AAg");
	this.shape_8.setTransform(692.2,164.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AijC6IA7hRQAuAyAyAAQAXAAARgUQASgSAAglIAAjuIiXAAIAAhiIEJAAIAAFMQAABbgvAtQgvAuhJgBQhcAAhEhHg");
	this.shape_9.setTransform(621.3,164.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4D/IAAn9IBxAAIAAH9g");
	this.shape_10.setTransform(591,164.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AijC6IA7hRQAuAyAyAAQAXAAARgUQASgSAAglIAAjuIiXAAIAAhiIEJAAIAAFMQAABbgvAtQgvAuhJgBQhcAAhEhHg");
	this.shape_11.setTransform(556.7,164.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AigC9QhMhKgBhxQABhxBNhMQBOhMBtAAQBuAABRBIIg8BWQgigegdgLQgdgLghAAQhAAAgtAsQgsAsAABHQAABIArAsQArArA5AAQA8AAAngXIAAiLIBzAAIAAC0QhNBViFAAQhwAAhMhLg");
	this.shape_12.setTransform(491.5,164.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ACaD/IgvhuIjVAAIgwBuIh4AAIDbn9IBuAAIDdH9gAg/AtIB/AAIhAiTg");
	this.shape_13.setTransform(437.2,164.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACaD/IgvhuIjVAAIgvBuIh6AAIDdn9IBtAAIDcH9gAg/AtIB/AAIg/iTg");
	this.shape_14.setTransform(382.8,164.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABTD/IhwijIhPAAIAACjIhyAAIAAn9IDCAAQB2AAAyAoQAzAoAABZQAAB6hhAkICBC2gAhsgFIBUAAQA5AAAVgTQAVgTAAgpQAAgqgWgPQgWgPg1AAIhWAAg");
	this.shape_15.setTransform(331.1,164.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjnD/IAAn9IC1AAQCHAABJBDQBKBCAAB4QAAB2hIBFQhHBFiRAAgAh0CaIBIAAQBNAAAqgnQAqgnAAhMQAAhKgqgoQgqgphWAAIg/AAg");
	this.shape_16.setTransform(275.8,164.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag4D/IAAmaIiRAAIAAhjIGSAAIAABjIiRAAIAAGag");
	this.shape_17.setTransform(205,164.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACaD/IgvhuIjVAAIgvBuIh6AAIDdn9IBtAAIDcH9gAg/AtIB/AAIg/iTg");
	this.shape_18.setTransform(155.6,164.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABvD/IhvlhIhvFhIhUAAIiyn9IB7AAIBlElIBaklIB2AAIBaElIBmklIB7AAIiyH9g");
	this.shape_19.setTransform(91.2,164.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_23}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_23}]},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.7,382,1635,865.1);
// library properties:
lib.properties = {
	id: '353B99D2B28C9B428482544168148F86',
	width: 960,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/FlippingPanels.jpg", id:"FlippingPanels"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['353B99D2B28C9B428482544168148F86'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;