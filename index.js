const textInput = document.getElementById('text-input')
const levelOneBonus = document.getElementById('level-one-bonus')
const submitBtn = document.getElementById('submit-btn')
const moneyForNextTier = document.getElementById('money-for-next-tier')

submitBtn.addEventListener('click', function() {

    let actualMoney = textInput.value

if (actualMoney < 325000) {
    levelOneBonus.innerText = "no bonus"
} else if (actualMoney < 406000) {
    levelOneBonus.innerText = "Congratulations you are in line for £500 bonus"
} else if (actualMoney < 487000) {
    levelOneBonus.innerText = "Congratulations you are in line for £1,000 bonus"
} else if (actualMoney < 649000) {
    levelOneBonus.innerText = "Congratulations you are in line for £1,500 bonus"
} else {
    levelOneBonus.innerText = "Congratulations you are in line for £2,000 bonus"
}

const tier1 = 325000 - textInput.value
const tier2 = 406000 - textInput.value
const tier3 = 487000 - textInput.value
const tier4 = 649000 - textInput.value

if (actualMoney < 325000) {
    moneyForNextTier.innerText = `You need another £${tier1} to get to £500 bonus`
} else if (actualMoney < 406000) {
    moneyForNextTier.innerText = `You need another £${tier2} to get to £1,000 bonus`
} else if (actualMoney < 487000) {
    moneyForNextTier.innerText = `You need another £${tier3} to get to £1,500 bonus`
} else if (actualMoney < 649000) {
    moneyForNextTier.innerText = `You need another £${tier4} to get to £2,000 bonus`
} else {
    moneyForNextTier.innerText = `You are at MAX bonus, congrats!`
}

}) 







