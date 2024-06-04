import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockProducts } from '../mocks/product.mock';
import { Product } from '../models/product.model';
import { RecommendedProductsService } from './recommended-products.service';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RecommendedProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return recommended products correctly', () => {
    // Arrange tudo que será testado

    const url = `${service.apiUrl}/products?page=1&limit=6`;
    let result: Product[] = [];

    //act executar a função
    service.getProducts().subscribe((products) => (result = products));

    //Assert verifica se os dados input estão de acordo
    const request = httpMock.expectOne(url);
    request.flush(mockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });

  // padrão triple A ( Arange , Act, Assert)
  //flush retorna o resquest  com os valores passados para ele valores mocados
});
