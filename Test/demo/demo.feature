Feature: demo


    @demo
    Scenario Outline: navigate to wido
    Given open <url>
    Then search for <word>
    Then click on wdio webpage
    Then url should match <expectedUrl>

    Examples:
        | url                     | word  | expectedUrl           |
        | https://www.google.com  | wdio  | https://webdriver.io/ |

