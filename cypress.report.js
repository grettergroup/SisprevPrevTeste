const report = require('multiple-cucumber-html-reporter');


var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time = today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date+' às '+time;
report.generate({
	jsonDir: 'cypress/reports/json/',
	reportPath: "cypress/reports/report-html",
  displayReportTime: true,
  pageTitle: "Relatório Sisprev Web",
  reportName: "Relatório de testes -  Sisprev Web",
  pageFooter: "<div><center></br></br><p>Relatório de testes automatizados - Sisprev Web</p></br></br></center></div>",
  launchReport: true,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
	metadata:{
        browser: {
            name: 'chrome',
            version: '117'
        },
        device: 'Localhost',
        platform: {
            name: 'Windows',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Projeto', value: 'Sisprev Web - Municipio'},
            {label: 'Teste', value: 'Funcionalidade'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Executado dia ', value: dateTime},
        ]
    }
});
