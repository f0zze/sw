'use strict';
import template from './tree-item.hbs'
import Tree from './tree/Tree'

export default class TreeView {
    constructor({el,data}) {
        this._el = el;
        this._data = data;

        for (let t of this._data) {
            new Tree(t, this._el);
        }
    }


}
