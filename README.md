# SKD Clinet SvelteKit POC


## Graphql Codegen

* graphql codegen 
* urql graphql library

## Elements

* Accordion
* Button, 
* Card, 
* Field, 
* Selector
* TextArea 
* Toggle, 
* DateField
* Date: format, utc
* Number
* Link
* PartSerial 

## Layout

  * Layout: main section full width and optionally full height
  * SplitLayout: aside + content, full height + width. Aside + content overflowy: scroll
  * Box: padding: 0.5rem; 
  * Flex justify, align, style
  * Grid: n-columns, style
  * Stack: vertical padding default 1rem, 0.5rem, style

## svelte actions / directive

* escapeKey 
* clickOutside

## css colors

```
--black
--white
--darkBlue
--light blue
--red
--light red
--grey
--lightGrey
```

## color intentions

```
--primary: --darkBlue
--danger: --red
--background: --lightGrey
--textColor: --black
--cardBg: --white
--buttonColor: var(--primary)
```

## typescale

```
--headingFont: 'Space Mono', monospace;
--bodyFont: 'Work Sans', sans-serif;
--baseFontSize: 87.5%;

--h1: 2.488rem;
--h2: 2.074rem;
--h3: 1.44rem;
--h4: 1.44rem;
--h5: 1.2rem;
--smallText: 0.833rem;

```

## positioning

```
--containerPadding: 2.5%;
--borderRadius: 10px;
--headerHeight: 3rem;
```
## media queries mobile / desktop

``` 
@media only screen and (min-width: 500px) {
    :root {
        --baseFontSize: 81.25%
    }
}
```

