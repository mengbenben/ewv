var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//这里追加 ejs对象
var ejs = require('ejs');
///=======路由信息 （接口地址）开始 存放在./routes目录下===========//
var index = require('./server/routes/index');
var users = require('./server/routes/users');
//在express中加载webpack模块
var webpack = require('webpack');
//webpack的配置文件
var webpackConfig = require('./webpack.config.js');
//启动webpack的方法webpack(配置文件对象，回调)
var compiler = webpack(webpackConfig,function(err,stats){
	//我们可以在stats中看到webpack打包的过程与命令行执行的结果是一样的
	console.log(stats.toString({
		colors:true
	}));
	//通过compiler对象可以开启watch模式来监听原文件的变化，如果原文件发生改变就会
	//出发webpack的重新打包回调函数内部与打包函数是一样的
	compiler.watch({
	  aggregateTimeout: 300,
	  poll: undefined,
	  ignored: '/node_modules/'
	},function(err,stats){

	})
});

var app = express();

///=======模板 开始===========//
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//这里引入通过ejsengine把view层文件改成 html后缀
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'server/public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'server/public')));

//在app中注册index, users该接口
app.use('/', index);
app.use('/users', users);

//redis
var demoRedis = require('./server/redis/demo/demoRedis');
app.get('/redisGetTest', function(req, res, next) {
    demoRedis.hgetall(req, res, next);
});
app.get('/redisSetTest', function(req, res, next) {
    demoRedis.hmset(req, res, next);
});

//mysql
var userDao = require('./server/dao/user/userDao');
app.get('/queryAll', function(req, res, next) {
    userDao.queryAll(req, res, next);
});

//const
const dataJson = {
	name: 'Jhon',
	age: 30,
	gender: 'masculine'
}
app.get('/dataJson', function(req, res) {
    res.send(dataJson);
});









// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.error(err.stack)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
