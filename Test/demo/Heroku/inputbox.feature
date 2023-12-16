Feature: Input Box

    @Input
    #Giving Some Text in Input Box
    Scenario Outline: Perform Web Input Action
    Given Open a browser
    When Perform Webinteractions
    Then Close the browser

    Examples:
        | Test_ID  | Header 2 | Header 3 |
        | TID_001  | Value 2  | Value 3  |