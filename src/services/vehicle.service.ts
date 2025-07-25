import {VehicleDTO} from "../dto/vehicle.dto";
import Vehicle from "../model/vehicle.model";

export const getAllVehicles = async ():Promise<VehicleDTO[]> => {
    return Vehicle.find();
}

export const saveVehicle = async (vehicle:VehicleDTO) => {
    return Vehicle.create(vehicle);
}

export const getVehicleByNumber = async (number: string): Promise<any> => {
    return Vehicle.findOne({vehicle_number: number});
}

export const updateVehicle = async (number: string, data: VehicleDTO) => {
    const vehicle = await Vehicle.findOneAndUpdate({vehicle_number: number}, data, {new: true});
    if (!vehicle) {
        return null;
    }
    Object.assign(vehicle, data);
    return vehicle;
}

export const deleteVehicle = async (number: string) => {
    await Vehicle.deleteOne({vehicle_number: number});
    return true;
}
export const validateVehicle = (vehicle: VehicleDTO) => {
    if (!vehicle.vehicle_number || !vehicle.vehicle_type || !vehicle.capacity || !vehicle.status) {
        return "All fields are required";
    }
    return null;
}

