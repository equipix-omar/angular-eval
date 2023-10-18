import {Pagination} from '../../models/Base/pagination';

export abstract class BaseSerializer {

	public adaptList(items: any, pagination: any = null): [] {
		let list: [] = [];
		// @ts-ignore
		list['pagination'] = 0;

		for (let item of items) {
			let singleItem = this.adapt(item);

			// @ts-ignore
			list.push(singleItem.list());
		}

		if (pagination){
			let paginationObject = new Pagination(pagination);

			// @ts-ignore
			list['pagination'] = paginationObject.list();
		}

		return list;
	}

	abstract adapt(item: any): {};
}

