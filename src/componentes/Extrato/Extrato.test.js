import { render, screen } from '@testing-library/react';
import Extrato from '.';

test('Deve renderizar uma lista de transações', () => {
  const trasacoes = [
    { data: '10/05/2022', mes: 'Abril', transacao: 'Deposito', valor: 1000 },
  ];

  render(<Extrato transacoes={trasacoes} />);
  const lista = screen.getByRole('listitem');
  expect(lista).toBeInTheDocument();
});
