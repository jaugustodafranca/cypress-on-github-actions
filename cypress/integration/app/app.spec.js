/// <reference types="cypress" />

context('App', () => {
  it('Check React Image', () => {
    cy.visit('/')
    cy.get('img[data-cy="react-image"]').should('exist')
  })

  it('Check learn react link', () => {
    cy.contains('Learn React').should('exist')
  })
})
