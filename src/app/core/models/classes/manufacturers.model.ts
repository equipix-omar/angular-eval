import {ModelBase} from "../Base/base.model";

export class ManufacturersModel extends ModelBase {

    public name!: string;

    public state_check!:string;

    constructor(id: number) {
        super(id);
    }

    public list() {
        return {
            'id': this.id,
            "name": this.name,
        };
    }

}
