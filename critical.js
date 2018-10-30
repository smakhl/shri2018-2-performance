var critical = require('critical');

critical.generate({
    inline: true,
    base: 'src2/',
    src: 'index.html',
    dest: 'index-critical.html',
    minify: true,
    extract: true
});