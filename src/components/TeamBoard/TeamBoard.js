import React from 'react';
import './TeamBoard.css';

export default class TeamBoard extends React.Component{
    render(){
        return(
        <div>
            <form id="team-search-form">
                <div>
                    <label htmlFor="team-platform">Platform:</label>
                    <select id="team-platform" name="platform">
                      <option value="all">All</option>
                      <option value="pc">PC</option>
                      <option value="ps4">PS4</option>
                      <option value="switch">Nintendo Switch</option>
                      <option value="xbox">Xbox One</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="team-rank">Rank:</label>
                    <select id="team-rank" name="team-rank">
                      <option value="all">All</option>
                      <option value="black">Grand Champion</option>
                      <option value="champion-3">Champion III</option>
                      <option value="champion-2">Champion II</option>
                      <option value="champion-1">Champion I</option>
                      <option value="diamond-3">Diamond III</option>
                      <option value="diamond-2">Diamond II</option>
                      <option value="diamond-1">Diamond I</option>
                      <option value="platinum-3">Platinum III</option>
                      <option value="platinum-2">Platinum II</option>
                      <option value="platinum-1">Platinum I</option>
                      <option value="gold-3">Gold III</option>
                      <option value="gold-2">Gold II</option>
                      <option value="gold-1">Gold I</option>
                      <option value="silver-3">Silver III</option>
                      <option value="silver-2">Silver II</option>
                      <option value="silver-1">Silver I</option>
                      <option value="bronze-3">Bronze III</option>
                      <option value="bronze-2">Bronze II</option>
                      <option value="bronze-1">Bronze I</option>
                      <option value="unranked">Unranked</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="team-rank-division">Division:</label>
                    <select id="rank-division" name="rank-division">
                      <option value="all">All</option>
                      <option value="dividion-4">IV</option>
                      <option value="dividion-3">III</option>
                      <option value="dividion-2">II</option>
                      <option value="dividion-1">I</option>
                    </select>
                </div>
            </form>
            {/* !!this.state.events.length && this.renderContent() */}
            <div className="team-search-results">
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
                        <div className="team-column"><p>Nintendo Switch</p></div>
                    </div>
                    <div className="team-card-rank">
                        <div className="team-column"><p>Rank:</p></div>
                        <div className="team-column"><p>Platinum II</p></div>
                    </div>
                    <div className="team-card-division">
                        <div className="team-column"><p>Division:</p></div>
                        <div className="team-column"><p>II</p></div>
                    </div>
                    <div>
                        <button>Accept Request</button>
                    </div>
                </article>
                <article className="team-card">
                    <h3>Rocket League Identifier/Gamertag</h3>
                    <div className="team-card-platform">
                        <div className="team-column"><p>Platform:</p></div>
                        <div className="team-column"><p>Xbox One</p></div>
                    </div>
                    <div className="team-card-rank">
                        <div className="team-column"><p>Rank:</p></div>
                        <div className="team-column"><p>Diamond II</p></div>
                    </div>
                    <div className="team-card-division">
                        <div className="team-column"><p>Division:</p></div>
                        <div className="team-column"><p>III</p></div>
                    </div>
                    <div>
                        <button>Accept Request</button>
                    </div>
                </article>
                <article className="team-card">
                    <h3>Rocket League Identifier/Gamertag</h3>
                    <div className="team-card-platform">
                        <div className="team-column"><p>Platform:</p></div>
                        <div className="team-column"><p>PS4</p></div>
                    </div>
                    <div className="team-card-rank">
                        <div className="team-column"><p>Rank:</p></div>
                        <div className="team-column"><p>Grand Champion</p></div>
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
                        <div className="team-column"><p>I</p></div>
                    </div>
                    <div>
                        <button>Accept Request</button>
                    </div>
                </article>
            </div>
        </div>
        );
    }
}