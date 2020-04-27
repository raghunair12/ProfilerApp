import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {useHistory} from 'react-router-dom';

import * as actionTypes from '../../store/actions';
import classes from './ProfessionalInfo.module.css';

class ProfessionalInfo extends Component {
    state = {
        profDetails: {
            ...this.props.professionalInfo
        },
        validation: {
            firstNameValid: false,
            lastNameValid: false,
            companyValid: false,
            resStateValid: false
        },
        saveDisabled: true 
    }

    firstNameChangeHandler = async (event) => {
        // const firstName = 'firstName';
        // this.newObject = {
        //     ...this.newObject,
        //     firstName: event.target.value
        // }
        await this.setState({
            profDetails: {
                ...this.state.profDetails,
                firstName: event.target.value
            }
        });
        if (this.state.profDetails.firstName !== '') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    firstNameValid: true
                }
            });
        }
        else {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    firstNameValid: false
                }
            });
        }
        this.checkValidData();
    }

    lastNameChangeHandler = async (event) => {
        // const lastName = 'lastName';
        // this.newObject = {
        //     ...this.newObject,
        //     lastName: event.target.value
        // }
        await this.setState({
            profDetails: {
                ...this.state.profDetails,
                lastName: event.target.value
            }
        });
        if (this.state.profDetails.lastName !== '') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    lastNameValid: true
                }
            });
            // this.validation={
            //     ...this.validation,
            //     lastNameValid: true
            // }
        }
        else {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    lastNameValid: false
                }
            });
        }
        this.checkValidData();
    }

    CompanyChangeHandler = async (event) => {
        // const company = 'company';
        // this.newObject = {
        //     ...this.newObject,
        //     company: event.target.value
        // }
        await this.setState({
            profDetails: {
                ...this.state.profDetails,
                company: event.target.value
            }
        });
        if (this.state.profDetails.company !== '') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    companyValid: true
                }
            });
            // this.validation={
            //     ...this.validation,
            //     companyValid: true
            // }
        }
        else {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    companyValid: false
                }
            });
        }
        this.checkValidData();
        // this.checkValidDa();
    }

    stateChangeHandler = async (event) => {
        // const state = 'state';
        // this.newObject = {
        //     ...this.newObject,
        //     state: event.target.value
        // }
        await this.setState({
            profDetails: {
                ...this.state.profDetails,
                resState: event.target.value
            }
        })
        // console.log(event.target.value);
        if (this.state.profDetails.resState !== 'Select State') {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    resStateValid: true
                }
            });
            // this.validation={
            //     ...this.validation,
            //     resStateValid: true
            // }
        }
        else {
            await this.setState({
                validation: {
                    ...this.state.validation,
                    resStateValid: false
                }
            });
        }
        this.checkValidData();
    }

    checkValidData = async() => {
        //     let formData = Object.keys(this.state.nextButtonDisabled).length;
        //     console.log(formData);
        //     let nextButtonEnabled = true;
        //     // for(let key in this.state.nextButtonDisabled){
        //     //     formData.push({id:key,value:this.state.nextButtonDisabled(key)})
        //     // }
        //     if(formData !== 4){
        //         nextButtonEnabled= false;
        //         this.props.onNextButtonChange(nextButtonEnabled);
        //     }
        //     else{
        //         nextButtonEnabled= true;
        //         this.props.onNextButtonChange(nextButtonEnabled);
        //     }
        //     // this.props.nextDisabled = nextButtonEnabled;
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
                this.setState({saveDisabled: false})
            }
            else if (n === false && this.state.saveDisabled === false) {
                this.setState({saveDisabled: true})
                this.props.onNextButtonChange(!n);
            }
            else if(this.state.saveDisabled === true && this.props.nextDisabled=== false){
                this.setState({saveDisabled: false});
            }
            else {
                // this.props.onNextButtonChange(n);
            }
        })();

    }

    saveData = (event) => {
        event.preventDefault();
        this.props.onProfessionalDetailsNext(this.state.profDetails);
        const nextB = false;
        this.props.onNextButtonChange(nextB);
    }

    nextPage = (event) => {
        event.preventDefault();
        // this.props.onProfessionalDetailsNext(this.state.profDetails);
        this.props.history.push('/pers');
    }

    render() {
        let profForm = (
            <form>
                <label>First Name </label>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    onChange={this.firstNameChangeHandler}
                    value={this.state.profDetails.firstName} />
                <br />
                <br />
                <label> Last Name </label>
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={this.lastNameChangeHandler}
                    value={this.state.profDetails.lastName} />
                <br />
                <br />
                <label> Company  </label>
                <input
                    type="text"
                    placeholder="Enter Company Name"
                    onChange={this.CompanyChangeHandler}
                    value={this.state.profDetails.company} />
                <br />
                <br />
                <label> State </label>
                <select 
                    defaultValue={this.props.professionalInfo.resState}
                    onChange={this.stateChangeHandler}>
                    <option key={'SEL'}>Select State</option>
                    <option key={'AP'}>Andhra Pradesh </option>
                    <option key={'TN'}>Telangana </option>
                </select>
                <br />
                <br />
                <button 
                    disabled={this.state.saveDisabled}
                    onClick={this.saveData}>Save</button>
                &nbsp;
                &nbsp;
                <button 
                    disabled={this.props.nextDisabled}
                    onClick={this.nextPage}>Next</button>
            </form>
        );
        return (
            <div className={classes.ProfessionalInfo}>
                <h4>Professional Details</h4>
                {profForm}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        professionalInfo: state.prof.professionalInfo,
        nextDisabled: state.prof.nextDisabled
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onProfessionalDetailsNext: (newProfessionalInfo) => dispatch({ type: actionTypes.STORE_PROFESSIONAL_DETAILS, newProfessionalInfo: newProfessionalInfo }),
        onNextButtonChange: (nextButton) => dispatch({ type: actionTypes.PROFESSIONAL_DETAILS_NEXT, nextButton: nextButton })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalInfo);