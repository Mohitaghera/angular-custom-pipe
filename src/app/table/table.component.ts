import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPipe } from '../pagination.pipe';
import { SalaryPipe } from '../salary.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PaginationComponent,
    PaginationPipe,
    SalaryPipe,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {

  employees: any[] = [];
  showEmployees: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployees();

  }

  fetchEmployees() {
    this.http
      .get<any>('https://dummy.restapiexample.com/api/v1/employees')
      .subscribe((data) => {
        this.employees = data.data;

        this.onPageChange(1);

      });
  }
 
  onPageChange(page: number) {
    
    this.currentPage = page;
    this.totalPages = []

    const length = Math.ceil(this.employees.length / this.itemsPerPage);
    for (let i = 1; i <= length; i++) {
      this.totalPages.push(i);
    }
  }

}
