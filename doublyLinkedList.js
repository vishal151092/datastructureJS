

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }


    push(val){
        let newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else{
            let prevTail = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.prev = prevTail;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.head == null) return undefined;
        
        let temp = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
        this.tail = this.tail.prev;
        this.tail.next = null;
        }
        temp.prev = null;
        this.length--;
        return temp;
    }

    shift(){
        if(!this.head) return undefined;

        let temp = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
        this.head = this.head.next;
        this.head.prev = null;
        }
        temp.next = null;
        this.length--;
        return temp;
    }

    unshift(val){
        let newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = newHead;
        }else{
            let temp = this.head;
            temp.prev = newHead;
            this.head = newHead;
            this.head.next = temp;
        } 
        this.length++
        return this;
    }

    get(index){
        if(index < 0 || index > this.length-1) return null;

        var count = 0;
        let mid = Math.floor(this.length/2)

        if(index< mid){
        var current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
          return current;
        }else{
            count = this.length-1;
            var current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
            return current;
        
        }
    }

    set(index, val){
        let findNode = this.get(index);

        if(findNode){
            findNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index > this.length || index < 0) return undefined;

        if(index == 0) this.unshift(val);
        if(index == this.length) this.push(val);

        let existingNodeAtIndex = this.get(index);
        let newNode = new Node(val);

        existingNodeAtIndex.prev.next = newNode;
        newNode.prev = existingNodeAtIndex.prev;
        newNode.next = existingNodeAtIndex;
        existingNodeAtIndex.prev = newNode;
        this.length++;
        return this;
         
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) this.shift();
        if(index === this.length-1) this.pop();
        let currentNode = this.get(index);
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode.next = null;
        currentNode.prev = null;
        this.length--;
        return currentNode;

    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next = null;
        var prev = null;
        var i = 0;
        while(i < this.length){
            next = node.next;
            prev = node.prev;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
            i++
        } 
        return this;         
    }
}



let data = new DoublyLinkedList();
data.push("hii");
data.push("Binod");
data.push("!");