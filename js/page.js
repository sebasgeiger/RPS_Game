function initPick() {
    var init = "svg/mystery.svg";
    document.getElementById('oppResult').src = init;   
}
function rockPick() {
    function genPick() {
        let pscore = sessionStorage.getItem("winCount");
        let tscore = sessionStorage.getItem("tieCount");
        let oscore = sessionStorage.getItem("lossCount");
        if (pscore == null) {
            pscore = 0;
        } else {
            pscore = pscore;
        };
        if (tscore == null) {
            tscore = 0;
        } else {
            tscore = tscore;
        };
        if (oscore == null) {
            oscore = 0;
        } else {
            oscore = oscore;
        };
        var pick = "svg/mystery.svg";
        if (Math.floor(Math.random() * 3) == 1) {
            var pick = "svg/rock.svg";
        } else if (Math.floor(Math.random() * 3) == 2) {
            var pick = "svg/paper.svg";
        } else {
            var pick = "svg/scissors.svg";
        }
        document.getElementById('oppResult').src = pick;
        if (pick == "svg/rock.svg") {
            document.getElementById('result').innerHTML = "It's a Tie";
            ++tscore;
        } else if (pick == "svg/paper.svg") {
            document.getElementById('result').innerHTML = "You Lose";
            ++oscore;
        } else {
            document.getElementById('result').innerHTML = "You Win";
            ++pscore;
        }
        sessionStorage.setItem("winCount", pscore);
        sessionStorage.setItem("tieCount", tscore);
        sessionStorage.setItem("lossCount", oscore);
        document.getElementById('pscore').innerHTML = sessionStorage.getItem("winCount");
        document.getElementById('tscore').innerHTML = sessionStorage.getItem("tieCount");
        document.getElementById('oscore').innerHTML = sessionStorage.getItem("lossCount");
    }
    genPick();
}
function paperPick() {
    function genPick() {
        let pscore = sessionStorage.getItem("winCount");
        let tscore = sessionStorage.getItem("tieCount");
        let oscore = sessionStorage.getItem("lossCount");
        if (pscore == null) {
            pscore = 0;
        } else {
            pscore = pscore;
        };
        if (tscore == null) {
            tscore = 0;
        } else {
            tscore = tscore;
        };
        if (oscore == null) {
            oscore = 0;
        } else {
            oscore = oscore;
        };
        var pick = "svg/mystery.svg";
        if (Math.floor(Math.random() * 3) == 1) {
            var pick = "svg/rock.svg";
        } else if (Math.floor(Math.random() * 3) == 2) {
            var pick = "svg/paper.svg";
        } else {
            var pick = "svg/scissors.svg";
        }
        document.getElementById('oppResult').src = pick;
        if (pick == "svg/paper.svg") {
            document.getElementById('result').innerHTML = "It's a Tie";
            ++tscore;
        } else if (pick == "svg/scissors.svg") {
            document.getElementById('result').innerHTML = "You Lose";
            ++oscore;
        } else {
            document.getElementById('result').innerHTML = "You Win";
            ++pscore;
        }
        sessionStorage.setItem("winCount", pscore);
        sessionStorage.setItem("tieCount", tscore);
        sessionStorage.setItem("lossCount", oscore);
        document.getElementById('pscore').innerHTML = sessionStorage.getItem("winCount");
        document.getElementById('tscore').innerHTML = sessionStorage.getItem("tieCount");
        document.getElementById('oscore').innerHTML = sessionStorage.getItem("lossCount");
    }
    genPick();
}
function scissorsPick() {
    function genPick() {
        let pscore = sessionStorage.getItem("winCount");
        let tscore = sessionStorage.getItem("tieCount");
        let oscore = sessionStorage.getItem("lossCount");
        if (pscore == null) {
            pscore = 0;
        } else {
            pscore = pscore;
        };
        if (tscore == null) {
            tscore = 0;
        } else {
            tscore = tscore;
        };
        if (oscore == null) {
            oscore = 0;
        } else {
            oscore = oscore;
        };
        var pick = "svg/mystery.svg";
        if (Math.floor(Math.random() * 3) == 1) {
            var pick = "svg/rock.svg";
        } else if (Math.floor(Math.random() * 3) == 2) {
            var pick = "svg/paper.svg";
        } else {
            var pick = "svg/scissors.svg";
        }
        document.getElementById('oppResult').src = pick;
        if (pick == "svg/scissors.svg") {
            document.getElementById('result').innerHTML = "It's a Tie";
            ++tscore;
        } else if (pick == "svg/rock.svg") {
            document.getElementById('result').innerHTML = "You Lose";
            ++oscore;
        } else {
            document.getElementById('result').innerHTML = "You Win";
            ++pscore;
        }
        sessionStorage.setItem("winCount", pscore);
        sessionStorage.setItem("tieCount", tscore);
        sessionStorage.setItem("lossCount", oscore);
        document.getElementById('pscore').innerHTML = sessionStorage.getItem("winCount");
        document.getElementById('tscore').innerHTML = sessionStorage.getItem("tieCount");
        document.getElementById('oscore').innerHTML = sessionStorage.getItem("lossCount");
    }
    genPick();
}
function reset() {
    sessionStorage.setItem("winCount", 0);
    sessionStorage.setItem("tieCount", 0);
    sessionStorage.setItem("lossCount", 0);
    document.getElementById('pscore').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('tscore').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('oscore').innerHTML = sessionStorage.getItem("lossCount");
    document.getElementById('o-img').src = "svg/mystery.svg";
    document.getElementById('result').innerHTML = "Result";
  }
