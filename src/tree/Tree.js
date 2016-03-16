import templateFn from './tree-item.hbs';
import TreeStore from '../storage/TreeStorage';

console.log(TreeStore);
const storage = new TreeStore();

export default class Tree {

    constructor({id,title,nodes = []}, element) {
        this._id = id;
        this._title = title;
        this._nodes = nodes;
        this._el = element;
        this._opened = true;

        storage.setNodeState(this._id, true);


        this._nodeElement = this._createNode();
        this._icon = this._nodeElement.querySelector('.tree__icon');

        //this._el.addEventListener('click', this._onTreeItemClick.bind(this));

        //this._el.addEventListener('click', this._onTreeItemClick);


        this._el.onclick = (e) => {
            let tree = e.target.closest('.tree');
            if (tree) {
                this._changeIcon();
                tree.classList.toggle("closed");
            }

            e.stopPropagation();

        };

        this._render();

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