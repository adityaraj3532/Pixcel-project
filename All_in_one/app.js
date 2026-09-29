let search_input =document.getElementById("search_input");
let search_btn = document.getElementById("search_btn")
let output = document.getElementById("output");

search_btn.addEventListener("click",() => {
     const url = "https://reqres.in/api/users/2";
    fetch(url)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res.data.email)
        output.textContent=res.data.email
        
    })
    .catch((err)=>console.log(err))
   
    }) 


// HOW TO FETCH DATA?
// AnalyserNode. TO FETCH the data we have to understand promise
// fetch return a promise to resolve the promsie 
// we have to keyword
//  .then run when promise is full-filled
// .catch will run when promise is rejected or we can say if we get any error
// to fetch a data call a fetch function with api argument


// fetch(url)
//         .then((res)=> {
//             console.log(res.url);

//             let img = document.createElement("img");
//             img.src = res.url;
//             document.body.appendChild(img);
        
//         })