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
    const carro = {
        marca: "Ford",
        modelo: "New Fiesta",
        ano: "2019",
        preco: "24399",
    };
    await act(async () => {
        render(<Carro carro={carro}/>, container);
    })

    expect(container.querySelector("[id='name']").textContent).toContain(carro.marca)
    expect(container.textContent).querySelector("[id='name']").toContain(carro.modelo)
    expect(container.textContent).querySelector("[id='name']").toContain(carro.ano)
    expect(container.textContent).querySelector("[id='price']").toContain(carro.preco)

    global.fetch.mockRestore();
})

