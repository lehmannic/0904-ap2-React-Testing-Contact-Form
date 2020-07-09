import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

// simple test to make sure ContactForm is rendering
test('renders ContactForm without errors', () => {
  render(<ContactForm />);
});

test('ContactForm allows typing in each input field', () => {
  // [1] ARRANGE
  render(<ContactForm />);

  // [2] ACT
  // query for all inputs using label text
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  // returned error: no form control
  // --> FIX: add id='firstName', etc. to all inputs
  // --> TestingLibraryElementError: Found a label with the text of: /first name/i, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.

  fireEvent.change(firstNameInput, {
    target: {
      value: 'Nic',
    },
  });
  fireEvent.change(lastNameInput, {
    target: {
      value: 'Lehman',
    },
  });
  fireEvent.change(emailInput, {
    target: {
      value: 'email@email.com',
    },
  });
  fireEvent.change(messageInput, {
    target: {
      value: 'lambda rocks',
    },
  });

  // [3] ASSERT
  expect(screen.getByDisplayValue(/abcdefg/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue('Moore')).toBeInTheDocument();
  expect(screen.getByDisplayValue(/barbara@moore.com/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/lambda student/i)).toBeInTheDocument();
});
