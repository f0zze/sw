'use strict';

export default class Node {

    constructor(options) {
        this._title = options.title;
        this._open = options.open;
        this._render();
    }

    _render() {
        console.log(this._title);
    }
}