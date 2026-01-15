const calculador = require("../models/calculadora.js");

test("2+2 tem que ser 4", () => {
  const resultado = calculador.somar(2, 2);
  expect(resultado).toBe(4);
});
