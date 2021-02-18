describe('Add note', () => {
    it('note added successfully', () => {
      cy.visit('/')
      cy.request('PUT', '/', {
          note: 'test-note',
          summary: 'this is a test note',
          status: false
    })
    })
  })