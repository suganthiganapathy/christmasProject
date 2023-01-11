//setting the empty input value
let nameInputs=[];
let wishInputs=[];


// grabing the html elements
const nameInputElement=document.getElementById("name-input")
const wishInputElement=document.getElementById("wish-input")
const buttonElement=document.getElementById("btn")
const ulElement=document.getElementById("listInputs")
const wishElementList=document.getElementById("wishInputs")
const elementdiv=document.getElementById("wishListWithName");

// getting the values from local storage

const valueFromLocalStorage = JSON.parse(localStorage.getItem("name"))

const valueFromWishLocalStorage = JSON.parse(localStorage.getItem("wish"))

// creating eventlistner 
const deleteButton=document.getElementById("delete")
deleteButton.addEventListener("click",() =>{
    elementdiv.remove();
    localStorage.clear();
})

buttonElement.addEventListener("click", function inputButton(){
    nameInputs.push(nameInputElement.value)
    wishInputs.push(wishInputElement.value)

    // setting up the local storage
    localStorage.setItem("name",JSON.stringify(nameInputs))
   localStorage.setItem("wish",JSON.stringify(wishInputs))
    nameInputElement.value=""
    wishInputElement.value=""
    nameInputItems()
    wishInputItems()
 })


 function nameInputItems(){
    let nameItems="";

    for(let i=0;i<nameInputs.length;i++){

        nameItems += "<li>"+ "Name:"+ nameInputs[i]+"</li>";
        
    }
    ulElement.innerHTML=nameItems
}
 

function wishInputItems(){
    let wishItems="";

    for(let i=0;i<wishInputs.length;i++){

        wishItems += "<li>"+"Wish:"+wishInputs[i]+"</li>";
        
    }
    wishElementList.innerHTML=wishItems
}

