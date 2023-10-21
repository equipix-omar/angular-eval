export class Product {
  id: number;
  title: string;
  description: string | null;
  manufacturer_model: string;
  cat_class: string;
  daily_price: number;
  weekly_price: number;
  monthly_price: number;
  min_rental_days: number;
  prep_time_days: number;
  deposit: number;
  delivery: boolean;
  delivery_price_mile: number;
  delivery_min_fee: number;
  allow_bidding: boolean;
  instant_booking: boolean;
  is_active: boolean;
  images: Image[]; // Define a type for images
  main_image: Image; // Define a type for images
  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description || null;
    this.manufacturer_model = data.manufacturer_model;
    this.cat_class = data.cat_class;
    this.daily_price = data.daily_price;
    this.weekly_price = data.weekly_price;
    this.monthly_price = data.monthly_price;
    this.min_rental_days = data.min_rental_days;
    this.prep_time_days = data.prep_time_days;
    this.deposit = data.deposit;
    this.delivery = data.delivery;
    this.delivery_price_mile = data.delivery_price_mile;
    this.delivery_min_fee = data.delivery_min_fee;
    this.allow_bidding = data.allow_bidding;
    this.instant_booking = data.instant_booking;
    this.is_active = data.is_active;
    this.main_image = data.main_image;
    this.images = data.images.map((imageData: any) => new Image(imageData));
  }
}

export class Image {
  id: number;
  image: string;
  large_size: string;
  medium_size: string;
  thumbnail: string;

  constructor(data: any) {
    this.id = data.id;
    this.image = data.image;
    this.large_size = data.large_size;
    this.medium_size = data.medium_size;
    this.thumbnail = data.thumbnail;
  }
}

export class OrderItem {
  id: number;
  status: Status;
  // address:Address;
  vendor:Vendor;
  payment_method: PaymentMethod;
  orderItems: OrderItemDetail[];
  orderStatusesHistory: OrderStatusHistory[];
  delivery_price: number;
  tax_value: number;
  tax_rate: number;
  total_price: number;
  final_total_price: number;
  billing_address: BillingAddress;
  payment_order_id: string;
  deliver: boolean;
  card_name: string;
  card_number: string;
  is_paid: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.status = new Status(data.status);
    this.payment_method = new PaymentMethod(data.payment_method);
    this.orderItems = data.orderItems.map((itemData: any) => new OrderItemDetail(itemData));
    this.orderStatusesHistory = data.orderStatusesHistory.map((statusData: any) => new OrderStatusHistory(statusData));
    this.delivery_price = data.delivery_price;
    this.tax_value = data.tax_value;
    this.tax_rate = data.tax_rate;
    this.total_price = data.total_price;
    this.final_total_price = data.final_total_price;
    this.billing_address = new BillingAddress(data.billing_address);
    this.payment_order_id = data.payment_order_id;
    this.deliver = data.deliver;
    this.card_name = data.card_name;
    this.card_number = data.card_number;
    this.is_paid = data.is_paid;
    // this.address=data.address;
    this.vendor=data.vendor;
  }
}

export class Status {
  id: number;
  key: string;
  name: string;

  constructor(data: any) {
    this.id = data.id;
    this.key = data.key;
    this.name = data.name;
  }
}

export class Vendor {
  id: number;
  name: string;


  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
  }
}

export class PaymentMethod {
  id: number;
  name: string;
  key: string;
  allowed_for_pay: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.key = data.key;
    this.allowed_for_pay = data.allowed_for_pay;
  }
}

export class OrderItemDetail {
  id: number;
  product: Product;
  quantity: number;
  price: number;
  start_date:string;
  end_date:string;

  constructor(data: any) {
    this.id = data.id;
    this.product = new Product(data.product);
    this.quantity = data.quantity;
    this.price = data.price;
    this.start_date = data.start_date;
    this.end_date = data.end_date;
  }
}

export class OrderStatusHistory {
  id: number;

  constructor(data: any) {
    this.id = data.id;
  }
}

export class BillingAddress {
  zip: string;
  city: string;
  state: string;
  address_line1: string;
  full_address !: string ;
  address_line2: string | null;

  constructor(data: any) {
    this.zip = data.zip;
    this.city = data.city;
    this.state = data.state;
    this.address_line1 = data.address_line1;
    this.full_address = data.full_address;
    this.address_line2 = data.address_line2 || null;
  }
}
// export class Address {
//   zip: string;
//   city: string;
//   state: string;
//   lat!:string;
//   long !:string;
//   line1: string;
//   full_address !: string ;
//   line2: string | null;

//   constructor(data: any) {
//     this.zip = data.zip;
//     this.city = data.city;
//     this.state = data.state;
//     this.line1 = data.address_line1;
//     this.long=data.long;
//     this.lat=data.lat;
//     this.full_address = data.full_address;
//     this.line2 = data.address_line2 || null;
//   }
// }

export class OrderItemModel {
  message: any[]; // Define the actual type for message
  body: OrderItem[];
  pagination: null | any; // Define a specific type for pagination if needed

  constructor(data: any) {
    this.message = data.message || [];
    this.body = data.body.map((bodyData: any) => new OrderItem(bodyData));
    this.pagination = data.pagination || null;
  }
}
