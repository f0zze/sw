export default class TreeStorage {

    constructor() {
        this.getState = this._getState;
        this.setNodeState = this._setState;
    }

    _getState(nodeId) {
    }

    _setState(nodeId, state) {
        window.localStorage.setItem(String(nodeId), state)
    }


}