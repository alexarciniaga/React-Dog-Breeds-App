import React, {Component} from 'react';
import Breeds from './components/cardLayout';

class App extends Component {
    render() {
        return (
            <Breeds breeds={this.state.breeds} />
        )
    }

    state = {
        breeds: []
    };

    componentDidMount() {
        fetch('http://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then((data) => {
                this.setState({ breeds: data })
            })
            .catch(console.log)
    }
}

export default App;