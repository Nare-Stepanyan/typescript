var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return (a - b);
};
console.log(subtract(8, 5));
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var logger = function (message) {
    console.log(message);
};
// never means functions will never go to execute the function completely
var throwError = function (message) {
    throw new Error(message);
};
var throwError1 = function (message) {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
var throwError2 = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
var forecast = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (forecast) {
    console.log(forecast.date);
};
var logWeather1 = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log("2", date);
};
logWeather(forecast);
logWeather1(forecast);
