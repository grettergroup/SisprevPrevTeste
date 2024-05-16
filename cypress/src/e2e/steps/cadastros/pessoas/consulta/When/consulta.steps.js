import { When } from "@badeball/cypress-cucumber-preprocessor";
import inputs from "../../../../../../../fixtures/inputs.json"
import consultaPessoasPage from "../../../../../pages/cadastros/pessoas/consultaPessoas.page"
import menuPage from "../../../../../pages/menu/menu.page"
import faker from "faker";


//cadastro
When('clica no botão novo para cadastrar uma nova pessoa', () => {
    consultaPessoasPage.clicaBtnNovo()
})

When('navega para a página de Consulta de pessoas', () => {
    menuPage.navegaConsultaPessoaModuloCadastros()
})

When('preenche os campos da aba Pessoa', () => {
    consultaPessoasPage.preencheAbaPessoa(inputs.pessoa1.nome,inputs.pessoa1.cpf, inputs.pessoa1.dataNascimento, inputs.pessoa1.nomeMae)
})

When('navega para a aba assinatura eletrônica', () => {
    consultaPessoasPage.clicaBtnAbaAssinaturaEletronica()
})

When('marca a opção de utilizar a assinatura', () => {
    consultaPessoasPage.marcaOpcaoUtilizarAssinaturaEletronica()
})

When('preenche todos os campos do formulário da aba pessoas', () => {
    consultaPessoasPage.preencheAbaPessoa(inputs.pessoa1.nome,inputs.pessoa1.cpf, inputs.pessoa1.dataNascimento, inputs.pessoa1.nomeMae)
})

When('clica no botão avancar no cadastro da pessoa', () => {
    consultaPessoasPage.clicaBtnAvancar()
})

When('preenche os campos da aba dados pessoais', () => {
    consultaPessoasPage.preencheAbaDadosPessoais(inputs.pessoa1.ufNascimento, inputs.pessoa1.naturalidade, inputs.pessoa1.numeroRg, inputs.pessoa1.orgao, inputs.pessoa1.ufDocumento, inputs.pessoa1.dataExpedicao)
})

When('preenche os campos da aba complemento', () => {
    consultaPessoasPage.clicaBtnComplemento()
    consultaPessoasPage.preencheAbaComplemento(inputs.pessoa1.cep, inputs.pessoa1.foneCelular)
})

When('clica no botão salvar para registrar a nova pessoa', () => {
    consultaPessoasPage.salvaCadastroPessoa()
})

//consulta
When('preenche o campo descrição de forma aleatória', () => {
    consultaPessoasPage.preencheCampoDescricao(faker.random.alpha({count : 7}))
})

When('seleciona pesquisar por cpf, informa um cpf válido e realiza a pesquisa', () => {
    consultaPessoasPage.selecionaPesquisarPorCpf()
    consultaPessoasPage.realizaConsulta(inputs.pessoa.cpf)
})

When('seleciona pesquisar por cpf e informa um cpf inválido', () => {
    consultaPessoasPage.selecionaPesquisarPorCpf()
})

When('preenche o campo descrição com dados existente no sistema e realiza a consulta', () => {
    consultaPessoasPage.realizaConsulta(inputs.pessoa.nome)
})

//excluir
When('seleciona pesquisar por cpf e informa o cpf na consulta da pessoa', () => {
    consultaPessoasPage.selecionaPesquisarPorCpf()
    consultaPessoasPage.realizaConsulta(inputs.pessoa1.cpf)
})

