// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
console.log('From application global context');

module.exports = function() {
  // Вывод из контекста экспортируемой функции
  console.log('From application exported function');
};

// Задание 1
function second_passed() {
  console.log("прошла секунда")
}
setTimeout(second_passed, 1000)


function sec() {
  	util.log("прошла секунда")
}
setInterval(sec, 1000) // использовать функцию

