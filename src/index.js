import Tree from './Tree'

new Tree({
    el: document.querySelector('[data-component=tree]'),
    data: {
        "title": "Hello Node",
        nodes: []
    }
})
;