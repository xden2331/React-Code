import React from 'react';

class SearchBar extends React.Component {
    state = { terms: '' };

    onInputChange = (event) => {
        this.setState({terms: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call
        // callback from parent component
        this.props.onFormSubmit(this.state.terms);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input
                            value={this.state.terms}
                            type='text'
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;