<<<<<<< HEAD
import { render, screen} from "@testing-library/react"
import Home from "../src/pages/Home"

it("renderiza el texto JUEGOS DE MESA", () => {
render(<Home />);
expect(screen.getByText(/JUEGOS DE MESA/i)).toBeInTheDocument();
});
=======
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import Home from "../src/pages/Home";


describe("Componente Home", () => {
it("renderiza el título correctamente", () => {render(<Home />);



expect(screen.getByText("Titulo del sitio")).toBeInTheDocument();});
it("contiene un párrafo descriptivo", () => {render(<Home />);
expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument();});






it("muestra mensaje al hacer clic en Validar", () => {render(<Home />);
const boton = screen.getByRole("button", { name: /validar/i });
fireEvent.click(boton);expect(screen.getByRole("status")).toHaveTextContent("Validadocorrectamente");});})
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
