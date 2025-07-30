const ex= require('express');
const app=ex();
const port= 2000;
app.use(ex.json());

app.get('/',(req,res)=>{res.send('hello world!');});

app.post('api/data',(req,res)=>{
console.log(req);
res.json({
	message:'all good.',
	data:req.body
});
	
});
app.listen(port,()=>{
	console.log('server running on localhost:'+port)
});
