function greet(subject,callback){
    console.log(`I love ${subject}`);
    callback();

};
function intro(){
    console.log('I love javascript');
}
greet('python',intro);



setTimeout(intro,8000);





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
function fetchData(id) {
    return fetch(id)
      .then(response => {
        if (!response.id) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });
  }
  
  function fetchMultipleAPIs(id) {
    const promises = id.map(id => fetchData(id));
    return Promise.all(promises);
  }
  
  // Example usage:
  const id = [
    1,2,3,4,5
  ];
  
  fetchMultipleAPIs(id)
    .then(results => {
      console.log('Combined Results:', results);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
  


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
    console.log("i will be confirmed");
}).catch(()=>console.log("task succesfully completed"))
.finally(()=>{
    console.log("error");
});
console.log({ourPromise});


function unstableTask(taskName,failureProbability){
  if(failureProbability>=10||failureProbability>=0){
      
  }

}


const successWish = async (number,taskName)=>{
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
successWish(2,"guessNumber")


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


