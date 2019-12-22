import React from "react";
import { render } from "react-dom";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";



const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

  export default function Calendar() {
    const data = [
        
            {
                title: "Website Re-Design Plan",
                startDate: new Date(2018, 5, 25, 9, 30),
                endDate: new Date(2018, 5, 25, 11, 30),
                id: 0,
                location: "Room 1"
              },
              {
                title: "Book Flights to San Fran for Sales Trip",
                startDate: new Date(2018, 5, 25, 12, 0),
                endDate: new Date(2018, 5, 25, 13, 0),
                id: 1,
                location: "Room 1"
              },
              {
                title: "Install New Router in Dev Room",
                startDate: new Date(2018, 5, 25, 14, 30),
                endDate: new Date(2018, 5, 25, 15, 30),
                id: 2,
                location: "Room 2"
              },
              {
                title: "Approve Personal Computer Upgrade Plan",
                startDate: new Date(2018, 5, 26, 10, 0),
                endDate: new Date(2018, 5, 26, 11, 0),
                id: 3,
                location: "Room 2"
              },
        
    ];

    return (
      <MuiThemeProvider theme={theme}>
        <Paper>
          <Scheduler data={data}>
            <ViewState currentDate="2018-06-28" />
            <WeekView startDayHour={9} endDayHour={19} />
            <Appointments />
          </Scheduler>
        </Paper>
      </MuiThemeProvider>
    );
  }

