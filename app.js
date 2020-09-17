const $ozone = document.getElementById("ozone");
const $significance = document.getElementById("significance");
const $saveo3 = document.getElementById("save o3");
const $livewatch = document.getElementById("live watch");

$ozone.onclick = () => {
    document.body.style.background = "black";
    document.body.style.backgroundSize = "100% 100%";
    $ozone.style.backgroundColor = "#2f80ed";
    $significance.style.backgroundColor = "transparent";
    $saveo3.style.backgroundColor = "transparent";
    document.getElementById("cause").innerHTML = "The ozone layer is a thin part of the Earth's atmosphere that absorbs almost all of the sun's harmful ultraviolet light.";
    document.getElementById("cause").style.color = "cyan"
}

$significance.onclick = () => {
    document.body.style.background = "lightgreen";
    document.body.style.backgroundSize = "100% 100%";
    $ozone.style.backgroundColor = "transparent";
    $significance.style.backgroundColor = "#27ae60";
    $saveo3.style.backgroundColor = "transparent";
    document.getElementById("cause").innerHTML = "Most ozone resides in the stratosphere (a layer of the atmosphere between 10 and 40 km above us), where it acts as a shield to protect Earth's surface from the sun's harmful ultraviolet radiation";
    document.getElementById("cause").style.color = "darkblue";
}

$saveo3.onclick = () => {
    document.body.style.background = "tomato";
    document.body.style.backgroundSize = "100% 100%";
    $ozone.style.backgroundColor = "transparent";
    $significance.style.backgroundColor = "transparent";
    $saveo3.style.backgroundColor = "#F2994A";
    document.getElementById("cause").innerHTML = "Avoid the consumption of gases dangerous to the ozone layer, due to their content or manufacturing process.Minimize the use of cars. Do not use cleaning products that are harmful to the environment and to us. Buy local products.";
    document.getElementById("cause").style.color = "purple";
}