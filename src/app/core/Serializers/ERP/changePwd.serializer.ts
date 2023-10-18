import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {LoginModel} from "../../models/classes/login.model";
import { changePwdModel } from '../../models/classes/changePwd.model';

export class ChangePwdSerializer {

  fromJson(json: any): changePwdModel {
    return this.adapt(json.body);
  }

  
  toJson(model: changePwdModel): any {
    return {
      old_password: model.old_password,
      password: model.password,
      password_confirmation:model.password_confirmation,
    };
  }

  toFormData(fromData: any): FormData | null {
    return null;
  }

  public adapt(item: any): changePwdModel {
    if (!item) {
      return new changePwdModel();
    }

    let model = new changePwdModel();
    model.password=item.password;
    model.old_password=item.old_password;
    model.password_confirmation=item.password_confirmation;
    return model;
  }

  status(status: string): any {
    return {};
  }

}
