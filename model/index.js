const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/myweb', (err) => {
    if (err) throw err;
    console.log('connect mongodb success!');
});

//画表结构
let userTB = new mongoose.Schema({
    nickname: String,
    username: String,
    password: String,
    addtime: Date
});
//文章结构
let articleTB = new mongoose.Schema({
    title: String,
    desc: String,
    content: String,
    author: String,
    addtime: Date
});
//产品表
let productTB = new mongoose.Schema({
    title: String,
    img: String,
    products: String,
    describe: String,
    addtime: Date
});

//新闻表
let mynewsTB = new mongoose.Schema({
    title: String,
    content: String,
    addtime: Date
});
//最新签约
let signsTB = new mongoose.Schema({
    title: String,
    content: String,
    addtime: Date
});
//常见问题
let faqTB = new mongoose.Schema({
    title: String,
    content: String,
    addtime: Date
});
//网站建设
let websiteTB = new mongoose.Schema({
    title: String,
    content: String,
    addtime: Date
});

//留言
let leavewordTB = new mongoose.Schema({
    nickname: String,
    telephone: String,
    firm: String,
    content: String,
    addtime: Date
});

//表结构和表名关联
let userDB = mongoose.model('user', userTB, 'users');
let articleDB = mongoose.model('article', articleTB, 'articles');
let productDB = mongoose.model('product', productTB, 'products');
let mynewsDB = mongoose.model('mynew', mynewsTB, 'mynews');
let signsDB = mongoose.model('sign', signsTB, 'signs');
let faqDB = mongoose.model('faq', faqTB, 'faqs');
let websiteDB = mongoose.model('website', websiteTB, 'websites');
let leavewordDB = mongoose.model('leaveword', leavewordTB, 'leavewords');


//用户操作的方法
let UserExport = new Object();
UserExport.find = function (selector, columns, callback) {
    userDB.find(selector, columns, (err, docs) => {
        callback(err, docs);
    });
};
UserExport.create = function (user, callback) {
    userDB.create(user, function (err) {
        callback(err);
    });
};

//文章操作的方法
let ArticleExport = new Object();
ArticleExport.create = function (article, callback) {
    articleDB.create(article, function (err) {
        callback(err);
    });
};
ArticleExport.find = function (selector, columns, callback) {
    articleDB.find(selector, columns, function (err, docs) {
        callback(err, docs);
    });
};
//产品操作方法
let ProductExport = new Object();
ProductExport.create = function (article, callback) {
    productDB.create(article, function (err) {
        callback(err);
    });
};
ProductExport.find = function (selector, columns, callback) {
    productDB.find(selector, columns, function (err, docs) {
        callback(err, docs);
    });
};

//新闻操作方法
let MyewsExport = new Object();
MyewsExport.create = function (article, callback) {
    mynewsDB.create(article, function (err) {
        callback(err);
    });
};
MyewsExport.find = function (selector, columns, callback) {
    mynewsDB.find(selector, columns, function (err, docs) {
        callback(err, docs);
    });
};
MyewsExport.update = function(selector,columns,callback){
    mynewsDB.update(selector,{$set:columns},(err,res)=>{
        callback(err,res);
    })
};
MyewsExport.findOneAndRemove = function(selector,callback){
    mynewsDB.findOneAndRemove(selector,(err,doc)=>{
        callback(err,doc)
    });
};

//最新签约
let SignsExport = new Object();
SignsExport.create = function (article, callback) {
    signsDB.create(article, function (err) {
        callback(err);
    });
};
SignsExport.find = (selector,columns,callback)=>{
    signsDB.find(selector,columns,(err,docs)=>{
        callback(err,docs)
    })
};

//常见问题
let FaqExport = new Object();
FaqExport.create = function (article, callback) {
    faqDB.create(article, function (err) {
        callback(err);
    });
};
FaqExport.find = function (selector, columns, callback) {
    faqDB.find(selector, columns, function (err, docs) {
        callback(err, docs);
    });
};
//网站建设
let WebsiteExport = new Object();
WebsiteExport.create = function (article, callback) {
    websiteDB.create(article, function (err) {
        callback(err);
    });
};
WebsiteExport.find = function (selector, columns, callback) {
    websiteDB.find(selector, columns, function (err, docs) {
        callback(err, docs);
    });
};

//用户留言
let LeavewordExport = new Object();
LeavewordExport.create = function (article, callback) {
    leavewordDB.create(article, function (err) {
        callback(err);
    });
};
LeavewordExport.find = function (selector, columns, callback) {
    leavewordDB.find(selector, columns, function (err, docs) {
        callback(err, docs);
    });
};


//导出user对象
exports.User = UserExport;
//导出article对象
exports.Article = ArticleExport;
//导出product对象
exports.Product = ProductExport;
//导出mynews对象
exports.Mynews = MyewsExport;
//导出signs对象
exports.Signs = SignsExport;
//导出FaqExport对象
exports.Faqs = FaqExport;
//导出WebsiteExport对象
exports.Website = WebsiteExport;
//导出LeavewordExport对象
exports.Leaveword = LeavewordExport;