import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './login-component';

describe("Login", () => {
    it("render Login component", () => {
        render(<Login/>)
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        // screen.getByRole('img');
    })
});
