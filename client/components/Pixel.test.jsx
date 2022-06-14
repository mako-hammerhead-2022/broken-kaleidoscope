/**
 * @jest-environment jsdom
 */
import React from 'react'

import {screen, render, fireEvent} from '@testing-library/react'
import Pixel from './Pixel'

describe('<Pixel />', () => {
  it('shows a black pixel', () => {
    render(<Pixel />)
    const pixel = screen.getByTestId('pixel')
    console.log(pixel.style.backgroundColor)
    fireEvent.contextMenu(pixel)
    const expected = 'black'
    expect(pixel.style.backgroundColor).toBe(expected)
  })
})