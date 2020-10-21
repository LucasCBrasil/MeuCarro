import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Carro from '../components/carro/Carro';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders car data", async () => {
    const fakeCar = {
        marca: "Ford",
        modelo: "New Fiesta",
        ano: "2019",
        preco: "24399",
    };
    await act(async () => {
        render(<Carro carro={fakeCar}/>, container);
    })

    expect(container.textContent).toContain(fakeCar.marca)
    expect(container.textContent).toContain(fakeCar.modelo)
    expect(container.textContent).toContain(fakeCar.ano)
    expect(container.textContent).toContain(fakeCar.preco)

    global.fetch.mockRestore();
})

