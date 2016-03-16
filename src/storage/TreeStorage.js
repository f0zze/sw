const EXPANDED = "expanded";
const COLLAPSED = "collapsed";
const PREFIX = "TREE-STATUS-ID-";

export default class TreeStorage {

    constructor() {
        this.isExpanded = this._isExpanded;
        this.setExpanded = this._setExpanded;
        this.isCollapsed = this._isCollapsed;
        this.setCollapsed = this._setCollapsed;
        this.exists = this._exists;
    }

    _getKey(id) {
        return `${PREFIX}${id}`;
    }

    _setExpanded(id) {
        let key = this._getKey(id);
        window.localStorage.setItem(key, EXPANDED);
    }

    _isExpanded(id) {
        let key = this._getKey(id);
        return window.localStorage.getItem(key) === EXPANDED;
    }

    _setCollapsed(id) {
        let key = this._getKey(id);
        window.localStorage.setItem(key, COLLAPSED);
    }

    _isCollapsed(id) {
        let key = this._getKey(id);
        return window.localStorage.getItem(key) === COLLAPSED;
    }

    _exists(id) {
        let key = this._getKey(id);
        return window.localStorage.getItem(key) ? true : false;
    }


}