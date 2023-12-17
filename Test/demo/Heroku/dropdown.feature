Feature: Selecting Option in Dropdown

    @dropdown
    Scenario Outline: Select Options in a Dropdown
    Given Open a browser Dropdown
    When verify the presence of Dropdown
    Then Select the option in Dropdown

    Examples:
        | option    | Header 2 | Header 3 |
        | Option 1  | Value 2  | Value 3  |
        
