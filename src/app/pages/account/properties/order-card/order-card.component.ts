import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from 'src/app/core/models/classes/order.item.model';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
  @Input() order!: OrderItem;
  constructor() { }

  ngOnInit(): void {
  }

}
