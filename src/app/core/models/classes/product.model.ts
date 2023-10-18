import {ModelBase} from "../Base/base.model";
import { Image } from "../image.model";
import {CategoryModel} from "./category.model";


export class ProductsModel extends ModelBase {

  // basic-form
  public title!: string;
  public manufacturer_id!: number;
  public manufacturer_model!: string;
  public cat_class!: string;
  public description!: string;

  // price-form
  public daily_price!: number;
  public weekly_price!: number;
  public monthly_price!: number;
  public min_rental_days!: number;
  public prep_time_days!: number;
  public deposit!: number;

  // delivery-form
  public delivery!: boolean;
  public delivery_price_mile!: number;
  public delivery_min_fee!: number;

  // inventory-form
  public branches!: {
    id: number;
    count: number;
    address:any
  }[];

  // bid-form
  public allow_bidding!: boolean;
  public bid_rules!: {
    period: string;
    greater_than: number;
    discount: number;
  }[];


  // Category + attributes form
  public category_id!: number;
  public category!: CategoryModel;
  public attributes!: {
    id: number;
    value: string;
  }[];

  // publish form
  public instant_booking!: boolean;

  // publish form
  public image!: Image;
  public images!: Image[];

  public main_image! : Image;


  public price_rules!: {
    date: string;
    price: number;
  }[];


  // TO TEST
  public opening_stock!: string;
  public standard_rate!: string;

  constructor(id: number) {
    super(id);
  }

  public list() {
    return {
      'id': this.id,
      "title": this.title,

      'manufacturer_id': this.manufacturer_id,
      'manufacturer_model': this.manufacturer_model,
      'cat_class': this.cat_class,
      'daily_price': this.daily_price,
      'weekly_price': this.weekly_price,
      'monthly_price': this.monthly_price,
      'min_rental_days': this.min_rental_days,
      'prep_time_days': this.prep_time_days,
      'deposit': this.deposit,
      'delivery': this.delivery,
      'delivery_price_mile': this.delivery_price_mile,
      'delivery_min_fee': this.delivery_min_fee,
      'allow_bidding': this.allow_bidding,
      'category_id': this.category_id,


      'attributes': this.attributes,
      'branches': this.branches,
      'price_rules': this.price_rules,
      'bid_rules': this.bid_rules,
      'category': this.category,
      'images' : this.images,
      'main_image':this.main_image,
      'description' : this.description,

    };
  }

}
