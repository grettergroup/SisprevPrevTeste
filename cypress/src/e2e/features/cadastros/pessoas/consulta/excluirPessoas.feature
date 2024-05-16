Feature: Usuário realiza a exclusão do cadastros de pessoas

    Background:
        Given o Usuário está logado no SisprevWeb
        When navega para a página de Consulta de pessoas

    @inserePessoa
    Scenario: O usuário verifica se todos os campos da página consulta de pessoas estão sendo apresentados corretamente
        When seleciona pesquisar por cpf e informa o cpf na consulta da pessoa
        Then deve verificar se todos os componentes da página estão sendo apresentados corretamente
    
    Scenario: o usuário realiza a exclusão do cadastro da pessoa
        When seleciona pesquisar por cpf e informa o cpf na consulta da pessoa
        Then deve clicar no botão de excluir e confimar a exclusão