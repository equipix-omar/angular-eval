import { Body, userResponseModel } from "../../models/classes/userReponse.model";
import {Serializer} from '../Base/Serializer';

export class BodySerializer {
 static fromJson(json: any): Body {
    const body = new Body();
    body.name = json.name;
    body.email = json.email;
    body.id=json.id;
    body.phone = json.phone;
    body.is_active = json.is_active;
    body.joining_date = json.joining_date;
    body.device_token = json.device_token;
    body.device_type = json.device_type;
    body.logo = json.logo;
    body.is_verified = json.is_verified;
    body.role = json.role;
    return body;
  }

 static toJson(body: Body): any {
    return {
      id:body.id,
      name: body.name,
      email: body.email,
      phone: body.phone,
      is_active: body.is_active,
      joining_date: body.joining_date,
      device_token: body.device_token,
      device_type: body.device_type,
      logo: body.logo,
      is_verified: body.is_verified,
      role: body.role,
    };
  }
}

export class UserResponseSerializer {
   fromJson(json: any): userResponseModel {
    const userResponse = new userResponseModel();
    userResponse.message = json.message;
    userResponse.body = BodySerializer.fromJson(json.body);
    userResponse.pagination = json.pagination; // You can define a specific type for pagination if needed
    return userResponse;
  }

 toJson(userResponse: userResponseModel): any {
    return {
      message: userResponse.message,
      body: BodySerializer.toJson(userResponse.body),
      pagination: userResponse.pagination, // You can define a specific type for pagination if needed
    };
  }
}
