import React from 'react';
import ContextManager from '../../context/context-manager';
import './Trades.css';

export default class Trades extends React.Component{
    static contextType = ContextManager;

    state = {
        keyword: " "
    }

    proper = (word) => {
        const toUpper = word.split(" ");

        const completeWord = toUpper.map((word) => {
            return word.charAt(0).toUpperCase() + word.substring(1);
        })
        
        return completeWord.join(" ");    
    }

    handleAddTradeToDashboard = (tradeid) => {
        const addTrade = this.context.trades.find((trade) => {
            return trade.id === tradeid;
        })
        
        this.context.selectedUser.trades.push(addTrade);

        const newTrades = this.context.trades.filter((trade) => {
            return trade.id !== tradeid;
        })

        this.context.removeTrade(newTrades)
    }

    createTradeCards = () => {
        const tradeCards = this.context.trades.map((trade, i) => {
            const collection = [];
            const user = this.context.users.find((user) => {
                return trade.userid === user.id;
            })
            const tradeDetails = trade.items.map((item, k) => {
                collection.push(item)
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
                    <div className="trade-confirmed">{user.gamertag !== this.context.selectedUser.stats.gamertag ? <button onClick={() => this.handleAddTradeToDashboard(user.id, collection, trade.id)}>Add to Dashboard</button> : ""}</div>
                </article>
            )
        });
        return tradeCards;
    }

    handleOnChange = (e) => {
        e.preventDefault();
        this.setState({
            keyword: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form id="trade-search-form">
                    {/* <div className="search-info">Input a search term to search all trades based on the title, item category, rarity, color and attribute.</div> */}
                    <div className="search-info">Search feature will be enabled on live version</div>
                    <div>
                        <label htmlFor="search">Search <span className="searchCaseSensitive">(Case Insensitive):</span> </label>
                        <input type="search" id="search" placeholder="ex. Rare" name="keyword" onChange={this.handleOnChange} disabled/>
                    </div>
                </form>
                <div className="trade-search-results">
                    {this.createTradeCards()}
                </div>
            </div>
        );
    }
}