class Cell {
  constructor(index) {
    this.id = index;
    this.mine = false;
    this.flagged = false;
    this.numAdj = null;
    this.revealed = false;
  }
}


//``
// this.focus = Boolean;
// this.revealed = false;
// this.flagged = false;
// this.numAdj = null;
