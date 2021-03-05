describe('get elements', function () {
    /**
     * Simply querying for the element causes ProseMirror to update the DOM (why?), which in turn causes the "detached" error
     * In the console, you can see the DOM changes
     */
    it('should get element', function () {
        cy.visit('http://localhost:8080/');

        cy.get('.ProseMirror p').first().as('firstP');
     })

    /**
     * Querying for length doesn't fail, even though it also causes DOM changes
     */
    it('should get length', function () {
        cy.visit('http://localhost:8080/');
        cy.get('.ProseMirror p').should('have.length', 2);
     })

    /**
     * Querying for element of type causes different DOM changes that don't cause the "detached" error
     */
    it('should get element of type', function () {
        cy.visit('http://localhost:8080/');

        cy.get('.ProseMirror p:first-of-type').as('firstP');
     })

    /**
     * Querying with DOM apis doesn't cause a DOM change
     */
    it('should get element with DOM API', function () {
        cy.visit('http://localhost:8080/');

        cy.window().then(window => {
            window.document.querySelector('.ProseMirror p:nth-child(1)')
        });
     })
 });
