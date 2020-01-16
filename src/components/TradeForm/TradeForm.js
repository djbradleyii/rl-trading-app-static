import React from 'react';
import ContextManager from '../../context/context-manager';
import './TradeForm.css';

export default class TradeForm extends React.Component{
static contextType = ContextManager;
    handleTradeSubmission = (e) => {
        e.preventDefault();
        const { history } = this.props;
        let myItems = document.querySelectorAll('input[type="checkbox"]:checked');

        myItems = Array.from(myItems);

        const items = myItems.map((item) => {
            return JSON.parse(item.value);
        })

        const newTrade = {
            id: this.context.trades.length + 1,
            userid: this.context.selectedUser.stats.id,
        }
        newTrade.items = items;

        this.context.selectedUser.trades.push(newTrade);
        this.context.trades.push(newTrade);
        history.push(`/dashboard/${this.context.selectedUser.stats.gamertag}`);
    }

    render(){
        const tradeItems = this.context.selectedUser.inventory.map((item, i) => {
            return(
                <div key={i}>
                    <input type="checkbox" id={`${item.name}-${item.id}`} name={`${item.name}-${item.id}`} value={JSON.stringify(item)} />
                    <label htmlFor={`${item.name}-${item.id}`}>{item.name}</label>
                </div>  
            )
        })
        return(
            <form id="trade-form" onSubmit={this.handleTradeSubmission}>
                <div className="info">*Required Fields</div>
                <div>
                    <label htmlFor="platform">*Platform:</label>
                    <select id="platform" name="platform" required>
                        <option value="pc">PC</option>
                        <option value="ps4">PS4</option>
                        <option value="nintendo_switch">Nintendo Switch</option>
                        <option value="xbox_one">Xbox One</option>
                    </select>
                </div>
                <div className="inventory form-checkboxes">
                    <label>Choose items to trade:</label>
                    {tradeItems}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
        </form>
        );
    }
}