document.addEventListener("DOMContentLoaded", () => {
    console.log("Script is running");  // Check if the script is loaded and executed

    const basePath = "product_pages/";  // Relative path to 'product_pages' folder

    const collectionLinks = document.querySelectorAll(".collection > a");

    collectionLinks.forEach((link, index) => {
        const productPath = `${basePath}product_page_${index + 1}.html`;
        console.log(productPath);  // Log the generated href to check the path
        link.href = productPath;
    });
});
