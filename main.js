var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//----------------QUESTION 1------------------------------------------
/*write a simple asychronous Typescript function fetchGreeting that returns a greeting message
after a 2-second delay using setTimerout*/
function fetchGreeting() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    return setTimeout(function () {
                        resolve("Hello! WELCOME IN MY PROFILEq1");
                    }, 2000);
                })];
        });
    });
}
/*call the function and log the result*/
fetchGreeting().then(function (result) {
    console.log(result);
});
//---------------------------------------------------------------------------------------------------------
//------------------------QUESTION 2----------------------------------------------------
/*write a function simulateTask that simulates a task by logging "Task started" waits for 1-second
and then log "Task completed". use setTimeout for the delay*/
function simulateTask() {
    console.log("Task started q2");
    setTimeout(function () {
        console.log("Task completed q2");
    }, 1000);
}
/*call the function*/
simulateTask();
//--------------------------------------------------------------------------------------------------------------
//-----------------QUESTION 3-----------------------------------------
/*write a function fetchData that returns a promise which resolve with the string "Data fetched successfully!"
after a delay of 1 second*/
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Data fetched successfully! q3");
        }, 1000);
    });
}
/*call the function and log the result*/
fetchData().then(function (result) {
    console.log(result);
});
//-------------------------------------------------------------------------------------------------
//-----------QUESTION 4-------------------------------------------------
/*write a function fetchWithError that returns a promise. it should randomly either resolve with
"Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second
Handle the rejection using .catch*/
function fetchWithError() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var randomly = Math.floor(Math.random() * 5 + 1);
            if (randomly < 1) {
                resolve("Data fetched successfully! q4");
            }
            else {
                reject("Data fetch failed! q4");
            }
        }, 1000);
    });
}
fetchWithError().then(function (resolve) { console.log(resolve); });
fetchWithError().catch(function (reject) { console.log(reject); });
//--------------------------------------------------------------------------------------
//----------------------QUESTION 5---------------------------------------------------
/*Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called.*/
function fetchData1() {
    return new Promise(function (resolve, reject) {
        resolve("Data fetched successfully! q5");
    });
}
function processData1(data) {
    return new Promise(function (resolve, reject) {
        resolve("Data processed successfully q5! ".concat(data));
    });
}
function executeSequentially() {
    fetchData1().then(function (data) {
        processData1(data).then(function (processedData) {
            console.log(processedData);
        });
    });
}
executeSequentially();
