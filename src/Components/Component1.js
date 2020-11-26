import React from 'react';
import {useSpring, animated, interpolate} from 'react-spring'
import Component2 from './Component2'

const Component1 = () => {

    const props = useSpring({opacity: 1, marginTop: 0,
        config: {duration: 500},
        from: {opacity: 0, marginTop: -300, border: 'solid black 1px'}})
    return(
        <animated.div style={props}>
        <div style={c1Style}>
            <h1>Component1</h1>
            <Component2></Component2>
        </div>
        </animated.div>
    )
} 

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
  }

  const c2Style = {
    position: 'relative',
    width: '10px',
    height: '10px',
    backgroundColor: 'red',
    color: 'red'
}

export default Component1;