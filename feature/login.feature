Feature: Login
    As User
    I want can performs login in an application with e-mail and password valid
    For can view my authentication in application

 Scenario: Login with success
    Given that view page Project Triad
    When insert email "admin@gmail.com" and "123456'"
    Then view my authentication with success

 Scenario Outline: login invalid
    Given that view page Project Triad
    When insert email <email> and <password>
    Then view Error message <message>

    Examples:
        |email|password|message|
        |     |        |       |
