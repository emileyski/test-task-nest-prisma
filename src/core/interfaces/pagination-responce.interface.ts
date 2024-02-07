export interface PaginationResponse<T> {
  data: T[]; // Массив элементов типа T
  totalPages: number;
  totalItems: number;
  currentPage: number;
  perPage: number;
}
