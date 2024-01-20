# My-Delectable-Cuisine
## Project Description

Welcome to my innovative Restaurant Ordering System! This system is designed to enhance your dining experience by providing a seamless platform to explore our diverse menu, place orders, express your appreciation with likes, and engage with our community through comments. Powered by the Spoonacular API, our system allows you to discover a variety of delectable dishes, from savory chicken delights to mouthwatering burgers and sweet treats like Snickers. Whether you're a food enthusiast or just looking to satisfy your cravings, our user-friendly interface lets you easily place and manage orders, cancel them if needed, express your liking for a particular dish, and even share your thoughts through comments. Join us on a culinary journey where technology meets taste, making your dining experience both enjoyable and interactive.

## Main Objectives
The user should be able to:
a. View the menu items
b. Place an order
c. Like menu items
d. Comment on the menu item
e. Be able to cancel an order

This site is live at https://rotich1234-dev.github.io/1st-Project-Delectable-Cuisines/

## Technology implemented
- HTML
- CSS
- Javascript


## Set Up

To execute this code when DOM is fully loaded, follow this steps
1. clone the repository
```bash
git clone git@github.com:Rotich1234-dev/1st-Project-Delectable-Cuisines.git
```
2. navigate to project repository
```bash
cd 1st-Project-Delectable-Cuisines
```
3. open code editor preferably visual studio
```bash
code .
```
4. Open the index.html file in your preferred web browser.

## Implementation

1. Ensure the DOM is fully loaded before executing the code.
```bash
document.addEventListener("DOMContentLoaded", function () {
    // ... (existing code)
});
```

2. Obtain an API key from Spoonacular and replace the placeholder apiKey variable value with your actual API key.
```bash
const apiKey = "your-actual-api-key(9aeb052b09c44418aa30cc35a475f19f)";
```

3. Customize the queries array with your desired search terms.
```bash
const queries = "chicken", "burger", "snickers"];
```

4. Customize the API URLs .

``` bash
const apiUrl1 = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=${queries.join("&query=")}`;
const apiUrl2 = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=${queries.join("&query=")}`;
```
5. fetch from both APIs 
```bash
Promise.all([fetch(apiUrl1), fetch(apiUrl2)])
```

6. Open the index.html file in a web browser.



## Author:
Rotich Jane 

jeanetterotich@gmail.com


You can view the project on browser through this link
```bash
 https://rotich1234-dev.github.io/1st-Project-Delectable-Cuisines/
```