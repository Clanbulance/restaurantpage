//this is the page that will load the Menu.

const MenuContent = () => {
    const content = document.getElementById("content");
    const MenuPage = document.createElement("div");
    const MenuList = document.createElement("ul");
    const ListItem = document.createElement("li");
    const ListItem2 = document.createElement("li");
    const ListItem3 = document.createElement("li");

    ListItem.textContent = "Minced Meat x 5";
    ListItem2.textContent = "Tuna x 5";
    ListItem3.textContent = "vegetarian X 3";
    
        
     content.appendChild(MenuPage);
     MenuPage.appendChild(MenuList);
     MenuList.appendChild(ListItem);
     MenuList.appendChild(ListItem2);
     MenuList.appendChild(ListItem3);
   
    
     
};


export default MenuContent;


