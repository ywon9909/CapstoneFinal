import React, { Component, useState } from 'react';
import { Button } from '@material-ui/core';

import { useTheme } from "@material-ui/styles";

import {
    ResponsiveContainer,
    ComposedChart,
    AreaChart,
    LineChart,
    Line,
    Area,
    PieChart,
    Pie,
    Cell,
    YAxis,
    XAxis,
  } from "recharts";
  import {BarChart, Bar, CartesianGrid, Tooltip, Legend} from 'recharts';
  import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class HomeComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            
        }
       
    }

   
    

    render() {
        return (
            <body >
                <div class="container-fluid" >
                

              <LineChart
        width={500}
        height={300}
        data={[{
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
          },
          {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
          },
          {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
          },
          {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
          },
          {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
          },
          {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
          },
          {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
          }]}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>


      <Card >
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be  nev o lent
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={[
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      
            <TableRow>
              <TableCell component="th" scope="row">
                22323
              </TableCell>
              <TableCell align="right">12</TableCell>
              <TableCell align="right">333</TableCell>
              <TableCell align="right">44</TableCell>
              <TableCell align="right">555</TableCell>
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
                </div>



            </body >
        );
    }
}

export default HomeComponent;



