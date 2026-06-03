const result = document.getElementById("result");
const drawButton = document.getElementById("drawButton");

const fortunes = ["大吉", "中吉", "小吉", "凶", "大凶"];

drawButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);

    const fortune = fortunes[randomIndex];

    result.textContent = `${fortune}!`;

    // 毎回リセット
    result.style.backgroundColor = "";
    result.style.fontSize = "32px";


    if (fortune === "大吉") {
        result.style.color = "red";
        result.style.fontSize = "48px";
        result.style.backgroundColor = "yellow";
    } else if (fortune === "中吉") {
        result.style.color = "orange";
    } else if (fortune === "小吉") {
        result.style.color = "green";
    } else if (fortune === "大凶") {
        result.style.color = "purple";
    } else {
        result.style.color = "blue";
    }
});