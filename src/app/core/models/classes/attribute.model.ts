import {ModelBase} from "../Base/base.model";

export class AttributeModel extends ModelBase {

  public name!: string;
  public type!: string;
  public description!: string;

  public values: {
    "name": string,
    "value": string
  } [] = [];


  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
      "name": this.name,
      'type': this.type,
      'description': this.description,
      'values': this.values,
    };
  }

}
