function generateStars(rating) {
    console.log('Generating stars for rating:',rating);
    let stars = '';
    for (let i= <= 5; i++) {
        stars += i <= rating? 
    }
    console.log(' Generated stars:', stars);
    return stars; 
}
let saveList = JSON.parse(localStorage.getItem('saveList')) || [];

// Function to update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = saveList.length;
}

// Add item to the save list
function addToSaveList(item) {
    saveList.push(item);
    localStorage.setItem('saveList', JSON.stringify(saveList));
    updateCartCount();
}

// Remove item from the save list (if needed)
function removeFromSaveList(item) {
    saveList = saveList.filter(savedItem => savedItem.id !== item.id);
    localStorage.setItem('saveList', JSON.stringify(saveList));
    updateCartCount();
}

// Update cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
</script>

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const searchInput = document.querySelector('.search input');
const productItems = document.querySelectorAll('.product-item');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    productItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.querySelectorAll('.banner-images img').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});


document.querySelectorAll('#reviews').forEach(reviewSection => {
    const reviewButton = document.createElement('button');
    reviewButton.textContent = 'Add Review';
    reviewButton.style.marginTop = '10px';
    reviewSection.appendChild(reviewButton);

    reviewButton.addEventListener('click', () => {
        const newReview = prompt('Enter your review:');
        if (newReview) {
            const blockquote = document.createElement('blockquote');
            blockquote.innerHTML = `<p>"${newReview}" - Anonymous</p>`;
            reviewSection.appendChild(blockquote);
        }
    });
});

// Sticky header (optional)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.box');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});