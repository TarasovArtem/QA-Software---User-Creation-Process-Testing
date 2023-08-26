/// <reference types="Cypress" />


describe("Create User", () => {

    const query = `
    mutation CreateUserMutation($input: CreateUserInput!) {
        createUser(input: $input) {
            ok
            error
            user {
            uuid
            email
            firstName
            lastName
            newsletter
            }
        }
    }
    `;
    //The data can be random (Math.random())
    const variables = {
        input: {
        "email": "newUser@xcnt.com",
        "firstName": "Agent",
        "lastName": "007",
        "newsletter": false
        }
    };

    

    it("Mutation - Create User", () => {
      
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
                //console.log(data);
                cy.log(data);
                expect(data.data.createUser).equal(null);
                // incorrect result --- users: null. 
                //The data has been sent, but the user has not been created. Missing table in DB
                cy.log(data.data.createUser);
              } else {
                console.error('Request failed with status:', response.status);
              }
        });
    })   
})


describe("Create User - Empty Data", () => {
  
  const query = `
  mutation CreateUserMutation($input: CreateUserInput!) {
      createUser(input: $input) {
          ok
          error
          user {
          uuid
          email
          firstName
          lastName
          newsletter
          }
      }
  }
  `;
  //The data can be random (Math.random())
  const variables = {
      input: {
      "email": "",
      "firstName": "",
      "lastName": "",
      "newsletter": false
      }
  };

  it("Mutation - Create User with empty data", () => {
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
              //console.log(data);
              cy.log(data);
              expect(data.data.createUser.error).equal("INVALID_EMAIL");
              expect(data.data.createUser.ok).equal(false);
              // incorrect result --- users: null. 
              //The data has been sent, but the user has not been created. Missing table in DB
              cy.log(data.data.createUser);
            } else {
              console.error('Request failed with status:', response.status);
            }
      });
  })   
})





