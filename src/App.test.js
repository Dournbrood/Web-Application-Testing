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

//  This is super broken right now. I'll fix it eventually...
// test("Ball functions as expected", () => {
//   const { gameCount } = render(<App />);
//   expect(gameCount("ball", { balls: 1, strikes: 0 })).toBe({ balls: 2, strikes: 0 })
// })