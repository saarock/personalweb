import { saarock } from "https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/dist/index.js";

const errorBtn =document.querySelector(".error");
const successBtn = document.querySelector(".success");
const loadingBtn = document.querySelector(".loading");
const warningBtn = document.querySelector(".warning");


errorBtn.onclick = () => {
    saarock.error({
        message: "This is your error Message."
    });
};

successBtn.onclick = () => {
    saarock.success({
        message: "This is your success Message.",
        comeFrom: "TOP",
        leaveFrom: "BOTTOM"
    });
};



loadingBtn.onclick = () => {
    saarock.loading({
        message: "This is your loading Message.",
        position: "left",
    });
};


warningBtn.onclick = () => {
    saarock.warning({
        message: "This is your warning Message.",
        position: "middle",
        comeFrom: "BOTTOM",
        leaveFrom: "TOP",
    });
};
