import {Before, Then } from "@badeball/cypress-cucumber-preprocessor";
import consultaPessoasPage from "../../../../../pages/cadastros/pessoas/consultaPessoas.page"
import inputs from "../../../../../../../fixtures/inputs.json"
import faker from "faker";


//cadastro
Then('deve ser apresentado todos os campos corretamente no formulário para o cadastro de pessoas', () => {
    consultaPessoasPage.verificaCamposFormulario()
})

Then('deve clicar no botão Avancar e visualizar a mensagem do sistema indicando os campos obrigatórios da aba pessoa', () => {
    consultaPessoasPage.clicaBtnAvancarSemPreencherCamposPessoa()
})

Then('deve clica no botão Avancar e visualizar a mensagem do sistema indicando os campos obrigatórios da aba assinatura eletrônica', () => {
    consultaPessoasPage.clicaBtnAvancarSemPreencherAssinatura()
})

Then('deve clicar no botão finalizar e visualizar a mensagem de que a pessoa foi cadastrada com sucesso.', () => {
    consultaPessoasPage.finalizaCadastroPessoa()
})

//consulta

Then('deve ser apresentada a pessoa vinculada ao cpf na tabela.', () => {
    consultaPessoasPage.verificaColunaCpf(inputs.pessoa.cpf)
})

Then('deve realizar a consulta e visualizar uma mensagem informando que não há registros', () => {
    consultaPessoasPage.preencheCampoDescricao(faker.datatype.number({min: 10000000000, max: 99999999999}))
})

Then('deve realizar a consulta e visualizar uma mensagem de alerta indicando que o campo não pode ser vazio', () => {
    consultaPessoasPage.realizaConsultaVazia()
})

Then('deve realizar a consulta e visualizar uma mensagem informando que não foi encontrados dados', () => {
    consultaPessoasPage.realizaConsultaErrada()
})

Then('deve ser apresentado na grid as informações relacionados a consulta realizada', () => {
    consultaPessoasPage.verificaColunaNome(inputs.pessoa.nome.toUpperCase())
})

//excluir

Then('deve verificar se todos os componentes da página estão sendo apresentados corretamente', () => {
    consultaPessoasPage.verificaPaginaConsultaPessoas()
})

Then('deve clicar no botão de excluir e confimar a exclusão', () => {
    consultaPessoasPage.clicaBtnExcluir()
    consultaPessoasPage.verificaAlerta()
})