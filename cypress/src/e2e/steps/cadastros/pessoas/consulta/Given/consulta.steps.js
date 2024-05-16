import { After, Before, Given} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../../../pages/login/login.page";
import inputs from "../../../../../../../fixtures/inputs.json"

Before({tags : '@excluiPessoa'},() => {
    cy.excluiPessoa(inputs.pessoa1.nome)
})

Before({tags : '@inserePessoa'},() => {
    cy.inserePessoa(inputs.pessoa1.nome)
})

Given('o Usuário está logado no SisprevWeb', () => {
    loginPage.realizaAutenticacao()
})

After(({tags : '@excluirPessoa'}), () => {
    cy.excluiPessoa(inputs.pessoa1.nome)
})
