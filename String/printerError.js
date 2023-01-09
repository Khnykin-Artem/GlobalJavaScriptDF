"use strict"

function printerError(s, range) {
    const [x, y] = range;
    const regExp = /[^x-y]/;

    const result = String(s).match(regExp);
    const coincidence = result?.[0];
    console.log(result)
    if(coincidence === null) {
        return `${coincidence.length}/${s.length}`;
    } else {
        return `${0}/${s.length}`;
    }
}

console.log(printerError('abcdzzzzz', ['a', 'c']))

// На заводе принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами из a to m.

// Цвета, используемые принтером, записываются в управляющую строку. Например, "хорошая" управляющая строка будет aaabbbbhaijjjmозначать, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a...

// Иногда возникают проблемы: отсутствие цветов, технический сбой и выдается "плохая" управляющая строка, например, aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.

// Вы должны написать функцию, printer_errorкоторая по заданной строке будет возвращать частоту ошибок принтера в виде строки , представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длину контрольной строки. Не уменьшайте эту дробь до более простого выражения.

// Строка имеет длину больше или равную единице и содержит только буквы от aдо z.

// Примеры:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"