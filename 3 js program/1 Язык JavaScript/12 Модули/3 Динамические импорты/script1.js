export function hi() {
    console.log(`Привет`);
  }
  
  export function bye() {
    console.log(`Пока`);
  }
  
  export default function() {
    console.log("Модуль загружен (экспорт по умолчанию)!");
  }