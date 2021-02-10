var a = document.getElementById('myAudio-a')
function playa()  {
    a.play();
}

var b = document.getElementById('myAudio-b')
function playb()  {
    b.play();
}

var c = document.getElementById('myAudio-c')
function playc()  {
    c.play();
}

var d = document.getElementById('myAudio-d')
function playd()  {
    d.play();
}

var e = document.getElementById('myAudio-e')
function playe()  {
    e.play();
}

var f = document.getElementById('myAudio-f')
function playf()  {
    f.play();
}

var g = document.getElementById('myAudio-g')
function playg()  {
    g.play();
}

var h = document.getElementById('myAudio-h')
function playh()  {
    h.play();
}

var j = document.getElementById('myAudio-j')
function playj()  {
    j.play();
}

var k = document.getElementById('myAudio-k')
function playk()  {
    k.play();
}

var l = document.getElementById('myAudio-l')
function playl()  {
    l.play();
}

var m = document.getElementById('myAudio-m')
function playm()  {
    m.play();
}

var o = document.getElementById('myAudio-o')
function playo()  {
    o.play();
}

var p = document.getElementById('myAudio-p')
function playp()  {
    p.play();
}

var q = document.getElementById('myAudio-q')
function playq()  {
    q.play();
}

var s = document.getElementById('myAudio-s')
function plays()  {
    s.play();
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


function lefttoright() {
    a.play();
    sleep(400);
    b.play();
    sleep(400);
    c.play();
    sleep(400);
    d.play();
    sleep(400);
    e.play();
    sleep(400);
    f.play();
    sleep(400);
    g.play();
}

function righttoleft() {
    g.play();
    sleep(300);
    f.play();
    sleep(300);
    e.play();
    sleep(300);
    d.play();
    sleep(300);
    c.play();
    sleep(300);
    b.play();
    sleep(300);
    a.play();
}