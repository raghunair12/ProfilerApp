import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './ReviewInfo.module.css';

class ReviewInfo extends Component {
    prevPage = (event) =>{
        event.preventDefault();
        this.props.history.push('/pers');
    }

    submitData = (event) =>{
        event.preventDefault();
        console.log(this.props.professionalInfo);
        console.log(this.props.personalInfo);
    }

    render(){
        let profForm = (
            <form>
                <label>First Name </label>
                <input
                    type="text"
                    disabled
                    value={this.props.professionalInfo.firstName} />
                <br />
                <br />
                <label> Last Name </label>
                <input
                    type="text"
                    disabled
                    value={this.props.professionalInfo.lastName} />
                <br />
                <br />
                <label> Company  </label>
                <input
                    type="text"
                    disabled
                    value={this.props.professionalInfo.company} />
                <br />
                <br />
                <label> State </label>
                <input  
                    type="text"
                    disabled
                    value={this.props.professionalInfo.resState} />
            </form>
        );
        let persForm = (
            <form>
                <label>Gender </label>
                <input
                    type="text"
                    disabled
                    value={this.props.personalInfo.gender} />
                <br />
                <br />
                <label>Favourite Movie </label>
                <input
                    type="text"
                    disabled
                    value={this.props.personalInfo.favMovie} />
                <br />
                <br />
                <label>Phone Number </label>
                <input
                    type="text"
                    disabled
                    value={this.props.personalInfo.phNumber} />
                <br />
                <br />
                <label>Favourite App </label>
                <input
                    type="text"
                    disabled
                    value={this.props.personalInfo.favApp.whatsapp + ','+this.props.personalInfo.favApp.facebook} />
                <br />
                <br />
                <label>Weight </label>
                <input
                    type="text"
                    disabled
                    value={this.props.personalInfo.weight} />
                <br />
                <br />
                <button onClick={this.prevPage}>Previous</button>
                &nbsp; &nbsp;
                <button onClick={this.submitData}>Submit</button>
            </form>
        );
        return(
            <div className={classes.ReviewInfo}>
                <h3>Review the Details before Submission</h3>
                <h4>Professional Details</h4>
                {profForm}
                <h4>Personal Details</h4>
                {persForm}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        professionalInfo: state.prof.professionalInfo,
        personalInfo: state.pers.personalInfo
    };
}

export default connect(mapStateToProps) (ReviewInfo);