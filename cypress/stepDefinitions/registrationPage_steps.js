import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage_selectors from "../selectors/loginPage_selectors";
import RegistrationPage_selectors from "../selectors/registrationPage_selectors";
import Common_page from "../pageObjects/common_page";

const loginPage_selectors = new LoginPage_selectors();
const registrationPage_selectors = new RegistrationPage_selectors();
const common_page = new Common_page();

let loginPage_data; //Used as link to the fixxtures data.
let cookiesPage_data;
let registrationPage_data;

before(() => {
    cy.fixture("/registrationPage.json").then((registrationInputFieldsDataFile) => {
        registrationPage_data = registrationInputFieldsDataFile;
    });
  }); 

before(() => {
    cy.fixture("/cookiesPage.json").then((pageDataFile) => {
        cookiesPage_data = pageDataFile;
    });
  });  

before(() => {
    cy.fixture("/loginPage.json").then((loginDataFile) => {
      loginPage_data = loginDataFile;
    });
  });  

before(() => {

    // cy.visit('https://bloomenty.com/nl/home');
    cy.session('cookie', () =>{});
  });

  When("I fill in the 'Nick Name' field on the 'Registration' page with Correct data", () => {
    var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.nickNameData.correctNickNameDataData);
  
    cy.log("Моё rnd = " + rnd +
      " Это вот такое значение из нашего массива: " + registrationPage_data.nickNameData.correctNickNameDataData[rnd])
  
    common_page.typeDataForInputField(registrationPage_selectors.nickNameFieldForRegistration, registrationPage_data.nickNameData.correctNickNameDataData[rnd]);
  })

  When("I fill in the 'First Name' field on the 'Registration' page with Correct data", () => {
    var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.firstNameData.correctFirstNameDataData);
  
    cy.log("Моё rnd = " + rnd +
      " Это вот такое значение из нашего массива: " + registrationPage_data.firstNameData.correctFirstNameDataData[rnd])
  
    common_page.typeDataForInputField(registrationPage_selectors.firstNameFieldForRegistration, registrationPage_data.firstNameData.correctFirstNameDataData[rnd]);
  })

  When("I fill in the 'Last Name' field on the 'Registration' page with Correct data", () => {
    var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.lastNameData.correctLastNameDataData);
  
    cy.log("Моё rnd = " + rnd +
      " Это вот такое значение из нашего массива: " + registrationPage_data.lastNameData.correctLastNameDataData[rnd])
  
    common_page.typeDataForInputField(registrationPage_selectors.lastNameFieldForRegistration, registrationPage_data.lastNameData.correctLastNameDataData[rnd]);
  })
  
  
  
  
  