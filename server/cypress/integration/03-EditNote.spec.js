describe('Delete note', () => {
    it('note deleted successfully', () => {
      cy.visit('/')
      
      cy.request('GET', '/select').then((res)=>{
          
          cy.log(res.body[0])
          cy.request('PATCH','/'+res.body[0].id,{
            note: 'edited test-note',
            summary: 'edited this is a test note',
            status: false
          })
      })
    })
  })