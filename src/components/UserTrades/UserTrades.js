import React from 'react';
import ContextManager from '../../context/context-manager';
import './UserTrades.css';

export default class UserTrades extends React.Component{
    static contextType = ContextManager;

    proper = (word) => {
        const toUpper = word.split(" ");

        const completeWord = toUpper.map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
        })
        
        return completeWord.join(" ");    
    }

    handleTradeConfirmed = (id, collection, tradeid) => {
        const newInventory = this.context.selectedUser.inventory.filter((item) => {
            return !collection.includes(item.id);
        });
        const newTrades = this.context.selectedUser.trades.filter((trade) => {
            return trade.id !== tradeid;
        });
        this.context.selectedUser.inventory = newInventory;
        this.context.selectedUser.trades = newTrades;
        this.context.updateSelectedUserState(this.context.selectedUser);
    }

    handleTradeAccepted = (id, collection, tradeid) => {
        const newInventory = this.context.items.filter((item) => {
            return collection.includes(item.id);
        })
        this.context.selectedUser.inventory = this.context.selectedUser.inventory.concat(newInventory);

        const newTrades = this.context.selectedUser.trades.filter((trade) => {
            return trade.id !== tradeid
        })
        this.context.selectedUser.trades = newTrades;
        this.context.updateSelectedUserState(this.context.selectedUser);
    }

    render(){
        const tradeCards = this.context.selectedUser.trades.map((trade, i) => {
            const collection = [];
            const user = this.context.users.find((user) => {
                return trade.userid === user.id;
            })
            const tradeDetails = trade.items.map((item, k) => {
                collection.push(item.id)
                return(
                    <div key={k} className="trade-details">
                        <p>Item: {item.name.toUpperCase()}</p>
                        <p>{this.proper(item.rarity)} {this.proper(item.category)}</p>
                        {item.painted ? <p>{item.painted.toUpperCase()} PAINTED</p> : " "}
                        {item.certfied ? <p>{item.certfied.toUpperCase()} CERTIFIED</p> : " "}
                        {item.special_edition ? <p>{item.special_edition.toUpperCase()} SPECIAL EDITION</p> : " "}
                    </div>
                )
            })
            return(
                <article key={i} className="trade-card">
                    <h3>Gamertag: {user.gamertag === this.context.selectedUser.stats.gamertag ? "Me" : user.gamertag}</h3>
                    {tradeDetails}
                    <div className="trade-confirmed">{user.gamertag === this.context.selectedUser.stats.gamertag ? <button onClick={() => this.handleTradeConfirmed(user.id, collection, trade.id)}>Trade Confirmed</button> : <button onClick={() => this.handleTradeAccepted(user.id, collection, trade.id)}>Trade Accepted</button>}</div>
                </article>
            )
        });
        return(
            <section className="user-trades">
                <h2>Trades</h2>
                {tradeCards.length > 0 ? tradeCards : "New Trades found"}
            </section>
        );
    }
}