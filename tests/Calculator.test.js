const {calculate} = require('../scr/Calculator.js');


test('addition', () =>  {
    expect(calculate('54+66')).toBe(120);
});


test('soustration',() => {
    expect(calculate('300+700')).toBe(1000);
}
);

test('multiplication',() => {
    expect(calculate('10*7')).toBe(70);
}
);

test('division', () => {
    expect(calculate('3+3*4')).toBe(15); 
}
)

test('prioritaire',() => {
    expect(calculate('30/3')).toBe(10);
}
)

test('parentheses',() => {
    expect(calculate('(2+3)*4')).toBe(20);
}
)

test('expression invalide', () => {
  expect(() => calculate('2+bad')).toThrow('Expression invalide');
});