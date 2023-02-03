//https://kea-alt-del.dk/t7/api/products/1165

fetch("https://kea-alt-del.dk/t7/api/products/1165")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".kurv h3").textContent = product.productdisplayname;
  document.querySelector(".kurv .brand").textContent = product.brandname;
  document.querySelector(".kurv .color").textContent = product.basecolour;
  document.querySelector(".kurv .pris").textContent = product.price + ",-";
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
