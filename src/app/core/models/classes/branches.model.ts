import {ModelBase} from "../Base/base.model";

export class BranchesModel extends ModelBase {

    public name!: string;
    public is_main!: boolean;
    public phone!: string;
    public status!: boolean;

    public address!: {
        id: number,
        line1: string;
        line2: string;
        city: string;
        state: string;
        zip: string;
    };

    public state_check!: any;

    public business_type_id!: number;

    public status_label!: string;

    constructor(id: number) {
        super(id);
        this.address = {
            id: 0,
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: '',
        };
    }

    public list() {
        return {
            'id': this.id,
            "name": this.name,
            'phone': this.phone,
            'business_type_id': this.business_type_id,
            'is_main': this.is_main,
            'status': this.status,
            'address': this.address,
            'status_label': this.status_label,
        };
    }

}
