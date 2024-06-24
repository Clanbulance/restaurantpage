const AboutContent = () => {
    const content = document.getElementById("content");
    const aboutPage = document.createElement("div");
    const title = document.createElement("h1");
    const text = document.createElement("p");

    aboutPage.classList.add("aboutPage");
    title.textContent = `Thank you!`;
    title.id = "about"; 
    text.textContent = "Thank you for visiting Momo's <br /> we hope you enjoyed our delicious food!";
    
     content.appendChild(aboutPage);
     aboutPage.appendChild(title);
     aboutPage.appendChild(text);
    
     
};


export default AboutContent;