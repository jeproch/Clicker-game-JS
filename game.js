const BUTTON = document.getElementById("click-btn");
var counter = 0; // dynamic counter
var clickAMT = document.getElementById("click-status"); //Click amount = how many points the user has
var upgradeSts = document.getElementById("upgrade-status-p");
var nextUpgrade = 0;
const removeBTN = document.getElementById("remove10-demo");

const errorMessage = "You do not meet the requirements!";

BUTTON.addEventListener("click", function () {
  if (counter >= 30) {
    counter += 2;
    nextUpgrade = 100;
    upgradeSts.textContent = "Next upgrade available at : " + nextUpgrade;
  } else {
    counter += 1;
  }

  if (counter < 30) {
    nextUpgrade = 30;
    upgradeSts.textContent = "Next upgrade available at : " + nextUpgrade;
  }

  if (counter >= 100) {
    AUTO_BUTTON_10.textContent = "Get 10 every 5 seconds";
    nextUpgrade = 500;
    upgradeSts.textContent = "Next upgrade available at : " + nextUpgrade;
  }

  if (counter >= 500) {
    nextUpgrade = 1000;
    upgradeSts.textContent = "Next upgrade available at : " + nectUpgrade;
  }

  clickAMT.textContent = "Clicks : " + counter; //DO NOT REMOVE FROM BOTTOM
});

function main() {}

removeBTN.addEventListener("click", function () {
  if (counter > 0) {
    counter = counter - 10;
    clickAMT.textContent = "Clicks : " + counter;
  }
  if (counter < 0) {
    counter = 0;
    clickAMT.textContent = "Clicks : " + counter;
  }
});

let upgradeArray = document.getElementById("active-upgrades-array");

//Upgrades and stuff

const AUTO_BUTTON_10 = document.getElementById("auto-clicker-10");
var isAuto10 = false;
var interval1; // Declare the interval variable

function increase1() {
  if (isAuto10) {
    counter = counter + 10;
    clickAMT.textContent = "Clicks : " + counter;
  }
}

AUTO_BUTTON_10.addEventListener("click", function () {
  if (counter >= 100) {
    counter = counter - 100;
    isAuto10 = true;
    AUTO_BUTTON_10.classList.add("hide");
    clickAMT.textContent = "Clicks : " + counter;
    // Start the interval only when the button is clicked
    interval1 = setInterval(increase1, 5000);
    //For active upgrade(s) storing BETTER UI
    const upgradeListItem = document.createElement("li");
    upgradeListItem.textContent = "10 every 5 seconds";
    upgradeArray.appendChild(upgradeListItem);
  } else {
    AUTO_BUTTON_10.textContent = errorMessage;
    isAuto10 = false;
  }
});
