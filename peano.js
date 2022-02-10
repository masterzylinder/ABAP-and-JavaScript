//&copy; Ralf Muno ralf.muno@adesso-orange.com
// @ts-check
"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let iter = 2; // deepness of the curve
draw('-');
function draw(x) {
    switch (x) {
        case '+': iter += 1; break;
        case '-': iter -= 1; break;
        default: return false;
    }
    if (iter < 1) { iter = 1; }
    if (iter > 6) { iter = 6; }
    let lindenmayer = doLindenmayer('L');
    drawLindemayer(lindenmayer);
}
function doLindenmayer(l) {
    let s = "";
    for (let i = 0; i < iter; i++) {
        for (let j = 0; j < l.length; j++) {
            s = s + lindenrule(l.charAt(j));
        }
        l = s;
        s = "";
    }
    return l;
}
function lindenrule(x) {
    switch (x) {
        // future L reft figure future R figure, F line forward,+ turn right 90 deg, - turn left 90 deg 
        case 'L': return "LFRFL+F+RFLFR-F-LFRFL"; break;
        case 'R': return "RFLFR-F-LFRFL+F+RFLFR"; break;
        default: return x;
    }
}
function drawLindemayer(lindenmayer) {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    let x = 0;
    let y = 0;
    let angle = 0;
    let dx = canvas.width / (Math.pow(3, iter) - 1);
    let dy = canvas.height / (Math.pow(3, iter) - 1);
    ctx.strokeStyle = "blue";
    ctx.moveTo(x, y);
    for (let i = 0; i < lindenmayer.length; i++) {
        switch (lindenmayer.charAt(i)) {
            case 'F':
                x = x + dx * Math.cos(Math.PI * angle / 180);
                y = y + dy * Math.sin(Math.PI * angle / 180);
                ctx.lineTo(x, y);
                break;
            case '+':
                angle = (angle + 90) % 360;
                break;
            case '-':
                angle = (angle - 90) % 360;
                break;
            default: break;
        }
    }
    ctx.stroke();
}