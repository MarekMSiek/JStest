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
}

