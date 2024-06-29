//----------------QUESTION 1------------------------------------------
/*write a simple asychronous Typescript function fetchGreeting that returns a greeting message
after a 2-second delay using setTimerout*/
async function fetchGreeting() {
    return new Promise((resolve,reject)=>
    setTimeout(()=>{
        resolve("Hello! WELCOME IN MY PROFILEq1");
    },2000)
    )
}
/*call the function and log the result*/
fetchGreeting().then((result)=>{
    console.log(result);
});
//---------------------------------------------------------------------------------------------------------

//------------------------QUESTION 2----------------------------------------------------
/*write a function simulateTask that simulates a task by logging "Task started" waits for 1-second
and then log "Task completed". use setTimeout for the delay*/
function simulateTask(){
    console.log("Task started q2");
    setTimeout(() => {
        console.log("Task completed q2");
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
            resolve("Data fetched successfully! q3");
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
                resolve("Data fetched successfully! q4");
                }else{
                    reject("Data fetch failed! q4");
                }
                },1000)
            })
        }
fetchWithError().then((resolve)=>{console.log(resolve)})
fetchWithError().catch((reject)=>{console.log(reject)})
//--------------------------------------------------------------------------------------

//----------------------QUESTION 5---------------------------------------------------
/*Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called.*/
function fetchData1(){
    return new Promise((resolve,reject)=>{
        resolve("Data fetched successfully! q5")
        })
    }
function processData1(data:any){
    return new Promise((resolve,reject)=>{
        resolve(`Data processed successfully q5! ${data}`)
        })
    }
function executeSequentially(){
     fetchData1().then((data)=>{
        processData1(data).then((processedData)=>{
         console.log(processedData)
        })
        })
    }
executeSequentially()
            







