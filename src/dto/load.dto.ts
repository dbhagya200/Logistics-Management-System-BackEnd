
export interface LoadDTO{
    load_id?: number;
    cust_username: string;
    description: string;
    weight: number;
    volume: number;
    vehicle_number?: string;
    status: "PENDING" | "LOADED" | "DELIVERED" | "CANCELLED";
}