import ICreateCustomerDTO from "../dto/ICreateCustomerDTO";
import CustomerRepository from "../repositories/CustomerRepositoriy";
import CustomerService from "../services/CustomerService";

export default class CustomerController{
    
    static create(data: ICreateCustomerDTO){
        const customerService: CustomerService = new CustomerService( new CustomerRepository())
        customerService.create(data)

    }

    static findAll(){
        const customerService: CustomerService = new CustomerService( new CustomerRepository())
        return customerService.findAll()
    }
}