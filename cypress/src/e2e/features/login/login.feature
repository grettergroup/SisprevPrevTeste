Feature: Testar o Login do Sisprev Web

    Background:
        Given O usário está na página de login do sisprev

    Scenario: o usuário não informa nenhum dado, e tenta realizar o login.
        Then Clica no botão acessar e visualiza o alerta de acesso negado

    Scenario: o usuário informa os dados erroneamente, e tenta realizar o login.
        When Informa um login e a senha que não é válido, e clica no botão para realizar o login
        Then Deve ser apresentado um alerta informando que o acesso não foi permitido

    Scenario: o usuário informa os dados corretamente, e realiza o login corretamente.
        When Informa um login e a senha válido e clica no botão para realizar o login
        Then Deve ser autenticado e acessar o sistema

