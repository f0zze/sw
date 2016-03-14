'use strict';
import treeTemplate from './tree.hbs'

export default class Tree {
    constructor(options) {

        this._el = options.el;
        this._data = options.data;
        this._nodes = this._data.nodes;
        this._title = this._data.title;

        this._el.addEventListener('click', this._onTreeClick.bind(this));

        this._render();
    }

    _onTreeClick(event) {
        let item = event.target.closest('[data-node-title]');
        alert(item.dataset['nodeTitle']);
    }

    _render() {
        console.log('render...');

        this._el.innerHTML = treeTemplate({title: this._title});
        if (this._nodes) {
            new Tree({
                el: this._el.querySelector('[data-node]'),
                data: {
                    title: "Hello second node"
                }
            })
        }
        //document.querySelector('body').innerHTML = treeTemplate({title: this._title});
    }
}
