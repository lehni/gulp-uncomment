# gulp-uncomment

A simple gulp plugin that uncomments / strips comments out of your JavaScript code.

Copyright © 2011 - 2016, Jürg Lehni.

```js
var gulp = require('gulp');
var uncomment = require('gulp-uncomment');

gulp.task('whitespace', function() {
    return gulp.src('./src/*.js')
        .pipe(uncomment({
            mergeEmptyLines: true
        }))
        .pipe(gulp.dest('./dest'));
});
```
