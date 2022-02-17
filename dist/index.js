"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerController_1 = __importDefault(require("./src/controllers/CustomerController"));
CustomerController_1.default.create({
    name: "Aureo",
    phone: "(12)99999-0000",
    age: 19
});
CustomerController_1.default.create({
    name: "João Pedro",
    phone: "(12)88888-0000",
    age: 18
});
console.log(CustomerController_1.default.findAll());
//# sourceMappingURL=index.js.map