import {RoleEnum} from "../enum/role.enum";
import {StatusEnum} from "../enum/status.enum";

export interface CustomerDTO {
    customer_id:number;
    fullName:string;
    username:string;
    password:string;
    nic:string;
    phoneNumber:string;
    email:string;
    address:string;
    city:string;
    postalCode:string;
    role:"CUSTOMER";
    status:"ACTIVE";

}