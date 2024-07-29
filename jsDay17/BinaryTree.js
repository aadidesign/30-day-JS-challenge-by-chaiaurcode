
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        const insertNode = (node, newNode) => {
            if (newNode.value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

        insertNode(this.root, newNode);
    }

    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}
