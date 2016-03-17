// Файл, демонстрирующий то, как фреймворк создает среду (песочницу) для
// исполнения приложения, загружает приложение, передает ему песочницу в
// качестве глобального контекста и получает ссылу на экспортируемый
// приложением интерфейс. Читайте README.md в нем задания.

'use strict';
// Фреймворк может явно зависеть от библиотек через dependency lookup
const fs = require('fs');
const vm = require('vm');
const util = require('util');


// Создаем контекст-песочницу, которая станет глобальным контекстом приложения
const context = {
  module: {},
  console: console,
  setTimeout: setTimeout,
  setInterval: setInterval,
  util:util
};

context.global = context;
const sandbox = vm.createContext(context);

// Читаем исходный код пр xиложения из файла
let fileName = './application.js';
if (process.argv[2] !== undefined) {
  fileName = process.argv[2];
}

fs.readFile(fileName, function(err, src) {
  // Тут нужно обработать ошибки
if (err) {
  return console.log(err);
}
  // Запускаем код приложения в песочнице
  var script = vm.createScript(src, fileName);
  script.runInNewContext(sandbox);

  // Забираем ссылку из sandbox.module.exports, можем ее исполнить,
  // сохранить в кеш, вывести на экран исходный код приложения и т.д.
});
