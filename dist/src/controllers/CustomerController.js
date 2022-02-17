"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerRepositoriy_1 = __importDefault(require("../repositories/CustomerRepositoriy"));
const CustomerService_1 = __importDefault(require("../services/CustomerService"));
class CustomerController {
    static create(data) {
        const customerService = new CustomerService_1.default(new CustomerRepositoriy_1.default());
        customerService.create(data);
    }
    static findAll() {
        const customerService = new CustomerService_1.default(new CustomerRepositoriy_1.default());
        return customerService.findAll();
    }
}
exports.default = CustomerController;
//# sourceMappingURL=CustomerController.js.map