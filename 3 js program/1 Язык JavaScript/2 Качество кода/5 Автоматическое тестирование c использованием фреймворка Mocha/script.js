describe("pow", function() {

    // it("возводит число в степень n", function() {
    //   assert.equal(pow(2, 3), 8);
    // });
    it("2 в степени 3 будет 8", function() {
        assert.equal(pow(2, 3), 8);
      });
    it("3 в степени 4 будет 81", function() {
         assert.equal(pow(3, 4), 81);
    });
  });

//   Спецификация состоит из трёх основных блоков:

// describe("заголовок", function() { ... })
// Какую функциональность мы описываем. В нашем случае мы описываем функцию pow. Используется для группировки рабочих лошадок – блоков it.

// it("описание", function() { ... })
// В первом аргументе блока it мы человеческим языком описываем конкретный способ использования функции, а во втором – пишем функцию, которая тестирует данный случай.

// assert.equal(value1, value2)
// Код внутри блока it, если функция работает верно, должен выполняться без ошибок.

function pow(x, n) {
    if(n < 0) n = NaN;
    if(n !==Math.round(n)) n = NaN;
    return x**n;// :) сжульничаем! хотя нет
}

describe('pow1', function() {
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} в степени 3 будет ${expected}`,function() {
            assert.equal(pow(x, 3), expected);
        });
    }
        for (let x = 1; x<= 5; x++) {
            makeTest(x);
        }
    });

    // describe("тест", function() {

    //     before(() => alert("Тестирование началось – перед тестами"));
    //     after(() => alert("Тестирование закончилось – после всех тестов"));
      
    //     beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
    //     afterEach(() => alert("После теста – заканчиваем выполнение теста"));
      
    //     it('тест 1', () => alert(1));
    //     it('тест 2', () => alert(2));
      
    //   });


    describe('pow',function() {

        it('для отрицательных n возвращает NaN', function() {
            assert.isNaN(pow(2,-1));
        })
        it("для дробных n возвращает NaN", function() {
            assert.isNaN(pow(2, 1.5));
          });
    })
    // Новые тесты падают, потому что наша реализация не поддерживает их. Так работает BDD. Сначала мы добавляем тесты, которые падают, а уже потом пишем под них реализацию.
    console.log(Math.round(4.93))

//     Обратите внимание на assert.isNaN. Это проверка того, что переданное значение равно NaN.

// Библиотека Chai содержит множество других подобных функций, например:

// assert.equal(value1, value2) – проверяет равенство value1 == value2.
// assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
// assert.notEqual, assert.notStrictEqual – проверяет неравенство и строгое неравенство соответственно.
// assert.isTrue(value) – проверяет, что value === true
// assert.isFalse(value) – проверяет, что value === false