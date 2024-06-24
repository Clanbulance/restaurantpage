// this is the index module that will load everything
//goal. if content is empty, load MAIN. otherwise load whatever is clicked on


import MenuContent from "./menu.js";
import MainContent from "./main.js";
import AboutContent from "./about.js";

const pageContent = document.getElementById("content");

if (pageContent.firstChild !== false){
    MainContent();
};


const butCol = document.querySelectorAll("button");

butCol.forEach(element => element.addEventListener('click', function(){
    console.log(element.dataset.page + ` ` + `Has been clicked`);
    if (element.dataset.page == "MenuContent"){
        flushContent();
        MenuContent();
    }
    if (element.dataset.page == "MainContent"){
        flushContent()
        MainContent();
} 
    if (element.dataset.page == "AboutContent"){
        flushContent()
        AboutContent();
};
}));


const flushContent = () => {
    pageContent.firstChild.remove();
}

