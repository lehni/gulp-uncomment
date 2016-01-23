# gulp-uncomment

A gulp plugin that uncomments / strips all comments out of your JavaScript code.

It uses a proper parser that is aware of JS syntax, in order to distinguish
regular expressions and strings from actual code blocks, and knows how to handle
them properly.

It also preserves conditional comments (`/*@ … */`) and comments marked as
protected (`/*! … */`).

Example:

```js
var gulp = require('gulp');
var uncomment = require('gulp-uncomment');

gulp.task('whitespace', function() {
    return gulp.src('./src/*.js')
        .pipe(uncomment({
            removeEmptyLines: true
        }))
        .pipe(gulp.dest('./dest'));
});
```

Input:

```js
var one = 1;
// two
three(/[\s\/]/);
// four
five(one / 2);
six(); /* seven
eight
nine
*/ // ten
eleven();
```

Output:

```js
var one = 1;
three(/[\s\/]/);
five(one / 2);
six(); 
eleven();
```

Copyright © 2011 - 2016, [Jürg Lehni](http://scratchdisk.com/)
