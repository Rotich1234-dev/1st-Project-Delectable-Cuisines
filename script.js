// Execute code when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){
    // spoonacular key and queries predefined
    const apiKey = "9aeb052b09c44418aa30cc35a475f19f";
    const queries = ["chicken", "burger", "snickers"]; 
     // API for the first set of menu items
     const apiUrl1 = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=${queries.join("&query=")}`;

     // API for the second set of menu items
     const apiUrl2 = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=rice&query=chicken`;
    //  to make concurrent requests to both APIs

    Promise.all([fetch(apiUrl1), fetch(apiUrl2)])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(dataArray => {
        const menuContainer = document.getElementById("menu");

        dataArray.forEach(data => {
            data.menuItems.forEach(item => {
                const menuItemDiv = createMenuItem(item);
                menuContainer.appendChild(menuItemDiv);
            });
        });
    })
    .catch(error => console.error("Error fetching menu items:", error));


})
