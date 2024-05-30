// javascriptimages gallery work//
function toggleCategory(categoryId) {
    const selectedCategory = document.getElementById(categoryId);

    if (selectedCategory) {
        const isHidden = selectedCategory.style.display === 'none' || selectedCategory.style.display === '';
        const displayValue = isHidden ? 'flex' : 'none';

        const allCategoryImages = document.querySelectorAll('.category-images');

        allCategoryImages.forEach(category => {
            category.style.display = 'none';
        });

        selectedCategory.style.display = displayValue;
    }
};