import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './PersonalInfo.module.css';
import * as actionTypes from '../../store/actions';

class PersonalInfo extends Component {

    state = {
        persDetails: {
            ...this.props.personalInfo
        },
        validation: {
            genderValid: false,
            favMovieValid: false,
            phNumberValid: false,
            favAppValid: false,
            weightValid: false
        },
        genderMale: false,
        genderFemale: false,
        favAppWA: false,
        favAppFB: false,
        saveDisabled: true
    }

    componentDidMount(){
        if(this.props.personalInfo.gender === 'male'){
            this.setState({genderMale:true});
        }
        else if(this.props.personalInfo.gender === 'female'){
            this.setState({genderFemale: true});
        }
        else{
            //do nothing
        }
        if(this.props.personalInfo.favApp.whatsapp !== ''){
            this.setState({favAppWA: true});
        }
        if(this.props.personalInfo.favApp.facebook !== ''){
            this.setState({favAppFB:true});
        }
    }

    genderChangeHandler = async (event) => {
        await this.setState({
            persDetails: {
                ...this.state.persDetails,
                gender: event.target.value
            }
        });
        if (this.state.persDetails.gender !== '') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    genderValid: true
                }
            });
            if (this.state.persDetails.gender === 'male') {
                await this.setState({ genderMale: true });
            }
            else {
                await this.setState({ genderFemale: true });
            }
        }

        // else {
        //     await this.setState({
        //         validation: {
        //             ...this.state.validation,
        //             firstNameValid: false
        //         }
        //     });
        // }
    }

    favMovieChangeHandler = async (event) => {
        await this.setState({
            persDetails: {
                ...this.state.persDetails,
                favMovie: event.target.value
            }
        });
        if (this.state.persDetails.favMovie !== '') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    favMovieValid: true
                }
            });
        }
        else {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    favMovieValid: false
                }
            });
        }
        this.checkValidData();
    }

    phNumberChangeHandler = async (event) => {
        // this.newObject = {
        //     ...this.newObject,
        //     phNumber: event.target.value
        // }
        await this.setState({
            persDetails: {
                ...this.state.persDetails,
                phNumber: event.target.value
            }
        });
        if (this.state.persDetails.phNumber !== '') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    phNumberValid: true
                }
            });
        }
        else {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    phNumberValid: false
                }
            });
        }
        this.checkValidData();
    }

    favAppTogglerFB = async (event) => {
        if(event.target.checked){
        await this.setState({
            persDetails: {
                ...this.state.persDetails,
                favApp: {
                    ...this.state.persDetails.favApp,
                    facebook: 'facebook'
                }
            }
        })
        }
        else{
            await this.setState({
                persDetails: {
                    ...this.state.persDetails,
                    favApp: {
                        ...this.state.persDetails.favApp,
                        facebook: ''
                    }
                }
            })
        }
        this.checkFavApp();
    }

    favAppTogglerWA = async (event) => {
        // await this.setState({
        //     persDetails: {
        //         ...this.state.persDetails,
        //         favApp: {event.target.value}
        //     }
        // });
        if(event.target.checked){
        await this.setState({
            persDetails: {
                ...this.state.persDetails,
                favApp: {
                    ...this.state.persDetails.favApp,
                    whatsapp: 'whatsapp'
                }
            }
        });
    }
    else{
        await this.setState({
            persDetails: {
                ...this.state.persDetails,
                favApp: {
                    ...this.state.persDetails.favApp,
                    whatsapp: ''
                }
            }
        });
    }
        this.checkFavApp();
    }

    checkFavApp = async () => {
        if (this.state.persDetails.favApp.whatsapp !== '' || this.state.persDetails.favApp.facebook !== '') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    favAppValid: true
                }
            });
        }
        else {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    favAppValid: false
                }
            });
        }
        this.checkValidData();
    }



    weightChangeHandler = async (event) => {
        await this.setState({
            persDetails: {
                ...this.state.persDetails,
                weight: event.target.value
            }
        });
        if (this.state.persDetails.weight !== '') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    weightValid: true
                }
            });
        }
        else {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    weightValid: false
                }
            });
        }
        this.checkValidData();
    }

    checkValidData = async () => {
        await (() => {
            let obj = { ...this.state.validation };
            let n = false;
            for (let k in obj) {
                if (!obj[k]) {
                    n = false;
                    break;
                }
                else {
                    n = true;
                }

            }
            if (n === true && this.state.saveDisabled === true) {
                // this.props.onNextButtonChange(!n);
                this.setState({ saveDisabled: !n });
            }
            else if (n === false && this.state.saveDisabled === false) {
                this.setState({ saveDisabled: !n })
                this.props.onNextButtonChange(!n);
            }
            else {
                // this.props.onNextButtonChange(n);
            }
        })();
    }

    prevPage = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }

    saveData = (event) => {
        event.preventDefault();
        this.props.onPersonalDetailsNext(this.state.persDetails);
        this.props.onNextButtonChange(this.state.saveDisabled);
    }

    nextPage = (event) => {
        event.preventDefault();
        // this.props.onPersonalDetailsNext(this.state.persDetails);
        this.props.history.push('/review');
    }

    // defaultWA = () =>{
    //     if(this.props.personalInfo.favApp.whatsapp !== ''){
    //         return true;
    //     }
    // }

    // defaultFB = () =>{
    //     if(this.props.personalInfo.favApp.facebook !== ''){
    //         return true;
    //     }
    // }

    render() {
        let form = (
            <form>
                <label>Gender  </label>
                <input type="radio" name="gender" value="male" checked={this.state.genderMale}
                    onChange={this.genderChangeHandler} />
                <label>Male</label>

                <input type="radio" name="gender" value="female" checked={this.state.genderFemale}
                    onChange={this.genderChangeHandler} />
                <label>Female</label>
                <br />
                <br />
                <label>Favourite Movie </label>
                <input
                    type="text"
                    placeholder="Enter Movie name"
                    onChange={this.favMovieChangeHandler}
                    value={this.state.persDetails.favMovie} />
                <br />
                <br />
                <label>Phone Number </label>
                <input
                    type="number"
                    placeholder="Enter Phone number"
                    onChange={this.phNumberChangeHandler}
                    value={this.state.persDetails.phNumber} />
                <br />
                <br />
                <label>Favourite App</label>
                <input
                    type="checkbox"
                    name="whatsapp"
                    value="whatsapp"
                    defaultChecked ={this.state.favAppWA}
                    onChange={this.favAppTogglerWA} />
                <label>WhatsApp</label>
                <input
                    type="checkbox"
                    name="facebook"
                    value="facebook"
                    defaultChecked={this.state.favAppFB}
                    onChange={this.favAppTogglerFB} />
                <label>Facebook</label>
                <br />
                <br />
                <label>Weight</label>
                <input
                    type="textbox"
                    onChange={this.weightChangeHandler}
                    value={this.state.persDetails.weight} />
                <select >
                    <option key={'Kgs'}>Kgs </option>
                    <option key={'pounds'}>pounds </option>
                </select>
                <br />
                <br />
                <button
                    onClick={this.prevPage}>Previous</button>
                &nbsp; &nbsp;
                <button
                    disabled={this.state.saveDisabled}
                    onClick={this.saveData}>Save</button>
                &nbsp; &nbsp;
                <button
                    disabled={this.props.nextDisabled}
                    onClick={this.nextPage}>Next</button>

            </form>
        );
        return (
            <div className={classes.PersonalInfo}>
                <h4>Personal Details</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personalInfo: state.pers.personalInfo,
        nextDisabled: state.pers.nextDisabled
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonalDetailsNext: (newPersonalInfo) => dispatch({ type: actionTypes.STORE_PERSONAL_DETAILS, newPersonalInfo: newPersonalInfo }),
        onNextButtonChange: (nextButton) => dispatch({ type: actionTypes.PERSONAL_DETAILS_NEXT, nextButton: nextButton })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);