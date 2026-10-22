
describe('Pruebas E2E de la Calculadora', () => {

  beforeEach(() => {
    // Abre la calculadora antes de cada prueba
    cy.visit('Calculadora.html');
  });

  it('Debe realizar una suma correctamente (7 + 8 = 15)', () => {
    cy.contains('button', '7').click();
    cy.contains('button', '+').click();
    cy.contains('button', '8').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '15');
  });

  it('Debe limpiar la pantalla con el botón AC', () => {
    cy.contains('button', '9').click();
    cy.contains('button', 'AC').click();

    cy.get('#current-operand').should('have.text', '0');
  });

  it('Debe realizar una resta correctamente (9 - 4 = 5)', () => {
    cy.contains('button', '9').click();
    cy.contains('button', '-').click();
    cy.contains('button', '4').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '5');
  });

  it('Debe realizar una multiplicación correctamente (6 × 7 = 42)', () => {
    cy.contains('button', 'AC').click();
    cy.contains('button', '6').click();
    cy.contains('button', '×').click();
    cy.contains('button', '7').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '42');
  });

  it('Debe realizar una división correctamente (8 ÷ 2 = 4)', () => {
    cy.contains('button', 'AC').click();
    cy.contains('button', '8').click();
    cy.contains('button', '÷').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '4');
  });

  it('Debe borrar el último dígito ingresado', () => {
    cy.contains('button', 'AC').click();
    cy.contains('button', '1').click();
    cy.contains('button', '2').click();
    cy.contains('button', '3').click();

    cy.get('#current-operand').should('have.text', '123');

    cy.contains('button', 'DEL').click();

    cy.get('#current-operand').should('have.text', '12');
  });

  it('Debe realizar una multiplicación correctamente (5 × 5 = 25)', () => {
    cy.contains('button', 'AC').click();
    cy.contains('button', '5').click();
    cy.contains('button', '×').click();
    cy.contains('button', '5').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '25');
  });

});
