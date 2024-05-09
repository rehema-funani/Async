function greet(subject,callback){
    
    callback();

};
function intro(){
    console.log('I love javascript');
}
greet('javascript',intro);



setTimeout(intro,1000);





// const successWish = async ()=>{
//     await ourPromise;
//     console.log("my succesful wish");
// try{
//     await ourPromise;
//     console.log("my succesful wish");
// }
// catch{
//     console.log("my wish is not succesful");
// }
// }

// successWish()
// setTimeout(intro,2000);

// const interval = ()=>{
//     console.log("execute me")
// }
// setInterval(interval,3000)

// router.get('/:userName/favourites', asyncHandler( async (req, res) => {
//     const userName = req.params.userName;
//     const user = await User.findByUserName(userName);
//     res.status(200).json(user.favourites);
// }));
// function getUserDataId(id){
//     return fetch(id).then

// }

// function getId(peopleId){
//     const promise = peopleId.map(url => fetchDataFromAPI(url))
//     return Promise.all(promise)
//   }


// const peopleId = ["1222","3244255","56432"]
// getId(peopleId).then(message=>{console.log(message)})


const users = [1, 2, 3, 4, 5];
async function getUserid(iD) {
  for (let id of users) {
    if(iD==id)
    try {
      const userData = await userData(id);
      console.log(userData);
    } catch {
      console.log(iD);
    }
  }
}
getUserid(1);

  
  
  
 
  


    const task = true;
const ourPromise = new Promise((resolve,reject)=>{
    if(task){
        resolve("task completed succsfully")
    }
    else{
        reject("error in peerforming task")
    }
})
ourPromise.then(()=>{
    console.log("task will be completed");
}).catch(()=>console.log("task succesfully completed"))
.finally(()=>{
    console.log("error");
});
console.log({ourPromise});





const unstableTask= async (number,taskName)=>{
  if(number>0||number<10){
  await ourPromise;
  console.log("error");
try{
  await ourPromise;
  console.log("congratulations");
}
catch{
  console.log("try again");
}
}
}
unstableTask(2,"guessNumber")


const executeWithRetry = async (taskName,retries,failureProbability)=>{
  if(retries>=3){
  await ourPromise;
  console.log("try again");
try{
  await ourPromise;
  console.log("succeeded");
}
catch{
  console.log("failed");
}
}
}
executeWithRetry("numberGuess",3,"true")


