# Day 04
## Positioning
- default: flow layout (static)
- general positioning rules
  - relative, absolute, fixed
    - placed on top of their neighbouring elements
- position property values
  - static
    - probably should be names "fluid" or "flow"
  - relative
    - top, bottom, left, right are relative to the element's original flow position
  - absolute
    - by itself (without a relatively positioned parent element): top, bottom, left, right are relative to the *body*
    - if a parent element is relatively positioned: top, bottom, left, right are relative to the *parent element*
  - fixed
    - mainly used for navigation (or ads)
- additional position properties
  - top
  - bottom
  - left
  - right
  - z-index
    - default: 0
    - can run into complex bugs because of different stacking contexts

## Nav Bars, old a new
1. semantic nav
   - nav tag
   - undordered list
   - links inside li tags
   - add classes and ids as needed
2. remove bullets (if needed)
3. remove padding
4. make buttons more buttony
5. then... we make nav horizontal
    - old way: floats
    - new way: Flexbox
