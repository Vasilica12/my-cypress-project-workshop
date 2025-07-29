describe('Login Page Tests', () => {

  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  })

  it('Verify that the user can sucessfully login', () => {
    cy.get(".authorization-link a").contains("Sign In").click();
    cy.get("#email").clear().type("vasilica.cernovschi1234@gmail.com");
    cy.get("#pass").clear().type("tR23.xn6jwr@.nC");
    cy.get("#send2").click();
    cy.get(".logged-in").should("be.visible").and("contain.text", "Welcome");
  })
})

