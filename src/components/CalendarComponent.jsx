import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
class CalendarComponent extends Component {
    state = {

        date: new Date(),

    }
    onDateChange = date => {

        this.setState({

            date: moment(date).format("YYYY-MM-DD")

        })

    };


    render() {
        return (
            <div>
                <Calendar

                    onChange={this.onDateChange}

                    value={this.state.date}

                />
            </div>
        );
    }
}

export default CalendarComponent;