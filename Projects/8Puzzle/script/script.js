document.addEventListener("DOMContentLoaded", function () {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  window.onload = function () {
    an = [];
    for (i = 1; i < 4; i++) {
      an[i] = document.querySelector("#an" + i);
    }

    async function firstDisplay() {
      for (i = 1; i < 4; i++) {
        an[i].style.display = "none";
      }
      for (j = 1; j < 4; j++) {
        an[j].style.display = "block";
        an[j].style.transition = "0s ease-in-out";
        an[j].style.opacity = "0";
        await sleep(500);
        an[j].style.transition = "2s ease-in-out";
        an[j].style.opacity = "1";
        await sleep(2600);
        an[j].style.display = "none";

      }
    }
    firstDisplay();
    setInterval(firstDisplay, 9500);
  };

  var selectImageID = -1;
  m = [];
  b = [];
  img = [];
  for (j = 1; j < 4; j++) {
    m[j] = document.querySelector("#m" + j);
    b[j] = document.querySelector("#b" + j);
    img[j] = document.querySelector("#img" + j);
  }

  var pick = document.querySelectorAll(".pick");
  var play = document.querySelector("#play-icon");
  play.style.display = "none";
  b[1].addEventListener("click", gotom2);

  async function gotom2() {
    for (i = 1; i < 2; i++) {
      m[i].style.transition = "all .3s";
      m[i].style.opacity = "0";
      b[i].style.transition = "all .3s";
      b[i].style.opacity = "0";
    }
    m[2].style.transition = "all .3s";
    await sleep(700);
    m[1].style.display = "none";
    b[1].style.display = "none";
    m[2].style.display = "block";
    m[2].style.opacity = "0";
    await sleep(90);
    m[2].style.opacity = "1";
  }

  for (var i = 0; i < 3; i++) {
    pick[i].addEventListener("click", function () {
      for (j = 0; j < 3; j++) {
        pick[j].style.border = "none";
        pick[j].style.boxShadow = "none";
      }
      this.style.border = "10px solid white";
      this.style.boxShadow = "5px 5px 5px 5px grey";
      this.style.boxSizing = "border-box";
      b[2].style.display = "block";
      selectImageID = this.id;

      b[2].addEventListener("click", async function () {
        m[1].style.display = "none";
        m[2].style.transition = "all .3s";
        m[3].style.transition = "all .7s";
        m[2].style.opacity = "0";
        await sleep(800);
        m[2].style.display = "none";
        m[3].style.display = "block";
        m[3].style.opacity = "0";
        await sleep(80);
        m[3].style.opacity = "1";
        for (var i = 1; i < 9; i++) {
          document.querySelectorAll(".innerpicture")[i].style.backgroundImage =
            "url(" + "images/" + selectImageID[3] + ".jpg" + ")";
        }
      });
    });
  }
  var x = document.querySelector("#sel");

  x.addEventListener("change", function () {
    if (this.value == 3 || this.value == 30 || this.value == 60) {
      play.style.display = "block";
    }
  });

  play.addEventListener("click", function () {
    n = x.value;
    p = [];
    for (i = 1; i < 10; i++) {
      p[i] = document.querySelector("#p" + i);
    }

    play.style.display = "none";
    x.style.display = "none";
    document.getElementById("shuff").style.display = "none";
    track_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var bosta = 1;
    var bulkare = 1;
    active = [];
    finished = false;
    act = [];
    var oncekisq = -1;
    function borderchange() {
      for (ind = 1; ind < 10; ind++) {
        if (ind != track_arr.indexOf(ind)) {
          picture[ind - 1].style.borderColor = "darkred";
        }
        if (ind == track_arr.indexOf(ind)) {
          picture[ind - 1].style.borderColor = "green";
        }
      }

      for (ind = 9; ind > 0; ind--) {
        if (ind != track_arr.indexOf(ind)) {
          picture[ind - 1].style.borderColor = "darkred";
        }
        if (ind == track_arr.indexOf(ind)) {
          picture[ind - 1].style.borderColor = "green";
        }
      }
    }
    async function change() {
      for (var i = 0; i < n; i++) {
        selectedsq = -1;

        //active=[track_arr[bulkare + 1], track_arr[bulkare - 1], track_arr[bulkare + 3], track_arr[bulkare - 3] ]
        //console.log(active);

        if (bulkare == 1) {
          active = [track_arr[2], track_arr[4]];
        }
        if (bulkare == 2) {
          active = [track_arr[1], track_arr[3], track_arr[5]];
        }
        if (bulkare == 3) {
          active = [track_arr[2], track_arr[6]];
        }
        if (bulkare == 4) {
          active = [track_arr[1], track_arr[5], track_arr[7]];
        }
        if (bulkare == 5) {
          active = [track_arr[2], track_arr[6], track_arr[8], track_arr[4]];
        }
        if (bulkare == 6) {
          active = [track_arr[3], track_arr[5], track_arr[9]];
        }
        if (bulkare == 7) {
          active = [track_arr[4], track_arr[8]];
        }
        if (bulkare == 8) {
          active = [track_arr[7], track_arr[5], track_arr[9]];
        }
        if (bulkare == 9) {
          active = [track_arr[8], track_arr[6]];
        }

        while (selectedsq == 1 || selectedsq == -1 || selectedsq == oncekisq) {
          selectedsq = active[Math.floor(Math.random() * active.length)];
        }
        var sidn = document.querySelectorAll(".innerpicture")[selectedsq - 1]
          .id[1];
        var bossq = "#p1";
        var movesq = "#" + "p" + sidn;

        var bosstyle = getComputedStyle(document.querySelector(bossq));
        var movestyle = getComputedStyle(document.querySelector(movesq));

        var bostop = bosstyle.top;
        var bosleft = bosstyle.left;
        var movetop = movestyle.top;
        var moveleft = movestyle.left;

        var picture = document.querySelectorAll(".innerpicture");
        var pict = document.querySelector("#picture");

        if (n == 3) {
          document.querySelector(movesq).style.transition = ".5s ease-in-out";
          document.querySelector(bossq).style.transition = ".5s ease-in-out";
        }
        if (n == 30) {
          document.querySelector(movesq).style.transition = ".1s ease-in-out";
          document.querySelector(bossq).style.transition = ".1s ease-in-out";
        }

        if (n == 60) {
          document.querySelector(movesq).style.transition = ".05s ease-in-out";
          document.querySelector(bossq).style.transition = ".05s ease-in-out";
        }

        var temp1 = bostop;
        var temp2 = bosleft;
        var temp3 = movetop;
        var temp4 = moveleft;
        document.querySelector(bossq).style.left = temp4;
        document.querySelector(bossq).style.top = temp3;
        document.querySelector(movesq).style.left = temp2;
        document.querySelector(movesq).style.top = temp1;

        if (n == 3) {
          await sleep(700);
        }
        if (n == 30) {
          await sleep(300);
        }
        if (n == 60) {
          await sleep(150);
        }

        var wagtlayyn = 0;
        var ab = track_arr.indexOf(selectedsq);

        wagtlayyn = track_arr[bulkare];
        track_arr[bulkare] = track_arr[ab];
        track_arr[ab] = wagtlayyn;
        oncekisq = selectedsq;
        bulkare = track_arr.indexOf(1);

        borderchange();

        if (i == n - 1) {
          finished = true;
          solve = document.getElementById("solve");
          solve.style.display = "block";
        }
      }
    }
    change();

    var picture = document.querySelectorAll(".innerpicture");
    var pict = document.querySelector("#picture");
    function ustunebaranda() {
      for (i = 0; i < 9; i++) {
        picture[i].style.transition = "0s";
        picture[i].style.opacity = ".5";
      }

      for (var j = 0; j < act.length; j++) {
        picture[act[j] - 1].style.transition = "0s";
        picture[act[j] - 1].style.opacity = "1";
      }
    }

    function ustundenayrylanda() {
      for (i = 0; i < 9; i++) {
        picture[i].style.transition = "0s";
        picture[i].style.opacity = "1";
      }

      for (var j = 0; j < act.length; j++) {
        picture[act[j] - 1].style.transition = "0s";
        picture[act[j] - 1].style.opacity = "1";
      }
    }

    readyToSolve();
    function readyToSolve() {
      waitForIt();
      function waitForIt() {
        if (finished == true) {
          var picture = document.querySelectorAll(".innerpicture");
          var pict = document.querySelector("#picture");
          pict.addEventListener("click", checkandwait());

          function checkandwait() {
            if (track_arr.indexOf(1) == 1) {
              act = [track_arr[2], track_arr[4]];
            }
            if (track_arr.indexOf(1) == 2) {
              act = [track_arr[1], track_arr[3], track_arr[5]];
            }
            if (track_arr.indexOf(1) == 3) {
              act = [track_arr[2], track_arr[6]];
            }
            if (track_arr.indexOf(1) == 4) {
              act = [track_arr[1], track_arr[5], track_arr[7]];
            }
            if (track_arr.indexOf(1) == 5) {
              act = [track_arr[2], track_arr[4], track_arr[6], track_arr[8]];
            }
            if (track_arr.indexOf(1) == 6) {
              act = [track_arr[3], track_arr[5], track_arr[9]];
            }
            if (track_arr.indexOf(1) == 7) {
              act = [track_arr[4], track_arr[8]];
            }
            if (track_arr.indexOf(1) == 8) {
              act = [track_arr[5], track_arr[7], track_arr[9]];
            }
            if (track_arr.indexOf(1) == 9) {
              act = [track_arr[8], track_arr[6]];
            }

            makdeReady();

            function makdeReady() {
              pict.addEventListener("mouseover", ustunebaranda);
              pict.addEventListener("mouseout", ustundenayrylanda);
            }

            for (var y = 0; y < act.length; y++) {
              picture[act[y] - 1].addEventListener("click", makemMovable);
            }

            async function makemMovable() {
              var aaa = getComputedStyle(this);
              var bbb = getComputedStyle(picture[0]);

              this.style.transition = ".5s";
              picture[0].style.transition = ".5s";
              var aaa_left = aaa.left;
              var bbb_left = bbb.left;
              var aaa_top = aaa.top;
              var bbb_top = bbb.top;
              this.style.left = bbb_left;
              this.style.top = bbb_top;
              picture[0].style.left = aaa_left;
              picture[0].style.top = aaa_top;
              picture[0].removeEventListener("click", makemMovable);
              this.removeEventListener("click", makemMovable);
              await sleep(600);
              idofthis = this.id;
              idoffirst = picture[0].id;
              makdeReady();
              birinji = parseInt(idoffirst[1]);
              ikinji = parseInt(idofthis[1]);

              mm = track_arr.indexOf(birinji);
              nn = track_arr.indexOf(ikinji);

              var wagt4 = track_arr[mm];
              var wagt5 = track_arr[nn];

              track_arr[mm] = wagt5;
              track_arr[nn] = wagt4;
              borderchange();

              for (i = 0; i < 9; i++) {
                picture[i].removeEventListener("click", makemMovable);
              }
              makdeReady();
              checkandwait();
            }

            function check_track() {
              state = true;
              for (i = 0; i < 10; i++) {
                if (track_arr[i] != i) {
                  state = false;
                  break;
                }
              }
              return state;
            }
            async function check() {
              if (check_track() == true) {
                document.getElementById("congrat").style.display = "block";
                var ctext = document.getElementById("ctext");
                var press = document.getElementById("press");
                solve.style.display = "none";
                m3.style.height = "400px";
                async function ctext2() {
                  ctext.style.transition = ".7s";
                  ctext.style.display = "block";
                  await sleep(100);
                  ctext.style.transform = "translateY(-370px)";
                  ctext.style.fontSize = "120px";
                  await sleep(600);
                  ctext.style.fontSize = "90px";
                }
                async function press2() {
                  press.style.transition = ".7s";
                  press.style.display = "block";
                  await sleep(100);
                  press.style.transform = "translateY(-360px)";
                }
                ctext2();
                press2();
                body = document.getElementsByTagName("body");
                body[0].style.height = "500px";
                window.addEventListener("keydown", async function (event) {
                  if (event.keyCode === 116) {
                    event.preventDefault();
                    document.getElementById("congrat").style.display = "none";
                    play.style.display = "block";
                    x.style.display = "block";
                    x.style.margin = "auto";
                    press.style.display = "none";
                    ctext.style.display = "none";
                    x.style.marginBottom = "50px";
                    document.getElementById("shuff").style.display = "block";
                    for (i = 0; i < 9; i++) {
                      picture[i].removeEventListener("click", makemMovable);
                    }
                    pict.removeEventListener("mouseover", ustunebaranda);
                    ctext.style.transform = "translateY(+370px)";
                    press.style.transform = "translateY(+360px)";
                  }
                });
              }
            }
            check();
          }
        }
        if (finished == false) {
          // wait for squares go to destination
          setTimeout(function () {
            waitForIt();
          }, 100);
        }
      }
    }
  }); // end of play
}); //  end of DOM Content
