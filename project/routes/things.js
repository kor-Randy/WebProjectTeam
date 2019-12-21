module.exports = function(app,Thing)
{
  var id;
    app.post('/api/things', function(req, res){
        var thing = new Thing({
            name : req.body.name,     
            des : req.body.des,   
            price : req.body.price ,
            count : req.body.count
             
        });
       

        thing.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
    
 res.json({result: 1});
    
        });
    });

    app.get('/api/things', function(req,res){
        //전체검색
        console.log(req.body.id);
        Thing.find(function(err, accounts){
            if(err) return res.status(500).send({error: 'database failure'});
            
            res.json(accounts);
            
        })
    });

   //http://localhost:3000/api/things/찾을 name <- 이 API를 사용
    app.post('/api/things/:name', function(req, res){
        console.log(id);
        console.log(req.params.name);
        Thing.find({name:req.params.name},function(err, things){
            
            console.log(id); console.log(id);
            console.log(things);
            if(err) return res.status(500).json({error: err});
            if(things.length === 0) return res.status(404).json({error: 'Thing not found'});
            res.json(things[0]);
            id = things[0].id;
            console.log(id);
        })
    });
}

