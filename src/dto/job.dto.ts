

export interface JobDTO{
    job_id: number;
    cust_username:string;
    pickup_location: string;
    drop_location: string;
    job_date: Date;
    status: string; // e.g., "PENDING", "IN_PROGRESS", "COMPLETED", "CANCELLED"

}