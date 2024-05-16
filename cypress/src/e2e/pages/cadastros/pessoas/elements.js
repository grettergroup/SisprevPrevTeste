export const ELEMENTS = {
    //pagina pessoas
    btnConsultar: '[name="ctl00$ContentFiltros$btnConsultar"]',
    inputDescricao: '[name="ctl00$ContentFiltros$txtPesquisa"]',
    dropDowmlistPesquisarPor: '[name="ctl00$ContentFiltros$ddlPSQ"]',
    btnNovo: '[id="ctl00_ContentToolBar_btnNovo"]',
    btnExportarExcel: '[id="ctl00_ContentToolBar_lnkExportaExcel"]',
    btnVoltar: '[id="ctl00_ContentToolBar_btnVoltar"]',
    btnSalvar: '[id="ctl00_ContentToolBar_btnSalvaNovo"]',
    btnFinaliza: '[id="ctl00_ContentToolBar_btnSalvar"]',

    //tabela pessoas
    tabelaConsultaPessoas: '[id="ctl00_ContentGrid_grdResultados"]',
    indiceColunaNome: '> :nth-child(5)',
    indiceColunaCpf: 'tbody > :nth-child(2) > :nth-child(6)',
    btnExcluir: '[name="ctl00$ContentGrid$grdResultados$ctl03$imgbtnDelete"]',

    //formulário - aba Pessoas
    inputNome: '[name="ctl00$ContentCampos$TabContainer1$tabInformacoes$txtPessoaNome"]',
    inputCpf: '[name="ctl00$ContentCampos$TabContainer1$tabInformacoes$txtPessoaCPF"]',
    selectDropDowmListSexo: '[name="ctl00$ContentCampos$TabContainer1$tabInformacoes$ddlPessoaSexo"]',
    inputDataNascimento: '[name="ctl00$ContentCampos$TabContainer1$tabInformacoes$clpPessoaDataNasc"]',
    inputNomeMae: '[name="ctl00$ContentCampos$TabContainer1$tabInformacoes$txtPessoaNomeMae"]',
    btnAbaAssinaturaEletronica: '[id="__tab_ctl00_ContentCampos_TabContainer1_tabAssDigital"]' ,
    btnCancelar: '[id="ctl00_ContentToolBar_btnCancelar"]',
    btnAvancar: '[id="ctl00_ContentToolBar_btnAvanca"]',
    btnBiometria: '[id="ctl00_ContentToolBar_btnBiometria"]',

    //formulário - aba Assinatura Eletrônica
    hintAssinaturaEletronica: '[name="ctl00$ContentCampos$TabContainer1$tabAssDigital$ImageButton70"]',
    checkBoxUtilizarAssinatura: '[id="ctl00_ContentCampos_TabContainer1_tabAssDigital_chk_Ativa_Ass"]',
    inputSenha: '[name="ctl00$ContentCampos$TabContainer1$tabAssDigital$txtSenhaAss"]',
    inputConfirmarSenha: '[name="ctl00$ContentCampos$TabContainer1$tabAssDigital$txtConfirmaSenhaAss"]',

    //formulário - aba Dados Pessoais
    selectUfNascimento: '[name="ctl00$ContentCampos$TabContainer1$tabComplementar$ddlPessoaUFCidadeNat"]',
    selectNaturalidade: '[name="ctl00$ContentCampos$TabContainer1$tabComplementar$ddlPessoaCidadeNat"]',
    inputNumeroRg: '[name="ctl00$ContentCampos$TabContainer1$tabComplementar$txtPessoaRGNumero"]',
    inputOrgao: '[name="ctl00$ContentCampos$TabContainer1$tabComplementar$txtPessoaRGOrgEmissor"]',
    selectUfRg: '[name="ctl00$ContentCampos$TabContainer1$tabComplementar$ddlPessoaRGUF"]',
    inputDataExpedicao: '[name="ctl00$ContentCampos$TabContainer1$tabComplementar$clpPessoaRGDtaEms"]',

    //formulario - complemento
    btnAbaComplemento: '[id="__tab_ctl00_ContentCampos_TabContainer1_tabComplemento"]',
    inputCEP: '[name="ctl00$ContentCampos$TabContainer1$tabComplemento$txtPessoaEnderecoCEP"]',
    inputFoneCelular: '[name="ctl00$ContentCampos$TabContainer1$tabComplemento$txtPessoaFoneCel"]',
    selectTipoLogradouro: '[name="ctl00$ContentCampos$TabContainer1$tabComplemento$ddlPessoaTipoLogradouro"]',
    

    //mensagens
    txtMsgInformarTexto: '- Informe um texto para pesquisa!',
    txtMsgNaoEncontrouRegistro: 'Não foram encontrados registros para a pesquisa realizada!',
    txtMsgCamposObrigatoriosPessoas: '- Informe o Nome!\r\n- Informe o CPF!\r\n- Informe o Sexo!\r\n- Informe a Data de Nascimento!\r\n- Informe o Nome da Mãe!\r\n',
    txtMsgCamposObrigatoriosAssinatura: '- Informe a senha!\r\n- O campo confirmar senha é obrigatorio!\r\n',
    txtMsgSalvoComSucesso: 'Registro salvo com sucesso!',
}