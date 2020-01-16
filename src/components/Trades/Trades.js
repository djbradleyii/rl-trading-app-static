import React from 'react';
import './Trades.css';

export default class Trades extends React.Component{
    render(){
        return(
            <div>
                <form id="trade-search-form">
                    <div className="search-info">Input a search term to search all trades based on the title, item category, rarity, color and attribute.</div>
                    <div>
                        <label htmlFor="search">Search <span className="searchCaseSensitive">(Case Insensitive):</span> </label>
                        <input type="search" id="search" placeholder="ex. Rare" name="keyword" />
                    </div>
                </form>
            {/* !!this.state.events.length && this.renderContent() */}
                <div className="trade-search-results">
                    <article className="trade-card">
                        <h3>Trade Title</h3>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                    </article>
                    <article className="trade-card">
                        <h3>Trade Title</h3>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                    </article>
                    <article className="trade-card">
                        <h3>Trade Title</h3>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                    </article>
                    <article className="trade-card">
                        <h3>Trade Title</h3>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                    </article>
                    <article className="trade-card">
                        <h3>Trade Title</h3>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                        <div className="trade-details">
                            <p>Limited(rarity) Body(item type)</p>
                            <p>Titanium White Painted</p>
                            <p>Skillful Sweeper Certified</p>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}