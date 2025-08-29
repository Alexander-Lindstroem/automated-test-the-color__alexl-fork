# Feedback

Feedback to Victor, who made the app!

## General

General feedback about the app

### SPA or page-based?

There is some confusion about whether or not the app is supposed to be one or the other. The read me describes it as being an SPA, but also includes instructions to create different pages. Faithful to its SPA premise, the header expects a function to set the current page, but once again, it is unclear how that is supposed to be used for the actual pages. I have decided to keep it as a SPA and have the pages at the same time, but I don't quite understand why you would build the app this way.

## Tests

Feedback about the tests.

### Header

Great tests, no complaints.

### MainContent

Could probably have used a few more tests. The actual text being tested is weirdly sporadic when you compare it with the reference image in the README. Also could have used a bit better organization for each test.

Also, you could probably have used more regex.

### ColorPick

The usage of mock functions are good and it made me realize I should've done that! Probably! 

### Footer

There's only one test, so there's not much to say. Maybe check for more specific roles? Just for ARIA purposes.

### Home

Given that I could pass all the tests here without basically doing anything, and that the site still did not have the function to change background color actually integrated, I would have to say that the tests here are insufficient. The tests should actually check whether or not the right value gets passed into the function, and that said function works. You might have to check the background color attribute of main.