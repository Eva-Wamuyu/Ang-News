import {categories} from '../fixtures/categories';

describe('Category Navigation', () => {

  categories.forEach(category => {
    it(`should navigate to the articles page for ${category.label}`, () => {
      cy.visit('/categories');

      cy.contains(category.label).click();

      cy.url().should('include', `/articles/${category.path}`);

      cy.get('app-nav-bar p').should('contain.text', category.path.toUpperCase());
      cy.get('div.articles-container').should('exist');
      cy.get('button[goBack]').should('be.visible');

      cy.get('div.articles-container a.article-container').should($link => {
        expect($link).to.have.attr('href').and('not.be.empty');
        expect($link).to.have.attr('target', '_blank');
      });


    });
  });
});
