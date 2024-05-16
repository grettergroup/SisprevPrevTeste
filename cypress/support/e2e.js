import { Before } from '@badeball/cypress-cucumber-preprocessor'
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
