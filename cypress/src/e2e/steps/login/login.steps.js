import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/login/login.page";

Given ('O usário está na página de login do sisprev', () => {
    loginPage.acessarSisprev()
})

//cenário 1: 
Then('Clica no botão acessar e visualiza o alerta de acesso negado', () => {
    loginPage.visualizaMsgErroLogin()
})

//cenário 2: 
When('Informa um login e a senha que não é válido, e clica no botão para realizar o login', () => {
    loginPage.informaDadosAcessoIncorretos()
})

Then('Deve ser apresentado um alerta informando que o acesso não foi permitido', () => {
    loginPage.visualizaMsgAcessoNaoAutorizado()
})

//cenário 3:
When ('Informa um login e a senha válido e clica no botão para realizar o login', () => {
    loginPage.informaDadosAcesso()
})

Then ('Deve ser autenticado e acessar o sistema', () => {
    loginPage.verificaAutenticado()
})

