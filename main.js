let food=[
    {
        name:"ss hyderabad briyani",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
        cuisine:"briyani,north indian",
        rating:"4.3",
        min:"22mins",
        rs:"150 for two",
        devi:" FREE DELIVERY"
    },
    {
        name:"ss hyderabad briyani",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
        cuisine:"briyani,north indian",
        rating:"4.3",
        min:"22mins",
        rs:"150 for two",
        devi:" FREE DELIVERY"
    },
    {
        name:"ss hyderabad briyani",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
        cuisine:"briyani,north indian",
        rating:"4.3",
        min:"22mins",
        rs:"150 for two",
        devi:" FREE DELIVERY"

        
    
    },
    {
        name:"ss hyderabad briyani",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
        cuisine:"briyani,north indian",
        rating:"4.3",
        min:"22mins",
        rs:"150 for two",
        devi:"FREE DELIVERY"
    },
    {
        name:"ss hyderabad briyani",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
        cuisine:"briyani,north indian", 
        rating:"4.3",
        min:"22mins",
        rs:"150 for two",
        devi:"FREE DELIVERY"
    },
    {
        name:"ss hyderabad briyani",
        imageurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
        cuisine:"briyani,north indian",
        rating:"4.3",
        min:"22mins",
        rs:"150 for two",
        devi:"FREE DELIVERY"
    }
]
let cont=document.querySelector(".container");

let cards=document.createElement("div");
cards.classList.add("row");
cont.appendChild(cards);
food.forEach(e=>{
    let div=document.createElement("div");
div.classList.add("col");
cards.appendChild(div);


let div2=document.createElement("div");
div2.classList.add("col-card");
div.appendChild(div2);


let img=document.createElement("img");
img.src=e.imageurl;
div2.appendChild(img);

let head=document.createElement("h2");
head.innerHTML=e.name;
div2.appendChild(head);


let para=document.createElement("p");
 para.innerHTML=e.cuisine;
div2.appendChild(para);

let div3=document.createElement("div");
div3.classList.add("rate");
div2.appendChild(div3);


let para1=document.createElement("p");
para1.innerHTML=e.rating;
div3.appendChild(para1);

let para2=document.createElement("p");
para2.innerHTML=e.min;
div3.appendChild(para2);

let para3=document.createElement("p");
para3.innerHTML=e.rs;
div3.appendChild(para3);

let div4=document.createElement("div");
div4.classList.add("rate1");
div2.appendChild(div4);

let para4=document.createElement("p");
para4.innerHTML=e.devi;
div4.appendChild(para4);



let div8=document.createElement("div");
    div8.classList.add("add");
    div2.appendChild(div8);

    let neg=document.createElement("button");
    neg.innerHTML="-";
    div8.appendChild(neg);

    neg.addEventListener("click",function(){
        if(type.value>0){
            --type.value;
        }
    })

    let type=document.createElement("input");
    type.value="0";
    div8.appendChild(type);

    let plus=document.createElement("button");
    plus.innerHTML="+";
    div8.appendChild(plus)

    plus.addEventListener("click",function(){
        ++type.value;
    })


})