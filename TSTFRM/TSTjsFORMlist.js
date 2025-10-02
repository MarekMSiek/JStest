// Node class to represent each item in the linked list
class Node {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.next = null;
  }
}

// LinkedList class to manage the chain of nodes
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a new node to the end of the list
  append(username, password) {
    const newNode = new Node(username, password);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Convert the list to an array for display
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push({ username: current.username, password: current.password });
      current = current.next;
    }
    return result;
  }
}

// Create a new linked list instance
const list = new LinkedList();

// Handle button click to submit form data
document.getElementById('button1').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Add to linked list
  list.append(username, password);

  // Clear input fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  // Update display
  updateDisplay();
});

// Function to update the display area with the linked list contents
function updateDisplay() {
  const listArray = list.toArray();
  const display = listArray.map((node, index) =>
    `Node ${index + 1}: Username = ${node.username}, Password = ${'*'.repeat(node.password.length)}`
  ).join('<br>');
  document.getElementById('listDisplay').innerHTML = display;
}
