module.exports = function(app,Order)
{
  
    //account.name = "taek";
    app.post('/api/orders', function(req, res){
        var order = new Order({
            thing_id : req.body.thing_id,     
            address : req.body.address,   
            count : req.body.count , 
            user_id : req.body.user_id   
        });
       

        
       order.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
    
 res.json({result: 1});
    
        });
    });

    app.get('/api/orders/:thing_id', function(req,res){
        //상품 번호에 있는 모든 주문들 한번에 보기
        console.log(req.body.thing_id);
        Order.find({id:req.params.thing_id},function(err, orders){
            console.log(orders);
            if(err) return res.status(500).json({error: err});
            if(orders.length === 0) return res.status(404).json({error: 'order not found'});
            
          console.log("Already Exist ID");
            
            res.json(orders);

            

        })
    });

 

   


}

