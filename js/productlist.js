fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper igennem og kalder show product
  products.forEach(showProduct);
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".pris").textContent = product.price;
  copy.querySelector(".prisnu").textContent = product.price;
  copy.querySelector(".prisfor").textContent = product.price;

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  /*
  if (product.discount) {
    //produktet er på tilbud
    copy.querySelector("pris").classlist.add(".prisfor");
  }
  */

  copy.querySelector(".produktbillede").setAttribute("href", `product.html?id=${product.id}`);

  //husk at append
  document.querySelector("main").appendChild(copy);
}
