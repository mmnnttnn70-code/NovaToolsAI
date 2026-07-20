const input = document.getElementById("inputText");
const output = document.getElementById("outputText");

document.getElementById("summaryBtn").onclick = () => {
    output.value =
`📝 Summary is under development.

Original Length: ${input.value.length} characters.`;
};

document.getElementById("copyBtn").onclick = () => {
    navigator.clipboard.writeText(output.value);
    alert("Copied!");
};