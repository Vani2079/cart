const addButtonEle=document.querySelector("#addButton");
const cartItemsEle=document.querySelector("#cartItems");
//const itemList =[];
let counter=0;


function items(){
  const currentItem={
    id: new Date().getTime(),
    counter:0
  };

   if(counter==0){
    const newDiv=document.createElement("div");
    newDiv.className="cartItem";
    const image=document.createElement("img");
        image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93eDXmrxwTIhp11AzLA0NLSjzuBtWJwyzD_tAc5DKtA&s");
        image.setAttribute("alt","Not found");
    const h5Ele=document.createElement("h5");
    h5Ele.textContent="Item 1";
    //itemList.push(h5Ele.textContent);
    
    const button1Ele=document.createElement("button");
    button1Ele.className="item";
    button1Ele.textContent="+";
   
    let h5Ele2=document.createElement("h5");
    counter=counter+1;
    h5Ele2.textContent=counter;
    button1Ele.addEventListener("click",incrementItem,false);
    
    const button2Ele=document.createElement("button");
    button2Ele.className="item";
    button2Ele.textContent="-";
    const removeButton=document.createElement("button");
    removeButton.textContent="Remove";
    removeButton.className="buttonRemove";

    newDiv.appendChild(image);
    newDiv.appendChild(h5Ele);
    newDiv.appendChild(button1Ele);
    newDiv.appendChild(h5Ele2);
    newDiv.appendChild(button2Ele);
    newDiv.appendChild(removeButton);
    cartItemsEle.appendChild(newDiv);

    }
else{
  document.getElementById("h5Ele2").innerHTML=currentItem.counter;
  // incrementItem(items);
}
}
function incrementItem(currentItem){
  currentItem.counter=counter++;
 console.log(currentItem.counter);
 // h5Ele2.textContent=currentItem.counter;
 document.getElementById("h5Ele2").innerText=currentItem.counter;
}

addButtonEle.addEventListener("click",items,false);