let productsIds = [];
let productDivs ={

};
let boxes = document.querySelector(".boxes");
function addProduct(id,src,name,link){
    let div = document.createElement("div");
    let img =  document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    img.setAttribute("src",src);
    p1.innerText= `Code - ${id}`;
    p2.innerText= `name - ${name}`;
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    productsIds.push(`${id}`);
    productDivs[id] = div;
    div.classList.add("box");
    p1.classList.add("code");
    p2.classList.add("name");
    img.classList.add("product-img");
    div.setAttribute("data-link",link);
    boxes.appendChild(div);
    makeClickable(div);
}

function makeClickable(div){
    div.addEventListener("click",()=>{
        window.location.href= div.getAttribute('data-link');
    });
}
addProduct(100,"100.jpg","Perfume Atomizer Bottle","https://amzn.to/41UlTXZ");
addProduct(456,"card1img.jpeg","product 2","/action-chcek");
addProduct(323,"card1img.jpeg","product 3","/action-chcek");
addProduct(675,"card1img.jpeg","product 4","/action-chcek");
addProduct(345,"card1img.jpeg","product 5","/action-chcek");
let input = document.querySelector("#search");

const search = ()=>{
    let text = input.value;
    boxes.replaceChildren();
    if(text == ""){
        for(id of productsIds) boxes.appendChild(productDivs[id]);
        return;
    }
    const reqIds = productsIds.filter((val) => val.startsWith(text));
    for(id of reqIds)  boxes.appendChild(productDivs[id]);
};
input.addEventListener("input",search);

