import React, { Component, useState } from 'react';
import { Button } from '@material-ui/core';
import BoardService from '../service/BoardService';
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
import { BarChart, Bar, CartesianGrid, Tooltip, Legend } from 'recharts';
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
// const dataPie = [
//   {name:'Doctor', value:1},
//   {name:'User', value:4}
// ]
const dataPieBoard = [
  {name:'자유게시판', value:18},
  {name:'정형외과', value:104},
  {name:'신경외과', value:98},
  {name:'비뇨기과', value:56},
  {name:'성형외과', value:147},
  {name:'한방과', value:1},
  {name:'피부과', value:1},
  {name:'내과', value:1},
  {name:'치과', value:1},
  {name:'이비인후과', value:1},
  {name:'소아과', value:1},
  {name:'안과', value:1}
]
const COLORS = ['#e7edf7','#d4e4f2', '#bad1e6','#fbb9ab','#f7e9e4','#f3f0f2', ];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx, cy, midAngle, innerRadius, outerRadius, percent, index,name
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{/* {`${(percent * 100).toFixed(0)}%`}*/}
      {name} 
		</text>
	);
};

class HomeComponent extends Component {


  constructor(props) {
    super(props)
    this.state = {
      Boards:[],
      countBoards: '',
      countComment: '',
      dataPie:[],
      dataPieBoard:[],
      countCategory:''
    }

  }
  
  componentDidMount(){
    BoardService.getAllBoards().then((res)=>{
      
      this.setState({
        
        Boards: res.data,
        countBoards: res.data.length,
       
      });
      
    });
    BoardService.getAllComments().then((res)=>{
      this.setState({
        countComment:res.data.length
      });
    });


    BoardService. getUserName( ).then ((res)=>{
      console.log("id is "+res.data)
      this.setState({
          id: res.data
          
      });
  });
    this.setState({
      dataPie : [
        {name:'Doctor', value:1},
        {name:'User', value:4}
      ],
      dataPieBoard:[
        {name:'자유게시판', value:this.state.countCategory},
        {name:'정형외과', value:104},
        {name:'신경외과', value:98},
        {name:'비뇨기과', value:56},
        {name:'성형외과', value:147},
        {name:'한방과', value:102},
        {name:'피부과', value:130},
        {name:'내과', value:111},
        {name:'치과', value:80},
        {name:'이비인후과', value:98},
        {name:'소아과', value:102},
        {name:'안과', value:104}
      ]
    })
  }
 

 
  
  render() {
    return (
      
      <body >
        <div class="container-fluid" >
            
        <div>
          <LineChart
            width={900}
            height={300}
            
            data={[{
              name: '11월', comment: 100, board : 400, amt: 2400, member:10,
            },
            {
              name: '12월', comment: 150, board: 138, amt: 2210,member:30,
            },
            {
              name: '1월', comment: 200, board: 800, amt: 2290,member:50,
            },
            {
              name: '2월', comment: 80, board: 308, amt: 2000,member:100,
            },
            {
              name: '3월', comment: 100, board: 800, amt: 2181,member:200,
            },
            {
              name: '4월', comment: 90, board: 300, amt: 2500,member:100,
            },
            {
              name: '5월', comment: 50, board: 400, amt: 2100,member:500,
            },
            {
              name: 'total', comment: this.state.countComment, board:this.state.countBoards,amt:2000,member:5,
            }]}
            margin={{
              top: 5, right: 30, left: 20, bottom: 10,
            }}
            
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0,1500]}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="board" stroke="#8884d8" />
            <Line type="monotone" dataKey="comment" stroke="#82ca9d"  />
            <Line type="monotone" dataKey="member" stroke="#bad1e6"  />
          </LineChart>
        </div>
        

          {/* <Card >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
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
          </Card> */}


          <div style={{ width: '100%', height: 400 }}>
            
            <ResponsiveContainer>
              <PieChart>
                
                <Pie dataKey="value" cx={200} cy={200} data={this.state.dataPie}   fill="#8884d8" label={renderCustomizedLabel} labelLine={false}>
                {
          	    this.state.dataPie.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
                </Pie>
               
                
                <Pie dataKey="value" cx={700} cy={200} data={this.state.dataPieBoard} label={renderCustomizedLabel} labelLine={false}>
                {
          	    this.state.dataPieBoard.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                }
                </Pie>
                
              
              </PieChart>
              
            </ResponsiveContainer>
            
              
            
          </div>
          <div>

          
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>건의사항</TableCell>
                  <TableCell align="right">자유게시판</TableCell>
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

            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>공지사항</TableCell>
                  <TableCell align="right">자유게시판</TableCell>
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
        </div>



      </body >
    );
  }
}

export default HomeComponent;



