const analyzeBtn = document.getElementById("analyzeBtn");
const input = document.getElementById("codeInput");
const output = document.getElementById("codeOutput");

analyzeBtn.onclick = () => {

    if (input.value.trim() === "") {
        output.value = "Please enter some code first.";
        return;
    }

    output.value =
`💻 Code Assistant

This feature is under development.

After connecting AI, Aivora will be able to:

• Explain code
• Fix errors
• Optimize code
• Convert between programming languages`;

};

document.getElementById("copyBtn").onclick = () => {

    if (output.value !== "") {
        navigator.clipboard.writeText(output.value);
        alert("Copied!");
    }

};