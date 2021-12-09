import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { test } from '../../services/api'

function NavBar(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Initial value');

    function showProps() {
        console.log(props);
    }

    return (
        <>
            <p>Count {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={showProps}>Show props</button>
            <button className='btn btn-primary' onClick={test}>Run Test</button>
            <input value={name} onChange={e => setName(e.target.value)}></input>
            <Button >Bootstrap button</Button>
            <p>{props.text}</p>
            <p>{name}</p>
        </>
    );
}


// class NavBar extends React.Component {

//     state = {
//         count: 0
//     }

//     incrementCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     }

//     render() {
//         return (
//             <>
//                 <p>Count {this.state.count} times</p>
//                 <button onClick={this.incrementCount}>Increment</button>
//             </>
//         );
//     }
// }

export default NavBar;