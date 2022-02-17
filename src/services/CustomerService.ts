import ICreateCustomerDTO from "../dto/ICreateCustomerDTO";
import Customer from "../models/Customer";
import CustomerRepository from "../repositories/CustomerRepositoriy";


export default class CustomerService {
    private customerRepository: CustomerRepository

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository;
    }

    create(data: ICreateCustomerDTO){
      const customer: Customer = new Customer(data.name, data.phone, data.age)
      this.customerRepository.create(customer)
      
    }

    findAll(): string[]{
        const customersNames = this.customerRepository.findAll().map((customer: Customer) => customer.getName())
        return customersNames
    }
}