module.exports = `/*

   DISPLAY
   Docs: http://tachyons.io/docs/layout/display

   Base:
    d = display

   Modifiers:
    n     = none
    b     = block
    ib    = inline-block
    it    = inline-table
    t     = table
    tc    = table-cell
    tr    = table-row
    tcol  = table-column
    tcolg = table-column-group

   Media Query Extensions:
     -m  = medium
     -l  = large

*/

.dn {              display: none; }
.di {              display: inline; }
.db {              display: block; }
.dib {             display: inline-block; }
.dit {             display: inline-table; }
.dt {              display: table; }
.dtc {             display: table-cell; }
.dt-row {          display: table-row; }
.dt-row-group {    display: table-row-group; }
.dt-column {       display: table-column; }
.dt-column-group { display: table-column-group; }

/*
  This will set table to full width and then
  all cells will be equal width
*/
.dt--fixed {
  table-layout: fixed;
  width: 100%;
}`
