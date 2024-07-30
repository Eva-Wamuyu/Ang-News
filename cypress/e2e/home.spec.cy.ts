import {categories} from '../fixtures/categories';


describe('Home Page', () => {


  it('should display the Categories component correctly with all categories', () => {
    cy.visit('/categories');

    cy.contains('Get News Articles Based on the categories below:').should('be.visible');

    cy.get('a.category-link').should('have.length', categories.length);

    categories.forEach(category => {
      cy.get('a.category-link')
        .contains(category.label)
        .should('be.visible')
        .parent()
        .find('img.category-image')
        .should('have.attr', 'src', category.icon);
    });
  });
});
