const analyzeBtn = document.getElementById("analyzeBtn");
const imageFile = document.getElementById("imageFile");
const result = document.getElementById("result");

analyzeBtn.onclick = () => {

    if (imageFile.files.length === 0) {

        result.innerHTML =
        "Please choose an image.";

        return;
    }

    result.innerHTML =
`📷

Image:

${imageFile.files[0].name}

AI image analysis will be available soon.`;

};