
const elements = require('./elements').ELEMENTS;

class menuPage {
    clicaBtnLogoff(){
        cy.contains(elements.menuBtnLogoff).click()
    }

    clicaItemUsuario(){
        cy.get(elements.menuUserLogin).click()
    }

    clicaBtnSairSistema(){
        cy.contains(elements.btnSairSistema).click()
    }

    clicaMenuModuloBeneficios(){
        cy.get(elements.menuModuloBeneficio).click()
    }

    clicaMenuConsultaProcessos(){
        cy.get(elements.menuItemConsultaProcessos).click()
    }

    navegaConsultaPessoaModuloCadastros(){
        cy.visit('https://proxima2.sisprevweb.com.br/municipios_05/sisprevweb/Pessoa/ConPessoa.aspx')
    }

}

export default new menuPage()
