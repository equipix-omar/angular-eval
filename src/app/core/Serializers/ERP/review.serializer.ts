import {BillingAddress, Order, Pagination, Review, ReviewModel} from "../../models/classes/review.model";

export class BillingAddressSerializer {
  static fromJson(json: any): BillingAddress {
    const billingAddress = new BillingAddress();
    billingAddress.zip = json.zip;
    billingAddress.city = json.city;
    billingAddress.state = json.state;
    billingAddress.address_line1 = json.address_line1;
    billingAddress.full_address = json.full_address;
    billingAddress.address_line2 = json.address_line2;
    return billingAddress;
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

export class OrderSerializer {
  static fromJson(json: any): Order {
    const order = new Order();
    order.id = json.id;
    order.delivery_price = json.delivery_price;
    order.tax_value = json.tax_value;
    order.tax_rate = json.tax_rate;
    order.total_price = json.total_price;
    order.final_total_price = json.final_total_price;
    order.billing_address = BillingAddressSerializer.fromJson(json.billing_address);
    order.payment_order_id = json.payment_order_id;
    order.deliver = json.deliver;
    order.card_name = json.card_name;
    order.card_number = json.card_number;
    order.is_paid = json.is_paid;
    return order;
  }

  static toJson(order: Order): any {
    return {
      id: order.id,
      delivery_price: order.delivery_price,
      tax_value: order.tax_value,
      tax_rate: order.tax_rate,
      total_price: order.total_price,
      final_total_price: order.final_total_price,
      billing_address: BillingAddressSerializer.toJson(order.billing_address),
      payment_order_id: order.payment_order_id,
      deliver: order.deliver,
      card_name: order.card_name,
      card_number: order.card_number,
      is_paid: order.is_paid,
    };
  }
}

export class ReviewSerializer {
  static fromJson(json: any): Review {
    const review = new Review();
    review.id = json.id;
    review.public_message = json.public_message;
    review.private_message = json.private_message;
    review.rent_again = json.rent_again;
    review.rate = json.rate;
    review.order = OrderSerializer.fromJson(json.order);
    review.vendor = json.vendor; // Replace 'any' with the actual type for vendor data
    return review;
  }

  static toJson(review: Review): any {
    return {
      id: review.id,
      public_message: review.public_message,
      private_message: review.private_message,
      rent_again: review.rent_again,
      rate: review.rate,
      order: OrderSerializer.toJson(review.order),
      vendor: review.vendor, // Replace 'any' with the actual type for vendor data
    };
  }
}

export class PaginationSerializer {
  static fromJson(json: any): Pagination {
    const pagination = new Pagination();
    pagination.current_page = json.current_page;
    pagination.first_page_url = json.first_page_url;
    pagination.from = json.from;
    pagination.last_page = json.last_page;
    pagination.last_page_url = json.last_page_url;
    pagination.next_page_url = json.next_page_url;
    pagination.path = json.path;
    pagination.per_page = json.per_page;
    pagination.prev_page_url = json.prev_page_url;
    pagination.to = json.to;
    pagination.total = json.total;
    return pagination;
  }

  static toJson(pagination: Pagination): any {
    return {
      current_page: pagination.current_page,
      first_page_url: pagination.first_page_url,
      from: pagination.from,
      last_page: pagination.last_page,
      last_page_url: pagination.last_page_url,
      next_page_url: pagination.next_page_url,
      path: pagination.path,
      per_page: pagination.per_page,
      prev_page_url: pagination.prev_page_url,
      to: pagination.to,
      total: pagination.total,
    };
  }
}

export class ReviewModelSerializer {
  fromJson(json: any): ReviewModel {
    const reviewModel = new ReviewModel();
    reviewModel.message = json.message;
    reviewModel.body = json.body.map((reviewData: any) => ReviewSerializer.fromJson(reviewData));
    reviewModel.pagination = PaginationSerializer.fromJson(json.pagination);
    return reviewModel;
  }

  toJson(reviewModel: ReviewModel): any {
    return {
      message: reviewModel.message,
      body: reviewModel.body.map((review) => ReviewSerializer.toJson(review)),
      pagination: PaginationSerializer.toJson(reviewModel.pagination),
    };
  }
}
