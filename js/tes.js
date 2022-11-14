function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
}


var startTime = new Date();
var endTime = new Date();
var startPressed = false;
var bgChangeStarted = false;
var maxWait = 20;
var timerID;
function startTest() {
    document.bgColor = document.response.bgColorChange.options[document.response.bgColorChange.selectedIndex].text;
    bgChangeStarted = true;
    startTime = new Date();
}
function remark(responseTime) {
    var responseString = "";
    if (responseTime > 0 && responseTime < 0.01)
        responseString = "You are not human!"
    if (responseTime > 0.01 && responseTime < 0.05)
        responseString = "You are a snake";
    if (responseTime >= 0.05 && responseTime < 0.10)
        responseString = "You are insane!";
    if (responseTime >= 0.10 && responseTime < 0.150)
        responseString = "You are snake in the body of human";
    if (responseTime >= 0.150 && responseTime < 0.200)
        responseString = "You are faster, your reflexes are much faster than a normal human being";
    if (responseTime >= 0.20 && responseTime < 0.215)
        responseString = "You are fast, But you can be faster!!!... ";
    if (responseTime >= 0.215 && responseTime < 0.30)
        responseString = "You have average human reflexes... ";
    if (responseTime >= 0.30 && responseTime < 0.60)
        responseString = "Your reflexes are below average, FOCUS!!";
    if (responseTime >= 0.60 && responseTime < 1)
        responseString = "Too slow";
    if (responseTime >= 1)
        responseString = "LMAO, You are a turtle";
    return responseString;
}
function stopTest() {
    if (bgChangeStarted) {
        endTime = new Date();
        var responseTime = (endTime.getTime() - startTime.getTime())/1000;
        document.bgColor = "white";
        swal({
            text: "Your response time is: " + (responseTime*1000) + " milliseconds " + "\n" + remark(responseTime),
            icon: "success",
            button: "Aww yiss!",
        });
        startPressed = false;
        bgChangeStarted = false;
    }
    else {
        if (!startPressed) {
            swal("press start first to start test");
        }
        else {
            clearTimeout(timerID);
            startPressed = false;
            swal({
                text: "you pressed too early!",
                icon: "error",
                button: "ohh okay",
            });
        }
    }
}
var randMULTIPLIER = 0x015a4e35;
var randINCREMENT = 1;
var today = new Date();
var randSeed = today.getSeconds();
function randNumber() {
    randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
    return ((randSeed >> 15) & 0x7fff) / 32767;
}
function startit() {
    if (startPressed) {
        swal("Already started. Press stop to stop");
        return;
    }
    else {
        startPressed = true;
        timerID = setTimeout('startTest()', 6000 * randNumber());
    }
}