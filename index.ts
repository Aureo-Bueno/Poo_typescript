import CustomerController from "./src/controllers/CustomerController";
import ICreateCustomerDTO from "./src/dto/ICreateCustomerDTO";

CustomerController.create(
    {
        name: "Aureo",
        phone: "(12)99999-0000",
        age: 19
    }as ICreateCustomerDTO
)

CustomerController.create(
    {
        name: "João Pedro",
        phone: "(12)88888-0000",
        age: 18
    }as ICreateCustomerDTO
)


console.log(CustomerController.findAll())