import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

// simple test to make sure ContactForm is rendering
test('renders ContactForm without errors', () => {
  render(<ContactForm />);
});
