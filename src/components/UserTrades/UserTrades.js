import React from 'react';
import './UserTrades.css';

export default class UserTrades extends React.Component{
    render(){
        return(
            <section className="user-trades">
                <h2>Trades</h2>
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
                        <div className="trade-confirmed"><button>Trade Confirmed</button></div>
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
                        <div className="trade-confirmed"><button>Trade Confirmed</button></div>
                    </article>
            </section>
        );
    }
}