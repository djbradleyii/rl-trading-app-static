import React from 'react';
import UserTeamRequests from '../UserTeamRequests/UserTeamRequests';
import UserTrades from '../UserTrades/UserTrades';
import UserInventory from '../UserInventory/UserInventory';
import './Dashboard.css';

export default class Dashboard extends React.Component{
    render(){
        return(
            <section className="dashboard">
                <p className="user-info">Teams show up based on your user stats.</p>
                <ul className="user-info">
                    <li>Trades - Trade Confirmed: Removes items from your inventory. Trade Accepted adds the trade to your inventory.</li>
                    <li>Available Teams - A list of gamers will be listed based on your current user stats.</li>
                    <li>You can search your inventory below.</li>
                </ul>
                <UserTrades />
                <UserTeamRequests />
                <UserInventory />
            </section>
        );
    }
}