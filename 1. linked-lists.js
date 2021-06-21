class Node {
  constructor(value){
      this.head = value
      this.tail = null
  }
}

class LinkedList {
  constructor(value){
      const newNode = new Node(value)
      this.head = newNode
      this.tail = newNode
      this.length = 1
  }

  push(value) {
     const newNode = new Node(value)

     if (!this.head) {
         this.head = newNode
         this.tail = newNode
     } else {
         this.tail.next = newNode
         this.tail = newNode
     }
     this.length++
     return this
  }

  pop() {
      if (!this.head) return undefined

      let pre = this.head // moves pre over to temp value
      let temp = this.head // moves temp over to the next value

      while(temp.next) {
          pre = temp
          temp = temp.next
      }

      this.tail = pre
      temp.next = null
      this.length--

      //if list is blank
      if(this.length === 0) {
          this.head = null
          this.tail = null
      }
      return temp
  }

  unshift(value) {
      const newNode = new Node(value)

      if (!this.head) {
          this.head = newNode
          this.tail = newNode
      } else {
          newNode.next = this.head
          this.head = newNode
      }
      this.length++
      return this
  }

  shift() {
      if (!this.head) return undefined
      let temp = this.head
      this.head = this.head.next //point head to next node
      temp.next = null //remove temp (first node) to break connection
      this.length--
      return this
  }

  get(index) {
      if (index < 0 || index >= this.length) return undefined
      let temp = this.head //start at beginning of list and iterate until index

      for (let i=0; i < index; i++) {
          temp = temp.next // run loop additonal iteration
      }    
      return temp
  }

  set(index, value) {
      let temp = this.get(index)

      if (temp) {
          temp.head = value // if the index is found update the value
          return true
      } 
      return false
  }

  insert(index, value) {
      if (index === 0) return this.unshift(value)// insert at beginning
      if (index === this.length-1) return this.pop(value)// insert at beginning
      if (index < 0 || index >= this.length) return false
      
      const newNode = new Node(value)
      let temp = this.get(index - 1) //get the index position of the new node
      newNode.next = temp.next //point newNode to the node after the index
      temp.next = newNode
      this.length++
      return true
  }

  remove(index) {
      if (index === 0) return this.shift() // remove at beginning
      if (index === this.length - 1) return this.pop() // remove at end
      if (index < 0 || index >= this.length) return false

      const before = this.get(index - 1) //get index of node that is before to the node that is being removed
      const temp = before.next //get index of node that is being removed 
      before.next = temp.next // point the node that was before the removed node to the node after the new node
      temp.next = null // point the removed node to null and completely remove
      this.length--
      return temp
  }

  reverse() {
      let temp = this.head
      this.head = this.tail //point head to tail
      this.tail = temp //point tail to temp
      let next = temp.next //point next to the node after first node of list
      let prev = null //point prev to the node before first node of list

      for (let i = 0; i < this.length; i++) {
          next = temp.next // point next to the node after temp
          temp.next = prev // point temp to point to prev
          prev = temp // point prev to temp position (temp and prev pointing at first position with tail at null)
          temp = next // point temp to next
      }
      return this
  }
}

let myLinkedList9 = new LinkedList(11)
myLinkedList9.push(3)
myLinkedList9.push(33)
myLinkedList9.push(7)