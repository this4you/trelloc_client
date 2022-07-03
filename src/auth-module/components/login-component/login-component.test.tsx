import { screen, fireEvent } from '@testing-library/react'
import { Login } from 'auth-module';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from 'utils/test-utils';

describe("login-component", () => {
    it("render", () => {
        renderWithProviders(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { "name": "Sing IN" })).toBeInTheDocument();
    })

    it("loading", () => {
        renderWithProviders(
            <BrowserRouter>
                <Login />
            </BrowserRouter>, 
            {
                preloadedState: {
                    auth: {
                        loading: true
                    }
                }
            }
        );

        expect(screen.getByRole("button", { "name": "Sing IN" })).toBeDisabled();
    })
})