import { registerImage } from "./lazy";

const container = document.querySelector(".container-ppl")
container.className = "flex flex-col items-center"

const card = document.createElement("div")
card.className = "bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
container.appendChild(card)

const title = document.createElement("h3")
title.innerText = "Fox Image"
title.className = "text-lg font-semibold text-gray-700 mb-4 text-center"
card.appendChild(title)

const buttomRiel = document.createElement("div")
buttomRiel.className = "flex items-center"
card.appendChild(buttomRiel)

const buttomNext = document.createElement("button")
buttomNext.innerText = "New Fox"
buttomNext.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 p-2"
buttomRiel.appendChild(buttomNext)

const loadFoxImage = async () => {
    const apiUrl = "https://randomfox.ca/floof/";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const foxImage = document.createElement("img");
        foxImage.width = 480;
        foxImage.dataset.src = data.image;
        foxImage.className = "bg-gray-300 rounded-lg shadow-md mt-4 p-1 w-full h-64";
        card.appendChild(foxImage);
        registerImage(foxImage);
    } catch (error) {
        console.error(error);
    }
};

const buttomClear = document.createElement("button");
buttomClear.innerText = "Clear Images";
buttomClear.className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded mb-4 ml-5";
buttomRiel.appendChild(buttomClear);

buttomClear.onclick = () => {
    const images = card.querySelectorAll('img');
    images.forEach(image => {
        card.removeChild(image);
    });
};

buttomNext.onclick = loadFoxImage;
loadFoxImage();