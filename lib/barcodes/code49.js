// file: bwipp/code49.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2013-01-25
//
// Copyright (c) 2011-2013 Mark Warren
// Copyright (c) 2004-2013 Terry Burton
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.
// BEGIN code49
//if (!Baren.libs["renmatrix"]) Baren.load("bwipp/renmatrix.js");
Baren.libs["code49"]=function() {
	this.dict["renmatrix"]=Baren.libs["renmatrix"];
	function $f0(){
		return -1;
	}
	function $f1(){
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f3(){
		var a=/^\s*([^\s]+)(\s+.*)?$/.exec(this.stk[this.ptr-1]);
		if (a) {
			this.stk[this.ptr-1]=Baren.psstring(a[2]===undefined?"":a[2]);
			this.stk[this.ptr++]=Baren.psstring(a[1]);
			this.stk[this.ptr++]=true;
		} else {
			this.stk[this.ptr-1]=false;
		}
		this.stk[this.ptr++]=false;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f0;
		var t0=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t0.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=Baren.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-2].toString();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr--;
		this.stk[this.ptr++]=Baren.psstring("=");
		var h=this.stk[this.ptr-2];
		var t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		this.stk[this.ptr++]=true;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f1;
		this.stk[this.ptr++]=$f2;
		var t1=this.stk[--this.ptr];
		var t2=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t2.call(this)==-1) return -1;
		} else {
			if (t1.call(this)==-1) return -1;
		}
	}
	function $f4(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]={};
		this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
		var t=this.dstk.get("options");
		if (t===undefined) throw new Error("dict: options: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f3;
		var t3=this.stk[--this.ptr];
		while (true) {
			if (t3.call(this)==-1) break;
		}
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f7(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="barcode"; //ident
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f8(){
		this.stk[this.ptr++]=Baren.psstring("^");
		var h=this.stk[this.ptr-2];
		var t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		this.stk[this.ptr++]=$f6;
		this.stk[this.ptr++]=$f7;
		var t8=this.stk[--this.ptr];
		var t9=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t9.call(this)==-1) return -1;
		} else {
			if (t8.call(this)==-1) return -1;
		}
	}
	function $f9(){
		this.stk[this.ptr++]="msg"; //ident
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=Baren.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f8;
		var t10=this.stk[--this.ptr];
		while (true) {
			if (t10.call(this)==-1) break;
		}
	}
	function $f10(){
		return -1;
	}
	function $f11(){
		this.stk[this.ptr++]="char"; //ident
		var t=this.dstk.get("fncvals");
		if (t===undefined) throw new Error("dict: fncvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f12(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f13(){
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=94;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f11;
		this.stk[this.ptr++]=$f12;
		var t13=this.stk[--this.ptr];
		var t14=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t14.call(this)==-1) return -1;
		} else {
			if (t13.call(this)==-1) return -1;
		}
	}
	function $f14(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t===undefined) throw new Error("dict: barlen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f10;
		var t12=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t12.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="char"; //ident
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("parsefnc");
		if (t===undefined) throw new Error("dict: parsefnc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char");
		if (t===undefined) throw new Error("dict: char: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=94;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t===undefined) throw new Error("dict: barlen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f13;
		var t15=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t15.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char");
		if (t===undefined) throw new Error("dict: char: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f15(){
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
	}
	function $f16(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("charmap");
		if (t===undefined) throw new Error("dict: charmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="stringtype"; //ident
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f15;
		var t17=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t17.call(this)==-1) return -1;
		}
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f17(){
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("s1");
		if (t===undefined) throw new Error("dict: s1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("c2");
		if (t===undefined) throw new Error("dict: c2: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=Baren.psarray(t);
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f18(){
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("s2");
		if (t===undefined) throw new Error("dict: s2: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("c2");
		if (t===undefined) throw new Error("dict: c2: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=Baren.psarray(t);
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f19(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("combos");
		if (t===undefined) throw new Error("dict: combos: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]="c1"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]="c2"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("c1");
		if (t===undefined) throw new Error("dict: c1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=49;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f17;
		var t23=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t23.call(this)==-1) return -1;
		}
		var t=this.dstk.get("c1");
		if (t===undefined) throw new Error("dict: c1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=50;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f18;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
	}
	function $f20(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
	}
	function $f21(){
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="arraytype"; //ident
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f20;
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f22(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f23(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	}
	function $f24(){
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	}
	function $f25(){
		this.stk[this.ptr++]=0;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=$f22;
		var t33=this.stk[--this.ptr];
		var t32=this.stk[--this.ptr];
		for (t31 in t32) {
			if (t32 instanceof Baren.psstring || t32 instanceof Baren.psarray) {
				if (t31.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t32.get(t31);
			} else {
				this.stk[this.ptr++]=t31;
				this.stk[this.ptr++]=t32[t31];
			}
			if (t33.call(this)==-1) break;
		}
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f23;
		var t36=this.stk[--this.ptr];
		var t34=this.stk[--this.ptr];
		for (var t35=0; t35<t34; t35++) {
			if (t36.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=Baren.psarray(t);
		this.stk[this.ptr++]=Infinity;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=$f24;
		var t41=this.stk[--this.ptr];
		var t39=this.stk[--this.ptr];
		var t38=this.stk[--this.ptr];
		var t37=this.stk[--this.ptr];
		for (var t40=t37; t38<0 ? t40>=t39 : t40<=t39; t40+=t38) {
			this.stk[this.ptr++]=t40;
			if (t41.call(this)==-1) break;
		}
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=Baren.psarray(t);
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f26(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f27(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f28(){
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=3;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("base48");
		if (t===undefined) throw new Error("dict: base48: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f29(){
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encodealpha");
		if (t===undefined) throw new Error("dict: encodealpha: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f30(){
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("base48");
		if (t===undefined) throw new Error("dict: base48: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f31(){
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr++]=48;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=Baren.psarray(t);
		var t=this.dstk.get("base48");
		if (t===undefined) throw new Error("dict: base48: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f32(){
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr++]=48;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=Baren.psarray(t);
		var t=this.dstk.get("base48");
		if (t===undefined) throw new Error("dict: base48: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("base48");
		if (t===undefined) throw new Error("dict: base48: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f33(){
		this.stk[this.ptr++]="nums"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="pre"; //ident
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=2;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f26;
		this.stk[this.ptr++]=$f27;
		var t42=this.stk[--this.ptr];
		var t43=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t43.call(this)==-1) return -1;
		} else {
			if (t42.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=5;
		var t=this.dstk.get("pre");
		if (t===undefined) throw new Error("dict: pre: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f28;
		var t48=this.stk[--this.ptr];
		var t46=this.stk[--this.ptr];
		var t45=this.stk[--this.ptr];
		var t44=this.stk[--this.ptr];
		for (var t47=t44; t45<0 ? t47>=t46 : t47<=t46; t47+=t45) {
			this.stk[this.ptr++]=t47;
			if (t48.call(this)==-1) break;
		}
		this.stk[this.ptr++]="nums"; //ident
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("pre");
		if (t===undefined) throw new Error("dict: pre: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("pre");
		if (t===undefined) throw new Error("dict: pre: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f29;
		var t49=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t49.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=3;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f30;
		var t50=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t50.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=4;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f31;
		var t51=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t51.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=7;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f32;
		var t52=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t52.call(this)==-1) return -1;
		}
	}
	function $f34(){
		this.stk[this.ptr++]=0;
	}
	function $f35(){
		var t=this.dstk.get("numericruns");
		if (t===undefined) throw new Error("dict: numericruns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numericruns");
		if (t===undefined) throw new Error("dict: numericruns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f36(){
		var t=this.dstk.get("numericruns");
		if (t===undefined) throw new Error("dict: numericruns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f37(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=57;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f35;
		this.stk[this.ptr++]=$f36;
		var t56=this.stk[--this.ptr];
		var t57=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t57.call(this)==-1) return -1;
		} else {
			if (t56.call(this)==-1) return -1;
		}
	}
	function $f38(){
		this.stk[this.ptr++]="mode"; //ident
		this.stk[this.ptr++]=3;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f39(){
		this.stk[this.ptr++]="mode"; //ident
		this.stk[this.ptr++]=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f40(){
		this.ptr--;
		this.stk[this.ptr++]="mode"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f41(){
		this.stk[this.ptr++]=4;
	}
	function $f42(){
		this.stk[this.ptr++]=5;
	}
	function $f43(){
		var t=this.dstk.get("pos");
		if (t===undefined) throw new Error("dict: pos: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=-1;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f38;
		var t63=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t63.call(this)==-1) return -1;
		}
		var t=this.dstk.get("numericruns");
		if (t===undefined) throw new Error("dict: numericruns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f39;
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		}
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="arraytype"; //ident
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f40;
		var t65=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t65.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=43;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f41;
		this.stk[this.ptr++]=$f42;
		var t66=this.stk[--this.ptr];
		var t67=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t67.call(this)==-1) return -1;
		} else {
			if (t66.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="mode"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f44(){
		this.stk[this.ptr++]=$f43;
		var t68=this.stk[--this.ptr];
		while (true) {
			if (t68.call(this)==-1) break;
		}
	}
	function $f45(){
		this.stk[this.ptr++]="method"; //ident
		this.stk[this.ptr++]=Baren.psstring("alpha");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f46(){
		this.stk[this.ptr++]="method"; //ident
		this.stk[this.ptr++]=Baren.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f47(){
		this.ptr--;
	}
	function $f48(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("posval");
		if (t===undefined) throw new Error("dict: posval: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("pos");
		if (t===undefined) throw new Error("dict: pos: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f47;
		var t72=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t72.call(this)==-1) return -1;
		}
	}
	function $f49(){
		this.stk[this.ptr++]="posval"; //ident
		this.stk[this.ptr++]=Baren.psarray([12,22,13,23,33,14,24,34,44,15,25,35,45,55,16,26,36,46,56,66,17,27,37,47,57,67,77,18,28,38,48,58,68,78,88,19,29,39,49,59,69,79,89,99]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=43;
		this.stk[this.ptr++]=$f48;
		var t77=this.stk[--this.ptr];
		var t75=this.stk[--this.ptr];
		var t74=this.stk[--this.ptr];
		var t73=this.stk[--this.ptr];
		for (var t76=t73; t74<0 ? t76>=t75 : t76<=t75; t76+=t74) {
			this.stk[this.ptr++]=t76;
			if (t77.call(this)==-1) break;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="method"; //ident
		this.stk[this.ptr++]=Baren.psstring("alpha");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j"; //ident
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f50(){
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="method"; //ident
		this.stk[this.ptr++]=Baren.psstring("alpha");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i"; //ident
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j"; //ident
		this.stk[this.ptr++]=1;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f51(){
		return -1;
	}
	function $f52(){
		var t=this.dstk.get("ns");
		if (t===undefined) throw new Error("dict: ns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encodealpha");
		if (t===undefined) throw new Error("dict: encodealpha: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="method"; //ident
		this.stk[this.ptr++]=Baren.psstring("numeric");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f53(){
		var t=this.dstk.get("numericruns");
		if (t===undefined) throw new Error("dict: numericruns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f52;
		var t81=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t81.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encodealpha");
		if (t===undefined) throw new Error("dict: encodealpha: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f54(){
		var t=this.dstk.get("ns");
		if (t===undefined) throw new Error("dict: ns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encodealpha");
		if (t===undefined) throw new Error("dict: encodealpha: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="method"; //ident
		this.stk[this.ptr++]=Baren.psstring("alpha");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f55(){
		var t=this.dstk.get("numericruns");
		if (t===undefined) throw new Error("dict: numericruns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f54;
		var t83=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t83.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numericruns");
		if (t===undefined) throw new Error("dict: numericruns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encodenumeric");
		if (t===undefined) throw new Error("dict: encodenumeric: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numericruns");
		if (t===undefined) throw new Error("dict: numericruns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f56(){
		var t=this.dstk.get("method");
		if (t===undefined) throw new Error("dict: method: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Baren.psstring("alpha");
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f53;
		var t82=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t82.call(this)==-1) return -1;
		}
		var t=this.dstk.get("method");
		if (t===undefined) throw new Error("dict: method: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=Baren.psstring("numeric");
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f55;
		var t84=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t84.call(this)==-1) return -1;
		}
	}
	function $f57(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t===undefined) throw new Error("dict: msglen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f51;
		var t80=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t80.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]=$f56;
		var t85=this.stk[--this.ptr];
		while (true) {
			if (t85.call(this)==-1) break;
		}
	}
	function $f58(){
		this.stk[this.ptr++]="okay"; //ident
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f59(){
		this.stk[this.ptr++]="okay"; //ident
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f60(){
		return -1;
	}
	function $f61(){
		this.stk[this.ptr++]="m"; //ident
		var t=this.dstk.get("metrics");
		if (t===undefined) throw new Error("dict: metrics: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="r"; //ident
		var t=this.dstk.get("m");
		if (t===undefined) throw new Error("dict: m: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="dcws"; //ident
		var t=this.dstk.get("m");
		if (t===undefined) throw new Error("dict: m: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="okay"; //ident
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("urows");
		if (t===undefined) throw new Error("dict: urows: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("urows");
		if (t===undefined) throw new Error("dict: urows: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("r");
		if (t===undefined) throw new Error("dict: r: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f58;
		var t87=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t87.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("dcws");
		if (t===undefined) throw new Error("dict: dcws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f59;
		var t88=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t88.call(this)==-1) return -1;
		}
		var t=this.dstk.get("okay");
		if (t===undefined) throw new Error("dict: okay: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f60;
		var t89=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t89.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f62(){
		this.stk[this.ptr++]=48;
	}
	function $f63(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f64(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="cc"; //ident
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("ccs");
		if (t===undefined) throw new Error("dict: ccs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cc");
		if (t===undefined) throw new Error("dict: cc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		var t=this.dstk.get("ccs");
		if (t===undefined) throw new Error("dict: ccs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("cc");
		if (t===undefined) throw new Error("dict: cc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f63;
		var t96=this.stk[--this.ptr];
		var t95=this.stk[--this.ptr];
		for (t94 in t95) {
			if (t95 instanceof Baren.psstring || t95 instanceof Baren.psarray) {
				if (t94.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t95.get(t94);
			} else {
				this.stk[this.ptr++]=t94;
				this.stk[this.ptr++]=t95[t94];
			}
			if (t96.call(this)==-1) break;
		}
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f65(){
		var t=this.dstk.get("ccs");
		if (t===undefined) throw new Error("dict: ccs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("ccs");
		if (t===undefined) throw new Error("dict: ccs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("dcws");
		if (t===undefined) throw new Error("dict: dcws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f66(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("ccs");
		if (t===undefined) throw new Error("dict: ccs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("ccs");
		if (t===undefined) throw new Error("dict: ccs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("weights");
		if (t===undefined) throw new Error("dict: weights: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="score"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("score");
		if (t===undefined) throw new Error("dict: score: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f67(){
		this.stk[this.ptr++]="weights"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="score"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("r");
		if (t===undefined) throw new Error("dict: r: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f66;
		var t107=this.stk[--this.ptr];
		var t105=this.stk[--this.ptr];
		var t104=this.stk[--this.ptr];
		var t103=this.stk[--this.ptr];
		for (var t106=t103; t104<0 ? t106>=t105 : t106<=t105; t106+=t104) {
			this.stk[this.ptr++]=t106;
			if (t107.call(this)==-1) break;
		}
		var t=this.dstk.get("score");
		if (t===undefined) throw new Error("dict: score: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f68(){
		var t=this.dstk.get("cr7");
		if (t===undefined) throw new Error("dict: cr7: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("weightz");
		if (t===undefined) throw new Error("dict: weightz: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("weightz");
		if (t===undefined) throw new Error("dict: weightz: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("calccheck");
		if (t===undefined) throw new Error("dict: calccheck: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2401;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		var t=this.dstk.get("lastrow");
		if (t===undefined) throw new Error("dict: lastrow: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	}
	function $f69(){
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f70(){
		var t=this.dstk.get("parity");
		if (t===undefined) throw new Error("dict: parity: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
	}
	function $f71(){
		this.stk[this.ptr++]=Baren.psstring("0000");
	}
	function $f72(){
		var t=this.dstk.get("ccrow");
		if (t===undefined) throw new Error("dict: ccrow: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=49;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f73(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f74(){
		this.stk[this.ptr++]="j"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("patterns");
		if (t===undefined) throw new Error("dict: patterns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("p");
		if (t===undefined) throw new Error("dict: p: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("scrow");
		if (t===undefined) throw new Error("dict: scrow: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f73;
		var t121=this.stk[--this.ptr];
		var t120=this.stk[--this.ptr];
		for (t119 in t120) {
			if (t120 instanceof Baren.psstring || t120 instanceof Baren.psarray) {
				if (t119.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t120.get(t119);
			} else {
				this.stk[this.ptr++]=t119;
				this.stk[this.ptr++]=t120[t119];
			}
			if (t121.call(this)==-1) break;
		}
	}
	function $f75(){
		this.stk[this.ptr++]=1;
	}
	function $f76(){
		this.stk[this.ptr++]=$f75;
	}
	function $f77(){
		this.stk[this.ptr++]=0;
	}
	function $f78(){
		this.stk[this.ptr++]=$f77;
	}
	function $f79(){
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f76;
		this.stk[this.ptr++]=$f78;
		var t127=this.stk[--this.ptr];
		var t128=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t128.call(this)==-1) return -1;
		} else {
			if (t127.call(this)==-1) return -1;
		}
		var t131=this.stk[--this.ptr];
		var t129=this.stk[--this.ptr];
		for (var t130=0; t130<t129; t130++) {
			if (t131.call(this)==-1) break;
		}
	}
	function $f80(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("r");
		if (t===undefined) throw new Error("dict: r: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f70;
		this.stk[this.ptr++]=$f71;
		var t112=this.stk[--this.ptr];
		var t113=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t113.call(this)==-1) return -1;
		} else {
			if (t112.call(this)==-1) return -1;
		}
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="ccrow"; //ident
		var t=this.dstk.get("ccs");
		if (t===undefined) throw new Error("dict: ccs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=8;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="scrow"; //ident
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=7;
		this.stk[this.ptr++]=$f72;
		var t118=this.stk[--this.ptr];
		var t116=this.stk[--this.ptr];
		var t115=this.stk[--this.ptr];
		var t114=this.stk[--this.ptr];
		for (var t117=t114; t115<0 ? t117>=t116 : t117<=t116; t117+=t115) {
			this.stk[this.ptr++]=t117;
			if (t118.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=Baren.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sbs"; //ident
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=$f74;
		var t126=this.stk[--this.ptr];
		var t124=this.stk[--this.ptr];
		var t123=this.stk[--this.ptr];
		var t122=this.stk[--this.ptr];
		for (var t125=t122; t123<0 ? t125>=t124 : t125<=t124; t125+=t123) {
			this.stk[this.ptr++]=t125;
			if (t126.call(this)==-1) break;
		}
		this.stk[this.ptr++]=4;
		this.stk[this.ptr++]=1;
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=Baren.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("sbs");
		if (t===undefined) throw new Error("dict: sbs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f79;
		var t134=this.stk[--this.ptr];
		var t133=this.stk[--this.ptr];
		for (t132 in t133) {
			if (t133 instanceof Baren.psstring || t133 instanceof Baren.psarray) {
				if (t132.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t133.get(t132);
			} else {
				this.stk[this.ptr++]=t132;
				this.stk[this.ptr++]=t133[t132];
			}
			if (t134.call(this)==-1) break;
		}
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		if (i==-1) throw "counttomark: underflow";
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.dstk.get("rowbits");
		if (t===undefined) throw new Error("dict: rowbits: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f81(){
		this.stk[this.ptr++]=1;
	}
	function $f82(){
		var t=this.dstk.get("rowbits");
		if (t===undefined) throw new Error("dict: rowbits: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f83(){
		this.stk[this.ptr++]=0;
	}
	function $f84(){
		this.stk[this.ptr++]=1;
	}
	function $f85(){
		this.stk[this.ptr++]=10;
		this.stk[this.ptr++]=$f83;
		var t148=this.stk[--this.ptr];
		var t146=this.stk[--this.ptr];
		for (var t147=0; t147<t146; t147++) {
			if (t148.call(this)==-1) break;
		}
		this.stk[this.ptr++]=70;
		this.stk[this.ptr++]=$f84;
		var t151=this.stk[--this.ptr];
		var t149=this.stk[--this.ptr];
		for (var t150=0; t150<t149; t150++) {
			if (t151.call(this)==-1) break;
		}
		this.stk[this.ptr++]=0;
	}
	function $f86(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("rowheight");
		if (t===undefined) throw new Error("dict: rowheight: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f82;
		var t145=this.stk[--this.ptr];
		var t143=this.stk[--this.ptr];
		for (var t144=0; t144<t143; t144++) {
			if (t145.call(this)==-1) break;
		}
		var t=this.dstk.get("sepheight");
		if (t===undefined) throw new Error("dict: sepheight: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f85;
		var t154=this.stk[--this.ptr];
		var t152=this.stk[--this.ptr];
		for (var t153=0; t153<t152; t153++) {
			if (t154.call(this)==-1) break;
		}
	}
	function $f87(){
		var t=this.dstk.get("rowbits");
		if (t===undefined) throw new Error("dict: rowbits: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("r");
		if (t===undefined) throw new Error("dict: r: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f88(){
		this.stk[this.ptr++]=1;
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="options"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcode"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dontdraw"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="mode"; //ident
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pos"; //ident
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rows"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowheight"; //ident
	this.stk[this.ptr++]=8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sepheight"; //ident
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parse"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parsefnc"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype"; //ident
	if (this.stk[this.ptr-2] instanceof Baren.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f4;
	var t4=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t4.call(this)==-1) return -1;
	}
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f5;
	var t7=this.stk[--this.ptr];
	var t6=this.stk[--this.ptr];
	for (t5 in t6) {
		if (t6 instanceof Baren.psstring || t6 instanceof Baren.psarray) {
			if (t5.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t6.get(t5);
		} else {
			this.stk[this.ptr++]=t5;
			this.stk[this.ptr++]=t6[t5];
		}
		if (t7.call(this)==-1) break;
	}
	this.stk[this.ptr++]="mode"; //ident
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pos"; //ident
	var t=this.dstk.get("pos");
	if (t===undefined) throw new Error("dict: pos: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rows"; //ident
	var t=this.dstk.get("rows");
	if (t===undefined) throw new Error("dict: rows: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowheight"; //ident
	var t=this.dstk.get("rowheight");
	if (t===undefined) throw new Error("dict: rowheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sepheight"; //ident
	var t=this.dstk.get("sepheight");
	if (t===undefined) throw new Error("dict: sepheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("parse");
	if (t===undefined) throw new Error("dict: parse: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f9;
	var t11=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t11.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="barlen"; //ident
	var t=this.dstk.get("barcode");
	if (t===undefined) throw new Error("dict: barcode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="s1"; //ident
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="s2"; //ident
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn1"; //ident
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn2"; //ident
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn3"; //ident
	this.stk[this.ptr++]=-5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ns"; //ident
	this.stk[this.ptr++]=-6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fncvals"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Baren.psstring("FNC1");
	var t=this.dstk.get("fn1");
	if (t===undefined) throw new Error("dict: fn1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=Baren.psstring("FNC2");
	var t=this.dstk.get("fn2");
	if (t===undefined) throw new Error("dict: fn2: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=Baren.psstring("FNC3");
	var t=this.dstk.get("fn3");
	if (t===undefined) throw new Error("dict: fn3: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
		t[this.stk[i-1]]=this.stk[i];
	}
	if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msg"; //ident
	var t=this.dstk.get("barlen");
	if (t===undefined) throw new Error("dict: barlen: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f14;
	var t16=this.stk[--this.ptr];
	while (true) {
		if (t16.call(this)==-1) break;
	}
	this.stk[this.ptr++]="msg"; //ident
	var t=this.dstk.get("msg");
	if (t===undefined) throw new Error("dict: msg: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("j");
	if (t===undefined) throw new Error("dict: j: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msglen"; //ident
	var t=this.dstk.get("msg");
	if (t===undefined) throw new Error("dict: msg: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charmap"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Baren.psstring("0");
	this.stk[this.ptr++]=Baren.psstring("1");
	this.stk[this.ptr++]=Baren.psstring("2");
	this.stk[this.ptr++]=Baren.psstring("3");
	this.stk[this.ptr++]=Baren.psstring("4");
	this.stk[this.ptr++]=Baren.psstring("5");
	this.stk[this.ptr++]=Baren.psstring("6");
	this.stk[this.ptr++]=Baren.psstring("7");
	this.stk[this.ptr++]=Baren.psstring("8");
	this.stk[this.ptr++]=Baren.psstring("9");
	this.stk[this.ptr++]=Baren.psstring("A");
	this.stk[this.ptr++]=Baren.psstring("B");
	this.stk[this.ptr++]=Baren.psstring("C");
	this.stk[this.ptr++]=Baren.psstring("D");
	this.stk[this.ptr++]=Baren.psstring("E");
	this.stk[this.ptr++]=Baren.psstring("F");
	this.stk[this.ptr++]=Baren.psstring("G");
	this.stk[this.ptr++]=Baren.psstring("H");
	this.stk[this.ptr++]=Baren.psstring("I");
	this.stk[this.ptr++]=Baren.psstring("J");
	this.stk[this.ptr++]=Baren.psstring("K");
	this.stk[this.ptr++]=Baren.psstring("L");
	this.stk[this.ptr++]=Baren.psstring("M");
	this.stk[this.ptr++]=Baren.psstring("N");
	this.stk[this.ptr++]=Baren.psstring("O");
	this.stk[this.ptr++]=Baren.psstring("P");
	this.stk[this.ptr++]=Baren.psstring("Q");
	this.stk[this.ptr++]=Baren.psstring("R");
	this.stk[this.ptr++]=Baren.psstring("S");
	this.stk[this.ptr++]=Baren.psstring("T");
	this.stk[this.ptr++]=Baren.psstring("U");
	this.stk[this.ptr++]=Baren.psstring("V");
	this.stk[this.ptr++]=Baren.psstring("W");
	this.stk[this.ptr++]=Baren.psstring("X");
	this.stk[this.ptr++]=Baren.psstring("Y");
	this.stk[this.ptr++]=Baren.psstring("Z");
	this.stk[this.ptr++]=Baren.psstring("-");
	this.stk[this.ptr++]=Baren.psstring(".");
	this.stk[this.ptr++]=Baren.psstring(" ");
	this.stk[this.ptr++]=Baren.psstring("$");
	this.stk[this.ptr++]=Baren.psstring("/");
	this.stk[this.ptr++]=Baren.psstring("+");
	this.stk[this.ptr++]=Baren.psstring("%");
	var t=this.dstk.get("s1");
	if (t===undefined) throw new Error("dict: s1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("s2");
	if (t===undefined) throw new Error("dict: s2: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn1");
	if (t===undefined) throw new Error("dict: fn1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn2");
	if (t===undefined) throw new Error("dict: fn2: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn3");
	if (t===undefined) throw new Error("dict: fn3: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ns");
	if (t===undefined) throw new Error("dict: ns: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charvals"; //ident
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-1]={};
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=48;
	this.stk[this.ptr++]=$f16;
	var t22=this.stk[--this.ptr];
	var t20=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	var t18=this.stk[--this.ptr];
	for (var t21=t18; t19<0 ? t21>=t20 : t21<=t20; t21+=t19) {
		this.stk[this.ptr++]=t21;
		if (t22.call(this)==-1) break;
	}
	this.stk[this.ptr++]="combos"; //ident
	this.stk[this.ptr++]=Baren.psarray([Baren.psstring("1 "),Baren.psstring("1A"),Baren.psstring("1B"),Baren.psstring("1C"),Baren.psstring("1D"),Baren.psstring("1E"),Baren.psstring("1F"),Baren.psstring("1G"),Baren.psstring("1H"),Baren.psstring("1I"),Baren.psstring("1J"),Baren.psstring("1K"),Baren.psstring("1L"),Baren.psstring("1M"),Baren.psstring("1N"),Baren.psstring("1O"),Baren.psstring("1P"),Baren.psstring("1Q"),Baren.psstring("1R"),Baren.psstring("1S"),Baren.psstring("1T"),Baren.psstring("1U"),Baren.psstring("1V"),Baren.psstring("1W"),Baren.psstring("1X"),Baren.psstring("1Y"),Baren.psstring("1Z"),Baren.psstring("11"),Baren.psstring("12"),Baren.psstring("13"),Baren.psstring("14"),Baren.psstring("15"),Baren.psstring("  "),Baren.psstring("16"),Baren.psstring("17"),Baren.psstring("18"),Baren.psstring(" $"),Baren.psstring(" %"),Baren.psstring("19"),Baren.psstring("10"),Baren.psstring("1-"),Baren.psstring("1."),Baren.psstring("1$"),Baren.psstring(" +"),Baren.psstring("1/"),Baren.psstring(" -"),Baren.psstring(" ."),Baren.psstring(" /"),Baren.psstring(" 0"),Baren.psstring(" 1"),Baren.psstring(" 2"),Baren.psstring(" 3"),Baren.psstring(" 4"),Baren.psstring(" 5"),Baren.psstring(" 6"),Baren.psstring(" 7"),Baren.psstring(" 8"),Baren.psstring(" 9"),Baren.psstring("1+"),Baren.psstring("21"),Baren.psstring("22"),Baren.psstring("23"),Baren.psstring("24"),Baren.psstring("25"),Baren.psstring("26"),Baren.psstring(" A"),Baren.psstring(" B"),Baren.psstring(" C"),Baren.psstring(" D"),Baren.psstring(" E"),Baren.psstring(" F"),Baren.psstring(" G"),Baren.psstring(" H"),Baren.psstring(" I"),Baren.psstring(" J"),Baren.psstring(" K"),Baren.psstring(" L"),Baren.psstring(" M"),Baren.psstring(" N"),Baren.psstring(" O"),Baren.psstring(" P"),Baren.psstring(" Q"),Baren.psstring(" R"),Baren.psstring(" S"),Baren.psstring(" T"),Baren.psstring(" U"),Baren.psstring(" V"),Baren.psstring(" W"),Baren.psstring(" X"),Baren.psstring(" Y"),Baren.psstring(" Z"),Baren.psstring("27"),Baren.psstring("28"),Baren.psstring("29"),Baren.psstring("20"),Baren.psstring("2-"),Baren.psstring("2."),Baren.psstring("2A"),Baren.psstring("2B"),Baren.psstring("2C"),Baren.psstring("2D"),Baren.psstring("2E"),Baren.psstring("2F"),Baren.psstring("2G"),Baren.psstring("2H"),Baren.psstring("2I"),Baren.psstring("2J"),Baren.psstring("2K"),Baren.psstring("2L"),Baren.psstring("2M"),Baren.psstring("2N"),Baren.psstring("2O"),Baren.psstring("2P"),Baren.psstring("2Q"),Baren.psstring("2R"),Baren.psstring("2S"),Baren.psstring("2T"),Baren.psstring("2U"),Baren.psstring("2V"),Baren.psstring("2W"),Baren.psstring("2X"),Baren.psstring("2Y"),Baren.psstring("2Z"),Baren.psstring("2$"),Baren.psstring("2/"),Baren.psstring("2+"),Baren.psstring("2%"),Baren.psstring("2 ")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=127;
	this.stk[this.ptr++]=$f19;
	var t29=this.stk[--this.ptr];
	var t27=this.stk[--this.ptr];
	var t26=this.stk[--this.ptr];
	var t25=this.stk[--this.ptr];
	for (var t28=t25; t26<0 ? t28>=t27 : t28<=t27; t28+=t26) {
		this.stk[this.ptr++]=t28;
		if (t29.call(this)==-1) break;
	}
	this.stk[this.ptr++]="encodealpha"; //ident
	this.stk[this.ptr++]=$f21;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="base48"; //ident
	this.stk[this.ptr++]=$f25;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encodenumeric"; //ident
	this.stk[this.ptr++]=$f33;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numericruns"; //ident
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("msglen");
	if (t===undefined) throw new Error("dict: msglen: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f34;
	var t55=this.stk[--this.ptr];
	var t53=this.stk[--this.ptr];
	for (var t54=0; t54<t53; t54++) {
		if (t55.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("msglen");
	if (t===undefined) throw new Error("dict: msglen: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f37;
	var t62=this.stk[--this.ptr];
	var t60=this.stk[--this.ptr];
	var t59=this.stk[--this.ptr];
	var t58=this.stk[--this.ptr];
	for (var t61=t58; t59<0 ? t61>=t60 : t61<=t60; t61+=t59) {
		this.stk[this.ptr++]=t61;
		if (t62.call(this)==-1) break;
	}
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=-1;
	if (this.stk[this.ptr-2] instanceof Baren.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f44;
	var t69=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t69.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="cws"; //ident
	var t=this.dstk.get("msglen");
	if (t===undefined) throw new Error("dict: msglen: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="method"; //ident
	this.stk[this.ptr++]=Baren.psstring("alpha");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i"; //ident
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j"; //ident
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	if (this.stk[this.ptr-2] instanceof Baren.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	if (this.stk[this.ptr-2] instanceof Baren.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f45;
	var t70=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t70.call(this)==-1) return -1;
	}
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	if (this.stk[this.ptr-2] instanceof Baren.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f46;
	var t71=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t71.call(this)==-1) return -1;
	}
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=3;
	if (this.stk[this.ptr-2] instanceof Baren.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f49;
	var t78=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t78.call(this)==-1) return -1;
	}
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	if (this.stk[this.ptr-2] instanceof Baren.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=5;
	if (this.stk[this.ptr-2] instanceof Baren.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f50;
	var t79=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t79.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]=$f57;
	var t86=this.stk[--this.ptr];
	while (true) {
		if (t86.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws"; //ident
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("j");
	if (t===undefined) throw new Error("dict: j: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="metrics"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Baren.psarray([2,9]);
	this.stk[this.ptr++]=Baren.psarray([3,16]);
	this.stk[this.ptr++]=Baren.psarray([4,23]);
	this.stk[this.ptr++]=Baren.psarray([5,30]);
	this.stk[this.ptr++]=Baren.psarray([6,37]);
	this.stk[this.ptr++]=Baren.psarray([7,42]);
	this.stk[this.ptr++]=Baren.psarray([8,49]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="urows"; //ident
	var t=this.dstk.get("rows");
	if (t===undefined) throw new Error("dict: rows: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f61;
	var t90=this.stk[--this.ptr];
	while (true) {
		if (t90.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws"; //ident
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	var t=this.dstk.get("dcws");
	if (t===undefined) throw new Error("dict: dcws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f62;
	var t93=this.stk[--this.ptr];
	var t91=this.stk[--this.ptr];
	for (var t92=0; t92<t91; t92++) {
		if (t93.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="ccs"; //ident
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f64;
	var t101=this.stk[--this.ptr];
	var t99=this.stk[--this.ptr];
	var t98=this.stk[--this.ptr];
	var t97=this.stk[--this.ptr];
	for (var t100=t97; t98<0 ? t100>=t99 : t100<=t99; t100+=t98) {
		this.stk[this.ptr++]=t100;
		if (t101.call(this)==-1) break;
	}
	var t=this.dstk.get("j");
	if (t===undefined) throw new Error("dict: j: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("dcws");
	if (t===undefined) throw new Error("dict: dcws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f65;
	var t102=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t102.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="cr7"; //ident
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("mode");
	if (t===undefined) throw new Error("dict: mode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("ccs");
	if (t===undefined) throw new Error("dict: ccs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ccs");
	if (t===undefined) throw new Error("dict: ccs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("cr7");
	if (t===undefined) throw new Error("dict: cr7: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	this.stk[this.ptr++]=Baren.psarray([1,9,31,26,2,12,17,23,37,18,22,6,27,44,15,43,39,11,13,5,41,33,36,8,4,32,3,19,40,25,29,10,24,30]);
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=Infinity;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=20;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.stk[this.ptr++]="weightx"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=Infinity;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=16;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.stk[this.ptr++]="weighty"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=38;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr++]=32;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	var t=this.stk[this.ptr-1];
	for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
	this.ptr += t.length;
	this.stk[this.ptr-1]=t;
	this.ptr--;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.stk[this.ptr++]="weightz"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="calccheck"; //ident
	this.stk[this.ptr++]=$f67;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lastrow"; //ident
	var t=this.dstk.get("ccs");
	if (t===undefined) throw new Error("dict: ccs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ccs");
	if (t===undefined) throw new Error("dict: ccs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f68;
	var t108=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t108.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="wr1"; //ident
	var t=this.dstk.get("lastrow");
	if (t===undefined) throw new Error("dict: lastrow: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("lastrow");
	if (t===undefined) throw new Error("dict: lastrow: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("cr7");
	if (t===undefined) throw new Error("dict: cr7: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weighty");
	if (t===undefined) throw new Error("dict: weighty: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("weighty");
	if (t===undefined) throw new Error("dict: weighty: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("calccheck");
	if (t===undefined) throw new Error("dict: calccheck: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("wr1");
	if (t===undefined) throw new Error("dict: wr1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weighty");
	if (t===undefined) throw new Error("dict: weighty: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2401;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]="wr2"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
	var t=this.stk[this.ptr-1];
	if (t.length >= this.ptr) throw "astore: underflow";
	var a=this.stk.splice(this.ptr-1-t.length,t.length);
	t.assign(0,a);
	this.ptr-=t.length;
	var t=this.dstk.get("lastrow");
	if (t===undefined) throw new Error("dict: lastrow: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=-1;
	var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
	if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
	if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
	else var t=this.stk.splice(this.ptr-a, a-b);
	this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("cr7");
	if (t===undefined) throw new Error("dict: cr7: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weightx");
	if (t===undefined) throw new Error("dict: weightx: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("weightx");
	if (t===undefined) throw new Error("dict: weightx: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("calccheck");
	if (t===undefined) throw new Error("dict: calccheck: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("wr1");
	if (t===undefined) throw new Error("dict: wr1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weightx");
	if (t===undefined) throw new Error("dict: weightx: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("wr2");
	if (t===undefined) throw new Error("dict: wr2: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("weightx");
	if (t===undefined) throw new Error("dict: weightx: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	if (this.stk[this.ptr-2] instanceof Baren.psstring || this.stk[this.ptr-2] instanceof Baren.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2401;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
	var t=this.stk[this.ptr-1];
	if (t.length >= this.ptr) throw "astore: underflow";
	var a=this.stk.splice(this.ptr-1-t.length,t.length);
	t.assign(0,a);
	this.ptr-=t.length;
	var t=this.dstk.get("lastrow");
	if (t===undefined) throw new Error("dict: lastrow: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=-1;
	var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
	if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
	if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
	else var t=this.stk.splice(this.ptr-a, a-b);
	this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
	this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
	var t=this.dstk.get("ccs");
	if (t===undefined) throw new Error("dict: ccs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ccs");
	if (t===undefined) throw new Error("dict: ccs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=8;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=7;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.stk[this.ptr++]=0;
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.stk[this.ptr++]=$f69;
	var t111=this.stk[--this.ptr];
	var t110=this.stk[--this.ptr];
	for (t109 in t110) {
		if (t110 instanceof Baren.psstring || t110 instanceof Baren.psarray) {
			if (t109.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t110.get(t109);
		} else {
			this.stk[this.ptr++]=t109;
			this.stk[this.ptr++]=t110[t109];
		}
		if (t111.call(this)==-1) break;
	}
	this.stk[this.ptr++]=49;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("ccs");
	if (t===undefined) throw new Error("dict: ccs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("ccs");
	if (t===undefined) throw new Error("dict: ccs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr++]=-1;
	var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
	if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
	if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
	else var t=this.stk.splice(this.ptr-a, a-b);
	this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
	if (this.stk[this.ptr-3] instanceof Baren.psstring || this.stk[this.ptr-3] instanceof Baren.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	this.stk[this.ptr++]="patterns"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=Baren.psarray([Baren.psstring("11521132"),Baren.psstring("25112131"),Baren.psstring("14212132"),Baren.psstring("25121221"),Baren.psstring("14221222"),Baren.psstring("12412132"),Baren.psstring("23321221"),Baren.psstring("12421222"),Baren.psstring("21521221"),Baren.psstring("15112222"),Baren.psstring("15121312"),Baren.psstring("13312222"),Baren.psstring("24221311"),Baren.psstring("13321312"),Baren.psstring("11512222"),Baren.psstring("22421311"),Baren.psstring("11521312"),Baren.psstring("25112311"),Baren.psstring("14212312"),Baren.psstring("23312311"),Baren.psstring("12412312"),Baren.psstring("21512311"),Baren.psstring("16121131"),Baren.psstring("14321131"),Baren.psstring("12521131"),Baren.psstring("15212131"),Baren.psstring("15221221"),Baren.psstring("13412131"),Baren.psstring("13421221"),Baren.psstring("11612131"),Baren.psstring("16112221"),Baren.psstring("16121311"),Baren.psstring("14312221"),Baren.psstring("14321311"),Baren.psstring("12512221"),Baren.psstring("12521311"),Baren.psstring("15212311"),Baren.psstring("13412311"),Baren.psstring("11612311"),Baren.psstring("11131135"),Baren.psstring("31131133"),Baren.psstring("51131131"),Baren.psstring("21122134"),Baren.psstring("41122132"),Baren.psstring("21131224"),Baren.psstring("41131222"),Baren.psstring("11113135"),Baren.psstring("31113133"),Baren.psstring("51113131"),Baren.psstring("11122225"),Baren.psstring("31122223"),Baren.psstring("51122221"),Baren.psstring("11131315"),Baren.psstring("31131313"),Baren.psstring("51131311"),Baren.psstring("21113224"),Baren.psstring("41113222"),Baren.psstring("21122314"),Baren.psstring("41122312"),Baren.psstring("11113315"),Baren.psstring("31113313"),Baren.psstring("51113311"),Baren.psstring("12131134"),Baren.psstring("32131132"),Baren.psstring("21231133"),Baren.psstring("41231131"),Baren.psstring("22122133"),Baren.psstring("42122131"),Baren.psstring("11222134"),Baren.psstring("22131223"),Baren.psstring("42131221"),Baren.psstring("11231224"),Baren.psstring("31231222"),Baren.psstring("12113134"),Baren.psstring("32113132"),Baren.psstring("12122224"),Baren.psstring("32122222"),Baren.psstring("12131314"),Baren.psstring("32131312"),Baren.psstring("21231313"),Baren.psstring("41231311"),Baren.psstring("22113223"),Baren.psstring("42113221"),Baren.psstring("11213224"),Baren.psstring("22122313"),Baren.psstring("42122311"),Baren.psstring("11222314"),Baren.psstring("31222312"),Baren.psstring("12113314"),Baren.psstring("32113312"),Baren.psstring("21213313"),Baren.psstring("41213311"),Baren.psstring("13131133"),Baren.psstring("33131131"),Baren.psstring("22231132"),Baren.psstring("11331133"),Baren.psstring("31331131"),Baren.psstring("23122132"),Baren.psstring("12222133"),Baren.psstring("23131222"),Baren.psstring("12231223"),Baren.psstring("32231221"),Baren.psstring("21331222"),Baren.psstring("13113133"),Baren.psstring("33113131"),Baren.psstring("13122223"),Baren.psstring("33122221"),Baren.psstring("11313133"),Baren.psstring("13131313"),Baren.psstring("33131311"),Baren.psstring("11322223"),Baren.psstring("22231312"),Baren.psstring("11331313"),Baren.psstring("31331311"),Baren.psstring("23113222"),Baren.psstring("12213223"),Baren.psstring("23122312"),Baren.psstring("12222313"),Baren.psstring("32222311"),Baren.psstring("21322312"),Baren.psstring("13113313"),Baren.psstring("33113311"),Baren.psstring("22213312"),Baren.psstring("11313313"),Baren.psstring("31313311"),Baren.psstring("14131132"),Baren.psstring("23231131"),Baren.psstring("12331132"),Baren.psstring("21431131"),Baren.psstring("24122131"),Baren.psstring("13222132"),Baren.psstring("24131221"),Baren.psstring("13231222"),Baren.psstring("11422132"),Baren.psstring("22331221"),Baren.psstring("11431222"),Baren.psstring("14113132"),Baren.psstring("14122222"),Baren.psstring("12313132"),Baren.psstring("14131312"),Baren.psstring("12322222"),Baren.psstring("23231311"),Baren.psstring("12331312"),Baren.psstring("21431311"),Baren.psstring("24113221"),Baren.psstring("13213222"),Baren.psstring("24122311"),Baren.psstring("13222312"),Baren.psstring("11413222"),Baren.psstring("22322311"),Baren.psstring("11422312"),Baren.psstring("14113312"),Baren.psstring("23213311"),Baren.psstring("12313312"),Baren.psstring("21413311"),Baren.psstring("15131131"),Baren.psstring("13331131"),Baren.psstring("14222131"),Baren.psstring("14231221"),Baren.psstring("12422131"),Baren.psstring("12431221"),Baren.psstring("15113131"),Baren.psstring("15122221"),Baren.psstring("13313131"),Baren.psstring("15131311"),Baren.psstring("13322221"),Baren.psstring("11513131"),Baren.psstring("13331311"),Baren.psstring("11522221"),Baren.psstring("14213221"),Baren.psstring("14222311"),Baren.psstring("12413221"),Baren.psstring("12422311"),Baren.psstring("15113311"),Baren.psstring("13313311"),Baren.psstring("11513311"),Baren.psstring("11141134"),Baren.psstring("31141132"),Baren.psstring("21132133"),Baren.psstring("41132131"),Baren.psstring("21141223"),Baren.psstring("41141221"),Baren.psstring("11123134"),Baren.psstring("31123132"),Baren.psstring("11132224"),Baren.psstring("31132222"),Baren.psstring("11141314"),Baren.psstring("31141312"),Baren.psstring("21114133"),Baren.psstring("41114131"),Baren.psstring("21123223"),Baren.psstring("41123221"),Baren.psstring("21132313"),Baren.psstring("41132311"),Baren.psstring("11114224"),Baren.psstring("31114222"),Baren.psstring("11123314"),Baren.psstring("31123312"),Baren.psstring("21114313"),Baren.psstring("41114311"),Baren.psstring("12141133"),Baren.psstring("32141131"),Baren.psstring("21241132"),Baren.psstring("22132132"),Baren.psstring("11232133"),Baren.psstring("22141222"),Baren.psstring("11241223"),Baren.psstring("31241221"),Baren.psstring("12123133"),Baren.psstring("32123131"),Baren.psstring("12132223"),Baren.psstring("32132221"),Baren.psstring("12141313"),Baren.psstring("32141311"),Baren.psstring("21241312"),Baren.psstring("22114132"),Baren.psstring("11214133"),Baren.psstring("22123222"),Baren.psstring("11223223"),Baren.psstring("22132312"),Baren.psstring("11232313"),Baren.psstring("31232311"),Baren.psstring("12114223"),Baren.psstring("32114221"),Baren.psstring("12123313"),Baren.psstring("32123311"),Baren.psstring("21223312"),Baren.psstring("22114312"),Baren.psstring("11214313"),Baren.psstring("31214311"),Baren.psstring("13141132"),Baren.psstring("22241131"),Baren.psstring("11341132"),Baren.psstring("23132131"),Baren.psstring("12232132"),Baren.psstring("23141221"),Baren.psstring("12241222"),Baren.psstring("21341221"),Baren.psstring("13123132"),Baren.psstring("13132222"),Baren.psstring("11323132"),Baren.psstring("13141312"),Baren.psstring("11332222"),Baren.psstring("22241311"),Baren.psstring("11341312"),Baren.psstring("23114131"),Baren.psstring("12214132"),Baren.psstring("23123221"),Baren.psstring("12223222"),Baren.psstring("23132311"),Baren.psstring("12232312"),Baren.psstring("21332311"),Baren.psstring("13114222"),Baren.psstring("13123312"),Baren.psstring("11314222"),Baren.psstring("22223311"),Baren.psstring("11323312"),Baren.psstring("23114311"),Baren.psstring("12214312"),Baren.psstring("21314311"),Baren.psstring("14141131"),Baren.psstring("12341131"),Baren.psstring("13232131"),Baren.psstring("13241221"),Baren.psstring("11432131"),Baren.psstring("14123131"),Baren.psstring("14132221"),Baren.psstring("12323131"),Baren.psstring("14141311"),Baren.psstring("12332221"),Baren.psstring("12341311"),Baren.psstring("13214131"),Baren.psstring("13223221"),Baren.psstring("11414131"),Baren.psstring("13232311"),Baren.psstring("11423221"),Baren.psstring("11432311"),Baren.psstring("14114221"),Baren.psstring("14123311"),Baren.psstring("12314221"),Baren.psstring("12323311"),Baren.psstring("13214311"),Baren.psstring("11414311"),Baren.psstring("11151133"),Baren.psstring("31151131"),Baren.psstring("21142132"),Baren.psstring("21151222"),Baren.psstring("11133133"),Baren.psstring("31133131"),Baren.psstring("11142223"),Baren.psstring("31142221"),Baren.psstring("11151313"),Baren.psstring("31151311"),Baren.psstring("21124132"),Baren.psstring("21133222"),Baren.psstring("21142312"),Baren.psstring("11115133"),Baren.psstring("31115131"),Baren.psstring("11124223"),Baren.psstring("31124221"),Baren.psstring("11133313"),Baren.psstring("31133311"),Baren.psstring("21115222"),Baren.psstring("21124312"),Baren.psstring("12151132"),Baren.psstring("21251131"),Baren.psstring("22142131"),Baren.psstring("11242132"),Baren.psstring("22151221"),Baren.psstring("11251222"),Baren.psstring("12133132"),Baren.psstring("12142222"),Baren.psstring("12151312"),Baren.psstring("21251311"),Baren.psstring("22124131"),Baren.psstring("11224132"),Baren.psstring("22133221"),Baren.psstring("11233222"),Baren.psstring("22142311"),Baren.psstring("11242312"),Baren.psstring("12115132"),Baren.psstring("12124222"),Baren.psstring("12133312"),Baren.psstring("21233311"),Baren.psstring("22115221"),Baren.psstring("11215222"),Baren.psstring("22124311"),Baren.psstring("11224312"),Baren.psstring("13151131"),Baren.psstring("12242131"),Baren.psstring("12251221"),Baren.psstring("13133131"),Baren.psstring("13142221"),Baren.psstring("11333131"),Baren.psstring("13151311"),Baren.psstring("11342221"),Baren.psstring("12224131"),Baren.psstring("12233221"),Baren.psstring("12242311"),Baren.psstring("13115131"),Baren.psstring("13124221"),Baren.psstring("11315131"),Baren.psstring("13133311"),Baren.psstring("11324221"),Baren.psstring("11333311"),Baren.psstring("12215221"),Baren.psstring("12224311"),Baren.psstring("11161132"),Baren.psstring("21152131"),Baren.psstring("21161221"),Baren.psstring("11143132"),Baren.psstring("11152222"),Baren.psstring("11161312"),Baren.psstring("21134131"),Baren.psstring("21143221"),Baren.psstring("21152311"),Baren.psstring("11125132"),Baren.psstring("11134222"),Baren.psstring("11143312"),Baren.psstring("21116131"),Baren.psstring("21125221"),Baren.psstring("21134311"),Baren.psstring("12161131"),Baren.psstring("11252131"),Baren.psstring("12143131"),Baren.psstring("12152221"),Baren.psstring("12161311"),Baren.psstring("11234131"),Baren.psstring("11243221"),Baren.psstring("11252311"),Baren.psstring("12125131"),Baren.psstring("12134221"),Baren.psstring("12143311"),Baren.psstring("11216131"),Baren.psstring("11225221"),Baren.psstring("11234311"),Baren.psstring("11111236"),Baren.psstring("31111234"),Baren.psstring("51111232"),Baren.psstring("21111325"),Baren.psstring("41111323"),Baren.psstring("61111321"),Baren.psstring("11111416"),Baren.psstring("31111414"),Baren.psstring("51111412"),Baren.psstring("31211143"),Baren.psstring("51211141"),Baren.psstring("12111235"),Baren.psstring("32111233"),Baren.psstring("52111231"),Baren.psstring("21211234"),Baren.psstring("41211232"),Baren.psstring("22111324"),Baren.psstring("42111322"),Baren.psstring("11211325"),Baren.psstring("31211323"),Baren.psstring("51211321"),Baren.psstring("12111415"),Baren.psstring("32111413"),Baren.psstring("52111411"),Baren.psstring("21211414"),Baren.psstring("41211412"),Baren.psstring("12211144"),Baren.psstring("32211142"),Baren.psstring("21311143"),Baren.psstring("41311141"),Baren.psstring("13111234"),Baren.psstring("33111232"),Baren.psstring("22211233"),Baren.psstring("42211231"),Baren.psstring("11311234"),Baren.psstring("31311232"),Baren.psstring("23111323"),Baren.psstring("43111321"),Baren.psstring("12211324"),Baren.psstring("32211322"),Baren.psstring("21311323"),Baren.psstring("41311321"),Baren.psstring("13111414"),Baren.psstring("33111412"),Baren.psstring("22211413"),Baren.psstring("42211411"),Baren.psstring("11311414"),Baren.psstring("31311412"),Baren.psstring("13211143"),Baren.psstring("33211141"),Baren.psstring("22311142"),Baren.psstring("11411143"),Baren.psstring("31411141"),Baren.psstring("14111233"),Baren.psstring("34111231"),Baren.psstring("23211232"),Baren.psstring("12311233"),Baren.psstring("32311231"),Baren.psstring("21411232"),Baren.psstring("24111322"),Baren.psstring("13211323"),Baren.psstring("33211321"),Baren.psstring("22311322"),Baren.psstring("11411323"),Baren.psstring("31411321"),Baren.psstring("14111413"),Baren.psstring("34111411"),Baren.psstring("23211412"),Baren.psstring("12311413"),Baren.psstring("32311411"),Baren.psstring("21411412"),Baren.psstring("14211142"),Baren.psstring("23311141"),Baren.psstring("12411142"),Baren.psstring("21511141"),Baren.psstring("15111232"),Baren.psstring("24211231"),Baren.psstring("13311232"),Baren.psstring("22411231"),Baren.psstring("11511232"),Baren.psstring("25111321"),Baren.psstring("14211322"),Baren.psstring("23311321"),Baren.psstring("12411322"),Baren.psstring("21511321"),Baren.psstring("15111412"),Baren.psstring("24211411"),Baren.psstring("13311412"),Baren.psstring("22411411"),Baren.psstring("11511412"),Baren.psstring("15211141"),Baren.psstring("13411141"),Baren.psstring("11611141"),Baren.psstring("16111231"),Baren.psstring("14311231"),Baren.psstring("12511231"),Baren.psstring("15211321"),Baren.psstring("13411321"),Baren.psstring("11611321"),Baren.psstring("16111411"),Baren.psstring("14311411"),Baren.psstring("12511411"),Baren.psstring("21121144"),Baren.psstring("41121142"),Baren.psstring("11112145"),Baren.psstring("31112143"),Baren.psstring("51112141"),Baren.psstring("11121235"),Baren.psstring("31121233"),Baren.psstring("51121231"),Baren.psstring("21112234"),Baren.psstring("41112232"),Baren.psstring("21121324"),Baren.psstring("41121322"),Baren.psstring("11112325"),Baren.psstring("31112323"),Baren.psstring("51112321"),Baren.psstring("11121415"),Baren.psstring("31121413"),Baren.psstring("51121411"),Baren.psstring("21112414"),Baren.psstring("41112412"),Baren.psstring("22121143"),Baren.psstring("42121141"),Baren.psstring("11221144"),Baren.psstring("31221142"),Baren.psstring("12112144"),Baren.psstring("32112142"),Baren.psstring("12121234"),Baren.psstring("32121232"),Baren.psstring("21221233"),Baren.psstring("41221231"),Baren.psstring("22112233"),Baren.psstring("42112231"),Baren.psstring("11212234"),Baren.psstring("22121323"),Baren.psstring("42121321"),Baren.psstring("11221324"),Baren.psstring("31221322"),Baren.psstring("12112324"),Baren.psstring("32112322"),Baren.psstring("12121414"),Baren.psstring("32121412"),Baren.psstring("21221413"),Baren.psstring("41221411"),Baren.psstring("22112413"),Baren.psstring("42112411"),Baren.psstring("11212414"),Baren.psstring("31212412"),Baren.psstring("23121142"),Baren.psstring("12221143"),Baren.psstring("32221141"),Baren.psstring("21321142"),Baren.psstring("13112143"),Baren.psstring("33112141"),Baren.psstring("13121233"),Baren.psstring("33121231"),Baren.psstring("11312143"),Baren.psstring("22221232"),Baren.psstring("11321233"),Baren.psstring("31321231"),Baren.psstring("23112232"),Baren.psstring("12212233"),Baren.psstring("23121322"),Baren.psstring("12221323"),Baren.psstring("32221321"),Baren.psstring("21321322"),Baren.psstring("13112323"),Baren.psstring("33112321"),Baren.psstring("13121413"),Baren.psstring("33121411"),Baren.psstring("11312323"),Baren.psstring("22221412"),Baren.psstring("11321413"),Baren.psstring("31321411"),Baren.psstring("23112412"),Baren.psstring("12212413"),Baren.psstring("32212411"),Baren.psstring("21312412"),Baren.psstring("24121141"),Baren.psstring("13221142"),Baren.psstring("22321141"),Baren.psstring("11421142"),Baren.psstring("14112142"),Baren.psstring("14121232"),Baren.psstring("12312142"),Baren.psstring("23221231"),Baren.psstring("12321232"),Baren.psstring("21421231"),Baren.psstring("24112231"),Baren.psstring("13212232"),Baren.psstring("24121321"),Baren.psstring("13221322"),Baren.psstring("11412232"),Baren.psstring("22321321"),Baren.psstring("11421322"),Baren.psstring("14112322"),Baren.psstring("14121412"),Baren.psstring("12312322"),Baren.psstring("23221411"),Baren.psstring("12321412"),Baren.psstring("21421411"),Baren.psstring("24112411"),Baren.psstring("13212412"),Baren.psstring("22312411"),Baren.psstring("11412412"),Baren.psstring("14221141"),Baren.psstring("12421141"),Baren.psstring("15112141"),Baren.psstring("15121231"),Baren.psstring("13312141"),Baren.psstring("13321231"),Baren.psstring("11512141"),Baren.psstring("11521231"),Baren.psstring("14212231"),Baren.psstring("14221321"),Baren.psstring("12412231"),Baren.psstring("12421321"),Baren.psstring("15112321"),Baren.psstring("15121411"),Baren.psstring("13312321"),Baren.psstring("13321411"),Baren.psstring("11512321"),Baren.psstring("11521411"),Baren.psstring("14212411"),Baren.psstring("12412411"),Baren.psstring("21131143"),Baren.psstring("41131141"),Baren.psstring("11122144"),Baren.psstring("31122142"),Baren.psstring("11131234"),Baren.psstring("31131232"),Baren.psstring("21113143"),Baren.psstring("41113141"),Baren.psstring("21122233"),Baren.psstring("41122231"),Baren.psstring("21131323"),Baren.psstring("41131321"),Baren.psstring("11113234"),Baren.psstring("31113232"),Baren.psstring("11122324"),Baren.psstring("31122322"),Baren.psstring("11131414"),Baren.psstring("31131412"),Baren.psstring("21113323"),Baren.psstring("41113321"),Baren.psstring("21122413"),Baren.psstring("41122411"),Baren.psstring("11113414"),Baren.psstring("31113412"),Baren.psstring("22131142"),Baren.psstring("11231143"),Baren.psstring("31231141"),Baren.psstring("12122143"),Baren.psstring("32122141"),Baren.psstring("12131233"),Baren.psstring("32131231"),Baren.psstring("21231232"),Baren.psstring("22113142"),Baren.psstring("11213143"),Baren.psstring("22122232"),Baren.psstring("11222233"),Baren.psstring("22131322"),Baren.psstring("11231323"),Baren.psstring("31231321"),Baren.psstring("12113233"),Baren.psstring("32113231"),Baren.psstring("12122323"),Baren.psstring("32122321"),Baren.psstring("12131413"),Baren.psstring("32131411"),Baren.psstring("21231412"),Baren.psstring("22113322"),Baren.psstring("11213323"),Baren.psstring("22122412"),Baren.psstring("11222413"),Baren.psstring("31222411"),Baren.psstring("12113413"),Baren.psstring("32113411"),Baren.psstring("21213412"),Baren.psstring("23131141"),Baren.psstring("12231142"),Baren.psstring("21331141"),Baren.psstring("13122142"),Baren.psstring("13131232"),Baren.psstring("11322142"),Baren.psstring("22231231"),Baren.psstring("11331232"),Baren.psstring("23113141"),Baren.psstring("12213142"),Baren.psstring("23122231"),Baren.psstring("12222232"),Baren.psstring("23131321"),Baren.psstring("12231322"),Baren.psstring("21331321"),Baren.psstring("13113232"),Baren.psstring("13122322"),Baren.psstring("11313232"),Baren.psstring("13131412"),Baren.psstring("11322322"),Baren.psstring("22231411"),Baren.psstring("11331412"),Baren.psstring("23113321"),Baren.psstring("12213322"),Baren.psstring("23122411"),Baren.psstring("12222412"),Baren.psstring("21322411"),Baren.psstring("13113412"),Baren.psstring("22213411"),Baren.psstring("11313412"),Baren.psstring("13231141"),Baren.psstring("11431141"),Baren.psstring("14122141"),Baren.psstring("14131231"),Baren.psstring("12322141"),Baren.psstring("12331231"),Baren.psstring("13213141"),Baren.psstring("13222231"),Baren.psstring("11413141"),Baren.psstring("13231321"),Baren.psstring("11422231"),Baren.psstring("11431321"),Baren.psstring("14113231"),Baren.psstring("14122321"),Baren.psstring("12313231"),Baren.psstring("14131411"),Baren.psstring("12322321"),Baren.psstring("12331411"),Baren.psstring("13213321"),Baren.psstring("13222411"),Baren.psstring("11413321"),Baren.psstring("11422411"),Baren.psstring("14113411"),Baren.psstring("12313411"),Baren.psstring("21141142"),Baren.psstring("11132143"),Baren.psstring("31132141"),Baren.psstring("11141233"),Baren.psstring("31141231"),Baren.psstring("21123142"),Baren.psstring("21132232"),Baren.psstring("21141322"),Baren.psstring("11114143"),Baren.psstring("31114141"),Baren.psstring("11123233"),Baren.psstring("31123231"),Baren.psstring("11132323"),Baren.psstring("31132321"),Baren.psstring("11141413"),Baren.psstring("31141411"),Baren.psstring("21114232"),Baren.psstring("21123322"),Baren.psstring("21132412"),Baren.psstring("11114323"),Baren.psstring("31114321"),Baren.psstring("11123413"),Baren.psstring("31123411"),Baren.psstring("22141141"),Baren.psstring("11241142"),Baren.psstring("12132142"),Baren.psstring("12141232"),Baren.psstring("21241231"),Baren.psstring("22123141"),Baren.psstring("11223142"),Baren.psstring("22132231"),Baren.psstring("11232232"),Baren.psstring("22141321"),Baren.psstring("11241322"),Baren.psstring("12114142"),Baren.psstring("12123232"),Baren.psstring("12132322"),Baren.psstring("12141412"),Baren.psstring("21241411"),Baren.psstring("22114231"),Baren.psstring("11214232"),Baren.psstring("22123321"),Baren.psstring("11223322"),Baren.psstring("22132411"),Baren.psstring("11232412"),Baren.psstring("12114322"),Baren.psstring("12123412"),Baren.psstring("21223411"),Baren.psstring("12241141"),Baren.psstring("13132141"),Baren.psstring("13141231"),Baren.psstring("11332141"),Baren.psstring("11341231"),Baren.psstring("12223141"),Baren.psstring("12232231"),Baren.psstring("12241321"),Baren.psstring("13114141"),Baren.psstring("13123231"),Baren.psstring("11314141"),Baren.psstring("13132321"),Baren.psstring("11323231"),Baren.psstring("13141411"),Baren.psstring("11332321"),Baren.psstring("11341411"),Baren.psstring("12214231"),Baren.psstring("12223321"),Baren.psstring("12232411"),Baren.psstring("13114321"),Baren.psstring("13123411"),Baren.psstring("11314321"),Baren.psstring("11323411"),Baren.psstring("21151141"),Baren.psstring("11142142"),Baren.psstring("11151232"),Baren.psstring("21133141"),Baren.psstring("21142231"),Baren.psstring("21151321"),Baren.psstring("11124142"),Baren.psstring("11133232"),Baren.psstring("11142322"),Baren.psstring("11151412"),Baren.psstring("21115141"),Baren.psstring("21124231"),Baren.psstring("21133321"),Baren.psstring("21142411"),Baren.psstring("11115232"),Baren.psstring("11124322"),Baren.psstring("11133412"),Baren.psstring("11251141"),Baren.psstring("12142141"),Baren.psstring("12151231"),Baren.psstring("11233141"),Baren.psstring("11242231"),Baren.psstring("11251321"),Baren.psstring("12124141"),Baren.psstring("12133231"),Baren.psstring("12142321"),Baren.psstring("12151411"),Baren.psstring("11215141"),Baren.psstring("11224231"),Baren.psstring("11233321"),Baren.psstring("11242411"),Baren.psstring("12115231"),Baren.psstring("12124321"),Baren.psstring("12133411"),Baren.psstring("11152141"),Baren.psstring("11161231"),Baren.psstring("11134141"),Baren.psstring("11143231"),Baren.psstring("11152321"),Baren.psstring("11161411"),Baren.psstring("11116141"),Baren.psstring("11125231"),Baren.psstring("11134321"),Baren.psstring("11143411"),Baren.psstring("21111244"),Baren.psstring("41111242"),Baren.psstring("11111335"),Baren.psstring("31111333"),Baren.psstring("51111331"),Baren.psstring("21111424"),Baren.psstring("41111422"),Baren.psstring("11111515"),Baren.psstring("31111513"),Baren.psstring("51111511"),Baren.psstring("21211153"),Baren.psstring("41211151"),Baren.psstring("22111243"),Baren.psstring("42111241"),Baren.psstring("11211244"),Baren.psstring("31211242"),Baren.psstring("12111334"),Baren.psstring("32111332"),Baren.psstring("21211333"),Baren.psstring("41211331"),Baren.psstring("22111423"),Baren.psstring("42111421"),Baren.psstring("11211424"),Baren.psstring("31211422"),Baren.psstring("12111514"),Baren.psstring("32111512"),Baren.psstring("21211513"),Baren.psstring("41211511"),Baren.psstring("22211152"),Baren.psstring("11311153"),Baren.psstring("31311151"),Baren.psstring("23111242"),Baren.psstring("12211243"),Baren.psstring("32211241"),Baren.psstring("21311242"),Baren.psstring("13111333"),Baren.psstring("33111331"),Baren.psstring("22211332"),Baren.psstring("11311333"),Baren.psstring("31311331"),Baren.psstring("23111422"),Baren.psstring("12211423"),Baren.psstring("32211421"),Baren.psstring("21311422"),Baren.psstring("13111513"),Baren.psstring("33111511"),Baren.psstring("22211512"),Baren.psstring("11311513"),Baren.psstring("31311511"),Baren.psstring("23211151"),Baren.psstring("12311152"),Baren.psstring("21411151"),Baren.psstring("24111241"),Baren.psstring("13211242"),Baren.psstring("22311241"),Baren.psstring("11411242"),Baren.psstring("14111332"),Baren.psstring("23211331"),Baren.psstring("12311332"),Baren.psstring("21411331"),Baren.psstring("24111421"),Baren.psstring("13211422"),Baren.psstring("22311421"),Baren.psstring("11411422"),Baren.psstring("14111512"),Baren.psstring("23211511"),Baren.psstring("12311512"),Baren.psstring("21411511"),Baren.psstring("13311151"),Baren.psstring("11511151"),Baren.psstring("14211241"),Baren.psstring("12411241"),Baren.psstring("15111331"),Baren.psstring("13311331"),Baren.psstring("11511331"),Baren.psstring("14211421"),Baren.psstring("12411421"),Baren.psstring("15111511"),Baren.psstring("13311511"),Baren.psstring("11511511"),Baren.psstring("31121152"),Baren.psstring("21112153"),Baren.psstring("41112151"),Baren.psstring("21121243"),Baren.psstring("41121241"),Baren.psstring("11112244"),Baren.psstring("31112242"),Baren.psstring("11121334"),Baren.psstring("31121332"),Baren.psstring("21112333"),Baren.psstring("41112331"),Baren.psstring("21121423"),Baren.psstring("41121421"),Baren.psstring("11112424"),Baren.psstring("31112422"),Baren.psstring("11121514"),Baren.psstring("31121512"),Baren.psstring("21112513"),Baren.psstring("41112511"),Baren.psstring("12121153"),Baren.psstring("32121151"),Baren.psstring("21221152"),Baren.psstring("22112152"),Baren.psstring("11212153"),Baren.psstring("22121242"),Baren.psstring("11221243"),Baren.psstring("31221241"),Baren.psstring("12112243"),Baren.psstring("32112241"),Baren.psstring("12121333"),Baren.psstring("32121331"),Baren.psstring("21221332"),Baren.psstring("22112332"),Baren.psstring("11212333"),Baren.psstring("22121422"),Baren.psstring("11221423"),Baren.psstring("31221421"),Baren.psstring("12112423"),Baren.psstring("32112421"),Baren.psstring("12121513"),Baren.psstring("32121511"),Baren.psstring("21221512"),Baren.psstring("22112512"),Baren.psstring("11212513"),Baren.psstring("31212511"),Baren.psstring("13121152"),Baren.psstring("22221151"),Baren.psstring("11321152"),Baren.psstring("23112151"),Baren.psstring("12212152"),Baren.psstring("23121241"),Baren.psstring("12221242"),Baren.psstring("21321241"),Baren.psstring("13112242"),Baren.psstring("13121332"),Baren.psstring("11312242"),Baren.psstring("22221331"),Baren.psstring("11321332"),Baren.psstring("23112331"),Baren.psstring("12212332"),Baren.psstring("23121421"),Baren.psstring("12221422"),Baren.psstring("21321421"),Baren.psstring("13112422"),Baren.psstring("13121512"),Baren.psstring("11312422"),Baren.psstring("22221511"),Baren.psstring("11321512"),Baren.psstring("23112511"),Baren.psstring("12212512"),Baren.psstring("21312511"),Baren.psstring("14121151"),Baren.psstring("12321151"),Baren.psstring("13212151"),Baren.psstring("13221241"),Baren.psstring("11412151"),Baren.psstring("11421241"),Baren.psstring("14112241"),Baren.psstring("14121331"),Baren.psstring("12312241"),Baren.psstring("12321331"),Baren.psstring("13212331"),Baren.psstring("13221421"),Baren.psstring("11412331"),Baren.psstring("11421421"),Baren.psstring("14112421"),Baren.psstring("14121511"),Baren.psstring("12312421"),Baren.psstring("12321511"),Baren.psstring("13212511"),Baren.psstring("11412511"),Baren.psstring("11131153"),Baren.psstring("31131151"),Baren.psstring("21122152"),Baren.psstring("21131242"),Baren.psstring("11113153"),Baren.psstring("31113151"),Baren.psstring("11122243"),Baren.psstring("31122241"),Baren.psstring("11131333"),Baren.psstring("31131331"),Baren.psstring("21113242"),Baren.psstring("21122332"),Baren.psstring("21131422"),Baren.psstring("11113333"),Baren.psstring("31113331"),Baren.psstring("11122423"),Baren.psstring("31122421"),Baren.psstring("11131513"),Baren.psstring("31131511"),Baren.psstring("21113422"),Baren.psstring("21122512"),Baren.psstring("12131152"),Baren.psstring("21231151"),Baren.psstring("22122151"),Baren.psstring("11222152"),Baren.psstring("22131241"),Baren.psstring("11231242"),Baren.psstring("12113152"),Baren.psstring("12122242"),Baren.psstring("12131332"),Baren.psstring("21231331"),Baren.psstring("22113241"),Baren.psstring("11213242"),Baren.psstring("22122331"),Baren.psstring("11222332"),Baren.psstring("22131421"),Baren.psstring("11231422"),Baren.psstring("12113332"),Baren.psstring("12122422"),Baren.psstring("12131512"),Baren.psstring("21231511"),Baren.psstring("22113421"),Baren.psstring("11213422"),Baren.psstring("22122511"),Baren.psstring("11222512"),Baren.psstring("13131151"),Baren.psstring("11331151"),Baren.psstring("12222151"),Baren.psstring("12231241"),Baren.psstring("13113151"),Baren.psstring("13122241"),Baren.psstring("11313151"),Baren.psstring("13131331"),Baren.psstring("11322241"),Baren.psstring("11331331"),Baren.psstring("12213241"),Baren.psstring("12222331"),Baren.psstring("12231421"),Baren.psstring("13113331"),Baren.psstring("13122421"),Baren.psstring("11313331"),Baren.psstring("13131511"),Baren.psstring("11322421"),Baren.psstring("11331511"),Baren.psstring("12213421"),Baren.psstring("12222511"),Baren.psstring("11141152"),Baren.psstring("21132151"),Baren.psstring("21141241"),Baren.psstring("11123152"),Baren.psstring("11132242"),Baren.psstring("11141332"),Baren.psstring("21114151"),Baren.psstring("21123241"),Baren.psstring("21132331"),Baren.psstring("21141421"),Baren.psstring("11114242"),Baren.psstring("11123332"),Baren.psstring("11132422"),Baren.psstring("11141512"),Baren.psstring("21114331"),Baren.psstring("21123421"),Baren.psstring("21132511"),Baren.psstring("12141151"),Baren.psstring("11232151"),Baren.psstring("11241241"),Baren.psstring("12123151"),Baren.psstring("12132241"),Baren.psstring("12141331"),Baren.psstring("11214151"),Baren.psstring("11223241"),Baren.psstring("11232331"),Baren.psstring("11241421"),Baren.psstring("12114241"),Baren.psstring("12123331"),Baren.psstring("12132421"),Baren.psstring("12141511"),Baren.psstring("11214331"),Baren.psstring("11223421"),Baren.psstring("11232511"),Baren.psstring("11151151"),Baren.psstring("11133151"),Baren.psstring("11142241"),Baren.psstring("11151331"),Baren.psstring("11115151"),Baren.psstring("11124241"),Baren.psstring("11133331"),Baren.psstring("11142421"),Baren.psstring("11151511"),Baren.psstring("11111254"),Baren.psstring("31111252"),Baren.psstring("21111343"),Baren.psstring("41111341"),Baren.psstring("11111434"),Baren.psstring("31111432"),Baren.psstring("21111523"),Baren.psstring("41111521"),Baren.psstring("11111614"),Baren.psstring("31111612"),Baren.psstring("31211161"),Baren.psstring("12111253"),Baren.psstring("32111251"),Baren.psstring("21211252"),Baren.psstring("22111342"),Baren.psstring("11211343"),Baren.psstring("31211341"),Baren.psstring("12111433"),Baren.psstring("32111431"),Baren.psstring("21211432"),Baren.psstring("22111522"),Baren.psstring("11211523"),Baren.psstring("31211521"),Baren.psstring("12111613"),Baren.psstring("32111611"),Baren.psstring("21211612"),Baren.psstring("12211162"),Baren.psstring("21311161"),Baren.psstring("13111252"),Baren.psstring("22211251"),Baren.psstring("11311252"),Baren.psstring("23111341"),Baren.psstring("12211342"),Baren.psstring("21311341"),Baren.psstring("13111432"),Baren.psstring("22211431"),Baren.psstring("11311432"),Baren.psstring("23111521"),Baren.psstring("12211522"),Baren.psstring("21311521"),Baren.psstring("13111612"),Baren.psstring("22211611"),Baren.psstring("11311612"),Baren.psstring("13211161"),Baren.psstring("11411161"),Baren.psstring("14111251"),Baren.psstring("12311251"),Baren.psstring("13211341"),Baren.psstring("11411341"),Baren.psstring("14111431"),Baren.psstring("12311431"),Baren.psstring("13211521"),Baren.psstring("11411521"),Baren.psstring("14111611"),Baren.psstring("12311611"),Baren.psstring("21121162"),Baren.psstring("11112163"),Baren.psstring("31112161"),Baren.psstring("11121253"),Baren.psstring("31121251"),Baren.psstring("21112252"),Baren.psstring("21121342"),Baren.psstring("11112343"),Baren.psstring("31112341"),Baren.psstring("11121433"),Baren.psstring("31121431"),Baren.psstring("21112432"),Baren.psstring("21121522"),Baren.psstring("11112523"),Baren.psstring("31112521"),Baren.psstring("11121613"),Baren.psstring("31121611"),Baren.psstring("22121161"),Baren.psstring("11221162"),Baren.psstring("12112162"),Baren.psstring("12121252"),Baren.psstring("21221251"),Baren.psstring("22112251"),Baren.psstring("11212252"),Baren.psstring("22121341"),Baren.psstring("11221342"),Baren.psstring("12112342"),Baren.psstring("12121432"),Baren.psstring("21221431"),Baren.psstring("22112431"),Baren.psstring("11212432"),Baren.psstring("22121521"),Baren.psstring("11221522"),Baren.psstring("12112522"),Baren.psstring("12121612"),Baren.psstring("21221611"),Baren.psstring("12221161"),Baren.psstring("13112161"),Baren.psstring("13121251"),Baren.psstring("11312161"),Baren.psstring("11321251"),Baren.psstring("32121115"),Baren.psstring("52121113"),Baren.psstring("21221116"),Baren.psstring("41221114"),Baren.psstring("61221112"),Baren.psstring("22112116"),Baren.psstring("42112114"),Baren.psstring("31212115"),Baren.psstring("51212113"),Baren.psstring("13121116"),Baren.psstring("33121114"),Baren.psstring("22221115"),Baren.psstring("42221113"),Baren.psstring("11321116"),Baren.psstring("31321114"),Baren.psstring("51321112"),Baren.psstring("23112115"),Baren.psstring("43112113"),Baren.psstring("12212116"),Baren.psstring("32212114"),Baren.psstring("52212112"),Baren.psstring("21312115"),Baren.psstring("41312113"),Baren.psstring("61312111"),Baren.psstring("14121115"),Baren.psstring("34121113"),Baren.psstring("23221114"),Baren.psstring("43221112"),Baren.psstring("12321115"),Baren.psstring("32321113"),Baren.psstring("52321111"),Baren.psstring("21421114"),Baren.psstring("41421112"),Baren.psstring("24112114"),Baren.psstring("13212115"),Baren.psstring("33212113"),Baren.psstring("22312114"),Baren.psstring("42312112"),Baren.psstring("11412115"),Baren.psstring("31412113"),Baren.psstring("51412111"),Baren.psstring("15121114"),Baren.psstring("24221113"),Baren.psstring("13321114"),Baren.psstring("33321112"),Baren.psstring("22421113"),Baren.psstring("42421111"),Baren.psstring("11521114"),Baren.psstring("31521112"),Baren.psstring("25112113"),Baren.psstring("14212114"),Baren.psstring("34212112"),Baren.psstring("23312113"),Baren.psstring("43312111"),Baren.psstring("12412114"),Baren.psstring("32412112"),Baren.psstring("21512113"),Baren.psstring("41512111"),Baren.psstring("16121113"),Baren.psstring("25221112"),Baren.psstring("14321113"),Baren.psstring("34321111"),Baren.psstring("23421112"),Baren.psstring("12521113"),Baren.psstring("32521111"),Baren.psstring("15212113"),Baren.psstring("24312112"),Baren.psstring("13412113"),Baren.psstring("33412111"),Baren.psstring("22512112"),Baren.psstring("11612113"),Baren.psstring("31612111"),Baren.psstring("31131115"),Baren.psstring("51131113"),Baren.psstring("21122116"),Baren.psstring("41122114"),Baren.psstring("61122112"),Baren.psstring("31113115"),Baren.psstring("51113113"),Baren.psstring("12131116"),Baren.psstring("32131114"),Baren.psstring("52131112"),Baren.psstring("21231115"),Baren.psstring("41231113"),Baren.psstring("61231111"),Baren.psstring("22122115"),Baren.psstring("42122113"),Baren.psstring("11222116"),Baren.psstring("31222114"),Baren.psstring("51222112"),Baren.psstring("12113116"),Baren.psstring("32113114"),Baren.psstring("52113112"),Baren.psstring("21213115"),Baren.psstring("41213113"),Baren.psstring("61213111"),Baren.psstring("13131115"),Baren.psstring("33131113"),Baren.psstring("22231114"),Baren.psstring("42231112"),Baren.psstring("11331115"),Baren.psstring("31331113"),Baren.psstring("51331111"),Baren.psstring("23122114"),Baren.psstring("43122112"),Baren.psstring("12222115"),Baren.psstring("32222113"),Baren.psstring("52222111"),Baren.psstring("21322114"),Baren.psstring("41322112"),Baren.psstring("13113115"),Baren.psstring("33113113"),Baren.psstring("22213114"),Baren.psstring("42213112"),Baren.psstring("11313115"),Baren.psstring("31313113"),Baren.psstring("51313111"),Baren.psstring("14131114"),Baren.psstring("34131112"),Baren.psstring("23231113"),Baren.psstring("43231111"),Baren.psstring("12331114"),Baren.psstring("32331112"),Baren.psstring("21431113"),Baren.psstring("41431111"),Baren.psstring("24122113"),Baren.psstring("13222114"),Baren.psstring("33222112"),Baren.psstring("22322113"),Baren.psstring("42322111"),Baren.psstring("11422114"),Baren.psstring("31422112"),Baren.psstring("14113114"),Baren.psstring("34113112"),Baren.psstring("23213113"),Baren.psstring("43213111"),Baren.psstring("12313114"),Baren.psstring("32313112"),Baren.psstring("21413113"),Baren.psstring("41413111"),Baren.psstring("15131113"),Baren.psstring("24231112"),Baren.psstring("13331113"),Baren.psstring("33331111"),Baren.psstring("22431112"),Baren.psstring("25122112"),Baren.psstring("14222113"),Baren.psstring("34222111"),Baren.psstring("23322112"),Baren.psstring("12422113"),Baren.psstring("32422111"),Baren.psstring("21522112"),Baren.psstring("15113113"),Baren.psstring("24213112"),Baren.psstring("13313113"),Baren.psstring("33313111"),Baren.psstring("22413112"),Baren.psstring("11513113"),Baren.psstring("31513111"),Baren.psstring("16131112"),Baren.psstring("25231111"),Baren.psstring("14331112"),Baren.psstring("23431111"),Baren.psstring("15222112"),Baren.psstring("24322111"),Baren.psstring("13422112"),Baren.psstring("22522111"),Baren.psstring("16113112"),Baren.psstring("25213111"),Baren.psstring("14313112"),Baren.psstring("23413111"),Baren.psstring("12513112"),Baren.psstring("21613111"),Baren.psstring("11141116"),Baren.psstring("31141114"),Baren.psstring("51141112"),Baren.psstring("21132115"),Baren.psstring("41132113"),Baren.psstring("61132111"),Baren.psstring("11123116"),Baren.psstring("31123114"),Baren.psstring("51123112"),Baren.psstring("21114115"),Baren.psstring("41114113"),Baren.psstring("61114111"),Baren.psstring("12141115"),Baren.psstring("32141113"),Baren.psstring("52141111"),Baren.psstring("21241114"),Baren.psstring("41241112"),Baren.psstring("22132114"),Baren.psstring("42132112"),Baren.psstring("11232115"),Baren.psstring("31232113"),Baren.psstring("51232111"),Baren.psstring("12123115"),Baren.psstring("32123113"),Baren.psstring("52123111"),Baren.psstring("21223114"),Baren.psstring("41223112"),Baren.psstring("22114114"),Baren.psstring("42114112"),Baren.psstring("11214115"),Baren.psstring("31214113"),Baren.psstring("51214111"),Baren.psstring("13141114"),Baren.psstring("33141112"),Baren.psstring("22241113"),Baren.psstring("42241111"),Baren.psstring("11341114"),Baren.psstring("31341112"),Baren.psstring("23132113"),Baren.psstring("43132111"),Baren.psstring("12232114"),Baren.psstring("32232112"),Baren.psstring("21332113"),Baren.psstring("41332111"),Baren.psstring("13123114"),Baren.psstring("33123112"),Baren.psstring("22223113"),Baren.psstring("42223111"),Baren.psstring("11323114"),Baren.psstring("31323112"),Baren.psstring("23114113"),Baren.psstring("43114111"),Baren.psstring("12214114"),Baren.psstring("32214112"),Baren.psstring("21314113"),Baren.psstring("41314111"),Baren.psstring("14141113"),Baren.psstring("34141111"),Baren.psstring("23241112"),Baren.psstring("12341113"),Baren.psstring("32341111"),Baren.psstring("24132112"),Baren.psstring("13232113"),Baren.psstring("33232111"),Baren.psstring("22332112"),Baren.psstring("11432113"),Baren.psstring("31432111"),Baren.psstring("14123113"),Baren.psstring("34123111"),Baren.psstring("23223112"),Baren.psstring("12323113"),Baren.psstring("32323111"),Baren.psstring("21423112"),Baren.psstring("24114112"),Baren.psstring("13214113"),Baren.psstring("33214111"),Baren.psstring("22314112"),Baren.psstring("11414113"),Baren.psstring("31414111"),Baren.psstring("15141112"),Baren.psstring("24241111"),Baren.psstring("13341112"),Baren.psstring("25132111"),Baren.psstring("14232112"),Baren.psstring("23332111"),Baren.psstring("12432112"),Baren.psstring("15123112"),Baren.psstring("24223111"),Baren.psstring("13323112"),Baren.psstring("22423111"),Baren.psstring("11523112"),Baren.psstring("25114111"),Baren.psstring("14214112"),Baren.psstring("23314111"),Baren.psstring("12414112"),Baren.psstring("21514111"),Baren.psstring("16141111"),Baren.psstring("14341111"),Baren.psstring("15232111"),Baren.psstring("13432111"),Baren.psstring("16123111"),Baren.psstring("14323111"),Baren.psstring("12523111"),Baren.psstring("15214111"),Baren.psstring("13414111"),Baren.psstring("11614111"),Baren.psstring("11151115"),Baren.psstring("31151113"),Baren.psstring("51151111"),Baren.psstring("21142114"),Baren.psstring("41142112"),Baren.psstring("11133115"),Baren.psstring("31133113"),Baren.psstring("51133111"),Baren.psstring("21124114"),Baren.psstring("41124112"),Baren.psstring("11115115"),Baren.psstring("31115113"),Baren.psstring("51115111"),Baren.psstring("12151114"),Baren.psstring("32151112"),Baren.psstring("21251113"),Baren.psstring("41251111"),Baren.psstring("22142113"),Baren.psstring("42142111"),Baren.psstring("11242114"),Baren.psstring("31242112"),Baren.psstring("12133114"),Baren.psstring("32133112"),Baren.psstring("21233113"),Baren.psstring("41233111"),Baren.psstring("22124113"),Baren.psstring("42124111"),Baren.psstring("11224114"),Baren.psstring("31224112"),Baren.psstring("12115114"),Baren.psstring("32115112"),Baren.psstring("21215113"),Baren.psstring("41215111"),Baren.psstring("13151113"),Baren.psstring("33151111"),Baren.psstring("22251112"),Baren.psstring("23142112"),Baren.psstring("12242113"),Baren.psstring("32242111"),Baren.psstring("21342112"),Baren.psstring("13133113"),Baren.psstring("33133111"),Baren.psstring("22233112"),Baren.psstring("11333113"),Baren.psstring("31333111"),Baren.psstring("23124112"),Baren.psstring("12224113"),Baren.psstring("32224111"),Baren.psstring("21324112"),Baren.psstring("13115113"),Baren.psstring("33115111"),Baren.psstring("22215112"),Baren.psstring("11315113"),Baren.psstring("31315111"),Baren.psstring("14151112"),Baren.psstring("23251111"),Baren.psstring("24142111"),Baren.psstring("13242112"),Baren.psstring("22342111"),Baren.psstring("14133112"),Baren.psstring("23233111"),Baren.psstring("12333112"),Baren.psstring("21433111"),Baren.psstring("24124111"),Baren.psstring("13224112"),Baren.psstring("22324111"),Baren.psstring("11424112"),Baren.psstring("14115112"),Baren.psstring("23215111"),Baren.psstring("12315112"),Baren.psstring("21415111"),Baren.psstring("15151111"),Baren.psstring("14242111"),Baren.psstring("15133111"),Baren.psstring("13333111"),Baren.psstring("14224111"),Baren.psstring("12424111"),Baren.psstring("15115111"),Baren.psstring("13315111"),Baren.psstring("11515111"),Baren.psstring("11161114"),Baren.psstring("31161112"),Baren.psstring("21152113"),Baren.psstring("41152111"),Baren.psstring("11143114"),Baren.psstring("31143112"),Baren.psstring("21134113"),Baren.psstring("41134111"),Baren.psstring("11125114"),Baren.psstring("31125112"),Baren.psstring("21116113"),Baren.psstring("41116111"),Baren.psstring("12161113"),Baren.psstring("32161111"),Baren.psstring("22152112"),Baren.psstring("11252113"),Baren.psstring("31252111"),Baren.psstring("12143113"),Baren.psstring("32143111"),Baren.psstring("21243112"),Baren.psstring("22134112"),Baren.psstring("11234113"),Baren.psstring("31234111"),Baren.psstring("12125113"),Baren.psstring("32125111"),Baren.psstring("21225112"),Baren.psstring("22116112"),Baren.psstring("11216113"),Baren.psstring("31216111"),Baren.psstring("13161112"),Baren.psstring("23152111"),Baren.psstring("12252112"),Baren.psstring("13143112"),Baren.psstring("22243111"),Baren.psstring("11343112"),Baren.psstring("23134111"),Baren.psstring("12234112"),Baren.psstring("21334111"),Baren.psstring("13125112"),Baren.psstring("22225111"),Baren.psstring("11325112"),Baren.psstring("23116111"),Baren.psstring("12216112"),Baren.psstring("21316111"),Baren.psstring("14161111"),Baren.psstring("13252111"),Baren.psstring("14143111"),Baren.psstring("12343111"),Baren.psstring("13234111"),Baren.psstring("11434111"),Baren.psstring("14125111"),Baren.psstring("12325111"),Baren.psstring("13216111"),Baren.psstring("11416111"),Baren.psstring("31111216"),Baren.psstring("51111214"),Baren.psstring("31211125"),Baren.psstring("51211123"),Baren.psstring("32111215"),Baren.psstring("52111213"),Baren.psstring("21211216"),Baren.psstring("41211214"),Baren.psstring("61211212"),Baren.psstring("12211126"),Baren.psstring("32211124"),Baren.psstring("52211122"),Baren.psstring("21311125"),Baren.psstring("41311123"),Baren.psstring("61311121"),Baren.psstring("13111216"),Baren.psstring("33111214"),Baren.psstring("22211215"),Baren.psstring("42211213"),Baren.psstring("11311216"),Baren.psstring("31311214"),Baren.psstring("51311212"),Baren.psstring("13211125"),Baren.psstring("33211123"),Baren.psstring("22311124"),Baren.psstring("42311122"),Baren.psstring("11411125"),Baren.psstring("31411123"),Baren.psstring("51411121"),Baren.psstring("14111215"),Baren.psstring("34111213"),Baren.psstring("23211214"),Baren.psstring("43211212"),Baren.psstring("12311215"),Baren.psstring("32311213"),Baren.psstring("52311211"),Baren.psstring("21411214"),Baren.psstring("41411212"),Baren.psstring("14211124"),Baren.psstring("34211122"),Baren.psstring("23311123"),Baren.psstring("43311121"),Baren.psstring("12411124"),Baren.psstring("32411122"),Baren.psstring("21511123"),Baren.psstring("41511121"),Baren.psstring("15111214"),Baren.psstring("24211213"),Baren.psstring("13311214"),Baren.psstring("33311212"),Baren.psstring("22411213"),Baren.psstring("42411211"),Baren.psstring("11511214"),Baren.psstring("31511212"),Baren.psstring("15211123"),Baren.psstring("24311122"),Baren.psstring("13411123"),Baren.psstring("33411121"),Baren.psstring("22511122"),Baren.psstring("11611123"),Baren.psstring("31611121"),Baren.psstring("16111213"),Baren.psstring("25211212"),Baren.psstring("14311213"),Baren.psstring("34311211"),Baren.psstring("23411212"),Baren.psstring("12511213"),Baren.psstring("32511211"),Baren.psstring("21611212"),Baren.psstring("21121126"),Baren.psstring("41121124"),Baren.psstring("61121122"),Baren.psstring("31112125"),Baren.psstring("51112123"),Baren.psstring("31121215"),Baren.psstring("51121213"),Baren.psstring("21112216"),Baren.psstring("41112214"),Baren.psstring("61112212"),Baren.psstring("22121125"),Baren.psstring("42121123"),Baren.psstring("11221126"),Baren.psstring("31221124"),Baren.psstring("51221122"),Baren.psstring("12112126"),Baren.psstring("32112124"),Baren.psstring("52112122"),Baren.psstring("12121216"),Baren.psstring("32121214"),Baren.psstring("52121212"),Baren.psstring("21221215"),Baren.psstring("41221213"),Baren.psstring("61221211"),Baren.psstring("22112215"),Baren.psstring("42112213"),Baren.psstring("11212216"),Baren.psstring("31212214"),Baren.psstring("51212212"),Baren.psstring("23121124"),Baren.psstring("43121122"),Baren.psstring("12221125"),Baren.psstring("32221123"),Baren.psstring("52221121"),Baren.psstring("21321124"),Baren.psstring("41321122"),Baren.psstring("13112125"),Baren.psstring("33112123"),Baren.psstring("13121215"),Baren.psstring("33121213"),Baren.psstring("11312125"),Baren.psstring("22221214"),Baren.psstring("42221212"),Baren.psstring("11321215"),Baren.psstring("31321213"),Baren.psstring("51321211"),Baren.psstring("23112214"),Baren.psstring("43112212"),Baren.psstring("12212215"),Baren.psstring("32212213"),Baren.psstring("52212211"),Baren.psstring("21312214"),Baren.psstring("41312212"),Baren.psstring("24121123"),Baren.psstring("13221124"),Baren.psstring("33221122"),Baren.psstring("22321123"),Baren.psstring("42321121"),Baren.psstring("11421124"),Baren.psstring("31421122"),Baren.psstring("14112124"),Baren.psstring("34112122"),Baren.psstring("14121214"),Baren.psstring("34121212"),Baren.psstring("12312124"),Baren.psstring("23221213"),Baren.psstring("43221211"),Baren.psstring("12321214"),Baren.psstring("32321212"),Baren.psstring("21421213"),Baren.psstring("41421211"),Baren.psstring("24112213"),Baren.psstring("13212214"),Baren.psstring("33212212"),Baren.psstring("22312213"),Baren.psstring("42312211"),Baren.psstring("11412214"),Baren.psstring("31412212"),Baren.psstring("25121122"),Baren.psstring("14221123"),Baren.psstring("34221121"),Baren.psstring("23321122"),Baren.psstring("12421123"),Baren.psstring("32421121"),Baren.psstring("21521122"),Baren.psstring("15112123"),Baren.psstring("15121213"),Baren.psstring("13312123"),Baren.psstring("24221212"),Baren.psstring("13321213"),Baren.psstring("33321211"),Baren.psstring("11512123"),Baren.psstring("22421212"),Baren.psstring("11521213"),Baren.psstring("31521211"),Baren.psstring("25112212"),Baren.psstring("14212213"),Baren.psstring("34212211"),Baren.psstring("23312212"),Baren.psstring("12412213"),Baren.psstring("32412211"),Baren.psstring("21512212"),Baren.psstring("15221122"),Baren.psstring("24321121"),Baren.psstring("13421122"),Baren.psstring("22521121"),Baren.psstring("16112122"),Baren.psstring("16121212"),Baren.psstring("14312122"),Baren.psstring("25221211"),Baren.psstring("14321212"),Baren.psstring("12512122"),Baren.psstring("23421211"),Baren.psstring("12521212"),Baren.psstring("15212212"),Baren.psstring("24312211"),Baren.psstring("13412212"),Baren.psstring("22512211"),Baren.psstring("11612212"),Baren.psstring("21131125"),Baren.psstring("41131123"),Baren.psstring("61131121"),Baren.psstring("11122126"),Baren.psstring("31122124"),Baren.psstring("51122122"),Baren.psstring("11131216"),Baren.psstring("31131214"),Baren.psstring("51131212"),Baren.psstring("21113125"),Baren.psstring("41113123"),Baren.psstring("61113121"),Baren.psstring("21122215"),Baren.psstring("41122213"),Baren.psstring("61122211"),Baren.psstring("11113216"),Baren.psstring("31113214"),Baren.psstring("51113212"),Baren.psstring("22131124"),Baren.psstring("42131122"),Baren.psstring("11231125"),Baren.psstring("31231123"),Baren.psstring("51231121"),Baren.psstring("12122125"),Baren.psstring("32122123"),Baren.psstring("52122121"),Baren.psstring("12131215"),Baren.psstring("32131213"),Baren.psstring("52131211"),Baren.psstring("21231214"),Baren.psstring("41231212"),Baren.psstring("22113124"),Baren.psstring("42113122"),Baren.psstring("11213125"),Baren.psstring("22122214"),Baren.psstring("42122212"),Baren.psstring("11222215"),Baren.psstring("31222213"),Baren.psstring("51222211"),Baren.psstring("12113215"),Baren.psstring("32113213"),Baren.psstring("52113211"),Baren.psstring("21213214"),Baren.psstring("41213212"),Baren.psstring("23131123"),Baren.psstring("43131121"),Baren.psstring("12231124"),Baren.psstring("32231122"),Baren.psstring("21331123"),Baren.psstring("41331121"),Baren.psstring("13122124"),Baren.psstring("33122122"),Baren.psstring("13131214"),Baren.psstring("33131212"),Baren.psstring("11322124"),Baren.psstring("22231213"),Baren.psstring("42231211"),Baren.psstring("11331214"),Baren.psstring("31331212"),Baren.psstring("23113123"),Baren.psstring("43113121"),Baren.psstring("12213124"),Baren.psstring("23122213"),Baren.psstring("43122211"),Baren.psstring("12222214"),Baren.psstring("32222212"),Baren.psstring("21322213"),Baren.psstring("41322211"),Baren.psstring("13113214"),Baren.psstring("33113212"),Baren.psstring("22213213"),Baren.psstring("42213211"),Baren.psstring("11313214"),Baren.psstring("31313212"),Baren.psstring("24131122"),Baren.psstring("13231123"),Baren.psstring("33231121"),Baren.psstring("22331122"),Baren.psstring("11431123"),Baren.psstring("31431121"),Baren.psstring("14122123"),Baren.psstring("34122121"),Baren.psstring("14131213"),Baren.psstring("34131211"),Baren.psstring("12322123"),Baren.psstring("23231212"),Baren.psstring("12331213"),Baren.psstring("32331211"),Baren.psstring("21431212"),Baren.psstring("24113122"),Baren.psstring("13213123"),Baren.psstring("24122212"),Baren.psstring("13222213"),Baren.psstring("33222211"),Baren.psstring("11413123"),Baren.psstring("22322212"),Baren.psstring("11422213"),Baren.psstring("31422211"),Baren.psstring("14113213"),Baren.psstring("34113211"),Baren.psstring("23213212"),Baren.psstring("12313213"),Baren.psstring("32313211"),Baren.psstring("21413212"),Baren.psstring("25131121"),Baren.psstring("14231122"),Baren.psstring("23331121"),Baren.psstring("12431122"),Baren.psstring("15122122"),Baren.psstring("15131212"),Baren.psstring("13322122"),Baren.psstring("24231211"),Baren.psstring("13331212"),Baren.psstring("11522122"),Baren.psstring("22431211"),Baren.psstring("25113121"),Baren.psstring("14213122"),Baren.psstring("25122211"),Baren.psstring("14222212"),Baren.psstring("12413122"),Baren.psstring("23322211"),Baren.psstring("12422212"),Baren.psstring("21522211"),Baren.psstring("15113212"),Baren.psstring("24213211"),Baren.psstring("13313212"),Baren.psstring("22413211"),Baren.psstring("11513212"),Baren.psstring("15231121"),Baren.psstring("13431121"),Baren.psstring("16122121"),Baren.psstring("16131211"),Baren.psstring("14322121"),Baren.psstring("14331211"),Baren.psstring("12522121"),Baren.psstring("15213121"),Baren.psstring("15222211"),Baren.psstring("13413121"),Baren.psstring("13422211"),Baren.psstring("11613121"),Baren.psstring("16113211"),Baren.psstring("14313211"),Baren.psstring("12513211"),Baren.psstring("21141124"),Baren.psstring("41141122"),Baren.psstring("11132125"),Baren.psstring("31132123"),Baren.psstring("51132121"),Baren.psstring("11141215"),Baren.psstring("31141213"),Baren.psstring("51141211"),Baren.psstring("21123124"),Baren.psstring("41123122"),Baren.psstring("21132214"),Baren.psstring("41132212"),Baren.psstring("11114125"),Baren.psstring("31114123"),Baren.psstring("51114121"),Baren.psstring("11123215"),Baren.psstring("31123213"),Baren.psstring("51123211"),Baren.psstring("21114214"),Baren.psstring("41114212"),Baren.psstring("22141123"),Baren.psstring("42141121"),Baren.psstring("11241124"),Baren.psstring("31241122"),Baren.psstring("12132124"),Baren.psstring("32132122"),Baren.psstring("12141214"),Baren.psstring("32141212"),Baren.psstring("21241213"),Baren.psstring("41241211"),Baren.psstring("22123123"),Baren.psstring("42123121"),Baren.psstring("11223124"),Baren.psstring("22132213"),Baren.psstring("42132211"),Baren.psstring("11232214"),Baren.psstring("31232212"),Baren.psstring("12114124"),Baren.psstring("32114122"),Baren.psstring("12123214"),Baren.psstring("32123212"),Baren.psstring("21223213"),Baren.psstring("41223211"),Baren.psstring("22114213"),Baren.psstring("42114211"),Baren.psstring("11214214"),Baren.psstring("31214212"),Baren.psstring("23141122"),Baren.psstring("12241123"),Baren.psstring("32241121"),Baren.psstring("21341122"),Baren.psstring("13132123"),Baren.psstring("33132121"),Baren.psstring("13141213"),Baren.psstring("33141211"),Baren.psstring("11332123"),Baren.psstring("22241212"),Baren.psstring("11341213"),Baren.psstring("31341211"),Baren.psstring("23123122"),Baren.psstring("12223123"),Baren.psstring("23132212"),Baren.psstring("12232213"),Baren.psstring("32232211"),Baren.psstring("21332212"),Baren.psstring("13114123"),Baren.psstring("33114121"),Baren.psstring("13123213"),Baren.psstring("33123211"),Baren.psstring("11314123"),Baren.psstring("22223212"),Baren.psstring("11323213"),Baren.psstring("31323211"),Baren.psstring("23114212"),Baren.psstring("12214213"),Baren.psstring("32214211"),Baren.psstring("21314212"),Baren.psstring("24141121"),Baren.psstring("13241122"),Baren.psstring("22341121"),Baren.psstring("14132122"),Baren.psstring("14141212"),Baren.psstring("12332122"),Baren.psstring("23241211"),Baren.psstring("12341212"),Baren.psstring("24123121"),Baren.psstring("13223122"),Baren.psstring("24132211"),Baren.psstring("13232212"),Baren.psstring("11423122"),Baren.psstring("22332211"),Baren.psstring("11432212"),Baren.psstring("14114122"),Baren.psstring("14123212"),Baren.psstring("12314122"),Baren.psstring("23223211"),Baren.psstring("12323212"),Baren.psstring("21423211"),Baren.psstring("24114211"),Baren.psstring("13214212"),Baren.psstring("22314211"),Baren.psstring("11414212"),Baren.psstring("14241121"),Baren.psstring("15132121"),Baren.psstring("15141211"),Baren.psstring("13332121"),Baren.psstring("13341211"),Baren.psstring("14223121"),Baren.psstring("14232211"),Baren.psstring("12423121"),Baren.psstring("12432211"),Baren.psstring("15114121"),Baren.psstring("15123211"),Baren.psstring("13314121"),Baren.psstring("13323211"),Baren.psstring("11514121"),Baren.psstring("11523211"),Baren.psstring("14214211"),Baren.psstring("12414211"),Baren.psstring("21151123"),Baren.psstring("41151121"),Baren.psstring("11142124"),Baren.psstring("31142122"),Baren.psstring("11151214"),Baren.psstring("31151212"),Baren.psstring("21133123"),Baren.psstring("41133121"),Baren.psstring("21142213"),Baren.psstring("41142211"),Baren.psstring("11124124"),Baren.psstring("31124122"),Baren.psstring("11133214"),Baren.psstring("31133212"),Baren.psstring("21115123"),Baren.psstring("41115121"),Baren.psstring("21124213"),Baren.psstring("41124211"),Baren.psstring("11115214"),Baren.psstring("31115212"),Baren.psstring("22151122"),Baren.psstring("11251123"),Baren.psstring("31251121"),Baren.psstring("12142123"),Baren.psstring("32142121"),Baren.psstring("12151213"),Baren.psstring("32151211"),Baren.psstring("21251212"),Baren.psstring("22133122"),Baren.psstring("11233123"),Baren.psstring("22142212"),Baren.psstring("11242213"),Baren.psstring("31242211"),Baren.psstring("12124123"),Baren.psstring("32124121"),Baren.psstring("12133213"),Baren.psstring("32133211"),Baren.psstring("21233212"),Baren.psstring("22115122"),Baren.psstring("11215123"),Baren.psstring("22124212"),Baren.psstring("11224213"),Baren.psstring("31224211"),Baren.psstring("12115213"),Baren.psstring("32115211"),Baren.psstring("21215212"),Baren.psstring("23151121"),Baren.psstring("12251122"),Baren.psstring("13142122"),Baren.psstring("13151212"),Baren.psstring("11342122"),Baren.psstring("22251211"),Baren.psstring("23133121"),Baren.psstring("12233122"),Baren.psstring("23142211"),Baren.psstring("12242212"),Baren.psstring("21342211"),Baren.psstring("13124122"),Baren.psstring("13133212"),Baren.psstring("11324122"),Baren.psstring("22233211"),Baren.psstring("11333212"),Baren.psstring("23115121"),Baren.psstring("12215122"),Baren.psstring("23124211"),Baren.psstring("12224212"),Baren.psstring("21324211"),Baren.psstring("13115212"),Baren.psstring("22215211"),Baren.psstring("11315212"),Baren.psstring("13251121"),Baren.psstring("14142121"),Baren.psstring("14151211"),Baren.psstring("12342121"),Baren.psstring("13233121"),Baren.psstring("13242211"),Baren.psstring("11433121"),Baren.psstring("14124121"),Baren.psstring("14133211"),Baren.psstring("12324121"),Baren.psstring("12333211"),Baren.psstring("13215121"),Baren.psstring("13224211"),Baren.psstring("11415121"),Baren.psstring("11424211"),Baren.psstring("14115211"),Baren.psstring("12315211"),Baren.psstring("21161122"),Baren.psstring("11152123"),Baren.psstring("31152121"),Baren.psstring("11161213"),Baren.psstring("31161211"),Baren.psstring("21143122"),Baren.psstring("21152212"),Baren.psstring("11134123"),Baren.psstring("31134121"),Baren.psstring("11143213"),Baren.psstring("31143211"),Baren.psstring("21125122"),Baren.psstring("21134212"),Baren.psstring("11116123"),Baren.psstring("31116121"),Baren.psstring("11125213"),Baren.psstring("31125211"),Baren.psstring("22161121"),Baren.psstring("12152122"),Baren.psstring("12161212"),Baren.psstring("22143121"),Baren.psstring("11243122"),Baren.psstring("22152211"),Baren.psstring("11252212"),Baren.psstring("12134122"),Baren.psstring("12143212"),Baren.psstring("21243211"),Baren.psstring("22125121"),Baren.psstring("11225122"),Baren.psstring("22134211"),Baren.psstring("11234212"),Baren.psstring("12116122"),Baren.psstring("12125212"),Baren.psstring("21225211"),Baren.psstring("13152121"),Baren.psstring("13161211"),Baren.psstring("12243121"),Baren.psstring("12252211"),Baren.psstring("13134121"),Baren.psstring("13143211"),Baren.psstring("11334121"),Baren.psstring("11343211"),Baren.psstring("12225121"),Baren.psstring("12234211"),Baren.psstring("13116121"),Baren.psstring("13125211"),Baren.psstring("11316121"),Baren.psstring("11325211"),Baren.psstring("21111226"),Baren.psstring("41111224"),Baren.psstring("61111222"),Baren.psstring("31111315"),Baren.psstring("51111313"),Baren.psstring("21211135"),Baren.psstring("41211133"),Baren.psstring("61211131"),Baren.psstring("22111225"),Baren.psstring("42111223"),Baren.psstring("11211226"),Baren.psstring("31211224"),Baren.psstring("51211222"),Baren.psstring("12111316"),Baren.psstring("32111314"),Baren.psstring("52111312"),Baren.psstring("21211315"),Baren.psstring("41211313"),Baren.psstring("61211311"),Baren.psstring("22211134"),Baren.psstring("42211132"),Baren.psstring("11311135"),Baren.psstring("31311133"),Baren.psstring("51311131"),Baren.psstring("23111224"),Baren.psstring("43111222"),Baren.psstring("12211225"),Baren.psstring("32211223"),Baren.psstring("52211221"),Baren.psstring("21311224"),Baren.psstring("41311222"),Baren.psstring("13111315"),Baren.psstring("33111313"),Baren.psstring("22211314"),Baren.psstring("42211312"),Baren.psstring("11311315"),Baren.psstring("31311313"),Baren.psstring("51311311"),Baren.psstring("23211133"),Baren.psstring("43211131"),Baren.psstring("12311134"),Baren.psstring("32311132"),Baren.psstring("21411133"),Baren.psstring("41411131"),Baren.psstring("24111223"),Baren.psstring("13211224"),Baren.psstring("33211222"),Baren.psstring("22311223"),Baren.psstring("42311221"),Baren.psstring("11411224"),Baren.psstring("31411222"),Baren.psstring("14111314"),Baren.psstring("34111312"),Baren.psstring("23211313"),Baren.psstring("43211311"),Baren.psstring("12311314"),Baren.psstring("32311312"),Baren.psstring("21411313"),Baren.psstring("41411311"),Baren.psstring("24211132"),Baren.psstring("13311133"),Baren.psstring("33311131"),Baren.psstring("22411132"),Baren.psstring("11511133"),Baren.psstring("31511131"),Baren.psstring("25111222"),Baren.psstring("14211223"),Baren.psstring("34211221"),Baren.psstring("23311222"),Baren.psstring("12411223"),Baren.psstring("32411221"),Baren.psstring("21511222"),Baren.psstring("15111313"),Baren.psstring("24211312"),Baren.psstring("13311313"),Baren.psstring("33311311"),Baren.psstring("22411312"),Baren.psstring("11511313"),Baren.psstring("31511311"),Baren.psstring("25211131"),Baren.psstring("14311132"),Baren.psstring("23411131"),Baren.psstring("12511132"),Baren.psstring("21611131"),Baren.psstring("15211222"),Baren.psstring("24311221"),Baren.psstring("13411222"),Baren.psstring("22511221"),Baren.psstring("11611222"),Baren.psstring("16111312"),Baren.psstring("25211311"),Baren.psstring("14311312"),Baren.psstring("23411311"),Baren.psstring("12511312"),Baren.psstring("21611311"),Baren.psstring("31121134"),Baren.psstring("51121132"),Baren.psstring("21112135"),Baren.psstring("41112133"),Baren.psstring("61112131"),Baren.psstring("21121225"),Baren.psstring("41121223"),Baren.psstring("61121221"),Baren.psstring("11112226"),Baren.psstring("31112224"),Baren.psstring("51112222"),Baren.psstring("11121316"),Baren.psstring("31121314"),Baren.psstring("51121312"),Baren.psstring("21112315"),Baren.psstring("41112313"),Baren.psstring("61112311"),Baren.psstring("12121135"),Baren.psstring("32121133"),Baren.psstring("52121131"),Baren.psstring("21221134"),Baren.psstring("41221132"),Baren.psstring("22112134"),Baren.psstring("42112132"),Baren.psstring("11212135"),Baren.psstring("22121224"),Baren.psstring("42121222"),Baren.psstring("11221225"),Baren.psstring("31221223"),Baren.psstring("51221221"),Baren.psstring("12112225"),Baren.psstring("32112223"),Baren.psstring("52112221"),Baren.psstring("12121315"),Baren.psstring("32121313"),Baren.psstring("52121311"),Baren.psstring("21221314"),Baren.psstring("41221312"),Baren.psstring("22112314"),Baren.psstring("42112312"),Baren.psstring("11212315"),Baren.psstring("31212313"),Baren.psstring("51212311"),Baren.psstring("13121134"),Baren.psstring("33121132"),Baren.psstring("22221133"),Baren.psstring("42221131"),Baren.psstring("11321134"),Baren.psstring("31321132"),Baren.psstring("23112133"),Baren.psstring("43112131"),Baren.psstring("12212134"),Baren.psstring("23121223"),Baren.psstring("43121221"),Baren.psstring("12221224"),Baren.psstring("32221222"),Baren.psstring("21321223"),Baren.psstring("41321221"),Baren.psstring("13112224"),Baren.psstring("33112222"),Baren.psstring("13121314"),Baren.psstring("33121312"),Baren.psstring("11312224"),Baren.psstring("22221313"),Baren.psstring("42221311"),Baren.psstring("11321314"),Baren.psstring("31321312"),Baren.psstring("23112313"),Baren.psstring("43112311"),Baren.psstring("12212314"),Baren.psstring("32212312"),Baren.psstring("21312313"),Baren.psstring("41312311"),Baren.psstring("14121133"),Baren.psstring("34121131"),Baren.psstring("23221132"),Baren.psstring("12321133"),Baren.psstring("32321131"),Baren.psstring("21421132"),Baren.psstring("24112132"),Baren.psstring("13212133"),Baren.psstring("24121222"),Baren.psstring("13221223"),Baren.psstring("33221221"),Baren.psstring("11412133"),Baren.psstring("22321222"),Baren.psstring("11421223"),Baren.psstring("31421221"),Baren.psstring("14112223"),Baren.psstring("34112221"),Baren.psstring("14121313"),Baren.psstring("34121311"),Baren.psstring("12312223"),Baren.psstring("23221312"),Baren.psstring("12321313"),Baren.psstring("32321311"),Baren.psstring("21421312"),Baren.psstring("24112312"),Baren.psstring("13212313"),Baren.psstring("33212311"),Baren.psstring("22312312"),Baren.psstring("11412313"),Baren.psstring("31412311"),Baren.psstring("15121132"),Baren.psstring("24221131"),Baren.psstring("13321132"),Baren.psstring("22421131")]);
	this.stk[this.ptr++]=Baren.psarray([Baren.psstring("22121116"),Baren.psstring("42121114"),Baren.psstring("31221115"),Baren.psstring("51221113"),Baren.psstring("32112115"),Baren.psstring("52112113"),Baren.psstring("21212116"),Baren.psstring("41212114"),Baren.psstring("61212112"),Baren.psstring("23121115"),Baren.psstring("43121113"),Baren.psstring("12221116"),Baren.psstring("32221114"),Baren.psstring("52221112"),Baren.psstring("21321115"),Baren.psstring("41321113"),Baren.psstring("61321111"),Baren.psstring("13112116"),Baren.psstring("33112114"),Baren.psstring("22212115"),Baren.psstring("42212113"),Baren.psstring("11312116"),Baren.psstring("31312114"),Baren.psstring("51312112"),Baren.psstring("24121114"),Baren.psstring("13221115"),Baren.psstring("33221113"),Baren.psstring("22321114"),Baren.psstring("42321112"),Baren.psstring("11421115"),Baren.psstring("31421113"),Baren.psstring("51421111"),Baren.psstring("14112115"),Baren.psstring("34112113"),Baren.psstring("23212114"),Baren.psstring("43212112"),Baren.psstring("12312115"),Baren.psstring("32312113"),Baren.psstring("52312111"),Baren.psstring("21412114"),Baren.psstring("41412112"),Baren.psstring("25121113"),Baren.psstring("14221114"),Baren.psstring("34221112"),Baren.psstring("23321113"),Baren.psstring("43321111"),Baren.psstring("12421114"),Baren.psstring("32421112"),Baren.psstring("21521113"),Baren.psstring("41521111"),Baren.psstring("15112114"),Baren.psstring("24212113"),Baren.psstring("13312114"),Baren.psstring("33312112"),Baren.psstring("22412113"),Baren.psstring("42412111"),Baren.psstring("11512114"),Baren.psstring("31512112"),Baren.psstring("15221113"),Baren.psstring("24321112"),Baren.psstring("13421113"),Baren.psstring("33421111"),Baren.psstring("22521112"),Baren.psstring("16112113"),Baren.psstring("25212112"),Baren.psstring("14312113"),Baren.psstring("34312111"),Baren.psstring("23412112"),Baren.psstring("12512113"),Baren.psstring("32512111"),Baren.psstring("21612112"),Baren.psstring("21131116"),Baren.psstring("41131114"),Baren.psstring("61131112"),Baren.psstring("31122115"),Baren.psstring("51122113"),Baren.psstring("21113116"),Baren.psstring("41113114"),Baren.psstring("61113112"),Baren.psstring("22131115"),Baren.psstring("42131113"),Baren.psstring("11231116"),Baren.psstring("31231114"),Baren.psstring("51231112"),Baren.psstring("12122116"),Baren.psstring("32122114"),Baren.psstring("52122112"),Baren.psstring("21222115"),Baren.psstring("41222113"),Baren.psstring("61222111"),Baren.psstring("22113115"),Baren.psstring("42113113"),Baren.psstring("11213116"),Baren.psstring("31213114"),Baren.psstring("51213112"),Baren.psstring("23131114"),Baren.psstring("43131112"),Baren.psstring("12231115"),Baren.psstring("32231113"),Baren.psstring("52231111"),Baren.psstring("21331114"),Baren.psstring("41331112"),Baren.psstring("13122115"),Baren.psstring("33122113"),Baren.psstring("22222114"),Baren.psstring("42222112"),Baren.psstring("11322115"),Baren.psstring("31322113"),Baren.psstring("51322111"),Baren.psstring("23113114"),Baren.psstring("43113112"),Baren.psstring("12213115"),Baren.psstring("32213113"),Baren.psstring("52213111"),Baren.psstring("21313114"),Baren.psstring("41313112"),Baren.psstring("24131113"),Baren.psstring("13231114"),Baren.psstring("33231112"),Baren.psstring("22331113"),Baren.psstring("42331111"),Baren.psstring("11431114"),Baren.psstring("31431112"),Baren.psstring("14122114"),Baren.psstring("34122112"),Baren.psstring("23222113"),Baren.psstring("43222111"),Baren.psstring("12322114"),Baren.psstring("32322112"),Baren.psstring("21422113"),Baren.psstring("41422111"),Baren.psstring("24113113"),Baren.psstring("13213114"),Baren.psstring("33213112"),Baren.psstring("22313113"),Baren.psstring("42313111"),Baren.psstring("11413114"),Baren.psstring("31413112"),Baren.psstring("25131112"),Baren.psstring("14231113"),Baren.psstring("34231111"),Baren.psstring("23331112"),Baren.psstring("12431113"),Baren.psstring("32431111"),Baren.psstring("15122113"),Baren.psstring("24222112"),Baren.psstring("13322113"),Baren.psstring("33322111"),Baren.psstring("22422112"),Baren.psstring("11522113"),Baren.psstring("31522111"),Baren.psstring("25113112"),Baren.psstring("14213113"),Baren.psstring("34213111"),Baren.psstring("23313112"),Baren.psstring("12413113"),Baren.psstring("32413111"),Baren.psstring("21513112"),Baren.psstring("15231112"),Baren.psstring("24331111"),Baren.psstring("13431112"),Baren.psstring("16122112"),Baren.psstring("25222111"),Baren.psstring("14322112"),Baren.psstring("23422111"),Baren.psstring("12522112"),Baren.psstring("15213112"),Baren.psstring("24313111"),Baren.psstring("13413112"),Baren.psstring("22513111"),Baren.psstring("11613112"),Baren.psstring("21141115"),Baren.psstring("41141113"),Baren.psstring("61141111"),Baren.psstring("11132116"),Baren.psstring("31132114"),Baren.psstring("51132112"),Baren.psstring("21123115"),Baren.psstring("41123113"),Baren.psstring("61123111"),Baren.psstring("11114116"),Baren.psstring("31114114"),Baren.psstring("51114112"),Baren.psstring("22141114"),Baren.psstring("42141112"),Baren.psstring("11241115"),Baren.psstring("31241113"),Baren.psstring("51241111"),Baren.psstring("12132115"),Baren.psstring("32132113"),Baren.psstring("52132111"),Baren.psstring("21232114"),Baren.psstring("41232112"),Baren.psstring("22123114"),Baren.psstring("42123112"),Baren.psstring("11223115"),Baren.psstring("31223113"),Baren.psstring("51223111"),Baren.psstring("12114115"),Baren.psstring("32114113"),Baren.psstring("52114111"),Baren.psstring("21214114"),Baren.psstring("41214112"),Baren.psstring("23141113"),Baren.psstring("43141111"),Baren.psstring("12241114"),Baren.psstring("32241112"),Baren.psstring("21341113"),Baren.psstring("41341111"),Baren.psstring("13132114"),Baren.psstring("33132112"),Baren.psstring("22232113"),Baren.psstring("42232111"),Baren.psstring("11332114"),Baren.psstring("31332112"),Baren.psstring("23123113"),Baren.psstring("43123111"),Baren.psstring("12223114"),Baren.psstring("32223112"),Baren.psstring("21323113"),Baren.psstring("41323111"),Baren.psstring("13114114"),Baren.psstring("33114112"),Baren.psstring("22214113"),Baren.psstring("42214111"),Baren.psstring("11314114"),Baren.psstring("31314112"),Baren.psstring("24141112"),Baren.psstring("13241113"),Baren.psstring("33241111"),Baren.psstring("22341112"),Baren.psstring("14132113"),Baren.psstring("34132111"),Baren.psstring("23232112"),Baren.psstring("12332113"),Baren.psstring("32332111"),Baren.psstring("21432112"),Baren.psstring("24123112"),Baren.psstring("13223113"),Baren.psstring("33223111"),Baren.psstring("22323112"),Baren.psstring("11423113"),Baren.psstring("31423111"),Baren.psstring("14114113"),Baren.psstring("34114111"),Baren.psstring("23214112"),Baren.psstring("12314113"),Baren.psstring("32314111"),Baren.psstring("21414112"),Baren.psstring("25141111"),Baren.psstring("14241112"),Baren.psstring("23341111"),Baren.psstring("15132112"),Baren.psstring("24232111"),Baren.psstring("13332112"),Baren.psstring("22432111"),Baren.psstring("25123111"),Baren.psstring("14223112"),Baren.psstring("23323111"),Baren.psstring("12423112"),Baren.psstring("21523111"),Baren.psstring("15114112"),Baren.psstring("24214111"),Baren.psstring("13314112"),Baren.psstring("22414111"),Baren.psstring("11514112"),Baren.psstring("15241111"),Baren.psstring("16132111"),Baren.psstring("14332111"),Baren.psstring("15223111"),Baren.psstring("13423111"),Baren.psstring("16114111"),Baren.psstring("14314111"),Baren.psstring("12514111"),Baren.psstring("21151114"),Baren.psstring("41151112"),Baren.psstring("11142115"),Baren.psstring("31142113"),Baren.psstring("51142111"),Baren.psstring("21133114"),Baren.psstring("41133112"),Baren.psstring("11124115"),Baren.psstring("31124113"),Baren.psstring("51124111"),Baren.psstring("21115114"),Baren.psstring("41115112"),Baren.psstring("22151113"),Baren.psstring("42151111"),Baren.psstring("11251114"),Baren.psstring("31251112"),Baren.psstring("12142114"),Baren.psstring("32142112"),Baren.psstring("21242113"),Baren.psstring("41242111"),Baren.psstring("22133113"),Baren.psstring("42133111"),Baren.psstring("11233114"),Baren.psstring("31233112"),Baren.psstring("12124114"),Baren.psstring("32124112"),Baren.psstring("21224113"),Baren.psstring("41224111"),Baren.psstring("22115113"),Baren.psstring("42115111"),Baren.psstring("11215114"),Baren.psstring("31215112"),Baren.psstring("23151112"),Baren.psstring("12251113"),Baren.psstring("32251111"),Baren.psstring("13142113"),Baren.psstring("33142111"),Baren.psstring("22242112"),Baren.psstring("11342113"),Baren.psstring("31342111"),Baren.psstring("23133112"),Baren.psstring("12233113"),Baren.psstring("32233111"),Baren.psstring("21333112"),Baren.psstring("13124113"),Baren.psstring("33124111"),Baren.psstring("22224112"),Baren.psstring("11324113"),Baren.psstring("31324111"),Baren.psstring("23115112"),Baren.psstring("12215113"),Baren.psstring("32215111"),Baren.psstring("21315112"),Baren.psstring("24151111"),Baren.psstring("13251112"),Baren.psstring("14142112"),Baren.psstring("23242111"),Baren.psstring("12342112"),Baren.psstring("24133111"),Baren.psstring("13233112"),Baren.psstring("22333111"),Baren.psstring("11433112"),Baren.psstring("14124112"),Baren.psstring("23224111"),Baren.psstring("12324112"),Baren.psstring("21424111"),Baren.psstring("24115111"),Baren.psstring("13215112"),Baren.psstring("22315111"),Baren.psstring("11415112"),Baren.psstring("14251111"),Baren.psstring("15142111"),Baren.psstring("13342111"),Baren.psstring("14233111"),Baren.psstring("12433111"),Baren.psstring("15124111"),Baren.psstring("13324111"),Baren.psstring("11524111"),Baren.psstring("14215111"),Baren.psstring("12415111"),Baren.psstring("21161113"),Baren.psstring("41161111"),Baren.psstring("11152114"),Baren.psstring("31152112"),Baren.psstring("21143113"),Baren.psstring("41143111"),Baren.psstring("11134114"),Baren.psstring("31134112"),Baren.psstring("21125113"),Baren.psstring("41125111"),Baren.psstring("11116114"),Baren.psstring("31116112"),Baren.psstring("22161112"),Baren.psstring("12152113"),Baren.psstring("32152111"),Baren.psstring("21252112"),Baren.psstring("22143112"),Baren.psstring("11243113"),Baren.psstring("31243111"),Baren.psstring("12134113"),Baren.psstring("32134111"),Baren.psstring("21234112"),Baren.psstring("22125112"),Baren.psstring("11225113"),Baren.psstring("31225111"),Baren.psstring("12116113"),Baren.psstring("32116111"),Baren.psstring("21216112"),Baren.psstring("23161111"),Baren.psstring("13152112"),Baren.psstring("22252111"),Baren.psstring("23143111"),Baren.psstring("12243112"),Baren.psstring("21343111"),Baren.psstring("13134112"),Baren.psstring("22234111"),Baren.psstring("11334112"),Baren.psstring("23125111"),Baren.psstring("12225112"),Baren.psstring("21325111"),Baren.psstring("13116112"),Baren.psstring("22216111"),Baren.psstring("11316112"),Baren.psstring("14152111"),Baren.psstring("13243111"),Baren.psstring("14134111"),Baren.psstring("12334111"),Baren.psstring("13225111"),Baren.psstring("11425111"),Baren.psstring("14116111"),Baren.psstring("12316111"),Baren.psstring("41111215"),Baren.psstring("61111213"),Baren.psstring("21211126"),Baren.psstring("41211124"),Baren.psstring("61211122"),Baren.psstring("22111216"),Baren.psstring("42111214"),Baren.psstring("31211215"),Baren.psstring("51211213"),Baren.psstring("22211125"),Baren.psstring("42211123"),Baren.psstring("11311126"),Baren.psstring("31311124"),Baren.psstring("51311122"),Baren.psstring("23111215"),Baren.psstring("43111213"),Baren.psstring("12211216"),Baren.psstring("32211214"),Baren.psstring("52211212"),Baren.psstring("21311215"),Baren.psstring("41311213"),Baren.psstring("61311211"),Baren.psstring("23211124"),Baren.psstring("43211122"),Baren.psstring("12311125"),Baren.psstring("32311123"),Baren.psstring("52311121"),Baren.psstring("21411124"),Baren.psstring("41411122"),Baren.psstring("24111214"),Baren.psstring("13211215"),Baren.psstring("33211213"),Baren.psstring("22311214"),Baren.psstring("42311212"),Baren.psstring("11411215"),Baren.psstring("31411213"),Baren.psstring("51411211"),Baren.psstring("24211123"),Baren.psstring("13311124"),Baren.psstring("33311122"),Baren.psstring("22411123"),Baren.psstring("42411121"),Baren.psstring("11511124"),Baren.psstring("31511122"),Baren.psstring("25111213"),Baren.psstring("14211214"),Baren.psstring("34211212"),Baren.psstring("23311213"),Baren.psstring("43311211"),Baren.psstring("12411214"),Baren.psstring("32411212"),Baren.psstring("21511213"),Baren.psstring("41511211"),Baren.psstring("25211122"),Baren.psstring("14311123"),Baren.psstring("34311121"),Baren.psstring("23411122"),Baren.psstring("12511123"),Baren.psstring("32511121"),Baren.psstring("21611122"),Baren.psstring("15211213"),Baren.psstring("24311212"),Baren.psstring("13411213"),Baren.psstring("33411211"),Baren.psstring("22511212"),Baren.psstring("11611213"),Baren.psstring("31611211"),Baren.psstring("31121125"),Baren.psstring("51121123"),Baren.psstring("21112126"),Baren.psstring("41112124"),Baren.psstring("61112122"),Baren.psstring("21121216"),Baren.psstring("41121214"),Baren.psstring("61121212"),Baren.psstring("31112215"),Baren.psstring("51112213"),Baren.psstring("12121126"),Baren.psstring("32121124"),Baren.psstring("52121122"),Baren.psstring("21221125"),Baren.psstring("41221123"),Baren.psstring("61221121"),Baren.psstring("22112125"),Baren.psstring("42112123"),Baren.psstring("11212126"),Baren.psstring("22121215"),Baren.psstring("42121213"),Baren.psstring("11221216"),Baren.psstring("31221214"),Baren.psstring("51221212"),Baren.psstring("12112216"),Baren.psstring("32112214"),Baren.psstring("52112212"),Baren.psstring("21212215"),Baren.psstring("41212213"),Baren.psstring("61212211"),Baren.psstring("13121125"),Baren.psstring("33121123"),Baren.psstring("22221124"),Baren.psstring("42221122"),Baren.psstring("11321125"),Baren.psstring("31321123"),Baren.psstring("51321121"),Baren.psstring("23112124"),Baren.psstring("43112122"),Baren.psstring("12212125"),Baren.psstring("23121214"),Baren.psstring("43121212"),Baren.psstring("12221215"),Baren.psstring("32221213"),Baren.psstring("52221211"),Baren.psstring("21321214"),Baren.psstring("41321212"),Baren.psstring("13112215"),Baren.psstring("33112213"),Baren.psstring("22212214"),Baren.psstring("42212212"),Baren.psstring("11312215"),Baren.psstring("31312213"),Baren.psstring("51312211"),Baren.psstring("14121124"),Baren.psstring("34121122"),Baren.psstring("23221123"),Baren.psstring("43221121"),Baren.psstring("12321124"),Baren.psstring("32321122"),Baren.psstring("21421123"),Baren.psstring("41421121"),Baren.psstring("24112123"),Baren.psstring("13212124"),Baren.psstring("24121213"),Baren.psstring("13221214"),Baren.psstring("33221212"),Baren.psstring("11412124"),Baren.psstring("22321213"),Baren.psstring("42321211"),Baren.psstring("11421214"),Baren.psstring("31421212"),Baren.psstring("14112214"),Baren.psstring("34112212"),Baren.psstring("23212213"),Baren.psstring("43212211"),Baren.psstring("12312214"),Baren.psstring("32312212"),Baren.psstring("21412213"),Baren.psstring("41412211"),Baren.psstring("15121123"),Baren.psstring("24221122"),Baren.psstring("13321123"),Baren.psstring("33321121"),Baren.psstring("22421122"),Baren.psstring("11521123"),Baren.psstring("31521121"),Baren.psstring("25112122"),Baren.psstring("14212123"),Baren.psstring("25121212"),Baren.psstring("14221213"),Baren.psstring("34221211"),Baren.psstring("12412123"),Baren.psstring("23321212"),Baren.psstring("12421213"),Baren.psstring("32421211"),Baren.psstring("21521212"),Baren.psstring("15112213"),Baren.psstring("24212212"),Baren.psstring("13312213"),Baren.psstring("33312211"),Baren.psstring("22412212"),Baren.psstring("11512213"),Baren.psstring("31512211"),Baren.psstring("16121122"),Baren.psstring("25221121"),Baren.psstring("14321122"),Baren.psstring("23421121"),Baren.psstring("12521122"),Baren.psstring("15212122"),Baren.psstring("15221212"),Baren.psstring("13412122"),Baren.psstring("24321211"),Baren.psstring("13421212"),Baren.psstring("11612122"),Baren.psstring("22521211"),Baren.psstring("16112212"),Baren.psstring("25212211"),Baren.psstring("14312212"),Baren.psstring("23412211"),Baren.psstring("12512212"),Baren.psstring("21612211"),Baren.psstring("11131126"),Baren.psstring("31131124"),Baren.psstring("51131122"),Baren.psstring("21122125"),Baren.psstring("41122123"),Baren.psstring("61122121"),Baren.psstring("21131215"),Baren.psstring("41131213"),Baren.psstring("61131211"),Baren.psstring("11113126"),Baren.psstring("31113124"),Baren.psstring("51113122"),Baren.psstring("11122216"),Baren.psstring("31122214"),Baren.psstring("51122212"),Baren.psstring("21113215"),Baren.psstring("41113213"),Baren.psstring("61113211"),Baren.psstring("12131125"),Baren.psstring("32131123"),Baren.psstring("52131121"),Baren.psstring("21231124"),Baren.psstring("41231122"),Baren.psstring("22122124"),Baren.psstring("42122122"),Baren.psstring("11222125"),Baren.psstring("22131214"),Baren.psstring("42131212"),Baren.psstring("11231215"),Baren.psstring("31231213"),Baren.psstring("51231211"),Baren.psstring("12113125"),Baren.psstring("32113123"),Baren.psstring("52113121"),Baren.psstring("12122215"),Baren.psstring("32122213"),Baren.psstring("52122211"),Baren.psstring("21222214"),Baren.psstring("41222212"),Baren.psstring("22113214"),Baren.psstring("42113212"),Baren.psstring("11213215"),Baren.psstring("31213213"),Baren.psstring("51213211"),Baren.psstring("13131124"),Baren.psstring("33131122"),Baren.psstring("22231123"),Baren.psstring("42231121"),Baren.psstring("11331124"),Baren.psstring("31331122"),Baren.psstring("23122123"),Baren.psstring("43122121"),Baren.psstring("12222124"),Baren.psstring("23131213"),Baren.psstring("43131211"),Baren.psstring("12231214"),Baren.psstring("32231212"),Baren.psstring("21331213"),Baren.psstring("41331211"),Baren.psstring("13113124"),Baren.psstring("33113122"),Baren.psstring("13122214"),Baren.psstring("33122212"),Baren.psstring("11313124"),Baren.psstring("22222213"),Baren.psstring("42222211"),Baren.psstring("11322214"),Baren.psstring("31322212"),Baren.psstring("23113213"),Baren.psstring("43113211"),Baren.psstring("12213214"),Baren.psstring("32213212"),Baren.psstring("21313213"),Baren.psstring("41313211"),Baren.psstring("14131123"),Baren.psstring("34131121"),Baren.psstring("23231122"),Baren.psstring("12331123"),Baren.psstring("32331121"),Baren.psstring("21431122"),Baren.psstring("24122122"),Baren.psstring("13222123"),Baren.psstring("24131212"),Baren.psstring("13231213"),Baren.psstring("33231211"),Baren.psstring("11422123"),Baren.psstring("22331212"),Baren.psstring("11431213"),Baren.psstring("31431211"),Baren.psstring("14113123"),Baren.psstring("34113121"),Baren.psstring("14122213"),Baren.psstring("34122211"),Baren.psstring("12313123"),Baren.psstring("23222212"),Baren.psstring("12322213"),Baren.psstring("32322211"),Baren.psstring("21422212"),Baren.psstring("24113212"),Baren.psstring("13213213"),Baren.psstring("33213211"),Baren.psstring("22313212"),Baren.psstring("11413213"),Baren.psstring("31413211"),Baren.psstring("15131122"),Baren.psstring("24231121"),Baren.psstring("13331122"),Baren.psstring("22431121"),Baren.psstring("25122121"),Baren.psstring("14222122"),Baren.psstring("25131211"),Baren.psstring("14231212"),Baren.psstring("12422122"),Baren.psstring("23331211"),Baren.psstring("12431212"),Baren.psstring("15113122"),Baren.psstring("15122212"),Baren.psstring("13313122"),Baren.psstring("24222211"),Baren.psstring("13322212"),Baren.psstring("11513122"),Baren.psstring("22422211"),Baren.psstring("11522212"),Baren.psstring("25113211"),Baren.psstring("14213212"),Baren.psstring("23313211"),Baren.psstring("12413212"),Baren.psstring("21513211"),Baren.psstring("16131121"),Baren.psstring("14331121"),Baren.psstring("15222121"),Baren.psstring("15231211"),Baren.psstring("13422121"),Baren.psstring("13431211"),Baren.psstring("16113121"),Baren.psstring("16122211"),Baren.psstring("14313121"),Baren.psstring("14322211"),Baren.psstring("12513121"),Baren.psstring("12522211"),Baren.psstring("15213211"),Baren.psstring("13413211"),Baren.psstring("11613211"),Baren.psstring("11141125"),Baren.psstring("31141123"),Baren.psstring("51141121"),Baren.psstring("21132124"),Baren.psstring("41132122"),Baren.psstring("21141214"),Baren.psstring("41141212"),Baren.psstring("11123125"),Baren.psstring("31123123"),Baren.psstring("51123121"),Baren.psstring("11132215"),Baren.psstring("31132213"),Baren.psstring("51132211"),Baren.psstring("21114124"),Baren.psstring("41114122"),Baren.psstring("21123214"),Baren.psstring("41123212"),Baren.psstring("11114215"),Baren.psstring("31114213"),Baren.psstring("51114211"),Baren.psstring("12141124"),Baren.psstring("32141122"),Baren.psstring("21241123"),Baren.psstring("41241121"),Baren.psstring("22132123"),Baren.psstring("42132121"),Baren.psstring("11232124"),Baren.psstring("22141213"),Baren.psstring("42141211"),Baren.psstring("11241214"),Baren.psstring("31241212"),Baren.psstring("12123124"),Baren.psstring("32123122"),Baren.psstring("12132214"),Baren.psstring("32132212"),Baren.psstring("21232213"),Baren.psstring("41232211"),Baren.psstring("22114123"),Baren.psstring("42114121"),Baren.psstring("11214124"),Baren.psstring("22123213"),Baren.psstring("42123211"),Baren.psstring("11223214"),Baren.psstring("31223212"),Baren.psstring("12114214"),Baren.psstring("32114212"),Baren.psstring("21214213"),Baren.psstring("41214211"),Baren.psstring("13141123"),Baren.psstring("33141121"),Baren.psstring("22241122"),Baren.psstring("11341123"),Baren.psstring("31341121"),Baren.psstring("23132122"),Baren.psstring("12232123"),Baren.psstring("23141212"),Baren.psstring("12241213"),Baren.psstring("32241211"),Baren.psstring("21341212"),Baren.psstring("13123123"),Baren.psstring("33123121"),Baren.psstring("13132213"),Baren.psstring("33132211"),Baren.psstring("11323123"),Baren.psstring("22232212"),Baren.psstring("11332213"),Baren.psstring("31332211"),Baren.psstring("23114122"),Baren.psstring("12214123"),Baren.psstring("23123212"),Baren.psstring("12223213"),Baren.psstring("32223211"),Baren.psstring("21323212"),Baren.psstring("13114213"),Baren.psstring("33114211"),Baren.psstring("22214212"),Baren.psstring("11314213"),Baren.psstring("31314211"),Baren.psstring("14141122"),Baren.psstring("23241121"),Baren.psstring("12341122"),Baren.psstring("24132121"),Baren.psstring("13232122"),Baren.psstring("24141211"),Baren.psstring("13241212"),Baren.psstring("11432122"),Baren.psstring("22341211"),Baren.psstring("14123122"),Baren.psstring("14132212"),Baren.psstring("12323122"),Baren.psstring("23232211"),Baren.psstring("12332212"),Baren.psstring("21432211"),Baren.psstring("24114121"),Baren.psstring("13214122"),Baren.psstring("24123211"),Baren.psstring("13223212"),Baren.psstring("11414122"),Baren.psstring("22323211"),Baren.psstring("11423212"),Baren.psstring("14114212"),Baren.psstring("23214211"),Baren.psstring("12314212"),Baren.psstring("21414211"),Baren.psstring("15141121"),Baren.psstring("13341121"),Baren.psstring("14232121"),Baren.psstring("14241211"),Baren.psstring("12432121"),Baren.psstring("15123121"),Baren.psstring("15132211"),Baren.psstring("13323121"),Baren.psstring("13332211"),Baren.psstring("11523121"),Baren.psstring("14214121"),Baren.psstring("14223211"),Baren.psstring("12414121"),Baren.psstring("12423211"),Baren.psstring("15114211"),Baren.psstring("13314211"),Baren.psstring("11514211"),Baren.psstring("11151124"),Baren.psstring("31151122"),Baren.psstring("21142123"),Baren.psstring("41142121"),Baren.psstring("21151213"),Baren.psstring("41151211"),Baren.psstring("11133124"),Baren.psstring("31133122"),Baren.psstring("11142214"),Baren.psstring("31142212"),Baren.psstring("21124123"),Baren.psstring("41124121"),Baren.psstring("21133213"),Baren.psstring("41133211"),Baren.psstring("11115124"),Baren.psstring("31115122"),Baren.psstring("11124214"),Baren.psstring("31124212"),Baren.psstring("21115213"),Baren.psstring("41115211"),Baren.psstring("12151123"),Baren.psstring("32151121"),Baren.psstring("21251122"),Baren.psstring("22142122"),Baren.psstring("11242123"),Baren.psstring("22151212"),Baren.psstring("11251213"),Baren.psstring("31251211"),Baren.psstring("12133123"),Baren.psstring("32133121"),Baren.psstring("12142213"),Baren.psstring("32142211"),Baren.psstring("21242212"),Baren.psstring("22124122"),Baren.psstring("11224123"),Baren.psstring("22133212"),Baren.psstring("11233213"),Baren.psstring("31233211"),Baren.psstring("12115123"),Baren.psstring("32115121"),Baren.psstring("12124213"),Baren.psstring("32124211"),Baren.psstring("21224212"),Baren.psstring("22115212"),Baren.psstring("11215213"),Baren.psstring("31215211"),Baren.psstring("13151122"),Baren.psstring("22251121"),Baren.psstring("23142121"),Baren.psstring("12242122"),Baren.psstring("23151211"),Baren.psstring("12251212"),Baren.psstring("13133122"),Baren.psstring("13142212"),Baren.psstring("11333122"),Baren.psstring("22242211"),Baren.psstring("11342212"),Baren.psstring("23124121"),Baren.psstring("12224122"),Baren.psstring("23133211"),Baren.psstring("12233212"),Baren.psstring("21333211"),Baren.psstring("13115122"),Baren.psstring("13124212"),Baren.psstring("11315122"),Baren.psstring("22224211"),Baren.psstring("11324212"),Baren.psstring("23115211"),Baren.psstring("12215212"),Baren.psstring("21315211"),Baren.psstring("14151121"),Baren.psstring("13242121"),Baren.psstring("13251211"),Baren.psstring("14133121"),Baren.psstring("14142211"),Baren.psstring("12333121"),Baren.psstring("12342211"),Baren.psstring("13224121"),Baren.psstring("13233211"),Baren.psstring("11424121"),Baren.psstring("11433211"),Baren.psstring("14115121"),Baren.psstring("14124211"),Baren.psstring("12315121"),Baren.psstring("12324211"),Baren.psstring("13215211"),Baren.psstring("11415211"),Baren.psstring("11161123"),Baren.psstring("31161121"),Baren.psstring("21152122"),Baren.psstring("21161212"),Baren.psstring("11143123"),Baren.psstring("31143121"),Baren.psstring("11152213"),Baren.psstring("31152211"),Baren.psstring("21134122"),Baren.psstring("21143212"),Baren.psstring("11125123"),Baren.psstring("31125121"),Baren.psstring("11134213"),Baren.psstring("31134211"),Baren.psstring("21116122"),Baren.psstring("21125212"),Baren.psstring("12161122"),Baren.psstring("22152121"),Baren.psstring("11252122"),Baren.psstring("22161211"),Baren.psstring("12143122"),Baren.psstring("12152212"),Baren.psstring("21252211"),Baren.psstring("22134121"),Baren.psstring("11234122"),Baren.psstring("22143211"),Baren.psstring("11243212"),Baren.psstring("12125122"),Baren.psstring("12134212"),Baren.psstring("21234211"),Baren.psstring("22116121"),Baren.psstring("11216122"),Baren.psstring("22125211"),Baren.psstring("11225212"),Baren.psstring("13161121"),Baren.psstring("12252121"),Baren.psstring("13143121"),Baren.psstring("13152211"),Baren.psstring("11343121"),Baren.psstring("12234121"),Baren.psstring("12243211"),Baren.psstring("13125121"),Baren.psstring("13134211"),Baren.psstring("11325121"),Baren.psstring("11334211"),Baren.psstring("12216121"),Baren.psstring("12225211"),Baren.psstring("31111225"),Baren.psstring("51111223"),Baren.psstring("21111316"),Baren.psstring("41111314"),Baren.psstring("61111312"),Baren.psstring("31211134"),Baren.psstring("51211132"),Baren.psstring("12111226"),Baren.psstring("32111224"),Baren.psstring("52111222"),Baren.psstring("21211225"),Baren.psstring("41211223"),Baren.psstring("61211221"),Baren.psstring("22111315"),Baren.psstring("42111313"),Baren.psstring("11211316"),Baren.psstring("31211314"),Baren.psstring("51211312"),Baren.psstring("12211135"),Baren.psstring("32211133"),Baren.psstring("52211131"),Baren.psstring("21311134"),Baren.psstring("41311132"),Baren.psstring("13111225"),Baren.psstring("33111223"),Baren.psstring("22211224"),Baren.psstring("42211222"),Baren.psstring("11311225"),Baren.psstring("31311223"),Baren.psstring("51311221"),Baren.psstring("23111314"),Baren.psstring("43111312"),Baren.psstring("12211315"),Baren.psstring("32211313"),Baren.psstring("52211311"),Baren.psstring("21311314"),Baren.psstring("41311312"),Baren.psstring("13211134"),Baren.psstring("33211132"),Baren.psstring("22311133"),Baren.psstring("42311131"),Baren.psstring("11411134"),Baren.psstring("31411132"),Baren.psstring("14111224"),Baren.psstring("34111222"),Baren.psstring("23211223"),Baren.psstring("43211221"),Baren.psstring("12311224"),Baren.psstring("32311222"),Baren.psstring("21411223"),Baren.psstring("41411221"),Baren.psstring("24111313"),Baren.psstring("13211314"),Baren.psstring("33211312"),Baren.psstring("22311313"),Baren.psstring("42311311"),Baren.psstring("11411314"),Baren.psstring("31411312"),Baren.psstring("14211133"),Baren.psstring("34211131"),Baren.psstring("23311132"),Baren.psstring("12411133"),Baren.psstring("32411131"),Baren.psstring("21511132"),Baren.psstring("15111223"),Baren.psstring("24211222"),Baren.psstring("13311223"),Baren.psstring("33311221"),Baren.psstring("22411222"),Baren.psstring("11511223"),Baren.psstring("31511221"),Baren.psstring("25111312"),Baren.psstring("14211313"),Baren.psstring("34211311"),Baren.psstring("23311312"),Baren.psstring("12411313"),Baren.psstring("32411311"),Baren.psstring("21511312"),Baren.psstring("15211132"),Baren.psstring("24311131"),Baren.psstring("13411132"),Baren.psstring("22511131"),Baren.psstring("11611132"),Baren.psstring("16111222"),Baren.psstring("25211221"),Baren.psstring("14311222"),Baren.psstring("23411221"),Baren.psstring("12511222"),Baren.psstring("21611221"),Baren.psstring("15211312"),Baren.psstring("24311311"),Baren.psstring("13411312"),Baren.psstring("22511311"),Baren.psstring("11611312"),Baren.psstring("21121135"),Baren.psstring("41121133"),Baren.psstring("61121131"),Baren.psstring("11112136"),Baren.psstring("31112134"),Baren.psstring("51112132"),Baren.psstring("11121226"),Baren.psstring("31121224"),Baren.psstring("51121222"),Baren.psstring("21112225"),Baren.psstring("41112223"),Baren.psstring("61112221"),Baren.psstring("21121315"),Baren.psstring("41121313"),Baren.psstring("61121311"),Baren.psstring("11112316"),Baren.psstring("31112314"),Baren.psstring("51112312"),Baren.psstring("22121134"),Baren.psstring("42121132"),Baren.psstring("11221135"),Baren.psstring("31221133"),Baren.psstring("51221131"),Baren.psstring("12112135"),Baren.psstring("32112133"),Baren.psstring("52112131"),Baren.psstring("12121225"),Baren.psstring("32121223"),Baren.psstring("52121221"),Baren.psstring("21221224"),Baren.psstring("41221222"),Baren.psstring("22112224"),Baren.psstring("42112222"),Baren.psstring("11212225"),Baren.psstring("22121314"),Baren.psstring("42121312"),Baren.psstring("11221315"),Baren.psstring("31221313"),Baren.psstring("51221311"),Baren.psstring("12112315"),Baren.psstring("32112313"),Baren.psstring("52112311"),Baren.psstring("21212314"),Baren.psstring("41212312"),Baren.psstring("23121133"),Baren.psstring("43121131"),Baren.psstring("12221134"),Baren.psstring("32221132"),Baren.psstring("21321133"),Baren.psstring("41321131"),Baren.psstring("13112134"),Baren.psstring("33112132"),Baren.psstring("13121224"),Baren.psstring("33121222"),Baren.psstring("11312134"),Baren.psstring("22221223"),Baren.psstring("42221221"),Baren.psstring("11321224"),Baren.psstring("31321222"),Baren.psstring("23112223"),Baren.psstring("43112221"),Baren.psstring("12212224"),Baren.psstring("23121313"),Baren.psstring("43121311"),Baren.psstring("12221314"),Baren.psstring("32221312"),Baren.psstring("21321313"),Baren.psstring("41321311"),Baren.psstring("13112314"),Baren.psstring("33112312"),Baren.psstring("22212313"),Baren.psstring("42212311"),Baren.psstring("11312314"),Baren.psstring("31312312"),Baren.psstring("24121132"),Baren.psstring("13221133"),Baren.psstring("33221131"),Baren.psstring("22321132"),Baren.psstring("11421133"),Baren.psstring("31421131"),Baren.psstring("14112133"),Baren.psstring("34112131"),Baren.psstring("14121223"),Baren.psstring("34121221"),Baren.psstring("12312133"),Baren.psstring("23221222"),Baren.psstring("12321223"),Baren.psstring("32321221"),Baren.psstring("21421222"),Baren.psstring("24112222"),Baren.psstring("13212223"),Baren.psstring("24121312"),Baren.psstring("13221313"),Baren.psstring("33221311"),Baren.psstring("11412223"),Baren.psstring("22321312"),Baren.psstring("11421313"),Baren.psstring("31421311"),Baren.psstring("14112313"),Baren.psstring("34112311"),Baren.psstring("23212312"),Baren.psstring("12312313"),Baren.psstring("32312311"),Baren.psstring("21412312"),Baren.psstring("25121131"),Baren.psstring("14221132"),Baren.psstring("23321131"),Baren.psstring("12421132"),Baren.psstring("21521131"),Baren.psstring("15112132"),Baren.psstring("15121222"),Baren.psstring("13312132"),Baren.psstring("24221221"),Baren.psstring("13321222"),Baren.psstring("11512132"),Baren.psstring("22421221"),Baren.psstring("11521222"),Baren.psstring("25112221"),Baren.psstring("14212222"),Baren.psstring("25121311"),Baren.psstring("14221312"),Baren.psstring("12412222"),Baren.psstring("23321311"),Baren.psstring("12421312"),Baren.psstring("21521311"),Baren.psstring("15112312"),Baren.psstring("24212311"),Baren.psstring("13312312"),Baren.psstring("22412311"),Baren.psstring("11512312"),Baren.psstring("15221131"),Baren.psstring("13421131"),Baren.psstring("16112131"),Baren.psstring("16121221"),Baren.psstring("14312131"),Baren.psstring("14321221"),Baren.psstring("12512131"),Baren.psstring("12521221"),Baren.psstring("15212221"),Baren.psstring("15221311"),Baren.psstring("13412221"),Baren.psstring("13421311"),Baren.psstring("11612221"),Baren.psstring("16112311"),Baren.psstring("14312311"),Baren.psstring("12512311"),Baren.psstring("21131134"),Baren.psstring("41131132"),Baren.psstring("11122135"),Baren.psstring("31122133"),Baren.psstring("51122131"),Baren.psstring("11131225"),Baren.psstring("31131223"),Baren.psstring("51131221"),Baren.psstring("21113134"),Baren.psstring("41113132"),Baren.psstring("21122224"),Baren.psstring("41122222"),Baren.psstring("21131314"),Baren.psstring("41131312"),Baren.psstring("11113225"),Baren.psstring("31113223"),Baren.psstring("51113221"),Baren.psstring("11122315"),Baren.psstring("31122313"),Baren.psstring("51122311"),Baren.psstring("21113314"),Baren.psstring("41113312"),Baren.psstring("22131133"),Baren.psstring("42131131"),Baren.psstring("11231134"),Baren.psstring("31231132"),Baren.psstring("12122134"),Baren.psstring("32122132"),Baren.psstring("12131224"),Baren.psstring("32131222"),Baren.psstring("21231223"),Baren.psstring("41231221"),Baren.psstring("22113133"),Baren.psstring("42113131"),Baren.psstring("11213134"),Baren.psstring("22122223"),Baren.psstring("42122221"),Baren.psstring("11222224"),Baren.psstring("22131313"),Baren.psstring("42131311"),Baren.psstring("11231314"),Baren.psstring("31231312"),Baren.psstring("12113224"),Baren.psstring("32113222"),Baren.psstring("12122314"),Baren.psstring("32122312"),Baren.psstring("21222313"),Baren.psstring("41222311"),Baren.psstring("22113313"),Baren.psstring("42113311"),Baren.psstring("11213314"),Baren.psstring("31213312"),Baren.psstring("23131132"),Baren.psstring("12231133"),Baren.psstring("32231131"),Baren.psstring("21331132"),Baren.psstring("13122133"),Baren.psstring("33122131"),Baren.psstring("13131223"),Baren.psstring("33131221"),Baren.psstring("11322133"),Baren.psstring("22231222"),Baren.psstring("11331223"),Baren.psstring("31331221"),Baren.psstring("23113132"),Baren.psstring("12213133"),Baren.psstring("23122222"),Baren.psstring("12222223"),Baren.psstring("23131312"),Baren.psstring("12231313"),Baren.psstring("32231311"),Baren.psstring("21331312"),Baren.psstring("13113223"),Baren.psstring("33113221"),Baren.psstring("13122313"),Baren.psstring("33122311"),Baren.psstring("11313223"),Baren.psstring("22222312"),Baren.psstring("11322313"),Baren.psstring("31322311"),Baren.psstring("23113312"),Baren.psstring("12213313"),Baren.psstring("32213311"),Baren.psstring("21313312"),Baren.psstring("24131131"),Baren.psstring("13231132"),Baren.psstring("22331131"),Baren.psstring("11431132"),Baren.psstring("14122132"),Baren.psstring("14131222"),Baren.psstring("12322132"),Baren.psstring("23231221"),Baren.psstring("12331222"),Baren.psstring("21431221"),Baren.psstring("24113131"),Baren.psstring("13213132"),Baren.psstring("24122221"),Baren.psstring("13222222"),Baren.psstring("24131311"),Baren.psstring("11413132"),Baren.psstring("13231312"),Baren.psstring("11422222"),Baren.psstring("22331311"),Baren.psstring("11431312"),Baren.psstring("14113222"),Baren.psstring("14122312"),Baren.psstring("12313222"),Baren.psstring("23222311"),Baren.psstring("12322312"),Baren.psstring("21422311"),Baren.psstring("24113311"),Baren.psstring("13213312"),Baren.psstring("22313311"),Baren.psstring("11413312"),Baren.psstring("14231131"),Baren.psstring("12431131"),Baren.psstring("15122131"),Baren.psstring("15131221"),Baren.psstring("13322131"),Baren.psstring("13331221"),Baren.psstring("11522131"),Baren.psstring("14213131"),Baren.psstring("14222221"),Baren.psstring("12413131"),Baren.psstring("14231311"),Baren.psstring("12422221"),Baren.psstring("12431311"),Baren.psstring("15113221"),Baren.psstring("15122311"),Baren.psstring("13313221"),Baren.psstring("13322311"),Baren.psstring("11513221"),Baren.psstring("11522311"),Baren.psstring("14213311"),Baren.psstring("12413311"),Baren.psstring("21141133"),Baren.psstring("41141131"),Baren.psstring("11132134"),Baren.psstring("31132132"),Baren.psstring("11141224"),Baren.psstring("31141222"),Baren.psstring("21123133"),Baren.psstring("41123131"),Baren.psstring("21132223"),Baren.psstring("41132221"),Baren.psstring("21141313"),Baren.psstring("41141311"),Baren.psstring("11114134"),Baren.psstring("31114132"),Baren.psstring("11123224"),Baren.psstring("31123222"),Baren.psstring("11132314"),Baren.psstring("31132312"),Baren.psstring("21114223"),Baren.psstring("41114221"),Baren.psstring("21123313"),Baren.psstring("41123311"),Baren.psstring("11114314"),Baren.psstring("31114312"),Baren.psstring("22141132"),Baren.psstring("11241133"),Baren.psstring("31241131"),Baren.psstring("12132133"),Baren.psstring("32132131"),Baren.psstring("12141223"),Baren.psstring("32141221"),Baren.psstring("21241222"),Baren.psstring("22123132"),Baren.psstring("11223133"),Baren.psstring("22132222"),Baren.psstring("11232223"),Baren.psstring("22141312"),Baren.psstring("11241313"),Baren.psstring("31241311"),Baren.psstring("12114133"),Baren.psstring("32114131"),Baren.psstring("12123223"),Baren.psstring("32123221"),Baren.psstring("12132313"),Baren.psstring("32132311"),Baren.psstring("21232312"),Baren.psstring("22114222"),Baren.psstring("11214223"),Baren.psstring("22123312"),Baren.psstring("11223313"),Baren.psstring("31223311"),Baren.psstring("12114313"),Baren.psstring("32114311"),Baren.psstring("21214312"),Baren.psstring("23141131"),Baren.psstring("12241132"),Baren.psstring("21341131"),Baren.psstring("13132132"),Baren.psstring("13141222"),Baren.psstring("11332132"),Baren.psstring("22241221"),Baren.psstring("11341222"),Baren.psstring("23123131"),Baren.psstring("12223132"),Baren.psstring("23132221"),Baren.psstring("12232222"),Baren.psstring("23141311"),Baren.psstring("12241312"),Baren.psstring("21341311"),Baren.psstring("13114132"),Baren.psstring("13123222"),Baren.psstring("11314132"),Baren.psstring("13132312"),Baren.psstring("11323222"),Baren.psstring("22232311"),Baren.psstring("11332312"),Baren.psstring("23114221"),Baren.psstring("12214222"),Baren.psstring("23123311"),Baren.psstring("12223312"),Baren.psstring("21323311"),Baren.psstring("13114312"),Baren.psstring("22214311"),Baren.psstring("11314312"),Baren.psstring("13241131"),Baren.psstring("14132131"),Baren.psstring("14141221"),Baren.psstring("12332131"),Baren.psstring("12341221"),Baren.psstring("13223131"),Baren.psstring("13232221"),Baren.psstring("11423131"),Baren.psstring("13241311"),Baren.psstring("11432221"),Baren.psstring("14114131"),Baren.psstring("14123221"),Baren.psstring("12314131"),Baren.psstring("14132311"),Baren.psstring("12323221"),Baren.psstring("12332311"),Baren.psstring("13214221"),Baren.psstring("13223311"),Baren.psstring("11414221"),Baren.psstring("11423311"),Baren.psstring("14114311"),Baren.psstring("12314311"),Baren.psstring("21151132"),Baren.psstring("11142133"),Baren.psstring("31142131"),Baren.psstring("11151223"),Baren.psstring("31151221"),Baren.psstring("21133132"),Baren.psstring("21142222"),Baren.psstring("21151312"),Baren.psstring("11124133"),Baren.psstring("31124131"),Baren.psstring("11133223"),Baren.psstring("31133221"),Baren.psstring("11142313"),Baren.psstring("31142311"),Baren.psstring("21115132"),Baren.psstring("21124222"),Baren.psstring("21133312"),Baren.psstring("11115223"),Baren.psstring("31115221"),Baren.psstring("11124313"),Baren.psstring("31124311"),Baren.psstring("22151131"),Baren.psstring("11251132"),Baren.psstring("12142132"),Baren.psstring("12151222"),Baren.psstring("21251221"),Baren.psstring("22133131"),Baren.psstring("11233132"),Baren.psstring("22142221"),Baren.psstring("11242222"),Baren.psstring("22151311"),Baren.psstring("11251312"),Baren.psstring("12124132"),Baren.psstring("12133222"),Baren.psstring("12142312"),Baren.psstring("21242311"),Baren.psstring("22115131"),Baren.psstring("11215132"),Baren.psstring("22124221"),Baren.psstring("11224222"),Baren.psstring("22133311"),Baren.psstring("11233312"),Baren.psstring("12115222"),Baren.psstring("12124312"),Baren.psstring("21224311"),Baren.psstring("12251131"),Baren.psstring("13142131"),Baren.psstring("13151221"),Baren.psstring("11342131"),Baren.psstring("12233131"),Baren.psstring("12242221"),Baren.psstring("12251311"),Baren.psstring("13124131"),Baren.psstring("13133221"),Baren.psstring("11324131"),Baren.psstring("13142311"),Baren.psstring("11333221"),Baren.psstring("11342311"),Baren.psstring("12215131"),Baren.psstring("12224221"),Baren.psstring("12233311"),Baren.psstring("13115221"),Baren.psstring("13124311"),Baren.psstring("11315221"),Baren.psstring("11324311"),Baren.psstring("21161131"),Baren.psstring("11152132"),Baren.psstring("11161222"),Baren.psstring("21143131"),Baren.psstring("21152221"),Baren.psstring("21161311"),Baren.psstring("11134132"),Baren.psstring("11143222"),Baren.psstring("11152312"),Baren.psstring("21125131"),Baren.psstring("21134221"),Baren.psstring("21143311"),Baren.psstring("11116132"),Baren.psstring("11125222"),Baren.psstring("11134312"),Baren.psstring("12152131"),Baren.psstring("12161221"),Baren.psstring("11243131"),Baren.psstring("11252221"),Baren.psstring("12134131"),Baren.psstring("12143221"),Baren.psstring("12152311"),Baren.psstring("11225131"),Baren.psstring("11234221"),Baren.psstring("11243311"),Baren.psstring("12116131"),Baren.psstring("12125221"),Baren.psstring("12134311"),Baren.psstring("21111235"),Baren.psstring("41111233"),Baren.psstring("61111231"),Baren.psstring("11111326"),Baren.psstring("31111324"),Baren.psstring("51111322"),Baren.psstring("21111415"),Baren.psstring("41111413"),Baren.psstring("61111411"),Baren.psstring("21211144"),Baren.psstring("41211142"),Baren.psstring("22111234"),Baren.psstring("42111232"),Baren.psstring("11211235"),Baren.psstring("31211233"),Baren.psstring("51211231"),Baren.psstring("12111325"),Baren.psstring("32111323"),Baren.psstring("52111321"),Baren.psstring("21211324"),Baren.psstring("41211322"),Baren.psstring("22111414"),Baren.psstring("42111412"),Baren.psstring("11211415"),Baren.psstring("31211413"),Baren.psstring("51211411"),Baren.psstring("22211143"),Baren.psstring("42211141"),Baren.psstring("11311144"),Baren.psstring("31311142"),Baren.psstring("23111233"),Baren.psstring("43111231"),Baren.psstring("12211234"),Baren.psstring("32211232"),Baren.psstring("21311233"),Baren.psstring("41311231"),Baren.psstring("13111324"),Baren.psstring("33111322"),Baren.psstring("22211323"),Baren.psstring("42211321"),Baren.psstring("11311324"),Baren.psstring("31311322"),Baren.psstring("23111413"),Baren.psstring("43111411"),Baren.psstring("12211414"),Baren.psstring("32211412"),Baren.psstring("21311413"),Baren.psstring("41311411"),Baren.psstring("23211142"),Baren.psstring("12311143"),Baren.psstring("32311141"),Baren.psstring("21411142"),Baren.psstring("24111232"),Baren.psstring("13211233"),Baren.psstring("33211231"),Baren.psstring("22311232"),Baren.psstring("11411233"),Baren.psstring("31411231"),Baren.psstring("14111323"),Baren.psstring("34111321"),Baren.psstring("23211322"),Baren.psstring("12311323"),Baren.psstring("32311321"),Baren.psstring("21411322"),Baren.psstring("24111412"),Baren.psstring("13211413"),Baren.psstring("33211411"),Baren.psstring("22311412"),Baren.psstring("11411413"),Baren.psstring("31411411"),Baren.psstring("24211141"),Baren.psstring("13311142"),Baren.psstring("22411141"),Baren.psstring("11511142"),Baren.psstring("25111231"),Baren.psstring("14211232"),Baren.psstring("23311231"),Baren.psstring("12411232"),Baren.psstring("21511231"),Baren.psstring("15111322"),Baren.psstring("24211321"),Baren.psstring("13311322"),Baren.psstring("22411321"),Baren.psstring("11511322"),Baren.psstring("25111411"),Baren.psstring("14211412"),Baren.psstring("23311411"),Baren.psstring("12411412"),Baren.psstring("21511411"),Baren.psstring("14311141"),Baren.psstring("12511141"),Baren.psstring("15211231"),Baren.psstring("13411231"),Baren.psstring("11611231"),Baren.psstring("16111321"),Baren.psstring("14311321"),Baren.psstring("12511321"),Baren.psstring("15211411"),Baren.psstring("13411411"),Baren.psstring("11611411"),Baren.psstring("31121143"),Baren.psstring("51121141"),Baren.psstring("21112144"),Baren.psstring("41112142"),Baren.psstring("21121234"),Baren.psstring("41121232"),Baren.psstring("11112235"),Baren.psstring("31112233"),Baren.psstring("51112231"),Baren.psstring("11121325"),Baren.psstring("31121323"),Baren.psstring("51121321"),Baren.psstring("21112324"),Baren.psstring("41112322"),Baren.psstring("21121414"),Baren.psstring("41121412"),Baren.psstring("11112415"),Baren.psstring("31112413"),Baren.psstring("51112411"),Baren.psstring("12121144"),Baren.psstring("32121142"),Baren.psstring("21221143"),Baren.psstring("41221141"),Baren.psstring("22112143"),Baren.psstring("42112141"),Baren.psstring("11212144"),Baren.psstring("22121233"),Baren.psstring("42121231"),Baren.psstring("11221234"),Baren.psstring("31221232"),Baren.psstring("12112234"),Baren.psstring("32112232"),Baren.psstring("12121324"),Baren.psstring("32121322"),Baren.psstring("21221323"),Baren.psstring("41221321"),Baren.psstring("22112323"),Baren.psstring("42112321"),Baren.psstring("11212324"),Baren.psstring("22121413"),Baren.psstring("42121411"),Baren.psstring("11221414"),Baren.psstring("31221412"),Baren.psstring("12112414"),Baren.psstring("32112412"),Baren.psstring("21212413"),Baren.psstring("41212411"),Baren.psstring("13121143"),Baren.psstring("33121141"),Baren.psstring("22221142"),Baren.psstring("11321143"),Baren.psstring("31321141"),Baren.psstring("23112142"),Baren.psstring("12212143"),Baren.psstring("23121232"),Baren.psstring("12221233"),Baren.psstring("32221231"),Baren.psstring("21321232"),Baren.psstring("13112233"),Baren.psstring("33112231"),Baren.psstring("13121323"),Baren.psstring("33121321"),Baren.psstring("11312233"),Baren.psstring("22221322"),Baren.psstring("11321323"),Baren.psstring("31321321"),Baren.psstring("23112322"),Baren.psstring("12212323"),Baren.psstring("23121412"),Baren.psstring("12221413"),Baren.psstring("32221411"),Baren.psstring("21321412"),Baren.psstring("13112413"),Baren.psstring("33112411"),Baren.psstring("22212412"),Baren.psstring("11312413"),Baren.psstring("31312411"),Baren.psstring("14121142"),Baren.psstring("23221141"),Baren.psstring("12321142"),Baren.psstring("21421141"),Baren.psstring("24112141"),Baren.psstring("13212142"),Baren.psstring("24121231"),Baren.psstring("13221232"),Baren.psstring("11412142"),Baren.psstring("22321231"),Baren.psstring("11421232"),Baren.psstring("14112232"),Baren.psstring("14121322"),Baren.psstring("12312232"),Baren.psstring("23221321"),Baren.psstring("12321322"),Baren.psstring("21421321"),Baren.psstring("24112321"),Baren.psstring("13212322"),Baren.psstring("24121411"),Baren.psstring("13221412"),Baren.psstring("11412322"),Baren.psstring("22321411"),Baren.psstring("11421412"),Baren.psstring("14112412"),Baren.psstring("23212411"),Baren.psstring("12312412"),Baren.psstring("21412411"),Baren.psstring("15121141"),Baren.psstring("13321141"),Baren.psstring("11521141"),Baren.psstring("14212141"),Baren.psstring("14221231"),Baren.psstring("12412141"),Baren.psstring("12421231"),Baren.psstring("15112231"),Baren.psstring("15121321"),Baren.psstring("13312231"),Baren.psstring("13321321"),Baren.psstring("11512231"),Baren.psstring("11521321"),Baren.psstring("14212321"),Baren.psstring("14221411"),Baren.psstring("12412321"),Baren.psstring("12421411"),Baren.psstring("15112411"),Baren.psstring("13312411"),Baren.psstring("11512411"),Baren.psstring("11131144"),Baren.psstring("31131142"),Baren.psstring("21122143"),Baren.psstring("41122141"),Baren.psstring("21131233"),Baren.psstring("41131231"),Baren.psstring("11113144"),Baren.psstring("31113142"),Baren.psstring("11122234"),Baren.psstring("31122232"),Baren.psstring("11131324"),Baren.psstring("31131322"),Baren.psstring("21113233"),Baren.psstring("41113231"),Baren.psstring("21122323"),Baren.psstring("41122321"),Baren.psstring("21131413"),Baren.psstring("41131411"),Baren.psstring("11113324"),Baren.psstring("31113322"),Baren.psstring("11122414"),Baren.psstring("31122412"),Baren.psstring("21113413"),Baren.psstring("41113411"),Baren.psstring("12131143"),Baren.psstring("32131141"),Baren.psstring("21231142"),Baren.psstring("22122142"),Baren.psstring("11222143"),Baren.psstring("22131232"),Baren.psstring("11231233"),Baren.psstring("31231231"),Baren.psstring("12113143"),Baren.psstring("32113141"),Baren.psstring("12122233"),Baren.psstring("32122231"),Baren.psstring("12131323"),Baren.psstring("32131321"),Baren.psstring("21231322"),Baren.psstring("22113232"),Baren.psstring("11213233"),Baren.psstring("22122322"),Baren.psstring("11222323"),Baren.psstring("22131412"),Baren.psstring("11231413"),Baren.psstring("31231411"),Baren.psstring("12113323"),Baren.psstring("32113321"),Baren.psstring("12122413"),Baren.psstring("32122411"),Baren.psstring("21222412"),Baren.psstring("22113412"),Baren.psstring("11213413"),Baren.psstring("31213411"),Baren.psstring("13131142"),Baren.psstring("22231141"),Baren.psstring("11331142"),Baren.psstring("23122141"),Baren.psstring("12222142"),Baren.psstring("23131231"),Baren.psstring("12231232"),Baren.psstring("21331231"),Baren.psstring("13113142"),Baren.psstring("13122232"),Baren.psstring("11313142"),Baren.psstring("13131322"),Baren.psstring("11322232"),Baren.psstring("22231321"),Baren.psstring("11331322"),Baren.psstring("23113231"),Baren.psstring("12213232"),Baren.psstring("23122321"),Baren.psstring("12222322"),Baren.psstring("23131411"),Baren.psstring("12231412"),Baren.psstring("21331411"),Baren.psstring("13113322"),Baren.psstring("13122412"),Baren.psstring("11313322"),Baren.psstring("22222411"),Baren.psstring("11322412"),Baren.psstring("23113411"),Baren.psstring("12213412"),Baren.psstring("21313411"),Baren.psstring("14131141"),Baren.psstring("12331141"),Baren.psstring("13222141"),Baren.psstring("13231231"),Baren.psstring("11422141"),Baren.psstring("11431231"),Baren.psstring("14113141"),Baren.psstring("14122231"),Baren.psstring("12313141"),Baren.psstring("14131321"),Baren.psstring("12322231"),Baren.psstring("12331321"),Baren.psstring("13213231"),Baren.psstring("13222321"),Baren.psstring("11413231"),Baren.psstring("13231411"),Baren.psstring("11422321"),Baren.psstring("11431411"),Baren.psstring("14113321"),Baren.psstring("14122411"),Baren.psstring("12313321"),Baren.psstring("12322411"),Baren.psstring("13213411"),Baren.psstring("11413411"),Baren.psstring("11141143"),Baren.psstring("31141141"),Baren.psstring("21132142"),Baren.psstring("21141232"),Baren.psstring("11123143"),Baren.psstring("31123141"),Baren.psstring("11132233"),Baren.psstring("31132231"),Baren.psstring("11141323"),Baren.psstring("31141321"),Baren.psstring("21114142"),Baren.psstring("21123232"),Baren.psstring("21132322"),Baren.psstring("21141412"),Baren.psstring("11114233"),Baren.psstring("31114231"),Baren.psstring("11123323"),Baren.psstring("31123321"),Baren.psstring("11132413"),Baren.psstring("31132411"),Baren.psstring("21114322"),Baren.psstring("21123412"),Baren.psstring("12141142"),Baren.psstring("21241141"),Baren.psstring("22132141"),Baren.psstring("11232142"),Baren.psstring("22141231"),Baren.psstring("11241232"),Baren.psstring("12123142"),Baren.psstring("12132232"),Baren.psstring("12141322"),Baren.psstring("21241321"),Baren.psstring("22114141"),Baren.psstring("11214142"),Baren.psstring("22123231"),Baren.psstring("11223232"),Baren.psstring("22132321"),Baren.psstring("11232322"),Baren.psstring("22141411"),Baren.psstring("11241412"),Baren.psstring("12114232"),Baren.psstring("12123322"),Baren.psstring("12132412"),Baren.psstring("21232411"),Baren.psstring("22114321"),Baren.psstring("11214322"),Baren.psstring("22123411"),Baren.psstring("11223412"),Baren.psstring("13141141"),Baren.psstring("11341141"),Baren.psstring("12232141"),Baren.psstring("12241231"),Baren.psstring("13123141"),Baren.psstring("13132231"),Baren.psstring("11323141"),Baren.psstring("13141321"),Baren.psstring("11332231"),Baren.psstring("11341321"),Baren.psstring("12214141"),Baren.psstring("12223231"),Baren.psstring("12232321"),Baren.psstring("12241411"),Baren.psstring("13114231"),Baren.psstring("13123321"),Baren.psstring("11314231"),Baren.psstring("13132411"),Baren.psstring("11323321"),Baren.psstring("11332411"),Baren.psstring("12214321"),Baren.psstring("12223411"),Baren.psstring("11151142"),Baren.psstring("21142141"),Baren.psstring("21151231"),Baren.psstring("11133142"),Baren.psstring("11142232"),Baren.psstring("11151322"),Baren.psstring("21124141"),Baren.psstring("21133231"),Baren.psstring("21142321"),Baren.psstring("21151411"),Baren.psstring("11115142"),Baren.psstring("11124232"),Baren.psstring("11133322"),Baren.psstring("11142412"),Baren.psstring("21115231"),Baren.psstring("21124321"),Baren.psstring("21133411"),Baren.psstring("12151141"),Baren.psstring("11242141"),Baren.psstring("11251231"),Baren.psstring("12133141"),Baren.psstring("12142231"),Baren.psstring("12151321"),Baren.psstring("11224141"),Baren.psstring("11233231"),Baren.psstring("11242321"),Baren.psstring("11251411"),Baren.psstring("12115141"),Baren.psstring("12124231"),Baren.psstring("12133321"),Baren.psstring("12142411"),Baren.psstring("11215231"),Baren.psstring("11224321"),Baren.psstring("11233411"),Baren.psstring("11161141"),Baren.psstring("11143141"),Baren.psstring("11152231"),Baren.psstring("11161321"),Baren.psstring("11125141"),Baren.psstring("11134231"),Baren.psstring("11143321"),Baren.psstring("11152411"),Baren.psstring("11111245"),Baren.psstring("31111243"),Baren.psstring("51111241"),Baren.psstring("21111334"),Baren.psstring("41111332"),Baren.psstring("11111425"),Baren.psstring("31111423"),Baren.psstring("51111421"),Baren.psstring("21111514"),Baren.psstring("41111512"),Baren.psstring("31211152"),Baren.psstring("12111244"),Baren.psstring("32111242"),Baren.psstring("21211243"),Baren.psstring("41211241"),Baren.psstring("22111333"),Baren.psstring("42111331"),Baren.psstring("11211334"),Baren.psstring("31211332"),Baren.psstring("12111424"),Baren.psstring("32111422"),Baren.psstring("21211423"),Baren.psstring("41211421"),Baren.psstring("22111513"),Baren.psstring("42111511"),Baren.psstring("11211514"),Baren.psstring("31211512"),Baren.psstring("12211153"),Baren.psstring("32211151"),Baren.psstring("21311152"),Baren.psstring("13111243"),Baren.psstring("33111241"),Baren.psstring("22211242"),Baren.psstring("11311243"),Baren.psstring("31311241"),Baren.psstring("23111332"),Baren.psstring("12211333"),Baren.psstring("32211331"),Baren.psstring("21311332"),Baren.psstring("13111423"),Baren.psstring("33111421"),Baren.psstring("22211422"),Baren.psstring("11311423"),Baren.psstring("31311421"),Baren.psstring("23111512"),Baren.psstring("12211513"),Baren.psstring("32211511"),Baren.psstring("21311512"),Baren.psstring("13211152"),Baren.psstring("22311151"),Baren.psstring("11411152"),Baren.psstring("14111242"),Baren.psstring("23211241"),Baren.psstring("12311242"),Baren.psstring("21411241"),Baren.psstring("24111331"),Baren.psstring("13211332"),Baren.psstring("22311331"),Baren.psstring("11411332"),Baren.psstring("14111422"),Baren.psstring("23211421"),Baren.psstring("12311422"),Baren.psstring("21411421"),Baren.psstring("24111511"),Baren.psstring("13211512"),Baren.psstring("22311511"),Baren.psstring("11411512"),Baren.psstring("14211151"),Baren.psstring("12411151"),Baren.psstring("15111241"),Baren.psstring("13311241"),Baren.psstring("11511241"),Baren.psstring("14211331"),Baren.psstring("12411331"),Baren.psstring("15111421"),Baren.psstring("13311421"),Baren.psstring("11511421"),Baren.psstring("14211511"),Baren.psstring("12411511"),Baren.psstring("21121153"),Baren.psstring("41121151"),Baren.psstring("11112154"),Baren.psstring("31112152"),Baren.psstring("11121244"),Baren.psstring("31121242"),Baren.psstring("21112243"),Baren.psstring("41112241"),Baren.psstring("21121333"),Baren.psstring("41121331"),Baren.psstring("11112334"),Baren.psstring("31112332"),Baren.psstring("11121424"),Baren.psstring("31121422"),Baren.psstring("21112423"),Baren.psstring("41112421"),Baren.psstring("21121513"),Baren.psstring("41121511"),Baren.psstring("11112514"),Baren.psstring("31112512"),Baren.psstring("22121152"),Baren.psstring("11221153"),Baren.psstring("31221151"),Baren.psstring("12112153"),Baren.psstring("32112151"),Baren.psstring("12121243"),Baren.psstring("32121241"),Baren.psstring("21221242"),Baren.psstring("22112242"),Baren.psstring("11212243"),Baren.psstring("22121332"),Baren.psstring("11221333"),Baren.psstring("31221331"),Baren.psstring("12112333"),Baren.psstring("32112331"),Baren.psstring("12121423"),Baren.psstring("32121421"),Baren.psstring("21221422"),Baren.psstring("22112422"),Baren.psstring("11212423"),Baren.psstring("22121512"),Baren.psstring("11221513"),Baren.psstring("31221511"),Baren.psstring("12112513"),Baren.psstring("32112511"),Baren.psstring("21212512"),Baren.psstring("23121151"),Baren.psstring("12221152"),Baren.psstring("21321151"),Baren.psstring("13112152"),Baren.psstring("13121242"),Baren.psstring("11312152"),Baren.psstring("22221241"),Baren.psstring("11321242"),Baren.psstring("23112241"),Baren.psstring("12212242"),Baren.psstring("23121331"),Baren.psstring("12221332"),Baren.psstring("21321331"),Baren.psstring("13112332"),Baren.psstring("13121422"),Baren.psstring("11312332"),Baren.psstring("22221421"),Baren.psstring("11321422"),Baren.psstring("23112421"),Baren.psstring("12212422"),Baren.psstring("23121511"),Baren.psstring("12221512"),Baren.psstring("21321511"),Baren.psstring("13112512"),Baren.psstring("22212511"),Baren.psstring("11312512"),Baren.psstring("13221151"),Baren.psstring("11421151"),Baren.psstring("14112151"),Baren.psstring("14121241"),Baren.psstring("12312151"),Baren.psstring("12321241"),Baren.psstring("13212241"),Baren.psstring("13221331"),Baren.psstring("11412241"),Baren.psstring("11421331"),Baren.psstring("14112331"),Baren.psstring("14121421"),Baren.psstring("12312331"),Baren.psstring("12321421"),Baren.psstring("13212421"),Baren.psstring("13221511"),Baren.psstring("11412421"),Baren.psstring("11421511"),Baren.psstring("14112511"),Baren.psstring("12312511"),Baren.psstring("21131152"),Baren.psstring("11122153"),Baren.psstring("31122151"),Baren.psstring("11131243"),Baren.psstring("31131241"),Baren.psstring("21113152"),Baren.psstring("21122242"),Baren.psstring("21131332"),Baren.psstring("11113243"),Baren.psstring("31113241"),Baren.psstring("11122333"),Baren.psstring("31122331"),Baren.psstring("11131423"),Baren.psstring("31131421"),Baren.psstring("21113332"),Baren.psstring("21122422"),Baren.psstring("21131512"),Baren.psstring("11113423"),Baren.psstring("31113421"),Baren.psstring("11122513"),Baren.psstring("31122511"),Baren.psstring("22131151"),Baren.psstring("11231152"),Baren.psstring("12122152"),Baren.psstring("12131242"),Baren.psstring("21231241"),Baren.psstring("22113151"),Baren.psstring("11213152"),Baren.psstring("22122241"),Baren.psstring("11222242"),Baren.psstring("22131331"),Baren.psstring("11231332"),Baren.psstring("12113242"),Baren.psstring("12122332"),Baren.psstring("12131422"),Baren.psstring("21231421"),Baren.psstring("22113331"),Baren.psstring("11213332"),Baren.psstring("22122421"),Baren.psstring("11222422"),Baren.psstring("22131511"),Baren.psstring("11231512"),Baren.psstring("12113422"),Baren.psstring("12122512"),Baren.psstring("21222511"),Baren.psstring("12231151"),Baren.psstring("13122151"),Baren.psstring("13131241"),Baren.psstring("11322151"),Baren.psstring("11331241"),Baren.psstring("12213151"),Baren.psstring("12222241"),Baren.psstring("12231331"),Baren.psstring("13113241"),Baren.psstring("13122331"),Baren.psstring("11313241"),Baren.psstring("13131421"),Baren.psstring("11322331"),Baren.psstring("11331421"),Baren.psstring("12213331"),Baren.psstring("12222421"),Baren.psstring("12231511"),Baren.psstring("13113421"),Baren.psstring("13122511"),Baren.psstring("11313421"),Baren.psstring("11322511"),Baren.psstring("21141151"),Baren.psstring("11132152"),Baren.psstring("11141242"),Baren.psstring("21123151"),Baren.psstring("21132241"),Baren.psstring("21141331"),Baren.psstring("11114152"),Baren.psstring("11123242"),Baren.psstring("11132332"),Baren.psstring("11141422"),Baren.psstring("21114241"),Baren.psstring("21123331"),Baren.psstring("21132421"),Baren.psstring("21141511"),Baren.psstring("11114332"),Baren.psstring("11123422"),Baren.psstring("11132512"),Baren.psstring("11241151"),Baren.psstring("12132151"),Baren.psstring("12141241"),Baren.psstring("11223151"),Baren.psstring("11232241"),Baren.psstring("11241331"),Baren.psstring("12114151"),Baren.psstring("12123241"),Baren.psstring("12132331"),Baren.psstring("12141421"),Baren.psstring("11214241"),Baren.psstring("11223331"),Baren.psstring("11232421"),Baren.psstring("11241511"),Baren.psstring("12114331"),Baren.psstring("12123421"),Baren.psstring("12132511"),Baren.psstring("11142151"),Baren.psstring("11151241"),Baren.psstring("11124151"),Baren.psstring("11133241"),Baren.psstring("11142331"),Baren.psstring("11151421"),Baren.psstring("11115241"),Baren.psstring("11124331"),Baren.psstring("11133421"),Baren.psstring("11142511"),Baren.psstring("21111253"),Baren.psstring("41111251"),Baren.psstring("11111344"),Baren.psstring("31111342"),Baren.psstring("21111433"),Baren.psstring("41111431"),Baren.psstring("11111524"),Baren.psstring("31111522"),Baren.psstring("21111613"),Baren.psstring("41111611"),Baren.psstring("21211162"),Baren.psstring("22111252"),Baren.psstring("11211253"),Baren.psstring("31211251"),Baren.psstring("12111343"),Baren.psstring("32111341"),Baren.psstring("21211342"),Baren.psstring("22111432"),Baren.psstring("11211433"),Baren.psstring("31211431"),Baren.psstring("12111523"),Baren.psstring("32111521"),Baren.psstring("21211522"),Baren.psstring("22111612"),Baren.psstring("11211613"),Baren.psstring("31211611"),Baren.psstring("22211161"),Baren.psstring("11311162"),Baren.psstring("23111251"),Baren.psstring("12211252"),Baren.psstring("21311251"),Baren.psstring("13111342"),Baren.psstring("22211341"),Baren.psstring("11311342"),Baren.psstring("23111431"),Baren.psstring("12211432"),Baren.psstring("21311431"),Baren.psstring("13111522"),Baren.psstring("22211521"),Baren.psstring("11311522"),Baren.psstring("23111611"),Baren.psstring("12211612"),Baren.psstring("21311611"),Baren.psstring("12311161"),Baren.psstring("13211251"),Baren.psstring("11411251"),Baren.psstring("14111341"),Baren.psstring("12311341"),Baren.psstring("13211431"),Baren.psstring("11411431"),Baren.psstring("14111521"),Baren.psstring("12311521"),Baren.psstring("13211611"),Baren.psstring("11411611"),Baren.psstring("31121161"),Baren.psstring("21112162"),Baren.psstring("21121252"),Baren.psstring("11112253"),Baren.psstring("31112251"),Baren.psstring("11121343"),Baren.psstring("31121341"),Baren.psstring("21112342"),Baren.psstring("21121432"),Baren.psstring("11112433"),Baren.psstring("31112431"),Baren.psstring("11121523"),Baren.psstring("31121521"),Baren.psstring("21112522"),Baren.psstring("21121612"),Baren.psstring("12121162"),Baren.psstring("21221161"),Baren.psstring("22112161"),Baren.psstring("11212162"),Baren.psstring("22121251"),Baren.psstring("11221252"),Baren.psstring("12112252"),Baren.psstring("12121342"),Baren.psstring("21221341"),Baren.psstring("22112341"),Baren.psstring("11212342"),Baren.psstring("22121431"),Baren.psstring("11221432"),Baren.psstring("12112432"),Baren.psstring("12121522"),Baren.psstring("21221521"),Baren.psstring("22112521"),Baren.psstring("11212522"),Baren.psstring("22121611"),Baren.psstring("11221612"),Baren.psstring("13121161"),Baren.psstring("11321161"),Baren.psstring("12212161"),Baren.psstring("12221251"),Baren.psstring("13112251"),Baren.psstring("13121341"),Baren.psstring("11312251"),Baren.psstring("11321341"),Baren.psstring("12212341"),Baren.psstring("12221431"),Baren.psstring("13112431"),Baren.psstring("13121521"),Baren.psstring("11312431"),Baren.psstring("11321521"),Baren.psstring("12212521"),Baren.psstring("12221611"),Baren.psstring("11131162"),Baren.psstring("21122161"),Baren.psstring("21131251"),Baren.psstring("11113162")]);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parity"; //ident
	this.stk[this.ptr++]=Baren.psarray([Baren.psstring("1001"),Baren.psstring("0101"),Baren.psstring("1100"),Baren.psstring("0011"),Baren.psstring("1010"),Baren.psstring("0110"),Baren.psstring("1111"),Baren.psstring("0000")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowbits"; //ident
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=Baren.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f80;
	var t139=this.stk[--this.ptr];
	var t137=this.stk[--this.ptr];
	var t136=this.stk[--this.ptr];
	var t135=this.stk[--this.ptr];
	for (var t138=t135; t136<0 ? t138>=t137 : t138<=t137; t138+=t136) {
		this.stk[this.ptr++]=t138;
		if (t139.call(this)==-1) break;
	}
	this.stk[this.ptr++]="pixs"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=81;
	var t=this.dstk.get("sepheight");
	if (t===undefined) throw new Error("dict: sepheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f81;
	var t142=this.stk[--this.ptr];
	var t140=this.stk[--this.ptr];
	for (var t141=0; t141<t140; t141++) {
		if (t142.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f86;
	var t159=this.stk[--this.ptr];
	var t157=this.stk[--this.ptr];
	var t156=this.stk[--this.ptr];
	var t155=this.stk[--this.ptr];
	for (var t158=t155; t156<0 ? t158>=t157 : t158<=t157; t158+=t156) {
		this.stk[this.ptr++]=t158;
		if (t159.call(this)==-1) break;
	}
	var t=this.dstk.get("rowheight");
	if (t===undefined) throw new Error("dict: rowheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f87;
	var t162=this.stk[--this.ptr];
	var t160=this.stk[--this.ptr];
	for (var t161=0; t161<t160; t161++) {
		if (t162.call(this)==-1) break;
	}
	this.stk[this.ptr++]=81;
	var t=this.dstk.get("sepheight");
	if (t===undefined) throw new Error("dict: sepheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f88;
	var t165=this.stk[--this.ptr];
	var t163=this.stk[--this.ptr];
	for (var t164=0; t164<t163; t164++) {
		if (t165.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=Baren.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren"; //ident
	var t=this.dstk.get("renmatrix");
	if (t===undefined) throw new Error("//renmatrix: undefined");
	this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixs"; //ident
	var t=this.dstk.get("pixs");
	if (t===undefined) throw new Error("dict: pixs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixx"; //ident
	this.stk[this.ptr++]=81;
	this.stk[this.ptr++]="pixy"; //ident
	var t=this.dstk.get("pixs");
	if (t===undefined) throw new Error("dict: pixs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=81;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]="height"; //ident
	var t=this.dstk.get("pixs");
	if (t===undefined) throw new Error("dict: pixs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + Baren.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=81;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="width"; //ident
	this.stk[this.ptr++]=81;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="opt"; //ident
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
		t[this.stk[i-1]]=this.stk[i];
	}
	if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
	this.ptr = i;
	this.stk[this.ptr++]=t;
	var t=this.dstk.get("dontdraw");
	if (t===undefined) throw new Error("dict: dontdraw: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
	else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
	var t=this.dstk.get("renmatrix");
	if (t===undefined) throw new Error("//renmatrix: undefined");
	this.stk[this.ptr++]=t;
	var t166=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t166.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
// END OF code49
