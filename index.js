"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    var data = response.data;
    var id = data.id;
    var title = data.title;
    var completed = data.completed;
    logData(id, title, completed);
});
var logData = function (id, title, completed) {
    console.log("Id is: " + id + ", \n    Title is: " + title + ",\n    Is it completed? " + completed + "\n    ");
};
