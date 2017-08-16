
function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this._length = 0;
    this.head = null;
}

SinglyLinkedList.prototype.add = function (val) {
    var node = new Node(val);
    var currentNode = this.head;

    if (!currentNode) {
        //Link list is empty
        this.head = node;
        this._length++;
        return node;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return node;
}


SinglyLinkedList.prototype.search = function (position) {
    var currentNode = this.head;
    var length = this._length;
    var message = "Non Existent Data ";
    var count = 1 ;
    if (position > length || !length || position < 1) {
        // Error 
        return new Error(message);
    }
    while (count < position) {
        currentNode = currentNode.next;
        count++
    }

    return currentNode;
}
SinglyLinkedList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};
