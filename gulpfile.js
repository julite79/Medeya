let gulp = require('gulp');
sass = require('gulp-sass');

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/src/scss/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function() {
    gulp.watch('app/src/scss/**/*.scss', gulp.parallel('sass'));
});
