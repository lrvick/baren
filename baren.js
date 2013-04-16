function Baren() {
	
	// PostScript state
	this.ptr	= 0;				// operand stack pointer
	this.stk	= [];				// operand stack
	this.dict 	= {};				// current dictionary
	this.dstk	= [this.dict];		// dictionary stack
	this.gstk	= [];				// graphics state stack
	this.bmap	= null;				// host bitmap instance

	// dict-stack lookup
	this.dstk.get = function(id) {
		for (var i = this.length-1; i >= 0; i--) {
			if (this[i][id] !== undefined) {
				//Baren.debug('dstk::get=' + Baren.pstostring(this[i][id]) + ' (' + (this[i][id] instanceof Function) + ')');
				return this[i][id];
			}
		}
	}

	// Initialize the graphics 
	this.greset();
}

// Objects for globally registering the encoders and fonts
Baren.libs = {};
Baren.fonts = {};

Baren.symdesc = [
	{ sym:"ean5",desc:"EAN-5 (5 digit addon)",text:"90200",opts:"includetext guardwhitespace" },
	{ sym:"ean2",desc:"EAN-2 (2 digit addon)",text:"05",opts:"includetext guardwhitespace" },
	{ sym:"ean13",desc:"EAN-13",text:"2071473968010",opts:"includetext guardwhitespace" },
	{ sym:"ean8",desc:"EAN-8",text:"01335583",opts:"includetext guardwhitespace height=0.5" },
	{ sym:"upca",desc:"UPC-A",text:"488581014973",opts:"includetext" },
	{ sym:"upce",desc:"UPC-E",text:"00123457",opts:"includetext height=0.4" },
	{ sym:"isbn",desc:"ISBN",text:"978-1-56592-479 54495",opts:"includetext guardwhitespace" },
	{ sym:"ismn",desc:"ISMN",text:"979-0-2600-0043",opts:"includetext guardwhitespace" },
	{ sym:"issn",desc:"ISSN",text:"0317-8471 00 05",opts:"includetext guardwhitespace" },
	{ sym:"code128",desc:"Code 128",text:"Count01234567^FNC2!",opts:"includetext parsefnc" },
	{ sym:"gs1-128",desc:"GS1-128",text:"(01)95012345678903(3103)000123",opts:"includetext" },
	{ sym:"ean14",desc:"GS1-14",text:"(01)04601234567893",opts:"includetext" },
	{ sym:"sscc18",desc:"SSCC-18",text:"(00)006141411234567890",opts:"includetext" },
	{ sym:"code39",desc:"Code 39",text:"THIS IS CODE 39",opts:"includetext includecheck includecheckintext" },
	{ sym:"code39ext",desc:"Code 39 Extended",text:"Code39 Ext!",opts:"includetext includecheck includecheckintext" },
	{ sym:"code32",desc:"Italian PharmaCode",text:"01234567",opts:"includetext" },
	{ sym:"pzn",desc:"Pharmazentralnummer (PZN)",text:"123456",opts:"includetext" },
	{ sym:"code93",desc:"Code 93",text:"THIS IS CODE 93",opts:"includetext includecheck" },
	{ sym:"code93ext",desc:"Code 93 Extended",text:"Code93 Ext!",opts:"includetext includecheck" },
	{ sym:"interleaved2of5",desc:"Interleaved 2 of 5 (ITF)",text:"2401234567",opts:"height=0.5 includecheck includetext includecheckintext" },
	{ sym:"itf14",desc:"ITF-14",text:"04601234567893",opts:"includetext" },
	{ sym:"identcode" ,desc:"Deutsche Post Identcode",text:"563102430313",opts:"includetext" },
	{ sym:"leitcode" ,desc:"Deutsche Post Leitcode",text:"21348075016401",opts:"includetext" },
	{ sym:"databaromni",desc:"GS1 DataBar Omnidirectional",text:"(01)24012345678905",opts:"" },
	{ sym:"databarstacked",desc:"GS1 DataBar Stacked",text:"(01)24012345678905",opts:"" },
	{ sym:"databarstackedomni",desc:"GS1 DataBar Stacked Omnidirectional",text:"(01)24012345678905",opts:"" },
	{ sym:"databartruncated",desc:"GS1 DataBar Truncated",text:"(01)24012345678905",opts:"" },
	{ sym:"databarlimited",desc:"GS1 DataBar Limited",text:"(01)15012345678907",opts:"" },
	{ sym:"databarexpanded",desc:"GS1 DataBar Expanded",text:"(01)95012345678903(3103)000123",opts:"" },
	{ sym:"databarexpandedstacked",desc:"GS1 DataBar Expanded Stacked",text:"(01)95012345678903(3103)000123",opts:"segments=4" },
	{ sym:"pharmacode",desc:"Pharmaceutical Binary Code",text:"117480",opts:"showborder" },
	{ sym:"pharmacode2",desc:"Two-track Pharmacode",text:"117480",opts:"includetext showborder" },
	{ sym:"code2of5",desc:"Code 25",text:"01234567",opts:"version=iata includetext includecheck includecheckintext" },
	{ sym:"code11",desc:"Code 11",text:"0123456789",opts:"includetext includecheck includecheckintext" },
	{ sym:"bc412",desc:"BC412",text:"BC412",opts:"semi includetext includecheckintext" },
	{ sym:"rationalizedCodabar",desc:"Rationalized Codabar",text:"A0123456789B",opts:"includetext includecheck includecheckintext" },
	{ sym:"onecode",desc:"United States Postal Service Intelligent Mail",text:"0123456709498765432101234567891",opts:"barcolor=FF0000" },
	{ sym:"postnet",desc:"United States Postal Service POSTNET",text:"01234",opts:"includetext includecheckintext" },
	{ sym:"planet",desc:"United States Postal Service PLANET",text:"01234567890",opts:"includetext includecheckintext" },
	{ sym:"royalmail",desc:"Royal Mail 4 State Customer Code (RM4SCC)",text:"LE28HS9Z",opts:"includetext includecheckintext barcolor=FF0000" },
	{ sym:"auspost",desc:"AusPost 4 State Customer Code",text:"5956439111ABA 9",opts:"includetext custinfoenc=character" },
	{ sym:"kix",desc:"Royal Dutch TPG Post KIX 4-State Barcode",text:"1231FZ13XHS",opts:"includetext includecheckintext" },
	{ sym:"japanpost",desc:"Japan Post 4 State Customer Code",text:"6540123789-A-K-Z",opts:"includetext includecheckintext" },
	{ sym:"msi",desc:"MSI Modified Plessey",text:"0123456789",opts:"includetext includecheck includecheckintext" },
	{ sym:"plessey",desc:"Plessey UK",text:"01234ABCD",opts:"includetext includecheckintext" },
	{ sym:"telepen",desc:"Telepen",text:"123456",opts:"numeric includetext" },
	{ sym:"posicode",desc:"PosiCode",text:"ABC123",opts:"version=b inkspread=-0.5 parsefnc includetext" },
	{ sym:"codablockf",desc:"Codablock F",text:"CODABLOCK F 34567890123456789010040digit",opts:"columns=8" },
	{ sym:"code16k",desc:"Code 16K",text:"Abcd-1234567890-wxyZ",opts:"" },
	{ sym:"code49",desc:"Code 49",text:"MULTIPLE ROWS IN CODE 49",opts:"" },
	{ sym:"channelcode",desc:"Channel Code",text:"3493",opts:"height=0.5 includetext " },
	{ sym:"flattermarken",desc:"Flattermarken",text:"12345",opts:"inkspread=-0.25" },
	{ sym:"raw",desc:"Raw bar space succession for custom symbologies ",text:"331132131313411122131311333213114131131221323",opts:"height=0.5" },
	{ sym:"daft",desc:"Raw DAFT succession for custom 4 state symbologies",text:"FATDAFTDAD",opts:"" },
	{ sym:"symbol",desc:"Miscellaneous symbols",text:"fima",opts:"backgroundcolor=DD000011" },
	{ sym:"pdf417",desc:"PDF417",text:"This is PDF417",opts:"" },
	{ sym:"micropdf417",desc:"MicroPDF417",text:"MicroPDF417",opts:"" },
	{ sym:"datamatrix",desc:"Data Matrix",text:"This is Data Matrix!",opts:"rows=32 columns=32" },
	{ sym:"qrcode",desc:"QR Code",text:"http://www.terryburton.co.uk/barcodewriter/",opts:"eclevel=M" },
	{ sym:"maxicode",desc:"MaxiCode",text:"[)>^03001^02996152382802^029840^029001^0291Z00004951^029UPSN^02906X610^029159^0291234567^0291/1^029^029Y^029634 ALPHA DR^029PITTSBURGH^029PA^029^004",opts:"mode=2 parse" },
	{ sym:"azteccode",desc:"Aztec Code",text:"This is Aztec Code",opts:"format=full" },
	{ sym:"codeone",desc:"Code One",text:"Code One",opts:"version=B" },
	{ sym:"gs1-cc",desc:"GS1 Composite 2D Component",text:"(01)95012345678903(3103)000123",opts:"ccversion=b cccolumns=4" },
	{ sym:"ean13composite",desc:"EAN-13 Composite",text:"2112345678900|(99)1234-abcd",opts:"includetext" },
	{ sym:"ean8composite",desc:"EAN-8 Composite",text:"02345673|(21)A12345678",opts:"includetext" },
	{ sym:"upcacomposite",desc:"UPC-A Composite",text:"416000336108|(99)1234-abcd",opts:"includetext" },
	{ sym:"upcecomposite",desc:"UPC-E Composite",text:"00123457|(15)021231",opts:"includetext" },
	{ sym:"databaromnicomposite",desc:"GS1 DataBar Omnidirectional Composite",text:"(01)03612345678904|(11)990102",opts:"" },
	{ sym:"databarstackedcomposite",desc:"GS1 DataBar Stacked Composite",text:"(01)03412345678900|(17)010200",opts:"" },
	{ sym:"databarstackedomnicomposite",desc:"GS1 DataBar Stacked Omnidirectional Composite",text:"(01)03612345678904|(11)990102",opts:"" },
	{ sym:"databartruncatedcomposite",desc:"GS1 DataBar Truncated Composite",text:"(01)03612345678904|(11)990102",opts:"" },
	{ sym:"databarlimitedcomposite",desc:"GS1 DataBar Limited Composite",text:"(01)03512345678907|(21)abcdefghijklmnopqrstuv",opts:"" },
	{ sym:"databarexpandedcomposite",desc:"GS1 DataBar Expanded Composite",text:"(01)93712345678904(3103)001234|(91)1A2B3C4D5E",opts:"" },
	{ sym:"databarexpandedstackedcomposite",desc:"GS1 DataBar Expanded Stacked Composite",text:"(01)00012345678905(10)ABCDEF|(21)12345678",opts:"segments=4 " },
	{ sym:"gs1-128composite",desc:"GS1-128 Composite",text:"(00)030123456789012340|(02)13012345678909(37)24(10)1234567ABCDEFG",opts:"ccversion=c" },
	{ sym:"gs1datamatrix",desc:"GS1 Data Matrix",text:"(01)03453120000011(17)120508(10)ABCD1234(410)9501101020917",opts:"" },
	{ sym:"hibccode39",desc:"HIBC Code 39",text:"A123BJC5D6E71",opts:"includetext" },
	{ sym:"hibccode128",desc:"HIBC Code 128",text:"A123BJC5D6E71",opts:"includetext" },
	{ sym:"hibcdatamatrix",desc:"HIBC Data Matrix",text:"A123BJC5D6E71",opts:"" },
	{ sym:"hibcpdf417",desc:"HIBC PDF417",text:"A123BJC5D6E71",opts:"" },
	{ sym:"hibcmicropdf417",desc:"HIBC MicroPDF417",text:"A123BJC5D6E71",opts:"" },
	{ sym:"hibcqrcode",desc:"HIBC QR Code",text:"A123BJC5D6E71",opts:"" },
	{ sym:"hibccodablockf",desc:"HIBC Codablock F",text:"A123BJC5D6E71",opts:"" }
];

// The list of symbols that require textyoffset=-10 to get the ocrb font
// to align vertically.
Baren.needyoffset = {
	auspost:true,
	bc412:true,
	code11:true,
	code2of5:true,
	code39:true,
	code39ext:true,
	code93:true,
	code93ext:true,
	flattermarken:true,
	itf14:true,
	interleaved2of5:true,
	japanpost:true,
	msi:true,
	plessey:true,
	rationalizedCodabar:true,
	royalmail:true,
	kix:true,
	telepen:true,
	planet:true,
	postnet:true,
};

Baren.baropts = {
	"ean5":{
		includetext:false,
		height:0.7,
	},
	"ean2":{
		includetext:false,
		height:0.7,
	},
	"ean13":{
		includetext:false,
		height:1,
		addongap:12,
	},
	"ean8":{
		includetext:false,
		height:1,
		addongap:12,
	},
	"upca":{
		includetext:false,
		height:1,
		addongap:12,
	},
	"upce":{
		includetext:false,
		height:1,
		addongap:12,
	},
	"isbn":{
		includetext:false,
		height:1,
		addongap:12,
		legacy:false,
	},
	"ismn":{
		includetext:false,
		height:1,
		addongap:12,
		legacy:false,
	},
	"issn":{
		includetext:false,
		height:1,
		addongap:12,
	},
	"code128":{
		includetext:false,
		height:1,
		encoding:"auto",
		raw:false,
		parse:false,
		parsefnc:false,
	},
	"gs1-128":{
		includetext:false,
		height:0.5,
		linkagea:false,
		linkagec:false,
	},
	"ean14":{
		includetext:false,
		height:1,
	},
	"sscc18":{
		includetext:false,
		height:1,
	},
	"code39":{
		includecheck:false,
		includetext:false,
		includecheckintext:false,
		hidestars:false,
		height:1,
	},
	"code39ext":{
		includetext:false,
		parse:false,
	},
	"code32":{
		includetext:false,
		height:1,
	},
	"pzn":{
		includetext:false,
		height:1,
		pzn8:false,
	},
	"code93":{
		includecheck:false,
		includetext:false,
		height:1,
		parsefnc:false,
	},
	"code93ext":{
		includetext:false,
		parse:false,
	},
	"interleaved2of5":{
		includecheck:false,
		includetext:false,
		includecheckintext:false,
		height:1,
	},
	"itf14":{
		includetext:false,
		height:1,
	},
	"identcode":{
		includetext:false,
		height:1,
	},
	"leitcode":{
		includetext:false,
		height:1,
	},
	"databaromni":{
		height:33,
		linkage:false,
		format:"omni",
	},
	"databarstacked":{
	},
	"databarstackedomni":{
	},
	"databartruncated":{
	},
	"databarlimited":{
		height:10,
		linkage:false,
	},
	"databarexpanded":{
		height:34,
		format:"expanded",
		segments:-1,
		linkage:false,
	},
	"databarexpandedstacked":{
	},
	"pharmacode":{
		height:8,
		nwidth:0.5,
		wwidth:1.5,
		swidth:1.0,
	},
	"pharmacode2":{
		includetext:false,
		height:4,
	},
	"code2of5":{
		includecheck:false,
		includetext:false,
		includecheckintext:false,
		height:1,
		version:"industrial",
	},
	"code11":{
		includecheck:false,
		includetext:false,
		includecheckintext:false,
		height:1,
	},
	"bc412":{
		includecheck:false,
		includetext:false,
		includecheckintext:false,
		includestartstop:false,
		semi:false,
		height:1,
	},
	"rationalizedCodabar":{
		includecheck:false,
		includetext:false,
		includecheckintext:false,
		height:1,
	},
	"onecode":{
		height:0.15,
	},
	"postnet":{
		includetext:false,
		includecheckintext:false,
		height:0.125,
	},
	"planet":{
		includetext:false,
		includecheckintext:false,
		height:0.125,
	},
	"royalmail":{
		includetext:false,
		includecheckintext:false,
		height:0.175,
	},
	"auspost":{
		includetext:false,
		height:0.175,
		custinfoenc:"character",
	},
	"kix":{
		includetext:false,
		includecheckintext:false,
		height:0.175,
	},
	"japanpost":{
		includetext:false,
		includecheckintext:false,
		height:0.175,
	},
	"msi":{
		includecheck:false,
		includetext:false,
		includecheckintext:false,
		checktype:"mod10",
		badmod11:false,
		height:1,
	},
	"plessey":{
		includetext:false,
		includecheckintext:false,
		unidirectional:false,
		height:1,
	},
	"telepen":{
		numeric:false,
		includetext:false,
		height:1,
		parse:false,
	},
	"posicode":{
		includetext:false,
		height:1,
		encoding:"auto",
		version:"a",
		checkoffset:0,
		raw:false,
		parse:false,
		parsefnc:false,
	},
	"codablockf":{
		rows:-1,
		columns:8,
		rowheight:10,
		sepheight:1,
		encoding:"auto",
		parse:false,
		parsefnc:false,
	},
	"code16k":{
		mode:-1,
		pos:-1,
		rows:0,
		rowheight:8,
		sepheight:1,
		encoding:"auto",
		raw:false,
		parse:false,
		parsefnc:false,
	},
	"code49":{
		mode:-1,
		pos:-1,
		rows:0,
		rowheight:8,
		sepheight:1,
		parse:false,
		parsefnc:false,
	},
	"channelcode":{
		shortfinder:false,
		includetext:false,
		includecheck:false,
		height:1,
	},
	"flattermarken":{
		includetext:false,
		height:0.3,
	},
	"raw":{
		height:1,
	},
	"daft":{
		height:0.175,
	},
	"symbol":{
	},
	"pdf417":{
		compact:false,
		eclevel:-1,
		columns:0,
		rows:0,
		rowmult:3,
		ccc:false,
		raw:false,
		parse:false,
	},
	"micropdf417":{
		columns:0,
		rows:0,
		rowmult:2,
		cca:false,
		ccb:false,
		raw:false,
		parse:false,
	},
	"datamatrix":{
		columns:0,
		rows:0,
		encoding:"ascii",
		raw:false,
		parse:false,
		parsefnc:false,
	},
	"qrcode":{
		format:"full",
		version:"unset",
		eclevel:"unset",
		encoding:"unset",
		raw:false,
		parse:false,
	},
	"maxicode":{
		mode:-1,
		sam:-1,
		parse:false,
	},
	"azteccode":{
		format:"unset",
		readerinit:false,
		layers:-1,
		eclevel:23,
		ecaddchars:3,
		raw:false,
		parse:false,
	},
	"codeone":{
		version:"unset",
		encoding:"ascii",
		raw:false,
		parse:false,
	},
	"gs1-cc":{
		ccversion:"a",
		cccolumns:-1,
		lintype:"",
		linwidth:-1,
	},
	"ean13composite":{
	},
	"ean8composite":{
	},
	"upcacomposite":{
	},
	"upcecomposite":{
	},
	"databaromnicomposite":{
	},
	"databarstackedcomposite":{
	},
	"databarstackedomnicomposite":{
	},
	"databartruncatedcomposite":{
	},
	"databarlimitedcomposite":{
	},
	"databarexpandedcomposite":{
	},
	"databarexpandedstackedcomposite":{
	},
	"gs1-128composite":{
	},
	"gs1datamatrix":{
	},
	"hibccode39":{
	},
	"hibccode128":{
	},
	"hibcdatamatrix":{
	},
	"hibcpdf417":{
		columns:2,
	},
	"hibcmicropdf417":{
		columns:2,
	},
	"hibcqrcode":{
	},
	"hibccodablockf":{
	},
};

Baren.debug = function(s) {
	/*
	return;
	var div = document.getElementById('debug');
	if (div)
		div.innerHTML += s + '\r\n';
	*/
	//console.log('DEBUG: "'+s+'"');
};

Baren.psarray = function(v) {
	if (!(this instanceof Baren.psarray))
		return new Baren.psarray(v);

	if (typeof(v) == "number") {
		var a = [];
		for (var i = 0; i < v; i++)
			a[i] = null;

		this.value  = a;
		this.length = v;
		this.offset = 0;
	}
	else if (v instanceof Array) {
		this.value  = v;
		this.offset = 0;
		this.length = v.length;
	}
	else {	// v is a psarray
		this.value  = [];
		this.length = v.length;
		this.offset = 0;

		for (var i = 0; i < v.length; i++)
			this.value[i] = v.value[v.offset+i];
	}
	// Define the indexes (just for show) so forall works correctly.
	// The actual implementation uses get/set.
	for (var i = 0; i < this.length; i++)
		this[i] = undefined;
}
Baren.psarray.prototype.toString = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += ' ' + Baren.pstostring(this.value[i]);
	return '[' + s.substr(1) + ']';
}
Baren.psarray.prototype.valueOf = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += ' ' + Baren.pstostring(this.value[i]);
	return '[' + s.substr(1) + ']';
}
Baren.psarray.prototype.get = function(n) {
	return this.value[this.offset+parseFloat(n)];
}
Baren.psarray.prototype.set = function(n, v) {
	this.value[this.offset+parseFloat(n)] = v;
}
// extracts a live subset/range of elements
Baren.psarray.prototype.subset = function(offset, length) {
	if (isNaN(length) || offset+length > this.length)
		length = this.length-offset;

	var copy = new Baren.psarray(length);
	copy.value  = this.value;
	copy.offset = this.offset + offset;

	return copy;
}
// assigns a subset/range of elements
Baren.psarray.prototype.assign = function(offset, source) {
	if (source instanceof Array) {
		// array optimization
		if (this.length == this.value.length && this.length == source.length)
			this.value = source;
		else
			for (var i = 0; i < source.length; i++)
				this.value[this.offset+offset+i] = source[i];
	}
	else
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.value[source.offset+i];
}

Baren.psstring = function(v) {
	if (!(this instanceof Baren.psstring))
		return new Baren.psstring(v);

	if (typeof(v) == 'number') {
		this.value  = [];
		this.length = v;
		this.offset = 0;

		for (var i = 0; i < v; i++)
			this.value[i] = 0;
	}
	else if (typeof(v) == 'string') {
		this.value  = [];
		this.length = v.length;
		this.offset = 0;
		for (var i = 0; i < v.length; i++)
			this.value[i] = v.charCodeAt(i);
	}
	else { // v is a psstring
		this.value  = [];
		this.length = v.length;
		this.offset = 0;

		for (var i = 0; i < v.length; i++)
			this.value[i] = v.value[v.offset+i];
	}
	// Define the indexes (just for show) so forall works correctly.
	// The actual implementation uses get/set.
	for (var i = 0; i < this.length; i++)
		this[i] = NaN;
}
Baren.psstring.prototype.toString = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += String.fromCharCode(this.value[i]);
	return s;
}
Baren.psstring.prototype.valueOf = function() {
	var s = '';
	for (var i = this.offset; i < this.offset+this.length; i++)
		s += String.fromCharCode(this.value[i]);
	return s;
}

Baren.psstring.prototype.get = function(n) {
	return this.value[this.offset+parseFloat(n)];
}
Baren.psstring.prototype.set = function(n, v) {
	this.value[this.offset+parseFloat(n)] = v;
}
// extracts a live subset/range of elements
Baren.psstring.prototype.subset = function(offset, length) {
	if (isNaN(length) || offset+length > this.length)
		length = this.length-offset;

	var copy = new Baren.psstring(length);
	copy.value  = this.value;
	copy.offset = this.offset + offset;

	return copy;
}
// assigns a subset/range of elements
Baren.psstring.prototype.assign = function(offset, source) {
	if (typeof(source) === 'string') {
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.charCodeAt(i);
	}
	else {
		for (var i = 0; i < source.length; i++)
			this.value[this.offset+offset+i] = source.value[source.offset+i];
	}
}
Baren.psstring.prototype.indexOf = function(s) {
	return this.toString().indexOf(s.toString());
}
Baren.pstype = function(v) {
	// null can cause trouble - get it out of the way
	if (v === null || v === undefined)
		return 'nulltype';

	var t = typeof(v);
	if (t == 'number')
		return v % 1 ? 'realtype' : 'integertype';
	if (t == 'boolean')
		return 'booleantype';

	if (v instanceof Baren.psarray)
		return 'arraytype';
	if (v instanceof Baren.psstring)
		return 'stringtype';

	return 'dicttype';
}

Baren.pstostring = function(v) {
	// null can cause trouble - get it out of the way
	if (v === null)
		return 'null';
	if (typeof(v) == 'function')
		return '--function--';
	if (v instanceof Baren.psarray)
		return v.toString();
	if (v instanceof Baren.psstring) {
		// postscript strings often contain binary data...
		var s = '(';
		for (var i = 0; i < v.length; i++) {
			var cd = v.value[v.offset+i];
			switch (cd) {
			case 92:	s += '\\\\';	break;
			case 10:	s += '\\n';		break;
			case 13:	s += '\\r';		break;
			case  9:	s += '\\t';		break;
			case  8:	s += '\\b';		break;
			case 40:	s += '\\(';		break;
			case 41:	s += '\\)';		break;
			default:
				if (cd < 32 || cd > 127)
					s += '\\'+(function(s) { return '000'.substr(s.length)+s; })(cd.toString(8));
				else
					s += String.fromCharCode(cd);
			}
		}
		return s + ')';
	}
	if (typeof(v) == 'object') {
		var s = '';
		for (var i in v)
			s += ' /' + i + ' ' + Baren.pstostring(v[i]);
		return '<<' + s + ' >>';
	}
	// Watch for the usual floating-point nonsense
	if (typeof(v) == 'number' && v % 1) {
		return v.toPrecision(12).replace(/0*$/,'');
	}
	return '' + v;
}

// BEGIN Baren METHODS

// Host bitmap getter/setter
Baren.prototype.bitmap = function(bmap) {
	if (!bmap)
		return this.bmap;
	this.bmap = bmap;
}

// Converts a javascript value into a postscript value
Baren.prototype.value = function(v) {
	if (v === true || v === false || v === null)
		return v;

	var t = typeof(v);
	if (t == 'number')
		return v;
	if (t == 'string')
		return Baren.psstring(v);
	if (v instanceof Array)
		return Baren.psarray(v);
	return v;	// s.b. a dictionary object
}

Baren.prototype.push = function(v) {
	this.stk[this.ptr++] = this.value(v);
}

Baren.prototype.pop = function() {
	if (this.ptr <= 0)
		throw '--underflow--';
	return this.stk[--this.ptr];
}

Baren.prototype.call = function(name) {
	if (!Baren.libs[name])
		throw name + ': --undefined--';

	// Load into the dictionary
	this.dict[name] = Baren.libs[name];

	// Make the call
	Baren.libs[name].call(this);
}
// eval on a psstring - emulates postscript '<string> exec'.
// BWIPP only requires support for two forms of eval; hex string literals in
// the form <rrggbb> and <ccmmyykk>.
Baren.prototype.eval = function(src) {
	src = src.toString();	// work with a javascript string
	if (!/^<(([0-9A-F][0-9A-F])*)>$/i.test(src))
			throw 'eval: not a hex string literal';

	var dst = new Baren.psstring((src.length-2)/2);  // the RE above ensures pairs of digits
	var idx = 0;
	for (var i = 1; i < src.length-1; i += 2)
		dst.set(idx++, parseInt(src.substr(i, 2), 16));

	// Push the string onto the stack
	this.stk[this.ptr++] = dst;
}



// All graphics state that must be gsaved/grestored are given
// an identifying prefix of g_
Baren.prototype.greset = function() {
	// Current Transform Matrix - since we don't do rotation, we can fake
	// the matrix math
	this.g_tdx	= 0;	// CTM x-offset
	this.g_tdy	= 0;	// CTM y-offset
	this.g_tsx	= 1;	// CTM x-scale factor
	this.g_tsy	= 1;	// CTM y-scale factor

	this.g_posx	= 0;		// current x position
	this.g_posy	= 0;		// current y position
	this.g_penw	= 1;		// current line/pen width
	this.g_path	= [];		// current path
	this.g_font	= null;		// current font object
	this.g_rgb  = [0,0,0];	// current color (black)
}

Baren.prototype.currentpoint = function() {
	return { x:(this.g_posx-this.g_tdx)/this.g_tsx, y:(this.g_posy-this.g_tdy)/this.g_tsy };
}
Baren.prototype.currentfont = function() {
	return this.g_font;
}
Baren.prototype.findfont = function(name) {	// name is a psstring
	return { FontName:name };
}
// dtransform is a no-op
Baren.prototype.dtransform = function(mtx,dx,dy) {
	return { dx:dx, dy:dy };
}
Baren.prototype.translate = function(x, y) {
	this.g_tdx = this.g_tsx * x;
	this.g_tdy = this.g_tsy * y;
}
Baren.prototype.scale = function(x, y) {
	this.g_tsx *= x;
	this.g_tsy *= y;
}
Baren.prototype.setlinewidth = function(w) {
	this.g_penw = w;
}
Baren.prototype.setfont = function(f) {
	this.g_font = f;
}
Baren.prototype.setrgb = function(r, g, b) {
	var r = Math.round(r*255);
	var g = Math.round(g*255);
	var b = Math.round(b*255);
	this.bmap.color(r, g, b);
	this.g_rgb = [ r, g, b ];
}
Baren.prototype.setcmyk = function(c, m, y, k) {
	var r = Math.round((1-c) * (1-k) * 255);
	var g = Math.round((1-m) * (1-k) * 255);
	var b = Math.round((1-y) * (1-k) * 255);
	this.bmap.color(r, g, b);
	this.g_rgb = [ r, g, b ];
}
Baren.prototype.newpath = function() {
	this.g_path = [];
}
Baren.prototype.closepath = function() {
	if (this.g_path.length)  {
		var c0 = this.g_path[0];
		var c1 = this.g_path[this.g_path.length-1];
		this.g_path.push([ c1[0], c1[1] ]);
		this.g_path.push(['c']);
		this.g_path.push([ c0[0], c0[1] ]);
	}
}
Baren.prototype.moveto = function(x,y) {
	this.g_posx = this.g_tdx + this.g_tsx * x;
	this.g_posy = this.g_tdy + this.g_tsy * y;
	Baren.debug('moveto: posx,posy=(' + this.g_posx + ',' + this.g_posy + ')');
}
Baren.prototype.rmoveto = function(x,y) {
	this.g_posx += this.g_tsx * x;
	this.g_posy += this.g_tsy * y;
	Baren.debug('rmoveto: posx,posy=(' + this.g_posx + ',' + this.g_posy + ')');
}
Baren.prototype.lineto = function(x,y) {
	this.g_path.push([this.g_posx, this.g_posy]);
	this.g_path.push(['l']);
	this.g_posx = this.g_tdx + this.g_tsx * x;
	this.g_posy = this.g_tdy + this.g_tsy * y;
	this.g_path.push([this.g_posx, this.g_posy]);
	Baren.debug('lineto: posx,posy=(' + this.g_posx + ',' + this.g_posy + ')');
}
Baren.prototype.rlineto = function(x,y) {
	this.g_path.push([this.g_posx, this.g_posy]);
	this.g_path.push(['l']);
	this.g_posx += this.g_tsx * x;
	this.g_posy += this.g_tsy * y;
	this.g_path.push([this.g_posx, this.g_posy]);
	Baren.debug('rlineto: posx,posy=(' + this.g_posx + ',' + this.g_posy + ')');
}
// implements both arc and arcn
Baren.prototype.arc = function(x,y,r,sa,ea,ccw) {
	if (sa == ea)
		return;

	// TBD: For now, we only implement full circles...
	if (sa != 0 && sa != 360 || ea != 0 && ea != 360)
		throw 'arc: not a full circle (' + sa + ',' + ea + ')';

	// Calculate the bounding rect
	x = this.g_tdx + this.g_tsx * x;
	y = this.g_tdy + this.g_tsy * y;

	var rx = r * this.g_tsx;
	var ry = r * this.g_tsy;

	this.g_path.push([ x-rx, y-ry ]);
	this.g_path.push([ 'a', { x:x, y:y, rx:rx, ry:ry, sa:sa, ea:ea, ccw:ccw } ]);
	this.g_path.push([ x+rx, y+ry ]);
}
// We don't have detailed font metrics to use for calculating correct
// font size.  Therefore, out bitmaps are multiples of the base sizes
// used in barcode.ps:  10pt and 12pt
Baren.prototype.getfont = function() {
	// font scale factor
	var fs = Math.floor(this.g_tsx);
	if (fs < 1)
		fs = 1;
	else if (fs > 10)
		fs = 10;

	var key = this.g_font.FontSize + (fs < 10 ? '-0' : '-') + fs;
	/*
	// Has the font been loaded?
	if (!Baren.fonts.OCRB || !Baren.fonts.OCRB[key])
		// Invoke the file loader
		Baren.load('fonts/ocrb' + key + '.js');
	*/
	return !Baren.fonts.OCRB ? undefined : Baren.fonts.OCRB[key];
}
Baren.prototype.stringwidth = function(str) {
	var fn = this.getfont();
	if (!fn) return { w:0, h:0 };

	// width, ascent, and descent of the char-path
	var w = 0, a = 0, d = 0;
	for (var i = 0; i < str.length; i++) {
		var ch = String.fromCharCode(str.get(i));
		var g  = fn.g[ch];	// The glyph
		if (!g) {
			w += fn.w;		// Normalized char width
		} else {
			w += Math.max(g.l + g.w, fn.w);
			if (g.t < 0) {
				if (d < g.h - g.t)
					d = g.h - g.t;
			} else {
				if (a < g.t)
					a = g.t;
				if (d < g.h - g.t)
					d = g.h - g.t;
			}
		}
	}
	w += (str.length-1) * Math.floor(fn.w/4);	// interchar gap
	return { w:w/this.g_tsx, h:(a+d)/this.g_tsy };
}
Baren.prototype.charpath = function(str, b) {
	var sw = this.stringwidth(str);

	// Emulate the char-path by placing a rectangle around it
	this.rlineto(sw.w, 0);
	this.rlineto(0, sw.h);
	this.rlineto(-sw.w, 0);
}
Baren.prototype.pathbbox = function() {
	if (!this.g_path.length)	throw 'pathbbox: --nocurrentpoint--';
	var pth = this.g_path;
	var llx = pth[0][0];
	var lly = pth[0][1];
	var urx = 0;
	var ury = 0;
	for (var i = 2, inc = 2; i < pth.length; i += inc) {
		if (llx > pth[i][0]) llx = pth[i][0];
		if (urx < pth[i][0]) urx = pth[i][0];
		if (lly > pth[i][1]) lly = pth[i][1];
		if (ury < pth[i][1]) ury = pth[i][1];
		inc = (inc == 2 ? 1 : 2);
	}

	// Convert to user-space coordinates
	return { llx:(llx-this.g_tdx)/this.g_tsx, lly:(lly-this.g_tdy)/this.g_tsy,
			 urx:(urx-this.g_tdx)/this.g_tsx, ury:(ury-this.g_tdy)/this.g_tsy };
}
Baren.prototype.gsave = function() {
	// clone all g_ properties
	var ctx = {};
	for (id in this)
		if (id.indexOf('g_') == 0)
			ctx[id] = this.gclone(this[id]);

	this.gstk.push(ctx);
}
Baren.prototype.grestore = function() {
	if (!this.gstk.length)
		throw 'grestore: stack underflow';
	var ctx = this.gstk.pop();
	for (id in ctx)
		this[id] = ctx[id];

	// color is part of the bitmap interface and must be restored separately
	this.bmap.color(this.g_rgb[0], this.g_rgb[1], this.g_rgb[2]);
}
Baren.prototype.stroke = function() {
	var penx = this.g_penw*this.g_tsx;
	var peny = this.g_penw*this.g_tsy;
	var segs = this.g_path.length / 3;	// number of line segments
	if (this.g_path[this.g_path.length-2][0] == 'c')
		segs--;
	for (var i = 0; i < this.g_path.length; ) {
		var s = this.g_path[i++];	// start point
		var a = this.g_path[i++];	// args
		var e = this.g_path[i++];	// end point
		switch (a[0]) {
		case 'l':	// line
			this.drawline(true, s[0], s[1], e[0], e[1], penx, peny, segs > 1);
			break;
		case 'a':
			this.drawarc(s[0], s[1], e[0], e[1], a[1].sa, a[1].se, penx, peny);
			break;
		case 'c':	// closepath
			break;
		default:
			throw 'stroke: undefined opcode: ' + a[0];
		}
	}
	this.g_path = [];
}
Baren.prototype.fill = function() {
	if (!this.g_path.length)						 // Nothing to do?
		return;
	if (this.g_path[this.g_path.length-2][0] != 'c') // Is the path closed?
		this.closepath();

	// Save off the existing bitmap and install a custom one for
	// fast filling
	var bmap = this.bmap;
	this.bmap = new Baren.fillmap;

	for (var i = 0; i < this.g_path.length; ) {
		var s = this.g_path[i++];	// start point
		var a = this.g_path[i++];	// args
		var e = this.g_path[i++];	// end point
		switch (a[0]) {
		case 'l':	// line
			this.drawline(false, s[0], s[1], e[0], e[1], 1, 1);
			break;
		case 'a':	// arc/arcn
			this.drawarc(s[0], s[1], e[0], e[1], a[1].sa, a[1].se, 1, 1);
			break;
		case 'c':	// closepath
			this.bmap.fill();
			break;
		default:
			throw 'fill: undefined opcode: ' + a[0];
		}
	}

	// Transfer the fill to the actual bitmap
	this.bmap.xfer(bmap);

	// Restore the actual bitmap
	this.bmap = bmap;

	this.g_path = [];
}
// source is an 8-bit bitmask
Baren.prototype.imagemask = function(width, height, polarity, matrix, source) {
	// Extract the matrix values for easier usage
	var ma = matrix.get(0);
	var mb = matrix.get(1);
	var mc = matrix.get(2);
	var md = matrix.get(3);
	var mx = matrix.get(4);
	var my = matrix.get(5);
	var sx = this.g_tsx;
	var sy = this.g_tsy;
	var w2 = width * width;
	var h2 = height * height;
	var da = (ma < 0 ? 1 : 0);
	var db = (mb < 0 ? 1 : 0);
	var dc = (mc < 0 ? 1 : 0);
	var dd = (md < 0 ? 1 : 0);
	var rl = Math.ceil(width / 8); 	// row length (bytes per row)
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var by = source.get(y*rl + Math.floor(x/8));
			var bt = by & (1 << 7-(x%8));
			if (bt && !polarity || !bt && polarity)
				continue;
			var x0 = Math.floor(this.g_tdx + ((x+da-mx)*ma + (y+dc-my)*mc) * sx / w2);
			var y0 = Math.floor(this.g_tdy + ((y+dd-my)*md + (x+db-mx)*mb) * sy / h2);
			var x1 = Math.floor(x0 + sx/width);
			var y1 = Math.floor(y0 + sy/height);
			for (var j = y0; j < y1; j++) {
				for (var i = x0; i < x1; i++)
					this.bmap.set(i,j);
			}
		}
	}
}
// dx,dy are inter-character gaps
Baren.prototype.show = function(str, dx, dy) {	// str is a psstring
	// The bitmap fonts were crafted to correspond to the scaling factor.
	// Specifically to render correctly with the UPC/EAN text segments.
	// Since UPC/EAN is a rather narrow code (in terms of modules/symbol),
	// the scaling factor works for the other codes as well, including
	// code128 in numeric mode with two digits per symbol.
	var fn = this.getfont();
	if (!fn) return;

	// Convert dx,dy to device space
	dx = this.g_tsx * dx;
	dy = this.g_tsy * dy;

	// PostScript renders bottom-up, so we must render the glyphs inverted.
	for (var i = 0; i < str.length; i++) {
		var ch = String.fromCharCode(str.get(i));
		var g  = fn.g[ch];	// The glyph
		if (!g) {
			this.g_posx += fn.w + Math.floor(fn.w/4) + dx;	// w + interchar-gap
			continue;
		}
		var bm = g.m; 		// The bitmap

		// Adjust for the glyph's metrics
		// The -2: -1 for the usual height-1 accounting;
		//		   -1 because the bitmap generator has an off-by-one bug
		//		      that we aren't going to fix.
		var l = this.g_posx + g.l;
		var t = this.g_posy + g.t + dy - 2;

		var e    = bm.charAt(0);	// encoding
		var tmin = t - g.h;
		var lmax = l + g.w;
		var bx   = 1;		// bitmap index
		var by;				// current bitmap byte
		var rl;				// run-length

		if (e == 'b') {
			// uncompressed bit-map
			for (var y = t; y > tmin; y--)
				for (var x = 0; x < g.w; x++) {
					if (!(x % 8)) {
						by = (parseInt(bm.charAt(bx),16) << 4) | parseInt(bm.charAt(bx+1),16);
						bx += 2;
					}
					if (by & 0x80)
						this.bmap.set(l+x, y);
					by <<= 1;
				}
		} else if (e == 'x') {
			// x-run encoding
			for (var y = t; y > tmin; y--) {
				for (var x = l; x < lmax; ) {
					by = (parseInt(bm.charAt(bx),16) << 4) | parseInt(bm.charAt(bx+1),16);
					rl = by >> 1;
					bx += 2;
					if (by & 1) {
						while (rl--)
							this.bmap.set(x++, y);
					} else
						x += rl;
				}
			}
		} else if (e == 'y') {
			// y-run encoding
			for (var x = l; x < lmax; x++) {
				for (var y = t; y > tmin; ) {
					by = (parseInt(bm.charAt(bx),16) << 4) | parseInt(bm.charAt(bx+1),16);
					rl = by >> 1;
					bx += 2;
					if (by & 1) {
						while (rl--)
							this.bmap.set(x, y--);
					} else
						y -= rl;
				}
			}
		} else
			throw 'unknown font bitmap encoding: ' + e;

		this.g_posx += Math.max(g.l+g.w, fn.w) + Math.floor(fn.w/4) + dx;
	}
}

// Perform a deep clone of the graphics state properties
Baren.prototype.gclone = function(o) {
	if (o instanceof Array) {
		var t = [];
		for (var i = 0; i < o.length; i++)
			t[i] = this.gclone(o[i]);
		return t;
	}
	//if (o instanceof Function)
	//	return o;

	if (o instanceof Object) {
		var t = {};
		for (i in o)
			t[i] = this.gclone(o[i]);
		return t;
	}
	return o;
}

// Line algorithm that produces a more symmetric line than Bresenham's
//
// optmz == boolean 
// x1,y1 == starting coordinates
// x2,y2 == ending coordinates
// penx,peny == pen dimensions
// merge == multi-line : merge the end points
//
// When optmz is true, we use the fast vertical/horizontal line drawing
// optimizations.  This works well for single lines.
// When optmz is false, we always use the arbitrary line drawing alg, as
// it better connects one line with the next.
Baren.prototype.drawline = function(optmz, x1, y1, x2, y2, penx, peny, merge) {
	if (optmz && (x1 == x2 || y1 == y2)) {
		var lx = Math.round(penx);
		var ly = Math.round(peny);

		if (y2 < y1) { var t = y1; y1 = y2; y2 = t; }
		if (x2 < x1) { var t = x1; x1 = x2; x2 = t; }

		// Horizontal or vertical line?
		if (x1 == x2) {
			// Vertical line
			x1 = Math.round(x1 - lx/2);
			x2 = Math.round(x2 + lx/2);
			y1 = Math.round(y1 - (merge ? ly/2 : 0));
			y2 = Math.round(y2 + (merge ? ly/2 : 0));
		} else {
			// Horizontal line
			y1 = Math.round(y1 - ly/2);
			y2 = Math.round(y2 + ly/2);
			x1 = Math.round(x1 - (merge ? lx/2 : 0));
			x2 = Math.round(x2 + (merge ? lx/2 : 0));
		}
		for (var y = y1; y < y2; y++)
			for (var x = x1; x < x2; x++)
				this.bmap.set(x,y);

		return;
	}

	// Draw an arbitrary line
	x1 = Math.floor(x1);
	x2 = Math.floor(x2);
	y1 = Math.floor(y1);
	y2 = Math.floor(y2);

	var du = Math.abs(x2-x1);
	var dv = Math.abs(y2-y1);
	var kx = (x2 < x1 ? -1 : 1);
	var ky = (y2 < y1 ? -1 : 1);
	var x  = x1;
	var y  = y1;
	var d  = 0;

	// Calculate the effect of pen width
	var penw = Math.floor(Math.sqrt(penx*penx + peny*peny));
	var pixh = Math.round(Math.sqrt((penw*penw)/((dv*dv)/(du*du)+1))) || 1;
	var pixw = Math.round(Math.sqrt(penw*penw-pixh*pixh)) || 1;

	if (du >= dv) {
		// Increment on x
		while (x != x2) {
			for (var j = 0; j < pixh; j++)
				this.bmap.set(x, y+j);
			d += dv;
			if (d >= du) {
				d -= du;
				y += ky;
			}
			x += kx;
		}
		for (var j = 0; j < pixh; j++)
			this.bmap.set(x, y+j);
	} else {
		// Increment on y
		while (y != y2) {
			for (var j = 0; j < pixw; j++)
				this.bmap.set(x+j, y);
			d += du;
			if (d >= dv) {
				d -= dv;
				x += kx;
			}
			y += ky;
		}
		for (var j = 0; j < pixw; j++)
			this.bmap.set(x+j, y);
	}
} // end of drawline()

Baren.prototype.drawarc = function(x0, y0, x1, y1, sa, se, penx, peny) {
	var a = Math.abs(x1-x0);
	var b = Math.abs(y1-y0);
	var b1 = b & 1;
	var dx = 4*(1-a)*b*b;
	var dy = 4*(b1+1)*a*a;
	var err = dx + dy + b1*a*a;
	var e2;

	if (x0 > x1) { x0 = x1; x1 += a; }
	if (y0 > y1) y0 = y1;
	y0 += Math.floor((b+1)/2);
	y1 = y0 - b1;
	a *= 8*a; b1 = 8*b*b;

	do {
		this.bmap.set(x1, y0);		// 1st quadrant
		this.bmap.set(x0, y0);		// 2nd quadrant
		this.bmap.set(x0, y1);		// 3rd quadrant
		this.bmap.set(x1, y1);		// 4th quadrant
		e2 = 2*err;
		if (e2 >= dx) { x0++; x1--; dx += b1; err += dx; }
		if (e2 <= dy) { y0++; y1--; dy += a;  err += dy; }
	} while (x0 <= x1);

	while (y0-y1 < b) {	// too early stop of flat ellipse
		this.bmap.set(x0-1, y0);
		this.bmap.set(x1+1, y0++);
		this.bmap.set(x0-1, y1);
		this.bmap.set(x1+1, y1--);
	}
}


// A bitmap implementation for faster filling.
// TBD: Too simplistic algorithm - needs to be enhanced.
// barcode.ps has very simple fill rqmts - we implement fill by walking
// away from the center of the path-box.  And to handle the concentric
// rings in maxicode, each fill operation inverts the previous content.
//
// The bitmap will contain three possible values per bit:
//	undefined : hasn't been set()
//	0 (zero)  :	was set by the current path operation
//	1 (one)	  : was set by the previous fill()
// 
// When filling, all zeros and undefines (bounded by the path) will be
// inverted to ones.  All ones will be inverted to undefined.
Baren.fillmap = function() {
	var bmap = [];
	var minx = Infinity;
	var miny = Infinity;
	var maxx = -Infinity;
	var maxy = -Infinity;

	this.set = function(x,y) {
		x = ~~x;
		y = ~~y;

		if (!bmap[y])
			bmap[y] = [];
		bmap[y][x] = 0;

		if (minx > x)	minx = x;
		if (maxx < x)	maxx = x;
		if (miny > y)	miny = y;
		if (maxy < y)	maxy = y;
	}

	function get(x,y) {
		//return (bmap[y] ? bmap[y][x] : undefined);
		return bmap[y][x];
	}
	function inv(x,y) {
		bmap[y][x] = bmap[y][x] == 1 ? undefined : 1;
	}

	// A very simplistic filling algorithm - will only handle regular shapes
	this.fill = function() {
		var x0 = Math.floor(minx + (maxx-minx) / 2);
		var y0 = Math.floor(miny + (maxy-miny) / 2);

		// Fill up
		for (var y = y0; y <= maxy; y++) {
			// Find the bounds for this line
			for (var t0 = minx; t0 <= maxx && get(t0,y) !== 0; t0++);
			for (var t1 = maxx; t1 >= minx && get(t1,y) !== 0; t1--);
			while (t0 <= t1)
				inv(t0++, y);
		}

		// Fill down
		for (var y = y0-1; y >= miny; y--) {
			// Find the bounds for this line
			for (var t0 = minx; t0 <= maxx && get(t0,y) !== 0; t0++);
			for (var t1 = maxx; t1 >= minx && get(t1,y) !== 0; t1--);
			while (t0 <= t1)
				inv(t0++, y);
		}
	}

	this.xfer = function(bmap) {
		var x0 = minx;
		var x1 = maxx;
		var y0 = miny;
		var y1 = maxy;

		var out = '';
		for (var y = y0; y <= y1; y++) {
			for (var x = x0; x <= x1; x++) {
				if (get(x,y) === 1)
					bmap.set(x,y);
				out += get(x,y) === 1 ? 'X' : '0';
			}
			out += '\r\n';
		}
	}
}
// Encapsulate the bitmap interface
Baren.Bitmap = function() {
//function Bitmap() {
	var clr  = [0, 0, 0];
	var pts  = [];
	var minx = Infinity;	// min-x
	var miny = Infinity;	// min-y
	var maxx = 0;			// max-x
	var maxy = 0;			// max-y
	
	this.color = function(r, g, b) {
		clr = [r, g, b];
	}
	
	this.set = function(x,y) {
		x = Math.floor(x);
		y = Math.floor(y);
		pts.push([ x,y,clr ]);
		if (minx > x) minx = x;
		if (miny > y) miny = y;
		if (maxx < x) maxx = x;
		if (maxy < y) maxy = y;
	}
	
	this.show = function(cvsid, rot) {
		var cvs = document.getElementById(cvsid);
		if (pts.length == 0) {
			cvs.width  = 32;
			cvs.height = 32;
			cvs.getContext('2d').clearRect(0, 0, cvs.width, cvs.height);
			cvs.style.visibility = 'visible';
			return;
		}
		
		if (rot == 'R' || rot == 'L') {
			var h = maxx-minx+1;
			var w = maxy-miny+1;
		} else {
			var w = maxx-minx+1;
			var h = maxy-miny+1;
		}
		
		cvs.width  = w;
		cvs.height = h;
		
		var ctx = cvs.getContext('2d');
		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, cvs.width, cvs.height);
		ctx.fillStyle = '#000';
		
		var id  = ctx.getImageData(0, 0, cvs.width, cvs.height);
		var dat = id.data;
		
		for (var i = 0; i < pts.length; i++) {
			// PostScript builds bottom-up, we build top-down.
			var x = pts[i][0] - minx;
			var y = pts[i][1] - miny;
			var c = pts[i][2];
			
			if (rot == 'N') {
				y = h - y - 1; 	// Invert y
			} else if (rot == 'I') {
				x = w - x - 1;	// Invert x
			} else {
				y = w - y; 	// Invert y
				if (rot == 'L') {
					var t = y;
					y = h - x - 1;
					x = t - 1;
				} else {
					var t = x;
					x = w - y;
					y = t;
				}
			}
			
			var idx = (y * id.width + x) * 4
			dat[idx++] = c[0];	// r
			dat[idx++] = c[1];	// g
			dat[idx++] = c[2];	// b
			dat[idx]   = 255;
		}
		ctx.putImageData(id, 0, 0);
		cvs.style.visibility = 'visible';
	}
}