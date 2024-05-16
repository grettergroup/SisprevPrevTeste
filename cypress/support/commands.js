import env from "../../cypress.env.json"
import sqlServer from 'cypress-sql-server';
const elements = require('../src/e2e/pages/login/elements').ELEMENTS

sqlServer.loadDBCommands();

/** Comando que grava as sessões do usuário para ser utilizado nos demais testes
 @param {number} user - login do usuário no sistema
 @param {string} senha - senha do usuário no sistema
 @param {string} cacheSession - comando que grava os dados da sessão
 * 
*/
Cypress.Commands.add('commandrealizaLogin', (user, senha, { cacheSession = true} = {}) => {
    const login = () => {
        cy.visit(`${env.config.UrlBase}${env.config.BaseDados}${env.config.sisprevweb}`)
        cy.get(elements.inputLogin).type(user, { log: false })
        cy.get(elements.inputSenha).type(senha, { log: false })
        cy.get(elements.btnAcessar).click({force: true})
    }

    const options = {
        cacheAcrossSpecs: true,
    }

    if (cacheSession) {
        cy.session(user, login, options)
    } else {
        login()
    }
})

Cypress.Commands.add('contarLinhasTabela', (seletorTabela) => {
    cy.get(seletorTabela).find('tbody tr').its('length').then((quantidadeLinhas) => {
        cy.log(`A tabela possui ${quantidadeLinhas} linhas.`);
        return quantidadeLinhas
    })
  });

Cypress.Commands.add('commandVerificaElementosVisiveis', (elementos) => {
    elementos.forEach(({ tipo, elemento }) => {
        if (tipo === 'get') {
            cy.get(elemento).should('exist').should('be.visible')
        }
        else if (tipo === 'contains') {
            cy.contains(elemento).should('exist').should('be.visible')
        }

    })
})

Cypress.Commands.add('commandverificaAlert', (botao ,mensagemEsperada) => {
    cy.get(botao).click()
    cy.on('window:alert', (mensagem) => {
        expect(mensagem).to.equal(mensagemEsperada)
    })
})

Cypress.Commands.add('excluiPessoa', (nome) => {
    cy.sqlServer(`DELETE FROM PESSOAS_NOME_ALTERADO WHERE NOME_ANTERIOR = '${nome}'`)
    cy.sqlServer(`DELETE FROM PESSOAS WHERE NOME = '${nome}'`)
})

Cypress.Commands.add('inserePessoa', (nome) => {
    cy.sqlServer(`INSERT INTO PESSOAS (CPF, NOME, DATA_NASC, NOME_MAE, SEXO, NOME_PAI,ESTADO_CIVIL, RG_NUMERO)
    VALUES('406.170.375-74','EVELYN JENNIFER PINTO','1975-03-02 00:00:00.000','NATÁLIA GABRIELA LUANA','M','',1,294932197)`)

})

  