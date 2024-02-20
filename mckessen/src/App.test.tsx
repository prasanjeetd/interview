
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { Service } from './BingAPI';


jest.mock('./BingAPI', () => {
  const originalModule = jest.requireActual('./BingAPI');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    Service: async () => {
      console.log("Service mocked");
      return [
        {
          "id": "https://api.bing.microsoft.com/api/v7/#WebPages.0",
          "name": "Tipu Truckanwala’s son Balaj Tipu died in assassination attack",
          "url": "https://dailyausaf.com/en/"
        }
      ]
        ;
    },

  };
});





test('searches and displays results', async () => {
  render(<App />);
  const searchInput = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button', { name: /search/i });

  fireEvent.change(searchInput, { target: { value: 'test' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const searchResults = screen.getAllByRole('listitem');
    expect(searchResults.length).toBeGreaterThan(0);
  });
});