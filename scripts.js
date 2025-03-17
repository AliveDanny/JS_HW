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
class ContactsApp extends Contacts {
    constructor() {
        super();
        this.app = document.createElement('div');
        this.app.className = 'contacts';
        document.body.appendChild(this.app);
        
        // Create main interface
        this.createInterface();
        
        // Initial render
        this.get();
    }

    createInterface() {
        // Create form container
        const formContainer = document.createElement('div');
        formContainer.className = 'contacts-form';
        
        // Create form
        const form = document.createElement('form');
        form.innerHTML = `
            <input type="hidden" id="contactId">
            <div class="form-group">
                <input type="text" id="name" placeholder="Name" required>
            </div>
            <div class="form-group">
                <input type="email" id="email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input type="text" id="address" placeholder="Address">
            </div>
            <div class="form-group">
                <input type="tel" id="phone" placeholder="Phone">
            </div>
            <div class="form-buttons">
                <button type="submit" id="addButton">Add Contact</button>
                <button type="button" id="editButton" style="display:none">Save Changes</button>
            </div>
        `;

        // Create contacts list container
        const contactsList = document.createElement('div');
        contactsList.className = 'contacts-list';
        
        // Add elements to DOM
        formContainer.appendChild(form);
        this.app.appendChild(formContainer);
        this.app.appendChild(contactsList);

        // Add event listeners
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.onAdd();
        });

        document.getElementById('editButton').addEventListener('click', () => {
            this.onEdit();
        });

        // Add styles
        const styles = document.createElement('style');
        styles.textContent = `
            .contacts {
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }
            .contacts-form {
                margin-bottom: 20px;
            }
            .form-group {
                margin-bottom: 10px;
            }
            .form-group input {
                width: 100%;
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
            .contacts-list {
                display: grid;
                gap: 10px;
            }
            .contact-card {
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 4px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            @media (max-width: 600px) {
                .contacts {
                    padding: 10px;
                }
                .contact-card {
                    flex-direction: column;
                    text-align: center;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    onAdd() {
        const contactData = {
            id: Date.now(),
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value
        };

        super.add(contactData);
        this.get();
        
        // Reset form
        document.querySelector('form').reset();
    }

    onEdit() {
        const id = parseInt(document.getElementById('contactId').value);
        const updatedData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value
        };

        super.edit(id, updatedData);
        this.get();
        
        // Reset form and buttons
        document.querySelector('form').reset();
        document.getElementById('addButton').style.display = 'block';
        document.getElementById('editButton').style.display = 'none';
    }

    onRemove(id) {
        super.remove(id);
        this.get();
    }

    get() {
        const contacts = super.get();
        const contactsList = this.app.querySelector('.contacts-list');
        contactsList.innerHTML = '';

        contacts.forEach(contact => {
            const contactCard = document.createElement('div');
            contactCard.className = 'contact-card';
            contactCard.innerHTML = `
                <div class="contact-info">
                    <h3>${contact.name}</h3>
                    <p>Email: ${contact.email}</p>
                    <p>Address: ${contact.address}</p>
                    <p>Phone: ${contact.phone}</p>
                </div>
                <div class="contact-actions">
                    <button onclick="contactsApp.fillEditForm(${contact.id})">Edit</button>
                    <button onclick="contactsApp.onRemove(${contact.id})">Delete</button>
                </div>
            `;
            contactsList.appendChild(contactCard);
        });
    }

    fillEditForm(id) {
        const contact = super.get().find(c => c.id === id);
        if (contact) {
            document.getElementById('contactId').value = contact.id;
            document.getElementById('name').value = contact.name;
            document.getElementById('email').value = contact.email;
            document.getElementById('address').value = contact.address;
            document.getElementById('phone').value = contact.phone;
            
            document.getElementById('addButton').style.display = 'none';
            document.getElementById('editButton').style.display = 'block';
        }
    }
}

