const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const fromLang = document.getElementById("fromLang");
const toLang = document.getElementById("toLang");

const translateBtn = document.getElementById("translateBtn");
const swapBtn = document.getElementById("swapBtn");
const copyBtn = document.getElementById("copyBtn");

translateBtn.addEventListener("click", () => {

    const text = inputText.value.trim();

    if (text === "") {
        alert("Please enter some text.");
        return;
    }

    outputText.value =
`🚧 Translator is under development.

From: ${fromLang.options[fromLang.selectedIndex].text}

To: ${toLang.options[toLang.selectedIndex].text}

Text:
${text}

AI translation will be enabled soon.`;

});

swapBtn.addEventListener("click", () => {

    const temp = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = temp;

    const tempText = inputText.value;
    inputText.value = outputText.value;
    outputText.value = tempText;

});

copyBtn.addEventListener("click", () => {

    if (outputText.value === "") {
        alert("Nothing to copy.");
        return;
    }

    navigator.clipboard.writeText(outputText.value);

    alert("Copied!");

});