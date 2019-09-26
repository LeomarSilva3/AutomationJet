const soma = require('../testeAutomation/soma');


test('adds 1 + 2 to equal 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('adds 1 + 0 to equal 1', () => {
    expect(soma(1, 0)).toBe(1);
});

test('adds 0 + 0 to equal 0', () => {
    expect(soma(0, 0)).toBe(0);
});

test('adds 0 + 1 to equal 0', () => {
    expect(soma(0, 1)).toBe(1);
});

test('adds 1 + (-2) to equal -2', () => {
    expect(soma(1, -2)).toBe(-1);
});

test('adds 2 + (-1) to equal 1', () => {
    expect(soma(2, -1)).toBe(1);
});