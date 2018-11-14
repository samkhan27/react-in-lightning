import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActionCreators } from '~/actions';
import ContactSearch from '~/components/ContactSearch';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    };
}

const mapStateToProps = state => ({
    message: state.test.message,
    results: state.test.results
});

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(ContactSearch));
