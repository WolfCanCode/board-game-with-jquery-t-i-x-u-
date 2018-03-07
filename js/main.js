var isOpen = false;
    var stt = 0;
    var sTai = 0;
    var sXiu = 0;
    // show the result of those dices

    $("#open-dice-box").click(function () {
        if (isOpen) {
            if (!$("#box").hasClass("box-up")) {
                $("#box").addClass("box-up");
                $(".dice img").effect("shake", {
                    times: 15
                }, 200);
            }
            var x = Math.floor((Math.random() * 6) + 1);
            var y = Math.floor((Math.random() * 6) + 1);
            var z = Math.floor((Math.random() * 6) + 1);
            $("#dice1").attr("src", "./assets/" + x + ".png");
            $("#dice2").attr("src", "./assets/" + y + ".png");
            $("#dice3").attr("src", "./assets/" + z + ".png");
            if ((x + y + z) >= 4 && (x + y + z) <= 10) {
                // $("#point").text((x + y + z) + " xỉu");
                setTimeout(function () {
                    $(".result-img").attr("src", "./assets/xiu.png");
                    $(".result").addClass("result-appear");
                    $("#tai-board").empty();
                }, 1000);


            } else if ((x + y + z) >= 11 && (x + y + z) <= 17) {
                // $("#point").text((x + y + z) + " tài");
                setTimeout(function () {
                    $(".result-img").attr("src", "./assets/tai.png");
                    $(".result").addClass("result-appear");
                    $("#xiu-board").empty();
                }, 1000);

            }
            $("#open-dice-box").attr('disabled', 'disabled');
            setTimeout(function () {
                $("#open-game").removeAttr("disabled");
            }, 1500);

        }
    });

    //open beting for player

    $("#open-game").click(function () {
        isOpen = true;
        $("#open-game").attr('disabled', 'disabled');
        $("#close-game").removeAttr("disabled");
        $("#tai-board").empty();
        $("#xiu-board").empty();
    });

    //close beting

    $("#close-game").click(function () {
        $("#close-game").attr('disabled', 'disabled');
        $(".result").removeClass("result-appear");
        $("#box").removeClass("box-up").queue(function () {
            $("#imgbox").effect("shake", {
                times: 4
            }, 500);
        }).dequeue();
        setTimeout(function () {
            $("#open-dice-box").removeAttr("disabled");
        }, 1000);
    });

    $("#gen-chip-tai").click(function () {
        let randomNumber = Math.floor((Math.random() * 100) + 1);
        let topDrop = Math.floor((Math.random() * 387) + 260);
        let leftrightDrop = Math.floor((Math.random() * 350) + 860);
        $("#tai-board").append("<div class='chip-token' id='chip" + (stt) + "'> <p>" + randomNumber +
            " </p> </div>");
        $("#chip" + (stt) + "").css("left", leftrightDrop);
        $("#chip" + (stt++) + "").animate({
            top: topDrop
        });
        sTai += randomNumber;
    });

    $("#gen-chip-xiu").click(function () {
        let randomNumber = Math.floor((Math.random() * 100) + 1);
        let topDrop = Math.floor((Math.random() * 387) + 268);
        let leftrightDrop = Math.floor((Math.random() * 350) + 1300);
        $("#xiu-board").append("<div class='chip-token' id='chip" + (stt) + "'> <p>" + randomNumber +
            " </p> </div>");
        $("#chip" + (stt) + "").css("left", leftrightDrop);
        $("#chip" + (stt++) + "").animate({
            top: topDrop
        });
        sXiu += randomNumber;

    });