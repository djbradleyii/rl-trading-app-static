import React from 'react';
import './InventoryForm.css';
import ContextManager from '../../context/context-manager';

export default class InventoryForm extends React.Component{
static contextType = ContextManager;

    render(){
        return(
            <form id="inventory-form" /* onSubmit={this.handleRegSubmit} */>
                <div className="info">*Required Fields</div>
                <div className="inventory">
                    <div>
                        <label htmlFor="invetory-category">Category:</label>
                        <select id="inventory-category" name="category">
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
                    <section className="form-checkboxes">
                        <label htmlFor="item-category">Colors:</label>
                        <div>
                            <input type="checkbox" id="color-black" name="color-black" value="black" />
                            <label htmlFor="color-black">Black</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-burnt-sienna" name="color-burnt-sienna" value="burnt-sienna" />
                            <label htmlFor="color-burnt-sienna">Burnt Sienna</label>
                        </div> 
                        <div>
                            <input type="checkbox" id="color-cobalt" name="color-cobalt" value="cobalt" />
                            <label htmlFor="color-cobalt">Cobalt</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-crimson" name="color-crimson" value="crimson" />
                            <label htmlFor="color-crimson">Crimson</label>
                        </div> 
                        <div>
                            <input type="checkbox" id="color-forest_green" name="color-forest_green" value="forest_green" />
                            <label htmlFor="color-forest_green">Forest Green</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-grey" name="color-grey" value="grey" />
                            <label htmlFor="color-grey">Grey</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-lime" name="color-lime" value="lime" />
                            <label htmlFor="color-lime">Lime</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-orange" name="color-orange" value="orange" />
                            <label htmlFor="color-orange">Orange</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-pink" name="color-pink" value="pink" />
                            <label htmlFor="color-pink">Pink</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-purple" name="color-purple" value="purple" />
                            <label htmlFor="color-purple">Purple</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-saffron" name="color-saffron" value="saffron" />
                            <label htmlFor="color-saffron">Saffron</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-sky_blue" name="color-sky_blue" value="sky_blue" />
                            <label htmlFor="color-sky_blue">Sky Blue</label>
                        </div>  
                        <div>
                            <input type="checkbox" id="color-titanium_white" name="color-titanium_white" value="titanium_white" />
                            <label htmlFor="color-titanium_white">Titanium White</label>
                        </div>  
                    </section>
                    <div>
                        <label htmlFor="inventory-rarity">Rarity:</label>
                        <select id="inventory-rarity" name="inventory-rarity">
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
                        <label htmlFor="inventory-attribute">Attribute:</label>
                        <select id="inventory-attribute" name="inventory-attribute">
                        <option value="certified">Certified</option>
                        <option value="painted">Painted</option>
                        <option value="special_edition">Special Edition</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
        </form>
        );
    }
}