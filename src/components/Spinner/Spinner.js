import React from 'react';
// import spinner from '../../assets/Spinner.svg'
import { ReactComponent as Logo } from '../../assets/Spinner.svg';

const Spinner = () => {

    return(
        <div style={{background: 'transparent'}}>
        {/*<img src={spinner} alt={'loading'}/>*/}
            <Logo
            style={{background: 'transparent'}}
            />
        <h2 style={{color: 'white'}}>Loading...</h2>
        </div>
    )
}

export default Spinner

