import { QuantityDescriptionPipe } from './quantity-description.pipe';

describe('QuantityDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new QuantityDescriptionPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return unavailable product text', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(0);
    expect(result).toEqual('Produto indisponivel');
  });
  it('should return text from only one product', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(1);
    expect(result).toEqual('Ultima unidade');
  });
  it('should return text from many products', () => {
    const pipe = new QuantityDescriptionPipe();
    const result = pipe.transform(2);
    expect(result).toEqual('2 unidades disponiveis');
  });
});
