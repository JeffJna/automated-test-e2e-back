const apiKey = Cypress.env("apiKey");
const token = Cypress.env("token");

describe("Trello API Tests", () => {
  let boardId;

  it("Cria um novo board", () => {
    cy.request({
      method: "POST",
      url: `https://api.trello.com/1/boards/?name=New%20Board&key=${apiKey}&token=${token}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      boardId = response.body.id;
    });
  });

  it("Consulta as listas do board criado", () => {
    cy.request({
      method: "GET",
      url: `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${token}`,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      cy.wrap(response.body[0].id).as("idList");
    });
  });

  it("Cadastra um novo card na lista", function () {
    cy.request({
      method: "POST",
      url: `https://api.trello.com/1/cards?idList=${this.idList}&key=${apiKey}&token=${token}&name=CARD%20TESTE`,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const cardId = response.body.id;
      cy.wrap(cardId).as("cardId");
    });
  });

  it("Exclui o card criado", function () {
    cy.request({
      method: "DELETE",
      url: `https://api.trello.com/1/cards/${this.cardId}?key=${apiKey}&token=${token}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Exclui o board criado", () => {
    cy.request({
      method: "DELETE",
      url: `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${token}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
