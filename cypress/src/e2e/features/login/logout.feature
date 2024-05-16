Feature: Testar o Logoff do Sisprev Web

    Background:
        Given O usário está autenticado no SisprevWeb para encerrar a sessão no sistema

    Scenario: o usuário encerra a sessão no SisprevWeb através do Botão logoff
        When Clica no botão Logoff
        Then encerra a sessão no SisprevWeb e visualiza a página de login



