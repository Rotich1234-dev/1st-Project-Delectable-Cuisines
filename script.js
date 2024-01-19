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
        // Get the container where menu items will be displayed
        const menuContainer = document.getElementById("menu");
        // Iterate through the data and create menu items dynamically

        dataArray.forEach(data => {
            data.menuItems.forEach(item => {
                const menuItemDiv = createMenuItem(item);
                menuContainer.appendChild(menuItemDiv);
            });
        });
    })
    .catch(error => console.error("Error fetching menu items:", error));
    // Create a div for the menu item
    function createMenuItems(item){
        const menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menuItem");
        
        const img = document.createElement("img");
        img.src = item.image;
        menuItemDiv.appendChild(img);

        const name = document.createElement("h3");
        name.textContent = item.title;
        menuItemDiv.appendChild(name);
// Add a "Like" button with event listener
        const likeButton = document.createElement("button");
        likeButton.classList.add("likeButton");
        likeButton.textContent = "Like";
        likeButton.addEventListener("click", () => {
            alert(`Liked ${item.title}`);
            menuItemDiv.classList.add("liked");
        });
        menuItemDiv.appendChild(likeButton);
// Add a "Comment" button with event listener
        const commentButton = document.createElement("button");
        commentButton.classList.add("commentButton");
        commentButton.textContent = "Comment";
        commentButton.addEventListener("click", () => {
            const comment = prompt("Add a comment:");
            if (comment) {
                displayComment(menuItemDiv, comment);
            }
        });
        menuItemDiv.appendChild(commentButton);

    }


})
