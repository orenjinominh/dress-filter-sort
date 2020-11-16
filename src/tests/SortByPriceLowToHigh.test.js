import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import SortByPriceLowToHigh from '../Components/SortByPriceLowToHigh';

describe('SortByPriceLowToHigh', () => {
  test('it should change sort option upon change of dropdown', () => {


    const mockSortChange = jest.fn();
    const { getByRole } = render(<SortByPriceLowToHigh sortedByPrice={mockSortChange}/>);
    const input = screen.getByDisplayValue(/Show Sort Options/i);
    fireEvent.change(input, {target: { value: 'true' } });
    expect(getByRole('combobox').value).toBe('true')
  });
});