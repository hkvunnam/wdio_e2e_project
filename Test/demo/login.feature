Feature: login to OrangeHRM page

Background: launch Browser
Given launch browser and Navigate to url

@login
Scenario: Login with Credentials
Given Verify the <currentUrl>
When  login with <user> and <pwd>
Then  Verify the login status

Examples:
    | currentUrl                                                          | user     | pwd       |
    | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login  | Admin    | admin123  |