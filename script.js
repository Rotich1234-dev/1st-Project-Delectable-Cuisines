// Execute code when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "9aeb052b09c44418aa30cc35a475f19f";
    const queries = ["chicken", "burger", "snickers"];

    const apiUrl1 = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=${queries.join("&query=")}`;
    const apiUrl2 = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=${queries.join("&query=")}`;

    Promise.all([fetch(apiUrl1), fetch(apiUrl2)])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(dataArray => {
            const menuContainer = document.getElementById("menu");

            dataArray.forEach(data => {
                data.menuItems.forEach(item => {
                    const menuItemDiv = createMenuItems(item); // Fix the function name
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

// order button
        const orderButton = document.createElement("button");
        orderButton.classList.add("orderButton");
        orderButton.textContent = "Order";
        orderButton.addEventListener("click", () => {
            displayOrderConfirmation(menuItemDiv, item.title);
        });
        menuItemDiv.appendChild(orderButton);
// button to allow cancelling an order placed
        const cancelOrderButton = document.createElement("button");
        cancelOrderButton.classList.add("cancelOrderButton");
        cancelOrderButton.textContent = "Cancel Order";
        cancelOrderButton.addEventListener("click", () => {
            cancelOrder(menuItemDiv, item.title);
        });
        menuItemDiv.appendChild(cancelOrderButton);

        const commentsSection = document.createElement("div");
        commentsSection.classList.add("comments");
        menuItemDiv.appendChild(commentsSection);
// show confirmation message for order placed
        const orderConfirmation = document.createElement("p");
        orderConfirmation.classList.add("orderConfirmation");
        menuItemDiv.appendChild(orderConfirmation);

        return menuItemDiv;
    }
    // display comment made on menu item
    function displayComment(menuItemDiv, comment) {
        const commentsSection = menuItemDiv.querySelector(".comments");
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.textContent = comment;
        commentsSection.appendChild(commentDiv);
    }
    // display order confirmation message
    function displayOrderConfirmation(menuItemDiv, itemName) {
        const orderConfirmation = menuItemDiv.querySelector(".orderConfirmation");
        orderConfirmation.textContent = `Order placed for ${itemName}`;
        
        // color of confirmation message
        orderConfirmation.style.color = "green"; 
    }
    // cancel order message
    function cancelOrder(menuItemDiv, itemName) {
        const orderConfirmation = menuItemDiv.querySelector(".orderConfirmation");
        orderConfirmation.textContent = `Order for ${itemName} has been canceled!!`;
        
        
        orderConfirmation.style.color = "red"; 
    }
});
