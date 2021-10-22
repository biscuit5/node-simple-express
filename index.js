const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors ())
app.use (express.json())

app.post('/users',(req,res) =>{
	const newUser = req.body;
	newUser.id = users.length;
	users.push(newUser);
	console.log('hitting the post',req.body)
	res.json(newUser)
})
app.get ( '/',(req,res) =>{
	res.send(' wow i am learning to node and node express and nodemon ')
} );
const users =[
	{id:0, name:'sabana',address :'dhaka',email:'sabana @gmail.com',phone:'106376688'},
	{id:1, name:'sabnoor',address :'dhaka',email:'sabmoor @gmail.com',phone:'106376688'},
	{id:2, name:'rozina ',address :'dhaka',email:'rozina @gmail.com',phone:'106376688'},
	{id:3, name:'shuchirota',address :'dhaka',email:'shochorita @gmail.com',phone:'106376688'}
]
app.get('/users',(req,res)=>{
	const search= req.query.search
	if(search){
		const searchResults =users.filter(user =>
			user.name.toLowerCase().includes(search))
			res.send(searchResults)
	}
	else{
		res.send(users)
	}
})
app.get('/users/:id',(req,res)=>{
	const id = req.params.id
	const user = users[id]
	res.send(user)
})

app.listen(port, ()=>{
	console.log('example node listening ',port)
});