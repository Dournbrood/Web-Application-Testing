import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



test('App renders', () => {
  render(<App />);
});

test('All buttons render', () => {
  const { getAllByTestId } = render(<App />);
  getAllByTestId(/dash-button/i);
});

test('Balls render', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/balls-display/i);
});

test('Strikes render', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/strikes-display/i);
});
