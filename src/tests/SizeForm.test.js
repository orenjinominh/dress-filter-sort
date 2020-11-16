import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import SizeForm from '../Components/SizeForm';

describe('SizeForm', () => {
  test('it should change size value upon change of dropdown', () => {


    const mockSizeChange = jest.fn();
    const { getByRole } = render(<SizeForm onSizeChange={mockSizeChange}/>);
    const input = screen.getByDisplayValue(/Show All Sizes/i);
    fireEvent.change(input, {target: { value: '0'} });
  
    expect(getByRole('combobox').value).toBe('0');
  });
});