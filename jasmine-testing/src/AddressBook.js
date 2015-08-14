function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.addContact = function(contact){
    this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(index){
    return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index){
    this.contacts.splice(index, 1);
};

// simulate an asynchronous function
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;

    setTimeout(function() {
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}