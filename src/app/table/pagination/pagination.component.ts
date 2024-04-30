import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() totalPages!: number[];
  @Input() currentPage!: number;
  @Input() itemsPerPage!: number;
  @Output() pageChange = new EventEmitter<number>();
  

  nextPage(){
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }
  previousPage(){
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
  }
 }
  changePage(page: number) {
  this.currentPage = page;
  this.pageChange.emit(this.currentPage);
 }
 }
