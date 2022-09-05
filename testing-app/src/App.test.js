import React from "react";
import { render } from '@testing-library/react';
import App from './App';

describe("App Component", () => {
  it("renders correct heading", () => {
    const { getByRole} = render(<App />);
    expect(getByRole("heading").textContent).toMatch(/our first test/i)
  })
})