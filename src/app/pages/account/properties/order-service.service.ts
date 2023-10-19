import { Injectable } from '@angular/core';
import { ORDER_STATUS } from '../../../core/enums/orderStatus.enum';
import { IOrderTab } from '../../../core/models/classes/order.item.model';

@Injectable()
export class OrderServiceService {
  public isLoading = false;

  public tabs: IOrderTab[] = [
    {
      tabName: 'Order In Progress',
      tabIcon: 'fi-file',
      tabId: 1,
      tabStatus: [ORDER_STATUS.SUBMITTED]
    },
    {
      tabName: 'Past Orders',
      tabIcon: 'fi-file-clean',
      tabId: 2,
      tabStatus: [ORDER_STATUS.FINALIZED, ORDER_STATUS.PAYMENT_FAILED]
    },
    {
      tabName: 'Archived',
      tabIcon: 'fi-file-clean',
      tabId: 3,
      tabStatus: [ORDER_STATUS.PAYMENT_FAILED]
    }
  ]


}
