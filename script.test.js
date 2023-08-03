/** @jest-environment jsdom */

const { validarCPF } = require("./script");

test('testar true', function () {
    var resultado = validarCPF("53976834009");
    expect(resultado).toBe(true);

})

test('testar false', function () {
    var resultado = validarCPF("21244124213");
    expect(resultado).toBe(false);
})