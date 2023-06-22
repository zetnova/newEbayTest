import { Given,When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../page_object/homePage";
import  SecondPage from "../page_object/secondPage"; 

            let homePage= new HomePage();
            let secondPage = new SecondPage();



            Given("I am on the Ebay homepage", ()=>{
               homePage.visitEbay();     
                })

        
                
            When("I search for {string}",(item) => {
                cy.wait(1000);
                homePage.searchBox().type( item );
                cy.wait(1000)
                homePage.getSearchButton().should('be.visible').click();
            
            })

            Then("I should see search results", () => {
                homePage.getAllSearchResultsOnThepage();
            })

            When("I select the first item from the search results", () => {
                cy.wait(2000)
               // homePage.getFirstItemFromTheSearchResults().click({force:true});
               secondPage.switchWindow();
               
            })

            Then("I add to cart", () => {
                cy.wait(5000)   
                secondPage.addToCart();
                
            })

            Then("I add the item to the cart", () => {
                cy.log  ('Add to cart button is not visible')
                
            })

            Then("the item should be added to the cart", () => {
                cy.log  ('Add to cart button is not visible')   
                

            })

