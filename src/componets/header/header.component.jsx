import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.component.scss'


const Header =({currentUser})=>(
    <div className='header'>
        <Link>
        <Logo className='logo' />
        </Link>
        <div className='options' >
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser==null ?
                <Link className='option' to='/signin'>SiGN IN</Link>
                :
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            }
        </div>
    </div>
);

const mapSstateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapSstateToProps)(Header);