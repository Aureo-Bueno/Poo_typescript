"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("../models/Customer"));
class CustomerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    create(data) {
        const customer = new Customer_1.default(data.name, data.phone, data.age);
        this.customerRepository.create(customer);
    }
    findAll() {
        const customersNames = this.customerRepository.findAll().map((customer) => customer.getName());
        return customersNames;
    }
}
exports.default = CustomerService;
//# sourceMappingURL=CustomerService.js.map