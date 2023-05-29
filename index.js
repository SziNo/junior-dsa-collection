const array = [10, -2, 5, 3, 1, 4, 2]
const sortedArray = [2, 5, 76, 123, 1848]

// recursion
function factorial(num) {
  if (num === 0) {
    return 1
  }

  return num * factorial(num - 1)
}

console.log(factorial(6))

// linear search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch(array, 5))

// binary search - works on sorted array only
function binarySearch(array, target) {
  let left = 0
  let right = array.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (array[mid] === target) {
      return mid
    } else if (array[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

console.log(binarySearch(sortedArray, 123))

// bubble sort
function bubbleSort(array) {
  let noSwap
  for (let i = 0; i < array.length; i++) {
    noSwap = true
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        noSwap = false
      }
    }
    if (noSwap) break
  }
  return array
}

console.log(bubbleSort(array))

// selection sort
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}

console.log(selectionSort(array))

// insertion sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      ;[array[j], array[j - 1]] = [array[j - 1], array[j]]
      j--
    }
  }
  return array
}

console.log(insertionSort(array))

// Define a class for a stack
class Stack {
  constructor() {
    this.items = []
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element)
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.items.length === 0) {
      return undefined
    }
    return this.items.pop()
  }

  // Return the top element from the stack without removing it
  peek() {
    if (this.items.length === 0) {
      return undefined
    }
    return this.items[this.items.length - 1]
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0
  }

  // Return the number of elements in the stack
  size() {
    return this.items.length
  }
}

// Create a new stack
const stack = new Stack()

// Add some elements to the stack
stack.push(1)
stack.push(2)
stack.push(3)

// Remove and print the top element from the stack
console.log(stack.pop()) // 3

// Define a class for a queue
class Queue {
  constructor() {
    this.items = []
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element)
  }

  // Remove and return the first element from the queue
  dequeue() {
    if (this.items.length === 0) {
      return undefined
    }
    return this.items.shift()
  }

  // Return the first element from the queue without removing it
  front() {
    if (this.items.length === 0) {
      return undefined
    }
    return this.items[0]
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0
  }

  // Return the number of elements in the queue
  size() {
    return this.items.length
  }

  // Select and delete an element from the queue
  selectAndDelete(index) {
    if (index < 0 || index >= this.items.length) {
      return undefined
    }
    return this.items.splice(index, 1)[0]
  }
}

// Create a new queue
const queue = new Queue()

// Add some elements to the queue
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

// Remove and print the first element from the queue
console.log(queue.dequeue()) //1
console.log(queue.selectAndDelete(1))

// Define a class for tee nodes
class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Create the root node of the tree
const root = new TreeNode(1)

// Add left and right children to the root node
root.left = new TreeNode(2)
root.right = new TreeNode(3)

// Add left and right children to the left child of the root node
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

// Define a function for depth-first search (DFS)
function depthFirstSearch(node) {
  if (node !== null) {
    console.log(node.value)
    depthFirstSearch(node.left)
    depthFirstSearch(node.right)
  }
}

// Perform DFS on the tree
console.log('Tree DFS: ')
depthFirstSearch(root)

// Define a function for breadth-first search (BFS)
function breadthFirstSearch(root) {
  const queue = [root]

  while (queue.length > 0) {
    const node = queue.shift()
    console.log(node.value)

    if (node.left !== null) {
      queue.push(node.left)
    }

    if (node.right !== null) {
      queue.push(node.right)
    }
  }
}

// Perform BFS on the tree
console.log('Tree BFS: ')
breadthFirstSearch(root)

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left)
    console.log(node.value)
    inOrderTraversal(node.right)
  }
}

// Traverse the tree in order
console.log('Traverse the tree in order: ')
inOrderTraversal(root)

// Graph represented as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
}

// BFS
function bfs(graph, start) {
  const visited = new Set()
  const queue = [start]

  while (queue.length > 0) {
    const node = queue.shift()
    if (!visited.has(node)) {
      console.log(node)
      visited.add(node)
      queue.push(...graph[node])
    }
  }
}

// DFS
function dfs(graph, start, visited = new Set()) {
  if (!visited.has(start)) {
    console.log(start)
    visited.add(start)
    graph[start].forEach((neighbor) => dfs(graph, neighbor, visited))
  }
}

console.log('BFS:')
bfs(graph, 'A')

console.log('DFS:')
dfs(graph, 'A')

// Linked List
// Create Node class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Create LinkedList class
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Add a new node to the end of the list
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

  hasCycle() {
    let slow = this.head
    let fast = this.head
    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) {
        return true
      }
    }
    return false
  }

  // Reverse the list
  reverse() {
    let current = this.head
    let prev = null
    let next

    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }

    ;[this.head, this.tail] = [this.tail, this.head]

    return this
  }

  // Print the list
  print() {
    let current = this.head
    const values = []

    for (let i = 0; i < this.length; i++) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join(' -> '))
  }
}

// Example usage:
const list = new LinkedList()
list.push(1).push(2).push(3)
list.print() // 1 -> 2 -> 3
list.reverse()
list.print() // 3 -> 2 -> 1

console.log(list.hasCycle())
