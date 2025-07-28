// mathjax_config.js

MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    },
    options: {
        scale: 0.9, // Slightly larger scale for better readability
        renderActions: {
            /* This section is for custom render actions if needed.
               For example, to apply custom CSS classes to MathJax output.
               Not strictly necessary for basic setup.
            */
            addMenu: [20, function (doc) {
                doc.menu.find('Reset').setEnable(true);
            }, '', false],
            addCopy: [20, function (doc) {
                doc.menu.find('Copy').setEnable(true);
            }, '', false]
        }
    },
    svg: {
        fontCache: 'global'
    },
    chtml: {
        scale: 1, // Ensure CHTML output also respects scaling
        linebreaks: { automatic: true, width: "container" } // Enable automatic line breaks for equations
    }
};
