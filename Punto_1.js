const LinkedList = require('./LinkedList');

function mergeAndSortLists(list1, list2) {
    const mergedList = new LinkedList();

    let current1 = list1.head;
    let current2 = list2.head;

    while (current1) {
        mergedList.append(current1.value);
        current1 = current1.next;
    }

    while (current2) {
        mergedList.append(current2.value);
        current2 = current2.next;
    }

    let array = [];
    let current = mergedList.head;
    while (current) {
        array.push(current.value);
        current = current.next;
    }

    array.sort((a, b) => a - b);

    const sortedList = new LinkedList();
    array.forEach(value => sortedList.append(value));

    return sortedList;
}

// Prueba
const list1 = new LinkedList();
const list2 = new LinkedList();

[5, 4, 3, 2, 1].forEach(num => list1.append(num));
[10, 9, 8, 7, 6, 5].forEach(num => list2.append(num));

const mergedSortedList = mergeAndSortLists(list1, list2);
mergedSortedList.print();