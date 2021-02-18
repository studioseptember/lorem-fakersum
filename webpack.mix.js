let mix = require('laravel-mix');

mix.postCss("src/main.css", "css", [
 require("tailwindcss"),
]);