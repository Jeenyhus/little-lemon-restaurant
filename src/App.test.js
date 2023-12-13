import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';

test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByLabelText("Reserve Table");
    userEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
});

test('Initialize/Update Times', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);

    const reserveButton = screen.getByLabelText("Reserve Table");
    userEvent.click(reserveButton);

    // Continue to test logic here, e.g., select a date and time
    // For example, if your BookingForm allows selecting a date and time:
    const dateInput = screen.getByLabelText("Select Date");
    userEvent.type(dateInput, '2023-12-25');

    const timeSelect = screen.getByLabelText("Select Time");
    userEvent.selectOptions(timeSelect, '18:00');

    // Add your assertions based on the expected behavior
});
