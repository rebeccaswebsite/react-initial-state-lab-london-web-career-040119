import React from 'react'

export default class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render() {
        return (
            (this.state.secondsLeft === 0)
            ? <p>Boom!</p>
            : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
   
        )
    }
}

