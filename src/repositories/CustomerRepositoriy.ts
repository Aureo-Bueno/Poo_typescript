import Customer from "../models/Customer";

export default class CustomerRepository{
    
    static customers: Customer[] = []

    create(customer: Customer){
        CustomerRepository.customers.push(customer)
    }

    findAll(): Customer[]{
        return CustomerRepository.customers
    }
}