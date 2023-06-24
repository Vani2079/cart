const addButtonEle=document.querySelector("#addButton");
const cartItemsEle=document.querySelector("#cartItems");
function items(){
    const newDiv=document.createElement("div");
    newDiv.className="cartItem";
    const image=document.createElement("img");
        image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93eDXmrxwTIhp11AzLA0NLSjzuBtWJwyzD_tAc5DKtA&s");
        image.setAttribute("alt","Not found");
    const h5Ele=document.createElement("h5");
    h5Ele.textContent="Item 1";
    const button1Ele=document.createElement("button");
    button1Ele.className="item";
    button1Ele.textContent="+";
    const h5Ele2=document.createElement("h5");
    h5Ele2.textContent="1";
    const button2Ele=document.createElement("button");
    button2Ele.className="item";
    button2Ele.textContent="-";
    const removeButton=document.createElement("button");
    removeButton.textContent="Remove";
    removeButton.className="buttonRemove";



    // const para=document.createElement("p");
    // para.textContent="vani";
    newDiv.appendChild(image);
    newDiv.appendChild(h5Ele);
    newDiv.appendChild(button1Ele);
    newDiv.appendChild(h5Ele2);
    newDiv.appendChild(button2Ele);
    newDiv.appendChild(removeButton);
    cartItemsEle.appendChild(newDiv);
    

}
addButtonEle.addEventListener("click",items,false);