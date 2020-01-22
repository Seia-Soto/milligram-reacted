# milligram-reacted

React components for Milligram CSS.

## Table of Contents

- [Typography](#Typography)
  - [Heading](#Heading)
- [Button](#Button)
- [List](#List)

----

**Shared properties**

These shared properties will determine how your component work.

- `as`: Determines the tag name of component

```js
<Component as='h1' /> // NOTE: This will be `h1`
```

- `variant`: Additional class name(s) of component

```js
<Component variant='black' /> // NOTE: If there is style(s) for `black` class name.
```

# Typography

## Heading

```js
<Heading as='h1'>Heading</Heading>
<Heading as='h2'>Heading</Heading>
<Heading as='h3'>Heading</Heading>
<Heading as='h4'>Heading</Heading>
<Heading as='h5'>Heading</Heading>
<Heading as='h6'>Heading</Heading>
```

# Button

- Outlined button

```js
<Button outline>Never click</Button>
```

- Clear button

```js
<Button clear>Never click</Button>
```

Also, you can change the form of component via `as` property:

- Input button

```js
<Button as='input' ...>Submit</Button>
```
