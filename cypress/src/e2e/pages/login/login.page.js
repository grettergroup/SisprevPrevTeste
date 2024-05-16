const elements = require('./elements').ELEMENTS;
const env = require('../../../../../cypress.env.json')
const faker = require('faker')

const loginAleatorio = faker.datatype.number({max: 9999})
const senhaAleatoria = faker.datatype.number({max: 100000})


class LoginPage{
    acessarSisprev(){
        cy.visit(`${env.config.UrlBase}${env.config.BaseDados}${env.config.sisprevweb}`)
    }

    realizaAutenticacao(){
        const user = env.usuario.login
        const senha = env.usuario.senha
        const options = {cacheSession: true}
        cy.commandrealizaLogin(user, senha, options)
    }

    clicaBtnAcessar(){
        cy.get(elements.btnAcessar).click({force: true})
    }
    
    informaDadosAcesso(){
        cy.get(elements.inputLogin).type(env.usuario.login, { log: false })
        cy.get(elements.inputSenha).type(env.usuario.senha, { log: false })
        this.clicaBtnAcessar()
    }

    informaDadosAcessoIncorretos(){
        cy.get(elements.inputLogin).type(loginAleatorio)
        cy.get(elements.inputSenha).type(senhaAleatoria)
    }

    visualizaMsgAcessoNaoAutorizado(){
        this.clicaBtnAcessar()
        cy.on('window:alert', (mensagem) => {
            expect(mensagem).to.equal(elements.msgValidaLoginErrado)
        })
    }

    visualizaMsgErroLogin(){
        this.clicaBtnAcessar()
        cy.on('window:alert', (mensagem) => {
            expect(mensagem).to.equal(elements.msgErroLogin)
        })
    }

    visualizaCamposLogin(){
        // cy.get(elements.inputLogin).should('exist').should('be.visible')
        cy.get(elements.inputSenha).should('exist').should('be.visible')
    }

    verificaAutenticado(){
        cy.get(elements.btnFecharModalControleProcessos).should("be.visible").click()
    }
}
export default new LoginPage();