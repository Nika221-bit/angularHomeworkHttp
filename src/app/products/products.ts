import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class Products {
  products: any = [];

  constructor(private service: Service) {
    this.service.send().subscribe((data) => {
      this.products = data;
    });
  }
}
