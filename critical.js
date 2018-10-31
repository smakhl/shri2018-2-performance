var critical = require("critical");

critical.generate({
  // inline: true,
  base: "dist/",
  src: "base.html",
  dest: "critical.css",
  // minify: true,
  // extract: true,
  include: [".link", ".link:active", ".link:visited"]
  // css: ['src2/styles.css', 'src2/fonts/pt_sans.css',],
});
