import React from "react";
import { render, screen } from "@testing-library/react";

import TestPage from "../TestPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders test page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TestPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("test-datatable")).toBeInTheDocument();
    expect(screen.getByRole("test-add-button")).toBeInTheDocument();
});
