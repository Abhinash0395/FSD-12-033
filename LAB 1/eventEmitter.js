
import { EventEmitter } from "node:events";
const login = (name) => {
    console.log(`${name} logged in`);
};

const start = () => {
    console.log("System starts");
};

const working = (name) => {
    console.log(`${name} add items to cart`);
};

const checkout = (name) => {
    console.log(`${name} logged out`);
};

const task = new EventEmitter();
task.on("greeting",login);

task.emit("greeting", "Abhinash Rai");
task.emit("greeting", "Mudit Lohani");
