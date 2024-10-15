// let promiseOne  = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve()
//         console.log("An async call done")},1000);
// });

// promiseOne.then(function(){
//     console.log("promise consume");
// })


// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("2nd async functionn called ");
//         resolve()
//     }, 2000);
// }).then(()=>{
//     console.log("2nd function resolve");
// })

// const promiseThree = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         console.log("third async call ");
//         // resolve({userName : "omkar" , Email :"omkar@example.com" , contact : 9322123456})
//         resolve(["omkar" , "sarthak" ,"pavan" , "sanket" , "siddhant"]);
//     }, 1000);
// });

// promiseThree .then((data)=>{
// console.log(data);
// });

/* *********************************************************************************************************************************************/

// const promiseFour= new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({userName :"Omkar" , password : "omkar123"});
//         }
//         else {
//             reject("ERROR : Something went wrong!!!");
//         }
//     }, 1000);
// });

// promiseFour 
// .then((data)=>{
//     console.log(data);
//     return data.userName
// })
// .then((name)=> 
//     console.log(name))
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Promise is resolved or either reject");
// })


///////////////////////////////////////////////////////////////////////////////////////////////////////////


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//                 let error = true;
//                 if(!error){
//                     resolve({userName :"Omkar" , password : "omkar123"});
//                 }
//                 else {
//                     reject("ERROR : Something went wrong!!!");
//                 }
//             }, 1000);
// });


// async function resolvePromise(){
//    try{
//     let response =  await promiseFive ;
//    console.log(response);
//    }
//    catch(err){
//     console.log(err);
//    }
//    finally{
//     console.log("promise either resolve or either reject");
//    }
// };

// resolvePromise()


/**************************************************************************************************************************  */
////  FETCH API 


/* async function fetchRequest (){
    try{
   const fetching = await fetch("https://jsonplaceholder.typicode.com/users");
   const fetchResponse = await fetching .json();
   console.log(fetchResponse.name);
    }
    catch(err){
        console.log("E : " , err);
    }
}

fetchRequest()

*/


fetch ("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
})
.then ((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

