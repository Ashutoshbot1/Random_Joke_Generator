const jokeContainer=document.getElementById("joke");
var filterString="nsfw,religious,political,racist,sexist,explicit";
const button=document.getElementById("btn");
// const url=`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${filterString}&type=single`;
const filterBtn=document.getElementById("cate");
const filters=document.querySelectorAll("#filter");

document.getElementById("close").addEventListener(
    "click",
    function(){
        const filterArr=[];

    filters.forEach(

        (item)=>{
            
            if(item.checked){
                filterArr.push(item.getAttribute('name'))
            }

        }


    )

        filterString=filterArr.join(",");
        getJoke();

        jokeContainer.style.display="block";
        document.querySelector(".filter-container").style.display="none";
        button.style.display="block";
        document.querySelector(".emoji").style.fontSize="10rem";
    }
)


let getJoke=async ()=>{
    const url=`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${filterString}&type=single`;
    const response= await fetch(url);
    const data=await response.json();
    jokeContainer.innerHTML=data.joke;
    console.log(filterString)
    console.log(url);
}

function filter(){
    button.style.display="none";
    jokeContainer.style.display="none";
    document.querySelector(".filter-container").style.display="block";
    document.querySelector(".emoji").style.fontSize="6rem";

}


(
    function(){
        filters.forEach(
            (item)=>{
                item.checked=true;
            }
        )
    }
)()

getJoke();
