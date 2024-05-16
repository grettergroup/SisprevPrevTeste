import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/login/login.page";
import menuPage from "../../pages/menu/menu.page";

Given('O usário está autenticado no SisprevWeb para encerrar a sessão no sistema', () => {
    loginPage.acessarSisprev()
    loginPage.informaDadosAcesso()
    loginPage.verificaAutenticado()
})

When('Clica no botão Logoff', () => {
    menuPage.clicaBtnLogoff()
})

Then('encerra a sessão no SisprevWeb e visualiza a página de login', () => {
    loginPage.visualizaCamposLogin()
})
