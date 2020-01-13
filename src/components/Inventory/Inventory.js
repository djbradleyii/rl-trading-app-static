import React from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css';

export default class Inventory extends React.Component{
    render(){
        return(
          <div>
            <form id="inventory-search-form">
                <div>
                    <label htmlFor="item-category">Category:</label>
                    <select id="item-category" name="category">
                      <option value="all">All</option>
                      <option value="blueprints">Blueprints</option>
                      <option value="body">Body</option>
                      <option value="decal">Decal</option>
                      <option value="paint_finish">Paint Finish</option>
                      <option value="wheels">Wheels</option>
                      <option value="rocket_boost">Rocket Boost</option>
                      <option value="topper">Topper</option>
                      <option value="antenna">Antenna</option>
                      <option value="goal_explosion">Goal Explosion</option>
                      <option value="trail">Trail</option>
                      <option value="player_banner">Player Banner</option>
                      <option value="avatar_border">Avatar Border</option>
                      <option value="engine_audio">Engine Audio</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="item-color">Color:</label>
                    <select id="item-color" name="item-color">
                      <option value="all">All</option>
                      <option value="black">Black</option>
                      <option value="burnt_sienna">Burnt Sienna</option>
                      <option value="cobalt">Cobalt</option>
                      <option value="crimson">Crimson</option>
                      <option value="forest_green">Forest Green</option>
                      <option value="grey">Grey</option>
                      <option value="lime">Lime</option>
                      <option value="orange">Orange</option>
                      <option value="pink">Pink</option>
                      <option value="purple">Purple</option>
                      <option value="saffron">Saffron</option>
                      <option value="sky_blue">Sky Blue</option>
                      <option value="titanium_white">Titanium White</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="item-rarity">Rarity:</label>
                    <select id="item-rarity" name="item-rarity">
                      <option value="all">All</option>
                      <option value="common">Common</option>
                      <option value="uncommon">Uncommon</option>
                      <option value="rare">Rare</option>
                      <option value="very_rare">Very Rare</option>
                      <option value="import">Import</option>
                      <option value="exotic">Exotic</option>
                      <option value="black_market">Black Market</option>
                      <option value="Premium">Premium</option>
                      <option value="Limited">Limited</option>
                    </select>
                </div>
                <div className="styled-select">
                    <label htmlFor="item-attribute">Attribute:</label>
                    <select id="item-attribute" name="item-attribute">
                      <option value="all">All</option>
                      <option value="certified">Certified</option>
                      <option value="painted">Painted</option>
                      <option value="special_edition">Special Edition</option>
                    </select>
                </div>
            </form>
            {/* !!this.state.events.length && this.renderContent() */}
            <div className="inventory-search-results">
              <div className="row">
                <div className="column">
                <article className="item-card">
                <h3>CHICKARA GXT (item name)</h3>
                <div className="card-rarity">
                 <p>Limited(rarity) Body(item type)</p>
                </div>
                <div className="row">
                  <div className="column"><p>TITANIUM WHITE (color)</p></div>
                  <div className="column"><p>PAINTED (attribute)</p></div>
                </div>
                <div className="row">
                  <div className="column"><p>SKILLFUL SWEEPER (certified tag name)</p></div>
                  <div className="column"><p>CERTIFIED</p></div>
                </div>
              </article>
              <article className="item-card">
                <h3>GUARDIAN GXT</h3>
                <div className="card-rarity">
                 <p>Limited(rarity) Body(item type)</p>
                </div>
                <div className="row">
                  <div className="column"><p>LIME</p></div>
                  <div className="column"><p>PAINTED</p></div>
                </div>
              </article>
                </div>
                <div className="column">
                  <article className="item-card">
                    <h3>PEARLESCENT (MATTE)</h3>
                    <div className="card-rarity">
                    <p>Rare(rarity) Paint Finish(item type)</p>
                    </div>
                  </article>
                  <article className="item-card">
                    <h3>DRN</h3>
                    <div className="card-rarity">
                    <p>Limited(rarity) Wheels(item type)</p>
                    </div>
                    <div className="row">
                      <div className="column"><p>INFINITE (special edition tag)</p></div>
                      <div className="column"><p>SPECIAL EDITION (attribute)</p></div>
                    </div>
                    <div className="row">
                      <div className="column"><p>CRIMSON (color)</p></div>
                      <div className="column"><p>PAINTED (attribute)</p></div>
                    </div>
                    <div className="row">
                      <div className="column"><p>GOALKEEPER (certified tag)</p></div>
                      <div className="column"><p>CERTIFIED (attribute)</p></div>
                    </div>
                  </article>
                  <article className="item-card">
                    <h3>BINARY</h3>
                    <div className="card-rarity">
                      <p>Very Rare (rarity) Trail (item type)</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        );
    }
}