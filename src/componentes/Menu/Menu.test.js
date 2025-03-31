import { render, screen } from '@testing-library/react';
import Menu from '.';

test('Deve renderizar um link para a página inicial', () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de links', () => {
  render(<Menu />);
  const listaDeLinks = screen.getAllByRole('link');
  expect(listaDeLinks).toHaveLength(4);
});

test('Não deve renderizar o link para extrato', () => {
  render(<Menu />);
  const listaExtrato = screen.queryByText('Extrato');
  expect(listaExtrato).not.toBeInTheDocument();
});

test('Deve renderizar uma lista de links com a calsse de link', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
});
