import { Value } from 'slate';

const initialValue = Value.fromJSON({
    document: {
        "object": "document",
        "nodes": [
            {
                "object": "block",
                "type": "title",
                "nodes": [
                    {
                        "object": "text",
                        "text": "Give it a spicy title!"
                    }
                ]
            },
            {
                "object": "block",
                "type": "paragraph",
                "nodes": [
                    {
                        "object": "text",
                        "text":
                            "This example shows how to enforce \n your layout with schema - specific rules. \n This document will always have a title \n block at the top and at least one \n paragraph in the body.Try \n deleting them and see what happens!"
                    }
                ]
            }
        ]
    }
})

export default initialValue;