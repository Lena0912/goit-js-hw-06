const categoriesList = document.querySelectorAll('#categories .item');
const categoriesCount = categoriesList.length;
console.log('Number of categories:', categoriesList);

categoriesList.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const elementsList = category.querySelectorAll("ul li");
    const elementsCount = elementsList.length;
    console.log("Category:", categoryName);
    console.log("Elements:", elementsCount);
});


