// @ts-check
"use strict;"
class alpha {
    static count = 0;
    #name;
    #prename;
    address = {
        street: "",
        no: 1
    };
    zweita = {};
    constructor(x) {
        alpha.count++;
        if (x != undefined) {
            this.name = x;
        }
    }
    setPrename(x) {
        this.prename = x;
    }
    getPrename(x) {
        return this.prename;
    }
};
alpha.prototype.getName = function () {
    return this.name;
};
alpha.prototype.setName = function (x) {
    this.name = x;
}
// alpha.address.no = 44444;
alpha.prototype.zip = 44444;
alpha.prototype.hallo = {
    superzip: 0,
    superstreet: "Wachtmanstraat"
};
// alpha.prototype.address = {
//     zip : 0
// };
var walter = new alpha();
walter.address.street = "Hallo";
walter.address.no = 10;
walter.setName("Walter");
console.log(walter.getName());
console.log(walter.zip);
console.log(alpha.count);
var herbert = new alpha("Herbert");
console.log(herbert.getName());
console.log(alpha.count);
var z = {
    blabla: "",
    blub: "",
    zz: {
        test: ""
    }
};
walter.zweita = z;
walter.zweita.blabla = "Hallo";
console.log(walter.zweita.blabla);
var a = Array();
a.push(z);
z.blabla = "POP";
a.push(z);
var b = z;
b.blabla = 'POP1';
a[a.length] = z;
a[a.length - 1].blabla = 'TEST';
var b = a.pop();
console.log(b.blabla);
b = a.pop();
console.log(b.blabla);
b = a.pop();
console.log(b.blabla);
var f = function () { };
f.prototype.blabla = 'HEINZ';
a.push(f);
console.log(f.prototype.blabla);
b = a.pop();
console.log(b.blabla);
console.log(b.prototype.blabla);
class beta {
    viktor;
    juliet;
    identity;
}
var w = Array();
var v = new beta();
v.viktor = "Viktor";
v.juliet = 'Juliet';
v.identity = 'Id';
console.table(v);
w.push(v);
v = new beta();
v.viktor = 'Omega';
w.push(v);
console.table(w);
var ob = {};
ob.viktor = 'Vik';
ob.juliet = 'Jules';
w.push(ob);
console.table(w);
ob.idenity = {
    name: 'Mannheim',
    prename: 'Hugo'
};
console.table(w);
var g = Array();
g.push({});
g[0].test = 0;
g[0].test1 = 1;
g.push({});
g[1].test = 2;
g[1].test = 3;
console.table(g);
