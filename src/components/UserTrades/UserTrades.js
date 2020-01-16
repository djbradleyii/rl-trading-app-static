import React from 'react';
import ContextManager from '../../context/context-manager';
import './UserTrades.css';

export default class UserTrades extends React.Component{
    static contextType = ContextManager;

    render(){
        console.log(this.context.trades)
        const trades = this.context.trades.map((trade) => {
            const user = this.context.user.find((user) => {
                return trade.userid === user.id;
            })

            const items = this.context.trade.items.map((item) => {
                return(
                    <div className="trade-details">
                        <p>{item.rarity} {item.category}Body(item type)</p>
                        <p>Titanium White Painted</p>
                        <p>Skillful Sweeper Certified</p>
                    </div>
                )
            })
        });
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