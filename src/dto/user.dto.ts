import {RoleEnum} from "../enum/role.enum";
import {StatusEnum} from "../enum/status.enum";

export interface UserDTO {
    user_id:number;
    username:string;
    email:string;
    password:string;
    role:RoleEnum;
    status:StatusEnum;
}