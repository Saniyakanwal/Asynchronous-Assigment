//----------------QUESTION 1------------------------------------------
/*write a simple asychronous Typescript function fetchGreeting that returns a greeting message
after a 2-second delay using setTimerout*/
async function fetchGreeting() {
    return new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve("Hello! WELCOME IN MY PROFILE");
    },2000)
    )
}
/*call the function and log the result*/
fetchGreeting().then((result)=>{
    console.log(result,);
});
//---------------------------------------------------------------------------------------------------------

//------------------------QUESTION 2----------------------------------------------------
/*write a function simulateTask that simulates a task by logging "Task started" waits for 1-second
and then log "Task completed". use setTimeout for the delay*/
function simulateTask(){
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
        }, 1000);
}
/*call the function*/
simulateTask();
//--------------------------------------------------------------------------------------------------------------

//-----------------QUESTION 3-----------------------------------------
/*write a function fetchData that returns a promise which resolve with the string "Data fetched successfully!"
after a delay of 1 second*/
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully!");
            },1000)
            })
}
/*call the function and log the result*/
fetchData().then((result)=>{
    console.log(result);
    });
//-------------------------------------------------------------------------------------------------

//-----------QUESTION 4-------------------------------------------------
/*write a function fetchWithError that returns a promise. it should randomly either resolve with
"Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second
Handle the rejection using .catch*/
function fetchWithError(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const randomly = Math.floor(Math.random()*5 + 1)
            if(randomly < 1){
                resolve("Data fetched successfully!");
                }else{
                    reject("Data fetch failed!");
                }
                },1000)
            })
        }
fetchWithError().then((resolve)=>{console.log(resolve)})
fetchWithError().catch((reject)=>{console.log(reject)})