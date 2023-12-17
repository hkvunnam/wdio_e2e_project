Feature: Checkbox

    @Check
    Scenario Outline: Selecting a Check box
    Given open a Checkbox browser
    When Verify the presence of Checkbox
    Then Select a checkbox

    Examples:
        | Header 1 | Header 2 | Header 3 |
        | Value 1  | Value 2  | Value 3  |