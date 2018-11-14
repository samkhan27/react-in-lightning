import React, { Component } from 'react';
import Input from '@salesforce/design-system-react/components/forms/input';
import Button from '@salesforce/design-system-react/components/button';

import { debounce } from 'lodash';

import ContactList from './ContactList';

class ContactSearch extends Component {
    constructor(props) {
        super(props);
        const { findByName } = props.actions;
        this.debouncedSearch = debounce(findByName, 300);
    }

    componentDidMount() {
        const { findAll } = this.props.actions;
        findAll();
    }

    onKeyChange = (event) => {
        this.debouncedSearch(event.target.value);
    }

    render() {
        const { testAction } = this.props.actions;
        return (
            <div>
                <Button label="Placeholder" variant="brand" onClick={() => testAction('Test Placeholder')} />
                <Input id="base-id" placeholder={this.props.message} onChange={this.onKeyChange} />
                <ContactList contacts={this.props.results} navigateToSObject={() => console.log('placeholder for navigation service')} />
            </div>
        );
    }
}

export default ContactSearch;
