import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./calculator";

test("Addition fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);
    fireEvent.change(inputA, { target: { value: "5" } });
    fireEvent.change(inputB, { target: { value: "3" } });
    fireEvent.change(select, { target: { value: "+" } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("8");
});

test("Soustraction fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);
    fireEvent.change(inputA, { target: { value: "5" } });
    fireEvent.change(inputB, { target: { value: "3" } });
    fireEvent.change(select, { target: { value: "-" } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("2");
});

test("Multiplication fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);
    fireEvent.change(inputA, { target: { value: "5" } });
    fireEvent.change(inputB, { target: { value: "3" } });
    fireEvent.change(select, { target: { value: "*" } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("15");
});

test("Division fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);
    fireEvent.change(inputA, { target: { value: "6" } });
    fireEvent.change(inputB, { target: { value: "3" } });
    fireEvent.change(select, { target: { value: "/" } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("2");
});

test("Division par 0 renvoie bien 'Error : Division par zéro' fonctionne correctement", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);
    fireEvent.change(inputA, { target: { value: "6" } });
    fireEvent.change(inputB, { target: { value: "0" } });
    fireEvent.change(select, { target: { value: "/" } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("Error : Division par zéro");
});

test("Addition avec des nombres négatifs renvoie bien le bon nombre", () => {
    render(<Calculator />);
    const inputA = screen.getByPlaceholderText("Nombre A");
    const inputB = screen.getByPlaceholderText("Nombre B");
    const select = screen.getByRole("combobox");
    const button = screen.getByText("Calculer");
    const result = screen.getByText(/Résultat/i);
    fireEvent.change(inputA, { target: { value: "-6" } });
    fireEvent.change(inputB, { target: { value: "-4" } });
    fireEvent.change(select, { target: { value: "+" } });
    fireEvent.click(button);
    expect(result).toHaveTextContent("-10");
});
