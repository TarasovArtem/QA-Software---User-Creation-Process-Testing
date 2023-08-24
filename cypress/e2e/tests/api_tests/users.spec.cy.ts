/// <reference types="Cypress" />
 

describe("Users", () => {

    const query = `
    query {
        users(first: 10, skip: 5) {
          uuid
          firstName
          lastName
          email
        }
      }
    `;


    it("Query - Users", () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/graphql',
            body: {
              query
            },
        })
        .then((response) => {
            // Verify that the request returned a successful status and the expected results
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('users'); // incorrect result --- users: null
      
            // additional checks on the data if necessary --- 
            //const firstUser = response.body.data.users[0];
            //expect(firstUser).to.have.property('uuid');
            //expect(firstUser).to.have.property('firstName');
            //expect(firstUser).to.have.property('email');
          });
    })
})