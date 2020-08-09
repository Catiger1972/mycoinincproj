var gameData = {
    coins: 0,
    coinsPerClick: 1,
    coinsPerClickCost: 10
}
function mineCoins() {
    gameData.coins += gameData.coinsPerClick
    document.getElementById("coinsMined").innerHTML = gameData.coins + " Coins Mined"
}
function buyCoinsPerClick() {
    if (gameData.coins >= gameData.coinsPerClickCost) {
        gameData.coins -= gameData.coinsPerClickCost
        gameData.coinsPerClick += 1
        gameData.coinsPerClickCost *= 2
        document.getElementById("coinsMined").innerHTML = gameData.coins + " Coins Mined"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.coinsPerClick + ") Cost: " + gameData.coinsPerClickCost + " Coins"
    }
}
var mainGameLoop = window.setInterval(function () {
    mineCoins()
}, 1000)
var saveGameLoop = window.setInterval(function () {
    localStorage.setItem("coinsMinerSave", JSON.stringify(gameData))
}, 15000)
var savegame = JSON.parse(localStorage.getItem("coinsMinerSave"))
if (savegame !== null) {
    gameData = savegame
}