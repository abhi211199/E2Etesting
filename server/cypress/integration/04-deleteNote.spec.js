describe('Delete note', () => {
    it('note deleted successfully', () => {
      cy.visit('/')
      
      cy.request('GET', '/select').then((res)=>{
          
          cy.log(res.body[0])
          cy.request('DELETE','/'+res.body[0].id,{
            
          })
      })
    })
  })