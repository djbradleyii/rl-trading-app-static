import React from 'react';
import './UserTeamRequests.css';

export default class UserTeamRequests extends React.Component{
    render(){
        return(
            <section className="user-team-requests">
                <h2>Team Requests</h2>
                <article className="team-card">
                    <h3>Rocket League Identifier/Gamertag</h3>
                    <div className="team-card-platform">
                        <div className="team-column"><p>Platform:</p></div>
                        <div className="team-column"><p>PC</p></div>
                    </div>
                    <div className="team-card-rank">
                        <div className="team-column"><p>Rank:</p></div>
                        <div className="team-column"><p>Champion III</p></div>
                    </div>
                    <div className="team-card-division">
                        <div className="team-column"><p>Division:</p></div>
                        <div className="team-column"><p>IV</p></div>
                    </div>
                    <div>
                        <button>Accept Request</button>
                    </div>
                </article>
                <article className="team-card">
                    <h3>Rocket League Identifier/Gamertag</h3>
                    <div className="team-card-platform">
                        <div className="team-column"><p>Platform:</p></div>
                        <div className="team-column"><p>PC</p></div>
                    </div>
                    <div className="team-card-rank">
                        <div className="team-column"><p>Rank:</p></div>
                        <div className="team-column"><p>Champion III</p></div>
                    </div>
                    <div className="team-card-division">
                        <div className="team-column"><p>Division:</p></div>
                        <div className="team-column"><p>IV</p></div>
                    </div>
                    <div>
                        <button>Accept Request</button>
                    </div>
                </article>
                <article className="team-card">
                    <h3>Rocket League Identifier/Gamertag</h3>
                    <div className="team-card-platform">
                        <div className="team-column"><p>Platform:</p></div>
                        <div className="team-column"><p>PC</p></div>
                    </div>
                    <div className="team-card-rank">
                        <div className="team-column"><p>Rank:</p></div>
                        <div className="team-column"><p>Champion III</p></div>
                    </div>
                    <div className="team-card-division">
                        <div className="team-column"><p>Division:</p></div>
                        <div className="team-column"><p>IV</p></div>
                    </div>
                    <div>
                        <button>Accept Request</button>
                    </div>
                </article>
            </section>
        );
    }
}