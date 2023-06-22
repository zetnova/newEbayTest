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
        cy.get('.s-item__title').each(($item) => {
            cy.log($item.text())
          });
    }

    getFirstItemFromTheSearchResults(){
        return cy.get('.s-item__title').eq(1);
    }
    

}

export default  HomePage;          