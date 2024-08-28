const Node = require('./NodeList');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node) {
        const newNode = new Node(node);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
    }

    peek(value, current = this.head) {
        if (this.head === null) {
            return false;
        }

        if (current.value !== null) {
            if (current.value === value) {
                return true;
            } else {
                return this.peek(value, current.next);
            }
        }

        return false;
    }

    size(current = this.head, acum = 1) {
        if (current === null) {
            return 0;
        }

        if (current.next === null) {
            return this.size(current.next, acum = acum + 1);
        }

        return acum;
    }

    print()
    {
        let node = this.head;
        while (node) {
            console.log(`Value ${node.value} | Next ${node.next?.value || null}`);
            node = node.next;
        }
    }
}

module.exports = LinkedList;