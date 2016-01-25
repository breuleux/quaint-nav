
quaint-nav
==========

Macros to populate and dump navigation bars. This does not come with
any styling, so it is mostly useful for use by other plugins like
`quaint-look-nice` or `quaint-bootstrap3`.


## Install

    quaint --setup nav


## Macros


### `nav`

Use the `nav name :: elements` macro to register text and links to the
navigation bar with the given name. If one of the entries contains a
sub-list, it will appear as a dropdown.

```quaint
nav main ::
  * Nav element
  * Link @@ somewhere.html
  * Dropdown
    * ABC
    * XYZ @@ xyz
```

By default, if no name is given, the elements will be added to the
`main` nav.

If the body is equal to the directive `dump!`, the navbar will be
inserted in the document:

```quaint
nav main :: dump!
```


## Options

### nav-class-prefix

**Default**: "nav-"

This prefix is used on the class names of the generated nav tags. For
instance, if the prefix is `nav-`, then dumping the `main` nav would
produce a nav with class `nav-main`.


### dropdown-class

**Default**: "dropdown"

Class given to the `li` elements that are dropdowns


### dropdown-menu-class

**Default**: "dropdown-menu"

Class given to the `ul` dropdowns.


### suppress-empty-nav

**Default**: false

If true, dumping a nav with no elements will not insert anything.


### wrap-dropdown

This is a function that takes the label of a dropdown and returns a
new label, but might e.g. add a caret after it.

**Default**: wraps the element with a `div`


### wrap-element

Function that takes a navbar entry and returns a replacement if
appropriate. This is used for instance by `quaint-bootstrap3` to wrap
text nodes with the `navbar-text` class.

**Default**: wraps plain text with `div`.
