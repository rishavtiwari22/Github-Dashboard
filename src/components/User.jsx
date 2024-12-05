import React, { useState } from 'react';
import './user.css';
import usericon from '../images/UserIcon.png';
import Userbar from './Userbar';

function User() {
    const [newuser, setNewuser] = useState('');
    const [search, setSearch] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        console.log('Search:', newuser);

        setNewuser(search);

    }

    return (
        <>
            <div className="main">
                <div className="userid">
                    <img src={usericon} alt="UserImage" />
                    <p>Welcome, <span>{newuser || 'Rishav Tiwari'}</span></p>
                    <button className="btn1">Login</button>
                </div>
                <div className="searchUser">
                    <input
                        type="text"
                        placeholder="🔍 Search User"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch} className="btn2">Search</button>
                </div>
            </div>
            <Userbar newuser={newuser} />
        </>
    );
}

export default User;
