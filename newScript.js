const mainDivEle=document.querySelector(".mainDiv");
const cartItemsEle=document.querySelector("#cartItems");
const cartItems=[];

const DATA=[{
    id:1,
    name:"Item 1",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93eDXmrxwTIhp11AzLA0NLSjzuBtWJwyzD_tAc5DKtA&s"
  },
  {
    id:2,
    name:"Item 2",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZly4t3rdIz5XDJa4QIVwkNjkIEU3bRJVYbQ&usqp=CAU"
  },
  {
    id:3,
    name:"Item 3",
    image:"https://m.media-amazon.com/images/I/61w52pKpatL._AC_UF1000,1000_QL80_.jpg"
  }
];

function addCards(){
  for(let i=0;i<DATA.length;i++){
      const addCardsDiv=document.createElement("div");
      addCardsDiv.className="addItem";
      const img=document.createElement("img");
      img.setAttribute("src",DATA[i].image);
      const para=document.createElement("p");
      para.textContent=DATA[i].name;
      const addButton=document.createElement("button");
      addButton.onclick=handleItemAddition;
      //addButton.addEventListener("click",handleItemAddition,false);
      addButton.id=DATA[i].id;
      addButton.className="addButton";
      addButton.textContent="Add";
      addCardsDiv.appendChild(img);
      addCardsDiv.appendChild(para);
      addCardsDiv.appendChild(addButton);
      mainDivEle.appendChild(addCardsDiv);
    }
}
function handleItemAddition(e){
  const item=DATA.find(item=>item.id===parseInt(e.target.id));
 const items={
  id:e.target.id,
  name:item.name,
  image:item.image
 }
 const findId=cartItems.find(item=>item.id===parseInt(e.target.id));
 console.log(findId);
 if(findId){
  
 // rebuildCart();
 }
 else{
  
  cartItems.push(items);
  rebuildCart();
 }
 console.log(cartItems);
}


function rebuildCart(){
  cartItemsEle.textContent="";
  //  cartItemcheck=[];
    
    for(let i=0;i<cartItems.length;i++){
      
    const newDiv=document.createElement("div");
    newDiv.className="cartItem";
    const image=document.createElement("img");
        image.setAttribute("src",cartItems[i].image);
        image.setAttribute("alt","Not Found");
    const h5Ele=document.createElement("h5");
    h5Ele.textContent=cartItems[i].name;
    const button1Ele=document.createElement("button");
    button1Ele.className="item";
    button1Ele.textContent="+";
   
    let h5Ele2=document.createElement("h5");
    h5Ele2.textContent="1";
    h5Ele2.id="h5Ele2";
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
}
addCards();