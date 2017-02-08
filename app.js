const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./model/index.js');

const port = 3000;
let app = express();
app.use(bodyParser.json()).use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//获取产品列表
app.get('/api/case', (req, res) => {
    //调用查找方法
    db.Product.find({}, null, (err, docs) => {
        if (err) {
            res.status(200).json({isSuccess: false, err: err});
        } else {
            res.status(200).json({isSuccess: true, list: docs})
        }
    })
});

//获取新闻列表
app.post('/api/news', (req, res) => {
    let sings = req.body;
    //判断传值过来的参数，调取服务器
    (function time(name) {
        if (name == 'signs') {
            db.Signs.find({}, null, (err, docs) => {
                if (err) {
                    res.status(200).json({isSuccess: false, err: err});
                } else {
                    res.status(200).json({isSuccess: true, list: docs})
                }
            })
        }
        if (name == 'mynews') {
            db.Mynews.find({}, null, (err, docs) => {
                if (err) {
                    res.status(200).json({isSuccess: false, err: err});
                } else {
                    res.status(200).json({isSuccess: true, list: docs})
                }
            })
        }
        if (name == 'faqs') {
            db.Faqs.find({}, null, (err, docs) => {
                if (err) {
                    res.status(200).json({isSuccess: false, err: err});
                } else {
                    res.status(200).json({isSuccess: true, list: docs})
                }
            })
        }
        if (name == 'websites') {
            db.Website.find({}, null, (err, docs) => {
                if (err) {
                    res.status(200).json({isSuccess: false, err: err});
                } else {
                    res.status(200).json({isSuccess: true, list: docs})
                }
            })
        }
    })(sings.name)
});
//获取文章详情
app.get('/api/detail/',(req,res)=>{
    //对传过来的值做字符串截取操作
    let pas = url.parse(req.headers.referer,true).path
    let a = pas.split('/')[2];
    console.log(a)
    console.log(url)
    db.Article.find({_id:a}, null, (err, docs)=>{

        if(err){
            res.status(200).json({isSuccess:false,err:err});
        }else{
            res.status(200).json({isSuccess:true,list:docs})
            console.log(docs)
        }
    })

});

//添加用户留言
app.post('/api/contact', (req, res) => {
    //获取用户留言
    let leaveWord = req.body;
    leaveWord.addtime = new Date();
    db.Leaveword.create(leaveWord, (err, docs) => {
        if (err) {
            res.status(200).json({isSuccess: false, err: err});
        } else {
            res.status(200).json({isSuccess: true, list: docs})
        }
    })
});
//获取用户留言
app.get('/api/home',(req,res)=>{
    //console.log(res)
    db.Leaveword.find({},null,(err,docs)=>{
        if (err) {
            res.status(200).json({isSuccess: false, err: err});
        } else {
            res.status(200).json({isSuccess: true, list: docs.reverse()});
            //console.log(docs.reverse())
        }
    })
});

app.post('C:\Users\Administrator\Desktop\myMoveApp\moveApp\view\city.html',(req,res)=>{
    let leaveWord = req.body;
})

//获取用户留言


//判断没输入直接进入主页
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(port,'192.168.31.73', (err) => {
    if (err) throw err;
    console.log('server is starting at port: %d', port);
});