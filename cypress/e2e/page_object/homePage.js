class HomePage{

    visitEbay(){ 
        return cy.visit('https://www.ebay.com/')
    } 
    
    searchBox(){
        return cy.get('#gh-ac')
    }


    getSearchButton(){
        return cy.get('#gh-btn')
    }

    getAllSearchResultsOnThepage(){
        cy.get('.s-item.s-item__pl-on-bottom').each(($item) => {
            cy.log($item.text())
          });
    }

    getFirstItemFromTheSearchResults(){
        return cy.get('.s-item__title').еq(0)
    }
    

}

export default  HomePage;          