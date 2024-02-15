let imgSrc = [
    "https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png",
    "sunny-leone-profile-1520239159.jpg",
    "anu.jpg"
    
];

let box = document.querySelector(".box");

let uniqueArray=[]
window.onload = () => {


    for (let i = 0; i < imgSrc.length; i++) {
        let div = document.createElement("div");
        div.classList.add("class");
        let img = document.createElement("img");
        let randomInd = Math.floor(Math.random() * imgSrc.length); 

        //  uniqueArray.push(randomInd)

        if(!uniqueArray.includes(randomInd)){
            // uniqueArray=""
            uniqueArray.push(randomInd)
        }
        else{
          
        }

        uniqueArray.forEach((uniqueId)=>{

            img.src = imgSrc[uniqueId]; 
            img.classList.add("class1");
            
            div.appendChild(img);
            box.appendChild(div);

        })

       

        console.log(uniqueArray);
    }
}








