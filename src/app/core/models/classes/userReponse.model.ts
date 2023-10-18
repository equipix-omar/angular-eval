import { ModelBase } from "../Base/base.model";

export class userResponseModel {
    public name!: string;
    public email!: string;
    public phone!: string;
    public message!: string;
    public body!: Body;
    public pagination: any; // You can define a specific type for pagination if needed
}

 export class Body {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public is_active!: number;
    public joining_date!: string;
    public device_token!: string | null;
    public device_type!: string | null;
    public logo!: string | null;
    public is_verified!: boolean;
    public role!: string | null;
}
