grid.addEventListener('click',function(e) {
  if(e.target.dataset.type === 'number') {
    let sortedRows = Array.from(grid.rows)
    .slice(1)
    .sort((rowA,rowB) => +rowA.cells[0].innerHTML > +rowB.cells[0].innerHTML ? 1 : -1);
    grid.tBodies[0].append(...sortedRows)
  }
  if(e.target.dataset.type === 'string') {
    let sortedRows = Array.from(grid.rows)
    .slice(1)
    .sort((rowA,rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
    grid.tBodies[0].append(...sortedRows)
  }
})

