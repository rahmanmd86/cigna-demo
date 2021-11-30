# cigna-demo

# Pre requisites
- Node
- npm
- yarn

# Install package
- npm install

# Run tests
- yarn cy:open

Tests are in `cypress > integration > tests` folder

# Run tests [Headless]
- yarn cy:headless

- Results
```
      Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  tests/cartPage.spec.js                   00:06        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tests/landingPage.spec.js                00:43       13       11        -        2        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  tests/productPage.spec.js                00:03        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:53       15       13        -        2        -  

✨  Done in 77.16s.
```

# Use cases
- Validate navigation links, logo
- Validate count on each categories
- Validate user is able to sign up
- Validate user is able to log in
- Validate selected item is viewable with details
- Validate item can be added to cart

## TODO:
- Validate item can be removed from cart
- Validate item in cart can be purchased