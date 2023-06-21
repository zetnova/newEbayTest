import { Given,When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../page_object/homePage";  

            let homePage= new HomePage();



            Given("I am on the Ebay homepage", ()=>{
               // homePage.visitEbay();
               cy.visit('https://www.ebay.com/');
                })

        
                
            When("I search for APPLE",() => {
                homePage.searchBox().type(searchItem);
                homePage.getSearchButton().click();
            
            })

            Then("I should see search results", () => {
                homePage.getAllSearchResultsOnThepage();
            })

            When("I select the first item from the search results", () => {
                homePage.getFirstItemFromTheSearchResults().click();
            })

            Then("I add the item to the cart", () => {
                homePage.getFirstItemFromTheSearchResults().click();
            })

            Then("the item should be added to the cart", () => {
                homePage.getFirstItemFromTheSearchResults().click();

            })

