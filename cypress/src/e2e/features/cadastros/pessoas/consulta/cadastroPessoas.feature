Feature: Usuário realiza o cadastros de novas pessoas

    Background:
        Given o Usuário está logado no SisprevWeb
        When navega para a página de Consulta de pessoas

    @excluiPessoa
    Scenario: O usuário verifica se todos os campos do formulário estão sendo apresentados corretamente
        When clica no botão novo para cadastrar uma nova pessoa
        Then deve ser apresentado todos os campos corretamente no formulário para o cadastro de pessoas

    Scenario: O usuário tenta cadastrar um segurado sem preencher os campos obrigatórios
        When clica no botão novo para cadastrar uma nova pessoa
        Then deve clicar no botão Avancar e visualizar a mensagem do sistema indicando os campos obrigatórios da aba pessoa

    Scenario: O usuário preenche todos os campos obrigatórios da aba pessoas mas não preenche os da assinatura eletrônica
        When clica no botão novo para cadastrar uma nova pessoa
        When preenche os campos da aba Pessoa
        When navega para a aba assinatura eletrônica
        When marca a opção de utilizar a assinatura
        Then deve clica no botão Avancar e visualizar a mensagem do sistema indicando os campos obrigatórios da aba assinatura eletrônica

    @excluirPessoa
    Scenario: O usuário realiza o cadastro de uma nova pessoa
        When clica no botão novo para cadastrar uma nova pessoa
        When preenche todos os campos do formulário da aba pessoas
        When clica no botão avancar no cadastro da pessoa
        When preenche os campos da aba dados pessoais
        When preenche os campos da aba complemento
        When clica no botão salvar para registrar a nova pessoa
        Then deve clicar no botão finalizar e visualizar a mensagem de que a pessoa foi cadastrada com sucesso.