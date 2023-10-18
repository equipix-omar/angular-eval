import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ProductsModel} from "../../models/classes/product.model";


export class ProductsSerializer extends BaseSerializer implements Serializer {

    fromJson(json: any): ProductsModel {
        return this.adapt(json.body);
    }

    fromJsonList(json: any): [] {
        return this.adaptList(json.body, json.pagination);
    }

    toJson(model: ProductsModel): any {
        let item = {
            title: model.title,
            manufacturer_id: model.manufacturer_id,
            manufacturer_model: model.manufacturer_model,
            cat_class: model.cat_class,
            description: model.description,

            daily_price: model.daily_price,
            weekly_price: model.weekly_price,
            monthly_price: model.monthly_price,
            min_rental_days: model.min_rental_days,
            prep_time_days: model.prep_time_days,

            deposit: model.deposit,
            delivery: model.delivery,
            delivery_price_mile: model.delivery_price_mile,
            delivery_min_fee: model.delivery_min_fee,
            allow_bidding: model.allow_bidding,
            category_id: model.category_id,

            attributes: model.attributes,
            branches: model.branches,
            price_rules: model.price_rules,
            bid_rules: model.bid_rules,

            instant_booking: model.instant_booking,
        };

        if (model.images){
            // @ts-ignore
            item['images'] = model.images;
        }

        if(model.main_image){
             // @ts-ignore
            item['main_image'] = model.main_image;
        }

        return item;
    }

    toFormData(fromData: any): FormData | null {
        return null;
    }

    public adapt(item: any): ProductsModel {
        if (!item){
            return new ProductsModel(0);
        }

        let model = new ProductsModel(item.id);
        model.title = item.title;
        model.manufacturer_id = item.manufacturer?.id;
        model.manufacturer_model = item.manufacturer_model;
        model.cat_class = item.cat_class;
        model.description = item.description;

        model.daily_price = item.daily_price;
        model.weekly_price = item.weekly_price;
        model.monthly_price = item.monthly_price;
        model.min_rental_days = item.min_rental_days;
        model.prep_time_days = item.prep_time_days;

        model.deposit = item.deposit;
        model.delivery = item.delivery;
        model.delivery_price_mile = item.delivery_price_mile;
        model.delivery_min_fee = item.delivery_min_fee;
        model.allow_bidding = item.allow_bidding;
        model.category_id = item.category?.id;

        model.attributes = item.attributes;
        model.branches = item.branches;
        model.price_rules = item.price_rules;
        model.bid_rules = item.bid_rules;

        model.category = item.category;

        model.instant_booking = item.instant_booking;
        model.images = item.images;
        model.main_image = item.main_image;

        return model;
    }

    status(status :string): any {
        return {

        };
    }

}
