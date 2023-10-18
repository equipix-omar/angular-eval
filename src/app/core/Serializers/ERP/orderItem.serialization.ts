import {
  Address,
  BillingAddress,
  Image,
  OrderItem, OrderItemDetail,
  OrderItemModel,
  OrderStatusHistory, PaymentMethod,
  Product, Status, Vendor
} from "../../models/classes/order.item.model";

export class ProductSerializer {
  static fromJson(json: any): Product {
    return new Product({
      id: json.id,
      title: json.title,
      description: json.description,
      manufacturer_model: json.manufacturer_model,
      cat_class: json.cat_class,
      daily_price: json.daily_price,
      weekly_price: json.weekly_price,
      monthly_price: json.monthly_price,
      min_rental_days: json.min_rental_days,
      prep_time_days: json.prep_time_days,
      deposit: json.deposit,
      delivery: json.delivery,
      delivery_price_mile: json.delivery_price_mile,
      delivery_min_fee: json.delivery_min_fee,
      allow_bidding: json.allow_bidding,
      instant_booking: json.instant_booking,
      is_active: json.is_active,
      images: json.images || [],
      main_image: json.main_image || [],

    });
  }

  static toJson(product: Product): any {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      manufacturer_model: product.manufacturer_model,
      cat_class: product.cat_class,
      daily_price: product.daily_price,
      weekly_price: product.weekly_price,
      monthly_price: product.monthly_price,
      min_rental_days: product.min_rental_days,
      prep_time_days: product.prep_time_days,
      deposit: product.deposit,
      delivery: product.delivery,
      delivery_price_mile: product.delivery_price_mile,
      delivery_min_fee: product.delivery_min_fee,
      allow_bidding: product.allow_bidding,
      instant_booking: product.instant_booking,
      is_active: product.is_active,
      images: product.images,
      main_image: product.main_image,
    };
  }
}

export class ImageSerializer {
  static fromJson(json: any): Image {
    return new Image({
      id: json.id,
      image: json.image,
      large_size: json.large_size,
      medium_size: json.medium_size,
      thumbnail: json.thumbnail,
    });
  }

  static toJson(image: Image): any {
    return {
      id: image.id,
      image: image.image,
      large_size: image.large_size,
      medium_size: image.medium_size,
      thumbnail: image.thumbnail,
    };
  }
}

export class OrderItemSerializer {
  static fromJson(json: any): OrderItem {
    return new OrderItem({
      id: json.id,
      status: StatusSerializer.fromJson(json.status),
      payment_method: PaymentMethodSerializer.fromJson(json.payment_method),
      orderItems: json.orderItems.map((itemData: any) => OrderItemDetailSerializer.fromJson(itemData)),
      orderStatusesHistory: json.orderStatusesHistory.map((statusData: any) => new OrderStatusHistory(statusData)),
      delivery_price: json.delivery_price,
      tax_value: json.tax_value,
      tax_rate: json.tax_rate,
      total_price: json.total_price,
      final_total_price: json.final_total_price,
      billing_address: new BillingAddress(json.billing_address),
      address: new Address(json.address),
      vendor: new Vendor(json.vendor),
      payment_order_id: json.payment_order_id,
      deliver: json.deliver,
      card_name: json.card_name,
      card_number: json.card_number,
      is_paid: json.is_paid,
    });
  }

  static toJson(orderItem: OrderItem): any {
    return {
      id: orderItem.id,
      status: StatusSerializer.toJson(orderItem.status),
      payment_method: PaymentMethodSerializer.toJson(orderItem.payment_method),
      orderItems: orderItem.orderItems.map((itemData) => OrderItemDetailSerializer.toJson(itemData)),
      orderStatusesHistory: orderItem.orderStatusesHistory.map((statusData) => statusData.id),
      delivery_price: orderItem.delivery_price,
      tax_value: orderItem.tax_value,
      tax_rate: orderItem.tax_rate,
      total_price: orderItem.total_price,
      final_total_price: orderItem.final_total_price,
      billing_address: orderItem.billing_address,
      address: orderItem.address,
      vendor: orderItem.vendor,
      payment_order_id: orderItem.payment_order_id,
      deliver: orderItem.deliver,
      card_name: orderItem.card_name,
      card_number: orderItem.card_number,
      is_paid: orderItem.is_paid,
    };
  }
}

export class StatusSerializer {
  static fromJson(json: any): Status {
    return new Status({
      id: json.id,
      key: json.key,
      name: json.name,
    });
  }

  static toJson(status: Status): any {
    return {
      id: status.id,
      key: status.key,
      name: status.name,
    };
  }
}

export class PaymentMethodSerializer {
  static fromJson(json: any): PaymentMethod {
    return new PaymentMethod({
      id: json.id,
      name: json.name,
      key: json.key,
      allowed_for_pay: json.allowed_for_pay,
    });
  }

  static toJson(paymentMethod: PaymentMethod): any {
    return {
      id: paymentMethod.id,
      name: paymentMethod.name,
      key: paymentMethod.key,
      allowed_for_pay: paymentMethod.allowed_for_pay,
    };
  }
}

export class OrderItemDetailSerializer {
  static fromJson(json: any): OrderItemDetail {
    return new OrderItemDetail({
      id: json.id,
      product: ProductSerializer.fromJson(json.product),
      quantity: json.quantity,
      price: json.price,
      start_date:json.start_date,
      end_date:json.end_date
    });
  }

  static toJson(orderItemDetail: OrderItemDetail): any {
    return {
      id: orderItemDetail.id,
      product: ProductSerializer.toJson(orderItemDetail.product),
      quantity: orderItemDetail.quantity,
      price: orderItemDetail.price,
      start_date:orderItemDetail.start_date,
      end_date:orderItemDetail.end_date
    };
  }
}

export class OrderStatusHistorySerializer {
  static fromJson(json: any): OrderStatusHistory {
    return new OrderStatusHistory({
      id: json.id,
    });
  }

  static toJson(orderStatusHistory: OrderStatusHistory): any {
    return {
      id: orderStatusHistory.id,
    };
  }
}

export class BillingAddressSerializer {
  static fromJson(json: any): BillingAddress {
    return new BillingAddress({
      zip: json.zip,
      city: json.city,
      state: json.state,
      address_line1: json.address_line1,
      full_address: json.full_address,
      address_line2: json.address_line2 || null,
    });
  }

  static toJson(billingAddress: BillingAddress): any {
    return {
      zip: billingAddress.zip,
      city: billingAddress.city,
      state: billingAddress.state,
      address_line1: billingAddress.address_line1,
      full_address: billingAddress.full_address,
      address_line2: billingAddress.address_line2,
    };
  }
}
export class AddressSerializer {
  static fromJson(json: any): Address {
    return new Address({
      zip: json.zip,
      city: json.city,
      state: json.state,
      lat:json.lat,
      long:json.long,
      line1: json.line1,
      full_address: json.full_address,
      line2: json.line2 || null,
    });
  }

  static toJson(address: Address): any {
    return {
      zip: address.zip,
      city: address.city,
      state: address.state,
      line1: address.line1,
      full_address: address.full_address,
      address_line2: address.line2,
    };
  }
}
export class VendorSerializer {
  static fromJson(json: any): Vendor {
    return new Vendor({
      id: json.id,
      name:json.name
    });
  }

  static toJson(vendor: Vendor): any {
    return {
      id: vendor.id,
      name: vendor.name,
    };
  }
}

export class OrderItemModelSerializer {
   fromJson(json: any): OrderItemModel {
    return new OrderItemModel({
      message: json.message,
      body: json.body.map((bodyData: any) => OrderItemSerializer.fromJson(bodyData)),
      pagination: json.pagination,
    });
  }

   toJson(orderItemModel: OrderItemModel): any {
    return {
      message: orderItemModel.message,
      body: orderItemModel.body.map((bodyItem) => OrderItemSerializer.toJson(bodyItem)),
      pagination: orderItemModel.pagination,
    };
  }
}
