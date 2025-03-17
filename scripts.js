class User {
    constructor(contactData) {
        this.data = {
            id: contactData.id,
            name: contactData.name,
            email: contactData.email,
            address: contactData.address,
            phone: contactData.phone
        };
    }

    edit(updatedData) {
        this.data = {
            ...this.data,
            ...updatedData
        };
    }

    get() {
        return this.data;
    }
}

class Contacts {
    constructor() {
        this.contacts = [];
    }
    add(contactData) {
        const newUser = new User(contactData);
        this.contacts.push(newUser);
    }

    edit(id, updatedData) {
        const contact = this.contacts.find(contact => contact.get().id === id);
        if (contact) {
            contact.edit(updatedData);
        }
    }

    remove(id) {
        this.contacts = this.contacts.filter(contact => contact.get().id !== id);
    }

    get() {
        return this.contacts.map(contact => contact.get());
    }
}


