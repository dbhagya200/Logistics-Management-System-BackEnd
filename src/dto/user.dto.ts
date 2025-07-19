import {RoleEnum} from "../enum/role.enum";

export interface UserDTO {
    user_id:number;
    username:string;
    password:string;
    role:RoleEnum;
}