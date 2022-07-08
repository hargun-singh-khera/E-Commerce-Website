1. Home page (page 1)
>>>features
http://localhost:8425/features
https://fswdsummernodeapi.herokuapp.com/features

>>>location
http://localhost:8425/location
https://fswdsummernodeapi.herokuapp.com/location

>>services
http://localhost:8425/services
https://fswdsummernodeapi.herokuapp.com/services

Using params
>>>location with location_id
http://localhost:8425/location/location_id  
http://localhost:8425/location/2

<!-- >>>state with state_id
http://localhost:8425/state/state_id
http://localhost:8425/state/3 -->

Using query params
>>>city wrt state_id
http://localhost:8421/city?city=1

and features 
http://localhost:8421/city?city=1&feature=4

>>>services with services_id
http://localhost:8425/services/id
http://localhost:8425/services/4

>>>features with features_id
http://localhost:8425/features/Feature_id
http://localhost:8425/features/2





// app.delete('/deleteOrder',(req,res)=>{
//     db.collection('orders').remove({_id:id},(err,result)=>{
//         if(err) throw err;
//         res.send(result);
//     })
// })

// app.post('/serviceLocation',(req,res)=>{
//     // console.log(req.body);
//     // res.send(req.body)
//     db.collection('services').find({location_id:{$in:req.body}}).toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })
// })