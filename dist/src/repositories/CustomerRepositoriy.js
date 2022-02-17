"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerRepository {
    create(customer) {
        CustomerRepository.customers.push(customer);
    }
    findAll() {
        return CustomerRepository.customers;
    }
}
exports.default = CustomerRepository;
CustomerRepository.customers = [];
//# sourceMappingURL=CustomerRepositoriy.js.map