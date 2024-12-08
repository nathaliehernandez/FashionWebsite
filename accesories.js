let cartCount = 0; 
const savedItems = []; /

function saveToList(productName) {
    if (!savedItems.includes(productName)) {
        savedItems.push(productName);
        cartCount++;
        updateCartCount();
        alert(`${productName} has been saved to your list!`);
    } else {
        alert(`${productName} is already in your list!`);
    }
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cartCount;
}

document.querySelectorAll(".star-rating").forEach((ratingSection) => {
    ratingSection.addEventListener("click", (event) => {
        if (event.target.tagName === "SPAN") {
            const selectedValue = event.target.dataset.value;
            const display = ratingSection.parentElement.querySelector("#rating-display");
            display.textContent = `Rating: ${selectedValue}`;
        }
    });
});


const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert("Please enter a search query.");
    }
});

