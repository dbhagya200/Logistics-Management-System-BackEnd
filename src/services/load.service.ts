import Load from "../model/load.model";
import {LoadDTO} from "../dto/load.dto";

export const getAllLoads = async ():Promise<LoadDTO[]> => {
    return Load.find();
}

export const getLoadByUsername = async (username:string):Promise<any> => {
    return  Load.findOne({cust_username: username});
}

export const createLoad = async (data:LoadDTO) => {
    return await Load.create(data);
}

export const updateLoad = async (username:string, data:LoadDTO) => {
    const load = await Load.findOneAndUpdate({cust_username: username}, data, {new: true});
    if (!load) {
        return null;
    }
    Object.assign(load, data);
    return load;
}

export const deleteLoad = async (username:string) => {
    await Load.deleteOne({cust_username: username});
    return true;
}

/*
export const validateLoad =  (load:LoadDTO) => {
    if(!load.cust_username || !load.description || !load.weight || !load.volume || !load.vehicle_number) {
        return "All fields are required";
    }
    return true;
}*/
