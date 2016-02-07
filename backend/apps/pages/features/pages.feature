Feature: showing off behave

  @old
  Scenario: run a simple test
    Given we have behave installed
      when we implement a test
      then behave will test it for us

  @new
  Scenario: check home page
    Given we have behave installed
      then I visit "/"
      then I should see "WebScraping Jobs"