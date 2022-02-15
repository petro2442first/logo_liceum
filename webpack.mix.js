const mix = require("laravel-mix");

mix
  .setPublicPath("./public")
  .js("src/js/app.js", "public/")
  .sass("src/style/style.scss", "public/")
  .options({
    autoprefixer: "last 5 versions",
  })
  .copyDirectory("src/assets/images/", "public/images")
  // .copyDirectory("src/assets/videos/", "public/videos")
  .browserSync({
    watch: true,
    server: "./public",
  })
  .version();
