
Feature: Pesquisar Reserva
As user
I want to can performs a search of a office rooms
For can to show the office rooms that was reserved


Scenario: Performs a reserves office rooms as success
    Given insert a office room "Sala da justiça"
    Then show office room "Sala da Justiça" in the list
    
