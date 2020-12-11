# flavor-text

### Adds flavor to your text.

To use this package, first install it:

```jsx
npm i flavor-text
```

Require it at the top of the file you want to use it in:

```jsx
const flavorText = require("flavor-text");
```

Instantiate a new object:

```jsx
let flavor = new flavorText();
```

And then pass the string you want to add flavor to as an argument to a method below.

# **Examples:**

```jsx
flavor.loud("why are you yelling");
```

Returns "WHY ARE YOU YELLING"

```jsx
flavor.soft("PSST");
```

Returns "psst"

```jsx
flavor.wavy("nice");
```

Returns "nice", but with a tilde on each side for sarcasm.

```jsx
flavor.spacy("wow");
```

Returns "w o w"

```jsx
flavor.period("what do you mean");
```

Returns "what. do. you. mean."

```jsx
flavor.trailing("if you say so");
```

Returns "if... you... say... so..."
