import TreeView from './TreeView'

new TreeView({
    el: document.querySelector('[data-component=tree]'),
    data: [
        {
            "id": 1,
            "title": "Paren1",
            nodes: [
                {
                    "id": 11,
                    "title": "Child 1",
                    nodes: [
                        {
                            "id": 12,
                            "title": "Child 1.1"
                        }
                    ]
                },
                {
                    "id": 433,
                    "title": "Child 2",
                    nodes: [
                        {
                            "id": 1211,
                            "title": "Child 1",
                            nodes: [
                                {
                                    "id": 1112,
                                    "title": "Child 1.1"
                                }
                            ]
                        },
                        {
                            "id": 13,
                            "title": "Child 2"
                        }
                    ]
                }
            ]
        },
        {
            "id": 112,
            "title": "Parent 2",
            nodes: [
                {
                    "id": 13,
                    "title": "Child1",
                    nodes: [
                        {
                            "id": 244,
                            "title": "Child 1.1"
                        }
                    ]
                },
                {
                    "id": 77,
                    "title": "Child 2"
                }
            ]
        }
    ]
});