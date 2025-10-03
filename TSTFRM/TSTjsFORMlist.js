class Item
{
    //each item/ node inside of the link list contains the username and 
    // password which were submitted by the user
    constructor(username, password) {
    this.username = username;
    this.password = password;
    this.next = null;
    }
}
class UserDetails
{
    constructor(){this.head=null;}//the list starts out as empty

    insert(username, password) {
        const newNode = new UserNode(username, password);
        if (!this.head) {
        this.head = newNode;
        } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
            current.next = newNode;
        }
    }
    display() {
        let current = this.head;
        let result = '';
        while (current) {
        result += `Username: ${current.username}, Password: ${current.password}\n`;
        current = current.next;
        }
        return result || 'No users stored yet.';
    }
}
// Instantiate the list
const userList = new UserLinkedList();

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  userList.insert(username, password);

  document.getElementById('output').textContent = userList.display();
});

