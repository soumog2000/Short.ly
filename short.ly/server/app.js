const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const api = require("./api");
const cors = require('cors');

const path = require('path');

app.use(express.json());
app.use(cors());


app.use("/api",api);

if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('client/build'))  // set static folder 
    //returning frontend for any route other than api 
    app.get('*',(req,res)=>{     
        res.sendFile (path.resolve(__dirname,'client','build',         
                      'index.html' ));    
    });
}

app.listen(PORT,()=>{
    console.log(`Listening to the port: ${PORT}`);
});