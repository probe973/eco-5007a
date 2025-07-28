// assets/mathjax_config.js

MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    svg: {
        fontCache: 'global'
    },
    chtml: {
        scale: 1, // As you suggested, scale moved here.
        linebreaks: { automatic: true, width: "container" }
    },
    options: {
        // Removed scale from here.
        // Keeping renderActions if you want the reset/copy menu items.
        renderActions: {
            addMenu: [20, function (doc) { doc.menu.find('Reset').setEnable(true); }, '', false],
            addCopy: [20, function (doc) { doc.menu.find('Copy').setEnable(true); }, '', false]
        }
    }
};
