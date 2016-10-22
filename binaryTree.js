var Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    return this;
};
   
Node.prototype.insert = function(newNode) { 
    if(newNode.value < this.value) {
        if(this.left === null) {
            this.left = newNode;
        }  
        else { 
            this.left.insert(newNode);
        }
    } 
    else if(newNode.value > this.value) {
        if(this.right === null) {
            this.right = newNode;
        } 
        else {
            this.right.insert(newNode);
        }
    } 
    else {
        return true;
    }
};

Node.prototype.depthFirstSearch = function(searchValue) {
    console.log(searchValue+": "+this.value);
    if(this.value === searchValue) {
        console.log("search item found");
        return true;
    } 
    else if(searchValue < this.value && this.left !== null) {
        return this.left.depthFirstSearch(searchValue);
    } 
    else if(searchValue > this.value && this.right !== null) {
        return this.right.depthFirstSearch(searchValue);
    } 
    else { 
        console.log("could not find "+searchValue);
        return false;
    }
};
//
Node.prototype.inorderTraversal = function(visitor) {  
    if(this.left !== null) {
        this.left.inorderTraversal(visitor);
    }
    visitor(this.value);
    if(this.right !== null) {
        this.right.inorderTraversal(visitor);
    }
};

Node.prototype.preOrderTraversal = function(visitor) { 
    visitor(this.value);
    if(this.left !== null) {
        this.left.preOrderTraversal(visitor);
    }   
    if(this.right !== null) {
        this.right.preOrderTraversal(visitor);
    }
};

//

Node.prototype.postOrderTraversal = function(visitor) {        
    if(this.left !== null) {
        this.left.postOrderTraversal(visitor);
    }   
    if(this.right !== null) {
        this.right.postOrderTraversal(visitor);
    }
    visitor(this.value);
};

var BinarySearchTree = function(insertNode) {
    if(insertNode instanceof Node) {
        this.root = insertNode;
    } 
    else {
        this.root = new Node(insertNode);
    }
    return this;
};

BinarySearchTree.prototype.insert = function(insert) {  
    if(insert instanceof Node) {
        this.root.insert(insert);
    } 
    else {
        this.root.insert(new Node(insert));
    }
};

BinarySearchTree.prototype.depthFirstSearch = function(searchValue) {
    this.root.depthFirstSearch(searchValue);
};

BinarySearchTree.prototype.breadthFirstTraversal = function() {
    console.log("Breadth First Traversal");

    // For our intensive purposes,
    // our array is acting as a queue for us.
    var queue = [],
        current = this.root;

    if(current !== null) {
        queue.push(current);
    }

    // start off enqueing root
    while(queue.length > 0) {
        var tempNode = queue.shift();
        console.log(tempNode.value); // Visit current node
        if(tempNode.left !== null) {
            queue.push(tempNode.left);
        }
        if(tempNode.right !== null) {
            queue.push(tempNode.right);
        }       
    }   
};

BinarySearchTree.prototype.inOrderTraversal = function(){
    this.root.inorderTraversal(console.log);
};
BinarySearchTree.prototype.preOrderTraversal = function(){
    this.root.preOrderTraversal(console.log);
};
BinarySearchTree.prototype.postOrderTraversal = function(){
    this.root.postOrderTraversal(console.log);
};


// Gotta not hurt dat global namespace
(function(){

    // Example BinBinarySearchTree
    var bst = new BinarySearchTree(50);
    bst.insert(25);bst.insert(75);bst.insert(12);bst.insert(37);bst.insert(87);bst.insert(63);

    console.log("Inorder Traversal");
    bst.inOrderTraversal();

    console.log("Preorder Traversal");
    bst.preOrderTraversal();

    console.log("Postorder Traversal");
    bst.postOrderTraversal();

    console.log("Search for valid (63)");
    bst.depthFirstSearch(63);

    console.log("Search for invalid (19)");
    bst.depthFirstSearch(19);   

    bst.breadthFirstTraversal();
})();
 
 
 
 
 
 
 
 
 
 
 BinarySearchTree.prototype.getMin = () => {
    while (this.left !== null) {
        this = this.left;
    }
    return this.data;
}

BinarySearchTree.prototype.getMax = () => {
    while (this.right !== null) {
        this = this.right;
    }
    return this.data;
}

BinarySearchTree.prototype.find = (theData) => {
    while (current.data != theData) {
        if (theData < current.data) {
            current = current.left;
        } 
        else {
            current = current.right;
        }
        if (current == null){
            return null;
        }
    }
    return current;
}

BinarySearchTree.prototype.remove = (data) => {
    root = removeNode(this.root, data);
}

BinarySearchTree.prototype.removeNode = (node, data) => { 
    if (node == null){ 
        return null; 
    }
    if (data == node.data) {
        if (node.left == null && node.right == null){
            return null;
        }
        if (node.left == null){
            return node.right;
        }
        if (node.right == null){
            return node.left;
        }
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } 
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}
