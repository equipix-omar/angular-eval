import {ModelBase} from "../Base/base.model";

export class CategoryModel extends ModelBase {

  public name!: string;
  public parent_id!: number;
  public parent!: any;
  public image!: string;

  public children: {
    id: number,
    name: string,
    parent_id: number,
    parent: any,
    image: string,
  } [] = [];

  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
      "name": this.name,
      'parent_id': this.parent_id,
      'parent': this.parent,
      'children': this.children,
      'image': this.image,
    };
  }

}
