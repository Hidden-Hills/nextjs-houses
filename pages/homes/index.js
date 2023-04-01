import * as React from "react"
import Link from "next/link"
import axios from "axios"
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CastleOutlinedIcon from '@mui/icons-material/CastleOutlined';import Modal from '@mui/material/Modal';
import { createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#212121',
      darker: '#053e85',
    },
    neutral: {
      main: '#27272a',
      contrastText: '#fff',
    },
  },
});

function houses (){
    return(
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" item xs="auto">
              <TaskBar/>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs="auto">
                <HouseOne/>
            </Grid>
            <Grid item xs="auto">
                <HouseTwo/>
            </Grid> 
            <Grid item xs="auto">
                <HouseThree/>
            </Grid> 
            </Grid>
        </div>
    )
}

function TaskBar (){
  return(
    <div>
      <Grid container direction="row" justifyContent="center" alignItems="center" item xs="auto" >
      <AvatarChip/>
      </Grid>   
    </div>
  )
}

function AvatarChip() {
  return (
    <div className="p-3 mw-sm">
      <div className="place-items-start">
      <Chip avatar={<Avatar>U</Avatar>} label="User"/>
      </div>
    </div>
  );
}

class HouseOne extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json",
        }
      };
      axios.request(houses)
      .then(response=>{
        this.setState({
            houses: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.houses[0]){
        return(
            <p>Loading</p>
        )
      }
      if(this.state.houses[0]){
        
        return(
            <div className="p-4">
            <Card sx={{ maxWidth: 350, minWidth: 350 }}>
        <CardMedia style={{ height: "250px", paddingTop: "2%" }} image="/images/homeOne1.webp" title="Picture" alt="pic"/>
        <CardContent>
          <Typography gutterBottom className="text-lg text-medium text-center">
          <p className="text-lg text-medium text-center">{this.state.houses[2].title}</p>
          <p className="text-lg text-medium text-center">{this.state.houses[2].location}</p>
          </Typography>
          <Typography className="text-lg text-medium text-center">
            <p className="text-lg text-small text-center">{this.state.houses[2].ratings}<StarIcon sx={{ color: grey[900] }}/></p>
            <p className="text-lg text-small text-center">{this.state.houses[2].price}</p>
            
          </Typography>
          <Typography className="text-lg text-medium text-center">
            <p>‎</p>
            <Link href='./homes/first'><button type="button" className="text-white bg-gradient-to-r from-pink-400 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Home</button></Link>
            </Typography>
        </CardContent>  
      </Card>
        </div>
        )
    }
  }
}

class HouseTwo extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json",
        }
      };
      axios.request(houses)
      .then(response=>{
        this.setState({
            houses: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.houses[0]){
        return(
            <p>Loading</p>
        )
      }
      if(this.state.houses[0]){
        
        return(
          <div className="p-4">
          <Card sx={{ maxWidth: 350, minWidth: 350 }}>
      <CardMedia style={{ height: "250px", paddingTop: "2%" }} image="/images/homeTwo.webp" title="Picture" alt="pic"/>
      <CardContent>
        <Typography gutterBottom className="text-lg text-medium text-center">
        <p className="text-lg text-medium text-center">{this.state.houses[0].title}</p>
        <p className="text-lg text-medium text-center">{this.state.houses[0].location}</p>
        </Typography>
        <Typography className="text-lg text-medium text-center">
          <p className="text-lg text-small text-center">{this.state.houses[0].ratings}<StarIcon sx={{ color: grey[900] }}/></p>
          <p className="text-lg text-small text-center">{this.state.houses[0].price}</p>
          
        </Typography>
        <Typography className="text-lg text-medium text-center">
          <p>‎</p>
          <Link href='./homes/second'><button type="button" className="text-white bg-gradient-to-r from-pink-400 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Home</button></Link>
          </Typography>
      </CardContent>  
    </Card>
      </div>
      )
    }
  }
}

class HouseThree extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json",
        }
      };
      axios.request(houses)
      .then(response=>{
        this.setState({
            houses: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.houses[0]){
        return(
            <p>Loading</p>
        )
      }
      if(this.state.houses[0]){
        
        return(
            <div className="p-4">
            <Card sx={{maxWidth: 350, minWidth: 350 }}>
        <CardMedia style={{ height: "250px", paddingTop: "2%" }} image="/images/homeThree.webp" title="Picture" alt="pic"/>
        <CardContent>
          <Typography gutterBottom className="text-lg text-medium text-center">
          <p className="text-lg text-medium text-center">{this.state.houses[1].title}</p>
          <p className="text-lg text-medium text-center">{this.state.houses[1].location}</p>
          </Typography>
          <Typography className="text-lg text-medium text-center">
            <p className="text-lg text-small text-center">{this.state.houses[1].ratings}<StarIcon sx={{ color: grey[900] }}/></p>
            <p className="text-lg text-small text-center">{this.state.houses[1].price}</p>
            
          </Typography>
          <Typography className="text-lg text-medium text-center">
            <p>‎</p>
            <Link href='./homes/third'><button type="button" className="text-white bg-gradient-to-r from-pink-400 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Home</button></Link>
            </Typography>
        </CardContent>  
      </Card>
        </div>
        )
    }
  }
}

class HouseFour extends React.Component{

    constructor(props){
      super(props)
      
      this.state = {
        houses: []
      }
    } 
    
    componentDidMount(){
      var houses = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/houses/',
        Allow: 'GET, POST, HEAD, OPTIONS',
        Vary: 'Accept',
        headers: {
            "Content-type": "application/json",
        }
      };
      axios.request(houses)
      .then(response=>{
        this.setState({
            houses: response.data
        })
        console.log(response.data)
      })
    }
    render(){
      if(!this.state.houses[0]){
        return(
            <p>Loading</p>
        )
      }
      if(this.state.houses[0]){
        
        return(
            <div className="p-4">
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia style={{ height: "250px", paddingTop: "2%" }} image="/images/homeFour.png" title="Picture" alt="pic"/>
        <CardContent>
          <Typography gutterBottom className="text-sans text-lg text-medium text-center">
          <p className="text-sans text-lg text-medium text-center">{this.state.houses[3].title}</p>
          </Typography>
          <Typography className="text-sans text-lg text-medium text-center">
            <p className="text-sans text-lg text-small text-center">{this.state.houses[3].ratings}<StarIcon sx={{ color: grey[900] }}/></p>
            <p className="text-sans text-lg text-small text-center">{this.state.houses[3].price}</p>
            
          </Typography>
          <Typography className="text-sans text-lg text-medium text-center">
            <p>‎</p>
            <Link href='./homes/fourth'><button type="button" className="text-sans text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300  text-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full">Book Home</button></Link>
            </Typography>
        </CardContent>  
      </Card>
        </div>
        )
    }
  }
}
export default houses