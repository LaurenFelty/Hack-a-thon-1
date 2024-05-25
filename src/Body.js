class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value);
        this.head = node;
        this.tail = node;
    }
}