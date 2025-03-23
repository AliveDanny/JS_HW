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

class ContactsApp {
    constructor(selector) {
        this.container = document.querySelector(selector)
        this.contacts = []
        this.contactsContainer = document.createElement('div')
        this.contactsContainer.classList.add('contacts-container')

        this.init()
    }

    init() {
        const form = document.createElement('form')
        form.classList.add('form')

        const title = document.createElement('input')
        title.setAttribute('type', 'text')
        title.setAttribute('placeholder', 'Введите имя')
        title.classList.add('input')

        const content = document.createElement('textarea') 
        content.setAttribute('placeholder', 'Введите заметку')
        content.classList.add('textarea')

        const button = document.createElement('button')
        button.classList.add('button')
        button.innerText = 'Добавить'

        form.append(title, content, button)

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            if (!title.value || !content.value) {
                alert('Заполните все поля!')
                return
            }

            const data = {
                id: Date.now(),
                title: title.value,
                content: content.value
            }

            this.onAdd(data)
            this.get()

            title.value = ''
            content.value = ''
        })

        this.contactsContainer.classList.add('contacts')

        this.container.append(form, this.contactsContainer)
        this.get()
    }

    onAdd(data) {
        this.contacts.push({
            data,
            container: document.createElement('div')
        })
    }

    onEdit(id, newData) {
        this.contacts = this.contacts.map(contact => {
            if (contact.data.id === id) {
                contact.data = {
                    ...contact.data,
                    ...newData
                }
            }
            return contact
        })
        this.get()
    }

    onRemove(id) {
        this.contacts = this.contacts.filter(contact => contact.data.id !== id)
        this.get()
    }

    get() {
        this.contactsContainer.innerHTML = ''

        if (!this.contacts.length) {
            this.contactsContainer.innerHTML = `<h2 class="title">Список контактов пуст</h2>`
            return
        }

        this.contacts.forEach(contact => {
            const contactItem = document.createElement('div')
            contactItem.classList.add('item')
            const contents = document.createElement ('div')
            contents.classList.add('contactsContent')

            const title = document.createElement('h2')
            const content = document.createElement('p')
            const remove = document.createElement('button')
            const edit = document.createElement('button')

            remove.classList.add('remove')
            remove.innerHTML = '&#10060;'
            remove.addEventListener('click', () => {
                if (confirm('Вы точно хотите удалить?')) {
                    this.onRemove(contact.data.id)
                }
            })

            edit.classList.add('edit')
            edit.innerHTML = '&#9998;'
            edit.addEventListener('click', () => {
                const newTitle = prompt('Введите новое имя:', contact.data.title)
                const newContent = prompt('Введите новое сообщение:', contact.data.content)

                if (newTitle && newContent) {
                    this.onEdit(contact.data.id, {
                        title: newTitle,
                        content: newContent
                    })
                }
            })

            title.innerText = contact.data.title
            content.innerText = contact.data.content

            contents.append(title, content)
            contactItem.append(contents, edit, remove)
            this.contactsContainer.append(contactItem)
        })
    }
    get storage() {
        const storageExpiration = document.cookie
            .split('; ')
            .find(row => row.startsWith('storageExpiration='));

        if (!storageExpiration) {
            localStorage.removeItem('contacts');
            document.cookie = 'storageExpiration=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            return [];
        }

        return JSON.parse(localStorage.getItem('contacts')) || [];
    }

    set storage(contacts) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 10);
        document.cookie = `storageExpiration=true; expires=${expirationDate.toUTCString()}; path=/`;
        
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }
}

new ContactsApp('.container')

