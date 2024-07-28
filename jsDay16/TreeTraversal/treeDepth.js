function treeDepth(node) {
    if (node === null) return 0;
    return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}
// Define a sample tree node class and tree for demonstration
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(treeDepth(root)); // 2