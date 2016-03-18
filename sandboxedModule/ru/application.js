// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

'use strict';

const util = require('util');

console.log('smtn in console');


module.exports = {
  one: 21341234,
  two: 'example of string',
  three: {
    func: () => {
      console.log('Stroka');
    }
  }
};


