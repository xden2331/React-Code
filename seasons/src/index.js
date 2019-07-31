import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: null, errorMessage: null};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage) {
            return (
                <div>
                    {this.state.errorMessage}
                </div>
            );
        } else if (this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat}/>
            );
        } else {
            return <Spinner message="Please accept location requrest"/>;
        }
    }

    // React says we have to define render!!
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);