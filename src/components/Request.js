import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Request() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[ham,setHam]=useState('')
    const[cheese,setCheese]=useState('')
    const[requests,setRequests]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const request={name,address,ham,cheese}
    console.log(request)
    
    fetch("http://localhost:8080/request/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(request)

  }).then(()=>{
    console.log("New order recieved")
  })
}


useEffect(()=>{
  fetch("http://localhost:8080/request/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setRequests(result);
  }
)
},[])

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"black"}}>Make an order</h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <TextField id="outlined-basic" label="CheeseBurger quantity" variant="outlined" fullWidth 
      value={cheese}
      onChange={(e)=>setCheese(e.target.value)}
      />
      <TextField id="outlined-basic" label="Hamburger quantity" variant="outlined" fullWidth 
      value={ham}
      onChange={(e)=>setHam(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>

    </Paper>

    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Orders </h1 >

    <Paper elevation={3} style={paperStyle}>

      {requests.map(request=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={request.id}>
         Id:{request.id}<br/>
         Name:{request.name}<br/>
         Address:{request.address} <br/>
         CheeseBurgers ordered:{request.cheese} <br/>
         Hamburgers ordered:{request.ham} <br/>
         Order total:{request.cost}
        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}
