let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {},
      'Бляlь': ''
    }
  }
};
// function createTree(container, obj) {
//       container.innerHTML = createTreeText(obj)
//     };

// function createTreeText(obj) {// Отдельная рекурсивная функция
//   let li ="";
//   let ul;
//   for (let key in obj) {
//     li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//   }
//   if(li) {
//     ul = '<ul>' + li +'</ul>'
//   }

//   return ul || ''
// }

// createTree(tree,data)//cпособ через innerHTMl



function createTree(container,obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  // если нет дочерних элементов ,то вызов возращает undefined
  // и элемент <ul> не будет создан
  if (!Object.keys(obj).length) return;

let ul = document.createElement('ul');

for (let key in obj) {
  let li = document.createElement('li');
  li.innerHTML = key;

  let childrenUl = createTreeDom(obj[key]);
  if (childrenUl) {
    li.append(childrenUl);
  }

  ul.append(li);
}
return ul;
}
let tree = document.getElementById('tree');

createTree(tree,data);//через методы DOM.