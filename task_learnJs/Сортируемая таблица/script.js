grid.onclick = function(e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    // если ячейка TH, тогда сортировать
    // cellIndex - это номер ячейки th:
    //   0 для первого столбца
    //   1 для второго и т.д.
    sortGrid(th.cellIndex, th.dataset.type);
  };

  function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    // compare(a, b) сравнивает две строки, нужен для сортировки
    let compare;

    switch (type) {
      case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
        break;
      case 'string':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
    }

    // сортировка
    rowsArray.sort(compare);

    tbody.append(...rowsArray);
  }