beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('delete note', () => {
    cy.get('.deleteBtn').each(($el, index, $list)=>{
        cy.wrap($el).click()
    } ).then(($lis)=>{
        console.log($lis);
    })
  })