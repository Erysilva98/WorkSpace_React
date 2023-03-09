import React from 'react';
import ReactDOM from 'react-dom/client';

class Timer extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            seconds: this.props.start,
        };
    }

    contar()
    {
        this.setState( state => ({ seconds: state.seconds + 1})
        );
    }

    componentDidMount() {
        this.interval = setInterval( () => this.contar(), this.props.ms);
    }

    render () {
        return <h1>Seconds: {this.state.seconds}</h1>;
    }
}

export default Timer;



