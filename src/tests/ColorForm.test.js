import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import ColorForm from '../Components/ColorForm';

describe('ColorForm', () => {
  test('it should change color value upon change of dropdown', () => {


    const mockColorChange = jest.fn();
    const { getByRole } = render(<ColorForm onColorChange={mockColorChange}/>);
    const input = screen.getByDisplayValue(/Show All Colors/i);
    fireEvent.change(input, {target: { value: "Red" } });
    expect(getByRole('combobox').value).toBe('Red')
  });
});