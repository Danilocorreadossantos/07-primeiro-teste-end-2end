describe("Tela de login", function() {
    beforeEach(function() {
        cy.visit("http://127.0.0.1:5500/index.html")
})

    it("Login com sucesso", function(){
        cy.get("#username").type("admin")
        cy.get("#password").type("admin123")
        cy.get("button").click()
        cy.get("#message").should("contain","Login bem-sucedido!")
})

    it("Login com falha", function(){
        cy.get("#username").type("admin")
        cy.get("#password").type("senha_errada")
        cy.get("button").click()
        cy.get("#message").should("contain", "Usuário ou senha inválido!")
})

})