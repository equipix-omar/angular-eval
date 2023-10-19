import { Pipe, PipeTransform } from '@angular/core';
import { ORDER_STATUS } from '../../../core/enums/orderStatus.enum';
import { OrderItem } from '../../../core/models/classes/order.item.model';

@Pipe({
  name: 'orderType'
})
export class OrderTypePipe implements PipeTransform {

  transform(orders: OrderItem[] = [], status: ORDER_STATUS[]): OrderItem[] {
    return orders.filter(order => status.includes(order.status.key));
  }

}
