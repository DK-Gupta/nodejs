const express = require('express')
const app = express();


function sum (n){
    let ans =0;
    for(let i=0; i<=n; i++){
        ans+=i;
    }
    return ans;
}
app.get('/',(req,res)=>{
    const n = req.query.n; // this n is require from serversite(we can get it by writing in route this - ?n=10 (then here will become 10))
    const ans = sum(n);
    res.send(`Hi there, the sum is: ${ans}`);
});

app.listen(8010);

