class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
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
        if (current != null) {
            if (current.value === value) {
                return true;
            } else { return this.peek(value, current.next); }
        } return false;} 
    size(current = this.head, acum = 1) { 
        if (this.head === null) { 
            return 0; } 
        if (current.next !== null) { 
            return this.size(current.next, (acum = acum + 1)); } 
            return acum; 
        } 
    remove(value, current = this.head) { 
            if (this.head === null) { 
                return false; } 
            if (this.head.value === value) { 
                return (this.head = this.head.next); } 
            if (current.next !== null) { 
                if (current.next.value === value) { 
                    current.next === current.next.next; return true; } 
                else { return this.remove(value, current.next); } 
                } 
            } 
        print() { 
            let node = this.head; 
            while (node != null) { 
                console.log(`Valor ${node.value} | Next: ${node.next?.value || null}`); 
                node = node.next; 
            } 
        }
}

const li1 = new LinkedList();
const li2 = new LinkedList();

li1.append(1);
li1.append(3);
li1.append(5);
li2.append(2);
li2.append(4);
li2.append(6);
console.log("Lista 1:")
li1.print();
console.log("Lista 2:")
li2.print();

function orderConcat(head1,head2){
    const orderedList = new LinkedList();

    while(head1 != null && head2 != null){
        if(head1.value < head2.value){
            orderedList.append(head1.value);
            orderedList.append(head2.value);
        }else{
            orderedList.append(head2.value);
            orderedList.append(head1.value);
        }
        head1 = head1.next;
        head2 = head2.next;
    }
    return orderedList;
}
  
const ordered = orderConcat(li1.head,li2.head);
console.log("Lista Ordenada:")
ordered.print();