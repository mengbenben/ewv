//redis
var redis = require('redis');
var $conf = require('../../../conf/redis');

var client = redis.createClient($conf.redis);
client.on('error', function (err) {
    console.log('error event - ' + client.host + ':' + client.port + ' - ' + err);
});

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    get: function (req, res, next) {
        // 获取前台页面传过来的参数
        var params = req.query || req.params;
        if(params.key){
            client.get(params.key, function(err, reply) {
                console.log(reply);
                res.send(reply);
            });
        } else{
            res.send('无键');
        }
    },
    set: function (req, res, next) {
        // 获取前台页面传过来的参数
        var params = req.query || req.params;
        if(params.key && params.value){
            client.set([params.key, params.value],function(err,reply){
                //console.log("reply:"+reply.toStriquerystringng());
                res.send('redis set success');
            });
        } else{
            res.send('无键或值');
        }
    },
    hmset: function (req, res, next) {
        var params = req.query || req.params;
        if(params.key && params.value){
            var info = {};
            info.baidu = 'www.baidu.com';
            info.sina  = 'www.sina.com';
            info.qq    = 'www.qq.com';
            /*client.hmset(params.key, info,function(err,reply){
                res.send('redis hmset success');
            });*/
            client.hmset(params.key, info, function(error, reply){
                if(error) {
                    console.log(error);
                    res.send('error');
                } else {
                    console.log(reply);
                    res.send('success');
                }
            });2
        }
    },
    hgetall: function(req, res, next) {
        // 获取前台页面传过来的参数
        var params = req.query || req.params;
        if(params.key){
            client.hgetall(params.key, function(err, reply) {
                if(err) {
                    console.log(err);
                } else {
                    res.send(reply);
                }
            });
            /*client.hmget('site', 'baidu', function(err, reply) {
                if(err) {
                    console.log(err);
                } else {
                    res.send(reply);
                }
            });*/
        } else{
            res.send('无键');
        }
    },
    del: function (req, res, next) {
        var params = req.query || req.params;
        if(params.key){
            client.del(params.key, function(err, reply) {
                if(err) {
                    console.log(err);
                } else {
                    res.send(reply);
                }
            });
        }
    }

}
