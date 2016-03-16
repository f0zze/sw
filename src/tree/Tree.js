import templateFn from './tree-item.hbs';
import TreeStore from '../storage/TreeStorage';

const storage = new TreeStore();

export default class Tree {

    constructor({id,title,nodes = []}, element) {
        this._id = id;
        this._title = title;
        this._nodes = nodes;
        this._el = element;
        this._nodeElement = this._createNode();
        this._icon = this._nodeElement.querySelector('.tree__icon');

        //this._el.addEventListener('click', this._onTreeItemClick.bind(this));

        //this._el.addEventListener('click', this._onTreeItemClick);

        this._restoreState(this._id);

        this._el.onclick = (e) => {
            let tree = e.target.closest('.tree');
            if (tree) {
                this._changeTreeState(tree);
            }
            e.stopPropagation();
        };

        this._render();

    }

    _restoreState(id) {
        let liElement = this._el.closest('.tree');

        if (!storage.exists(id)) {
            storage.setExpanded(id);
            return;
        }

        if (liElement) {
            if (storage.isCollapsed(this._id)) {
                liElement.classList.add('closed');
            } else {
                liElement.classList.remove('closed');
            }
        }
    }

    _changeTreeState(tree) {
        tree.classList.toggle("closed");
        if (tree.classList.contains("closed")) {
            storage.setCollapsed(this._id);
        } else {
            storage.setExpanded(this._id);
        }
    }

    _changeIcon() {
        if (this._icon.classList.contains('glyphicon-plus')) {
            this._icon.classList.remove('glyphicon-minus')

            this._icon.classList.add('glyphicon-minus')
        } else {
            this._icon.classList.add('glyphicon-plus')
        }
    }

    _onTreeItemClick(e) {
        console.log('click');

        e.stopPropagation();
    }

    _render() {
        this._nodeElement = this._createNode();
        this._el.appendChild(this._nodeElement);

        for (let node of this._nodes) {
            new Tree(node, this._nodeElement.firstChild);
        }
    }

    _createNode() {
        let node = document.createElement('ul');
        node.classList.add('node');
        let templateStr = templateFn({
            id: this._id,
            title: this._title
        });

        node.innerHTML = templateStr;

        return node;
    }
}