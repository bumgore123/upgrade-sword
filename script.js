
const swords = [
    {
        name: "Wood Sword",
        description: "This is the most basic sword",
        imgSrc: "https://i.namu.wiki/i/zA2WNVbR_hrevumWnmjM7xBWq3hZ9vbP64hOqmLuU8bkGFQsy57U2sciQQ-u_LVo3fOGbfmJNYFpNK7GXUWMlQ.webp",
        probability: 0.95,
        buyPrice: 100,
        sellPrice: 50,
    },
    {
        name: "Demon King's Sword",
        description: "use by demon king",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tPVotPQI_-dZPNj3Aw9jUDOSV8t8fLwg4g&usqp=CAU",
        probability: 0.009,
        buyPrice: 20000000000000,
        sellPrice: 100000000000000000000000000000000000000000,
    },
    {
        name: "Iron Sword",
        description: "This sword is for knight",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTiupJXQ-INlmwQZCOP__6kqXeUz16KjHJg&usqp=CAU",
        probability: 0.95,
        buyPrice: 200,
        sellPrice: 100,
    },
    {
        name: "Katana",
        description: "Sword used by samurai",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-WBCUhaiJbTeYpNjYTDjeZjc6Ezt5SRQvg&usqp=CAU",
        probability: 0.93,
        buyPrice: 500,
        sellPrice: 250,
    },
    {
        name: "fire sword)",
        description: "this fire is never go out",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbSl0cTMvsTJael6hCjur0w7vxYAiFxak3g&usqp=CAU",
        probability: 0.90,
        buyPrice: 1000,
        sellPrice: 700,
    },
    {
        name: "ax",
        description: "It's a good ax to throw",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSRuaSABlHOLJJ8MmtPOu732uxtYuO4iRog&usqp=CAU",
        probability: 0.87,
        buyPrice: 1500,
        sellPrice: 1100,
    },
    {
        name: "two dagger",
        description: "A dagger favored by assassins",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdwWW5FAhfwolyCYglvfqiyJG7neGPG6_ZQ&usqp=CAU",
        probability: 0.83,
        buyPrice: 2500,
        sellPrice: 2000,
    },
    {
        name: "ice sword",
        description: "A dagger favored by assassins",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPD9TQt84eWE32pPMg7nYMnBWDfq75TTSrw&usqp=CAU",
        probability: 0.80,
        buyPrice: 3000,
        sellPrice: 25000,
    },
    {
        name: "shadow sword",
        description: "The sword used by the dead",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHXIqxP-rERoVo1bYhyfIWmN_HxaF9Ko-Xg&usqp=CAU",
        probability: 0.75,
        buyPrice: 4000,
        sellPrice: 40000,
    },
    {
        name: "skeleton sword",
        description: "sword made by skeleton",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29hqp33S2ZTHNy5V-Qr6FpeerOJB7Qb8SgQ&usqp=CAU",
        probability: 0.70,
        buyPrice: 500000,
        sellPrice: 60000,
    },
    {
        name: "titanium sword",
        description: "made by titanium",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMapv4e3ik63BnHSMYNkmRo6LX25Zy13lp6w&usqp=CAU",
        probability: 0.60,
        buyPrice: 700000,
        sellPrice: 100000,
    },
    {
        name: "space weord",
        description: "a sword that fell from space",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjm18t61HpVScoE8JJD_s5sWoTOwMpzPa-gA&usqp=CAU",
        probability: 0.55,
        buyPrice: 1000000,
        sellPrice: 200000,
    },
    {
        name: "ice and fire sword",
        description: "you can use fire and ice both",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMvlvf2M4sgB_0gAe3nLgdfpNANZRBhbKHA&usqp=CAU",
        probability: 0.50,
        buyPrice: 1500000,
        sellPrice: 500000,
    },
    {
        name: "electric sword",
        description: "electric fairy in this sword",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjFU75qu_NqnwIJRhsg1i7PUlVQA_u7rzLg&usqp=CAU",
        probability: 0.40,
        buyPrice: 300000,
        sellPrice: 1000000,
    },
    {
        name: "wand",
        description: "it is elder tree",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIMJYLaJa5g4uRGtL81Ismp-NSm9D9SZ8iQ&usqp=CAU",
        probability: 0.33,
        buyPrice: 100000000,
        sellPrice: 3000000,
    },
    {
        name: "transparent sword",
        description: "this sword is very strong",
        imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC",
        probability: 0.25,
        buyPrice: 200000000,
        sellPrice: 10000000,
    },
    {
        name: "Artisan's Sword",
        description: "used by artisan",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2oXLeRoT3TeZNKTJR1_3RLTAP05VdvEFMA&usqp=CAU",
        probability: 0.15,
        buyPrice: 250000000,
        sellPrice: 20000000,
    },
    {
        name: "punch",
        description: "yout strenght is max level",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxfYkZZRWpljt-ZIWQRpjylCfzYp_NW4eFw&usqp=CAU",
        probability: 0.10,
        buyPrice: 300000000,
        sellPrice: 30000000,
    },
    {
        name: "laser sword",
        description: "made in star wars",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS132b6v2y1Lu9Eopsf9j5hpqCvvg1gx1WmZQ&usqp=CAU",
        probability: 0.05,
        buyPrice: 50000000,
        sellPrice: 30000000,
    },
    {
        name: "hero sword",
        description: "hero not won demon king",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rNIZRUnp-1_gi4vswioW73WRa5vweSJj8A&usqp=CAU",
        probability: 0.01,
        buyPrice: 10000000000,
        sellPrice: 50000000,
    },
    {
        name: "Demon King's Sword",
        description: "use by demon king",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tPVotPQI_-dZPNj3Aw9jUDOSV8t8fLwg4g&usqp=CAU",
        probability: 0.009,
        buyPrice: 20000000000000,
        sellPrice: 100000000000000000000000000000000000000000,
    },
    {
        name: "???",
        description: "???",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaB6sSS_50IOzdUjkXR-vL7CCqcdmxTCtfDA&usqp=CAU",
        probability: 0.00000000000000000000001,
        buyPrice: 2000000,
        sellPrice: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    },
]

const HTML_NAME = document.getElementById("name");
const HTML_DESCRIPTION = document.getElementById("description");
const HTML_IMG = document.getElementById("img");
const HTML_MONEY = document.getElementById("money")
const HTML_UPGRADE_BUTTON = document.getElementById("upgrade");
const HTML_BUY_BUTTON = document.getElementById("buy");
const HTML_SELL_BUTTON = document.getElementById("sell");

let currentLevel = 0;
let money = 0;

function displaySword() {
    const currentSword = swords[currentLevel];
    HTML_NAME.innerText = currentSword.name;
    HTML_DESCRIPTION.innerText = currentSword.description;
    HTML_IMG.src = currentSword.imgSrc;

    HTML_UPGRADE_BUTTON.innerText = `Upgrade! (${currentSword.probability * 100}%)`
    HTML_SELL_BUTTON.innerText = `Sell ($${currentSword.sellPrice}) 💰`
    HTML_BUY_BUTTON.innerText = `Buy ($${currentSword.buyPrice}) 💰`
}

function upgrade() {
    const currentSword = swords[currentLevel];
    const randomProbability = Math.random();
    if (randomProbability < currentSword.probability) {
        currentLevel = currentLevel + 1;
        displaySword();
    } else {
        alert("UPGRADE FAILED");
        resetgame();
    }
}

function resetgame() {
    currentLevel = 0;
    displaySword();
}
function sell() {
    const currentSword = swords[currentLevel];
    money = money + currentSword.sellPrice;
    HTML_MONEY.innerText = money;
    resetgame();
}

function buy() {
    const currentSword = swords[currentLevel]
    if (money < currentSword.buyPrice) {
        alert("You are poor!")
    } else {
        currentLevel = currentLevel + 1;
        money = money - currentSword.buyPrice;
        HTML_MONEY.innerText = money;
        displaySword()
    }
}

displaySword();


// 1. Github Pages 를 통해서, 웹사이트에 배포하기 (유투브 검색)
    // 선생님한테 링크 보내주세요
// 2. 마지막 검까지 간거 선생님한테 스크린샷 찍어서 보내기


