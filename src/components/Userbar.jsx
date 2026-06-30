import React, { useState, useEffect } from 'react';
import './Userbar.css';
import Piechart from './Piechart';
import DoughnutChart from './DoughnutChart';
import Barchart from './Barchart';

function Userbar({ newuser }) {
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const username = newuser || 'rishavtiwari22';
        
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err));

        fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
            .then(res => res.json())
            .then(data => setRepos(Array.isArray(data) ? data : []))
            .catch(err => console.error(err));
            
        fetch(`https://api.github.com/users/${username}/followers`)
            .then(res => res.json())
            .then(data => setFollowers(Array.isArray(data) ? data : []))
            .catch(err => console.error(err));

    }, [newuser]);

    if (!userData) {
        return <div className="userbar">Loading...</div>;
    }

    return (
        <div className="userbar">
            <div className="userdata">
                <div className="userlogo">
                    <img src={userData.avatar_url} alt="User Avatar" className="userimg" />
                    <div className="username">
                        <h2>{userData.name || userData.login}</h2>
                        <p>@{userData.login}</p>
                    </div>
                </div>
                <div className="data">
                    <p className="bio">{userData.bio || 'No bio available'}</p>
                    <p>Public Repos: {userData.public_repos}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                </div>
            </div>

            <div className="followdata">
                <h3>Followers</h3>
                {followers.slice(0, 5).map(follower => (
                    <div className="followers" key={follower.id}>
                        <div className="followers-images">
                            <img src={follower.avatar_url} alt="follower avatar" />
                            <div className="follow-name">
                                <a href={follower.html_url} target="_blank" rel="noreferrer">{follower.login}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="chart1">
                <Piechart userData={repos} />
            </div>
            
            <div className="chart2">
                <DoughnutChart userData={repos} />
            </div>
            
            <div className="chart1">
                <Barchart userData={repos} />
            </div>
        </div>
    );
}

export default Userbar;
