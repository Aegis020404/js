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
      "магнолия": {}
    }
  }
};






// function createTree(container, data) {
//   let ul = document.createElement('ul')
//   container.append(ul)
//   for(let key of Object.keys(data)) {
//     let li = document.createElement('li')
//     li.innerHTML = key 
//      ul.append(li)
//     // console.log(data[key]);
//     // console.log(Object.keys(data[key]).length)
//     if(Object.keys(data[key]).length) {
//       ul.append(createTree(ul, data[key]))
//     }
//   }
//   return ''
// }






// let container = document.getElementById('container');
// createTree(container, data); // создаёт дерево в контейнере
























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

// createTree(container,data)//cпособ через innerHTMl



// function createTree(container,obj) {
//   container.append(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//   // если нет дочерних элементов ,то вызов возращает undefined
//   // и элемент <ul> не будет создан
//   if (!Object.keys(obj).length) return;

// let ul = document.createElement('ul');

// for (let key in obj) {
//   let li = document.createElement('li');
//   li.innerHTML = key;

//   let childrenUl = createTreeDom(obj[key]);
//   if (childrenUl) {
//     li.append(childrenUl);
//   }

//   ul.append(li);
// }
// return ul;
// }
// let tree = document.getElementById('tree');

// createTree(tree,data);//через методы DOM.