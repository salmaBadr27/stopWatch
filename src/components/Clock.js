import React from 'react';
import PropTypes from 'prop-types';

const getClockInterval = () => {
    let arr = [];
    for (let i = 0; i < 60; i++) arr.push(i);
    console.log("The array is : " , arr)
    return arr
}
 class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            H: props.h,
            M: props.m,
            S: props.s,
            isPlaying: true
        };
    }
    componentDidMount() {
        setInterval(
        this.sec=() =>{
            if(this.state.isPlaying){
            this.setTick();
        }} 
            , 1000
        );
    }
    onPausePlay() {
        this.setState({
            isPlaying: !this.state.isPlaying,
        })
    }

    setTick() {
        if(this.state.S >= 60 ){
            this.setState({
                S: 0 , 
                M: this.state.M +1
            })
        }
        this.setState({
            S :this.state.S + 1
        });
        if(this.state.M >= 60){
            this.setState({
                M: 0,
                H: this.state.H +1
            })
        }
      
    }

    render() {
        return (
            <div>
                <h2>
                    its Hh: {getH(this.state.H)}
                    Mm: {getMin(this.state.M)}
                    Ss:{getSec(this.state.S)}
                </h2>
                <h3>the current state is {this.state.isPlaying ? "Playing" : "Paused"}</h3>
                <button onClick={() => { this.onPausePlay() }}>Pause/Play</button>
            </div>
        );
    }

}

const getSec = (seconds) =>
    String(seconds).length === 1 ? `0${seconds}` : `${seconds}`

const getMin = (min) =>
    String(min).length === 1 ? `0${min}` : `${min}`

const getH = (hours) =>
    String(hours).length === 1 ? `0${hours}` : `${hours}`

Clock.defaultProps = {
    s: 0,
    m: 0,
    h: 0
};
Clock.propTypes = {
    s: PropTypes.oneOf(getClockInterval()),
    m: PropTypes.oneOf(getClockInterval()),
}


export default Clock ;