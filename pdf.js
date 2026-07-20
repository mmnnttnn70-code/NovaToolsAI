const openBtn = document.getElementById("openBtn");
const result = document.getElementById("result");
const pdfFile = document.getElementById("pdfFile");

openBtn.onclick = () => {

    if (pdfFile.files.length === 0) {

        result.innerHTML =
        "Please select a PDF file.";

        return;
    }

    result.innerHTML =
`📄

${pdfFile.files[0].name}

PDF support will be added soon.`;

};