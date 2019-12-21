module.exports = function(app,Account)
{
  
    //account.name = "taek";
    app.post('/api/accounts', function(req, res){
        var account = new Account({
            id : req.body.id,     
            pass : req.body.pass,   
            name : req.body.name , 
            phone : req.body.phone,   
            email : req.body.email   
        });
       

        console.log(account.id);
        
        account.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
    
 res.json({result: 1});
    
        });
    });

    app.get('/api/accounts', function(req,res){
        //전체검색
        console.log(req.body.id);
        Account.find(function(err, accounts){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(accounts);

            

        })
    });

   //http://localhost:3000/api/accounts/찾을 id <- 이 API를 사용
    app.post('/api/accounts/:id', function(req, res){
        console.log(req.params.id);
        Account.find({id:req.params.id},function(err, accounts){
            console.log(accounts);
            if(err) return res.status(500).json({error: err});
            if(accounts.length === 0) {
                console.log("asdasd");
                return res.status(404).json({error: 'account not found'});}
            else
            {
                console.log("Already Exist ID");
            
                res.json({accounts});
                return;
            }
         
            
        })
    });

     //로그인할때 비번 찾기
     app.post('/api/accounts/login/:id', function(req, res){
        console.log(req.params.id);
        Account.find({id:req.params.id},function(err, accounts){
            console.log(accounts);
            if(err) return res.status(500).json({error: err});
            if(accounts.length === 0) {
                console.log("asdasd");
                return res.status(404).json({error: 'account not found'});}
            else
            {
               console.log("hello");
            
                res.json(accounts[0]);
                return;
            }
         
            
        })
    });
   


}

