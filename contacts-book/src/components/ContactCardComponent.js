import React, { Component } from 'react';
import Icon from '@mdi/react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { mdiHumanFemale } from '@mdi/js';
import { mdiHumanMale } from '@mdi/js';
import './ContactCardComponent.css'


export default class ContactCard extends Component {

    static propsTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        picture: PropTypes.string
    };

    render() {
        //Capitalize the first letters of first and last names
        const firstName = this.props.firstName.charAt(0).toUpperCase() + this.props.firstName.slice(1);
        const lastName = this.props.lastName.charAt(0).toUpperCase() + this.props.lastName.slice(1);
        let gender = '';
        if (this.props.gender === 'male') { //assign relevant gender icon
            gender = mdiHumanMale;
        } else {
            gender = mdiHumanFemale;
        }
        const email = this.props.email;
        const picture = this.props.picture;

        return (
            <Card className="card">
                <CardContent className="media">
                    <img alt="text" className="pic" src={picture} />
                </CardContent>
                <CardContent className="content">
                    <Typography gutterBottom variant="body2">
                        {firstName} {lastName} <Icon path={gender} title="Gender" size={0.8} color="white" />
                        <br />
                        {email}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
