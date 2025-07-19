import {RoleEnum} from "../enum/role.enum";
import {StatusEnum} from "../enum/statusEnum";

export interface UserModel{
    user_id:number;
    username:string;
    password:string;
    role:RoleEnum;
    status:StatusEnum;
}