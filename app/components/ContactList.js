import React from 'react';

const ContactListItem = ({ contact, navigateToSObject }) =>
    (
        <li className="slds-lookup__item">
            <span role="option" onClick={() => navigateToSObject(contact.Id)} >
                {contact.Name}
            </span>
        </li>
    );

const ContactList = ({ contacts, navigateToSObject }) => {
    let items = contacts.map(contact => <ContactListItem key={contact.Id} contact={contact} navigateToSObject={navigateToSObject} />);
    return (
        <ul className="slds-list--vertical" role="presentation">
            {items}
        </ul>
    );
};

export default ContactList;
