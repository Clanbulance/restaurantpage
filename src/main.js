//this is the page that will get loaded on opening.
import pic from './momos.jpg';

const MainContent = () => {
    const content = document.getElementById("content");
    const mainPage = document.createElement("div");
    const title = document.createElement("h1");
    const picture = document.createElement("img");
    const text = document.createElement("p");

    mainPage.classList.add("mainPage");
    title.textContent = `Welcome to Momos!`;
    title.id = "Welcome";
    picture.src = pic;
    text.textContent = "Delicious minced meat filled tibethian snacks";
    
     content.appendChild(mainPage);
     mainPage.appendChild(title);
     mainPage.appendChild(picture);
     mainPage.appendChild(text);
    
     
};


export default MainContent;


