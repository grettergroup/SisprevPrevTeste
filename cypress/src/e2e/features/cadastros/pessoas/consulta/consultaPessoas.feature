Feature: Usuário realiza consultas na página de consulta de pessoas

    Background:
        Given o Usuário está logado no SisprevWeb
        When navega para a página de Consulta de pessoas
    
    Scenario: o usuário realiza uma consulta com um cpf válido
        When seleciona pesquisar por cpf, informa um cpf válido e realiza a pesquisa
        Then deve ser apresentada a pessoa vinculada ao cpf na tabela.

    Scenario: o usuário realiza uma consulta com um cpf inválido
        When seleciona pesquisar por cpf e informa um cpf inválido
        Then deve realizar a consulta e visualizar uma mensagem informando que não há registros    

    Scenario: o usuário realiza uma consulta sem informar nenhum dado no campo Descrição
        Then deve realizar a consulta e visualizar uma mensagem de alerta indicando que o campo não pode ser vazio

    Scenario: o usuário realiza uma consulta com uma descrição aleatória
        When preenche o campo descrição de forma aleatória
        Then deve realizar a consulta e visualizar uma mensagem informando que não foi encontrados dados

    Scenario: o usuário realiza uma consulta informando dados que existem no sistema
        When preenche o campo descrição com dados existente no sistema e realiza a consulta
        Then deve ser apresentado na grid as informações relacionados a consulta realizada
    




