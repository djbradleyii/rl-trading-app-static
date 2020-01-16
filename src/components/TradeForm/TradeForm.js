import React from 'react';
import './TradeForm.css';
/* import ContextManager from '../../context/context-manager';
import AuthApiService from '../../services/auth-api-service';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service'; */

export default class TradeForm extends React.Component{
/*     static contextType = ContextManager; */
    
/*         handleRegSubmit = (e) => {
            e.preventDefault();
            this.setState({ error: null });
            const { fname, lname, dob, gender, marital_status, occupation, bio, email, password, passwordVerify } = e.target;
            const { history } = this.props;
            
            let newUser = {
                fname: fname.value,
                lname: lname.value,
                dob: dob.value,
                gender: gender.value,
                marital_status: marital_status.value,
                occupation: occupation.value,
                bio: bio.value,
                email: email.value,
                password: password.value
            }

            if(password.value === passwordVerify.value){
                AuthApiService.postUser(newUser)
                .then((user) => {
                    fname.value = '';
                    lname.value = '';
                    dob.value = '';
                    gender.value = '';
                    marital_status.value = '';
                    occupation.value = '';
                    bio.value = '';
                    email.value = '';
                    password.value = '';
                    this.context.clearErrorMessage();
                    history.push(`/registered`);
                })
                .catch(res => {
                    this.context.updateErrorMessage('Oops: '+ res.error);
                    this.context.scrollToErrorMessage();
                })
            } else {
                this.context.updateErrorMessage('Password must match');
                this.context.scrollToErrorMessage();
            }
        }

        componentWillUnmount(){
            this.context.clearErrorMessage();
        } */

    render(){
        return(
            <form id="trade-form" /* onSubmit={this.handleRegSubmit} */>
                <div className="info">*Required Fields</div>
               {/*  <div className="error-message">{!!this.context.errorMessage && this.context.errorMessage}</div> */}
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
                    <div>
                        <input type="checkbox" id="trade1" name="trade1" />
                        <label htmlFor="trade1">Item</label>
                    </div>  
                    <div>
                        <input type="checkbox" id="trade2" name="trade2" />
                        <label htmlFor="trade2">Item 2</label>
                    </div>  
                    <div>
                        <input type="checkbox" id="trade3" name="trade3" />
                        <label htmlFor="trade3">Item 3</label>
                    </div>  
                    <div>
                        <input type="checkbox" id="trade4" name="trade4" />
                        <label htmlFor="trade4">Item 4</label>
                    </div>  
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
        </form>
        );
    }
}