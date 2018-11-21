/* eslint no-unused-vars: 0 */

let contacts = [
    { Id: 1, Name: 'Lisa Taylor' },
    { Id: 2, Name: 'Joe Smith' },
    { Id: 3, Name: 'Chloe Miller' },
    { Id: 4, Name: 'Luis Vasquez' },
    { Id: 5, Name: 'Alex Wong' }
];

let api = {
    findAll() {
        return Promise.resolve(contacts);
    },
    findByName(name) {
        let filtered = contacts.filter(contact => contact.Name.toLowerCase().indexOf(name.toLowerCase()) > -1);
        return Promise.resolve(filtered);
    },
    navigateToContact(id) {
        console.log(`Navigating to ${id}`);
    }
};
