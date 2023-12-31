/// <reference types="Cypress" />
 

describe("Delete User", () => {

    const query = `
        mutation DeleteUserMutation($uuid: String!) {
            deleteUser(uuid: $uuid) {
            ok
            }
        }
    `;

    const variables = {
        uuid: {
            "uuid": "1"
        }
    };

    it("Mutation - Delete User", () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('graphql'),
            headers: {
              'Content-Type': 'application/json',
            },
            body: {
              query,
              variables,
            },
        })
        .then(response => {
          // Verify that the request returned a successful status and the expected results 
            if (response.status === 200) {
              const data = response.body;
              const status = response.status
              //console.log(data);
              cy.log(data)
            } else {
              console.error('Request failed with status:', response.status);
            
            }
        });
    })
})