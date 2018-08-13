# Slots


### default 
* slot-scope:
  * `scope` — array of items for current page
  * `page` — current page number
  * `pages` — total number of pages
  * `previous` — array of visible previous pages
  * `next` — array of visible next pages   

Default slot where you should render your item's template

---

### controls 
* slot-scope:
  * `page` — current page number
  * `pages` — total number of pages
  * `previous` — array of visible previous pages
  * `next` — array of visible next pages

Slot where you can use your own controls. Both for top and bottom controls

---

### top-controls
* slot-scope:
  * `page` — current page number
  * `pages` — total number of pages
  * `previous` — array of visible previous pages
  * `next` — array of visible next pages

Slot where you can use your own top controls.

---

### bottom-controls
* slot-scope:
  * `page` — current page number
  * `pages` — total number of pages
  * `previous` — array of visible previous pages
  * `next` — array of visible next pages
  
Slot where you can use your own bottom controls.

---
