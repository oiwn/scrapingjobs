Feature: Test pages and urls

  Scenario: check home page
      when I visit "/"
      then I should see "WebScraping Jobs"

  Scenario: check contacts page
      when I visit "/contacts"
      then I should see "Contacts"

  Scenario: check about page
      when I visit "/about"
      then I should see "About"