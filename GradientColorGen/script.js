const gradientBox = document.querySelector('.gradient-box');
const gradientDirection = document.querySelector('.select-box select');
const colorInputs = document.querySelectorAll('.colors input');
const textArea = document.querySelector('.wrapper textarea');
const refreshBtn = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy');

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {

    if(!isRandom){
        console.log(getRandomColor());
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }

    console.log("Color update...");
    const gradient = `linear-gradient(${gradientDirection.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    console.log(gradient);
    gradientBox.style.background = gradient;
    textArea.value =`background: ${gradient};`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerText = "Code copied!";
    setTimeout(() => copyBtn.innerText = "Copy CSS Code", 1600)
}

colorInputs.forEach( input => {
    input.addEventListener("input", generateGradient);
});

gradientDirection.addEventListener("change", generateGradient);
refreshBtn.addEventListener("click", () => generateGradient(false));
copyBtn.addEventListener("click", () => copyCode())