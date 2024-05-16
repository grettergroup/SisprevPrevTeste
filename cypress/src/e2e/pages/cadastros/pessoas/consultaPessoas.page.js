const elements = require('./elements').ELEMENTS;
let colunaNome = ''


class ConsultaPessoas{
    realizaConsulta(descricao){
        cy.get(elements.inputDescricao).type(descricao)
        this.clicaBtnConsultar()
    }
    
    clicaBtnConsultar(){
        cy.get(elements.btnConsultar).click()
    }

    clicaBtnNovo(){
        cy.get(elements.btnNovo).click()
    }

    clicaBtnSalvar(){
        cy.get(elements.btnSalvar).click()
    }

    clicaBtnFinaliza(){
        cy.get(elements.btnFinaliza).click()
    }

    clicaBtnAvancar(){
        cy.get(elements.btnAvancar).click()
    }

    clicaBtnAvancarSemPreencherCamposPessoa(){
        cy.commandverificaAlert(elements.btnAvancar,elements.txtMsgCamposObrigatoriosPessoas)
    }

    clicaBtnAvancarSemPreencherAssinatura(){
        cy.commandverificaAlert(elements.btnAvancar,elements.txtMsgCamposObrigatoriosAssinatura)
    }

    clicaBtnAbaAssinaturaEletronica(){
        cy.get(elements.btnAbaAssinaturaEletronica).click()
    }

    clicaBtnComplemento(){
        cy.get(elements.btnAbaComplemento).click()
    }

    clicaBtnExcluir(){
        cy.get(elements.btnExcluir).click()
        cy.on('window:alert', (mensagem) => {
            cy.log('a mensagem do primeiro botão: ',mensagem)
        })
    }

    salvaCadastroPessoa(){
        cy.commandverificaAlert(elements.btnSalvar, elements.txtMsgSalvoComSucesso)

    }

    finalizaCadastroPessoa(){
        cy.commandverificaAlert(elements.btnFinaliza, elements.txtMsgSalvoComSucesso)
        
    }
    
    realizaConsultaVazia(){
        cy.commandverificaAlert(elements.btnConsultar,elements.txtMsgInformarTexto)
    }

    realizaConsultaErrada(){
        cy.commandverificaAlert(elements.btnConsultar,elements.txtMsgNaoEncontrouRegistro)
    }

    selecionaPesquisarPorCpf(){
        cy.get(elements.dropDowmlistPesquisarPor).select('CPF')
    }   

    preencheCampoDescricao(descricao){
        cy.get(elements.inputDescricao).type(descricao) 
    }

    marcaOpcaoUtilizarAssinaturaEletronica(){
        cy.get(elements.checkBoxUtilizarAssinatura).check()
    }

    verificaColunaNome(descricao){
        cy.get(elements.tabelaConsultaPessoas).find('tbody tr').then((quantidadeLinhas) => {
            for(let y = 2 ; y <= quantidadeLinhas.length; y++){
                colunaNome = `tbody > :nth-child(${y}) ${elements.indiceColunaNome}`
                cy.get(colunaNome).contains(descricao).should('be.visible')
            }
        })
    }

    verificaColunaCpf(descricao){
        cy.get(elements.indiceColunaCpf).contains(descricao.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4'))
    }

    verificaCamposFormulario(){
       this.verificaAbaPessoa()
       this.verificaAbaAssinaturaEletronica()
    }

    verificaAbaPessoa(){
        const elementos = [
            {tipo: 'get', elemento: elements.inputNome},
            {tipo: 'get', elemento: elements.inputCpf},
            {tipo: 'get', elemento: elements.selectDropDowmListSexo},
            {tipo: 'get', elemento: elements.inputDataNascimento},
            {tipo: 'get', elemento: elements.inputNomeMae},
            {tipo: 'get', elemento: elements.btnCancelar},
            {tipo: 'get', elemento: elements.btnAvancar},
            {tipo: 'get', elemento: elements.btnBiometria},
            {tipo: 'get', elemento: elements.btnAbaAssinaturaEletronica}
        ]
        cy.commandVerificaElementosVisiveis(elementos)
    }

    verificaAbaAssinaturaEletronica(){
        this.clicaBtnAbaAssinaturaEletronica()        
        const elementos = [
            {tipo: 'get', elemento: elements.hintAssinaturaEletronica},
            {tipo: 'get', elemento: elements.checkBoxUtilizarAssinatura},
            {tipo: 'get', elemento: elements.inputSenha},
            {tipo: 'get', elemento: elements.inputConfirmarSenha},
        ]
        cy.commandVerificaElementosVisiveis(elementos)
    }

    verificaPaginaConsultaPessoas(){    
        const elementos = [
            {tipo: 'get', elemento: elements.dropDowmlistPesquisarPor},
            {tipo: 'get', elemento: elements.inputDescricao},
            {tipo: 'get', elemento: elements.btnConsultar},
            {tipo: 'get', elemento: elements.btnNovo},
            {tipo: 'get', elemento: elements.btnExportarExcel},
            {tipo: 'get', elemento: elements.btnVoltar},
        ]
        cy.commandVerificaElementosVisiveis(elementos)
    }

    preencheAbaPessoa(nome,cpf,dataNascimento,nomeMae){
        cy.get(elements.inputNome).type(nome)
        cy.get(elements.inputCpf).type(cpf)
        cy.get(elements.selectDropDowmListSexo).select(1)
        cy.get(elements.inputDataNascimento).type(dataNascimento)
        cy.get(elements.inputNomeMae).type(nomeMae)
        // cy.get(elements.inputNome).type(nome)
    }

    preencheAbaDadosPessoais(ufNascimento, naturalidade, RG, orgao, uf, dataExpedicao){
        cy.get(elements.selectUfNascimento).select(ufNascimento)
        cy.get(elements.selectNaturalidade).select(naturalidade)
        cy.get(elements.inputNumeroRg).type(RG)
        cy.get(elements.inputOrgao).type(orgao)
        cy.get(elements.selectUfRg).select(uf)
        cy.get(elements.inputDataExpedicao).type(dataExpedicao)
    }

    preencheAbaComplemento(cep,foneCelular){
        cy.get(elements.inputCEP).type(cep)
        cy.wait(2000)
        cy.get(elements.inputFoneCelular).type(foneCelular)
    }

    verificaAlerta(){
        cy.on('window:alert', (mensagem) => {
            cy.log('a mensagem é: ',mensagem)
        })
    }
}

export default new ConsultaPessoas()