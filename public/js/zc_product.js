//定义工厂函数
function Product() {
    this.products = [];
    this.title = [];
    this.img = [];
    this.describe = '';
}
//定义函数方法
Product.prototype = {
    bind: function (id) {
        return document.getElementById(id)
    },
    bindList: function () {
        let str = '';
        for (var i = 0, len = this.products.length; i < len; i++) {
            str += `<li>
                    <a class="normal" href="#">
                   <img src="/images/ca-1-160${this.img[i]}.png" alt=${this.title[i]} width="200">
                   </a>
                   <div class="info">
                   <h3>${this.title[i]}</h3>
                   <p><a href=""> ${this.describe}</a></p>
                   </div>
                   </li>`;
        }
        return str;
    },
};
// 实例化一个函数
let product = new Product();


//封装AJAX  get请求方法
function Get(URL,fn) {
    let xhr = new XMLHttpRequest();	//返回了一个对象，这个对象IE6兼容。
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                fn(xhr.responseText);
            } else {
                alert("错误的文件！");
            }
        }
    };
    xhr.open("get", URL, false);
    xhr.send();
}
//调用AJAX  get方法
Get('/api/case',(xhr,res)=>{
    let  products = JSON.parse(xhr).list;
    //console.log(products[2].products)

    //从数据库获取过来的属性赋值
    for(let i = 0 ; i <products.length;i++){
        (function (i) {
            product.products.push(products[i].products)
            product.title.push(products[i].title)
            product.img.push(products[i].img)

        })(i)
    }
    product.describe = '描述';
    //用实例化函数方式动态生成DOM元素

});


//调用product函数绑定DOM元素添加内容
product.bind('js_ca_uls').innerHTML = product.bindList();
//动画函数
function caAnimates() {
    let nodes = document.getElementById('js_ca_uls').getElementsByTagName('li'),
        _nodes = [].slice.call(nodes, 0);
    let getDirection = function (ev, obj) {
        let w = obj.offsetWidth, h = obj.offsetHeight, x = ev.pageX - obj.offsetLeft - w / 2 * (w > h ? h / w : 1), y = ev.pageY - obj.offsetTop - h / 2 * (h > w ? w / h : 1), d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return d;
    };
    let addClass = function (ev, obj, state) {
        let direction = getDirection(ev, obj), class_suffix = '';
        obj.className = '';
        switch (direction) {
            case 0:
                class_suffix = '-top';
                break;
            case 1:
                class_suffix = '-right';
                break;
            case 2:
                class_suffix = '-bottom';
                break;
            case 3:
                class_suffix = '-left';
                break;
        }
        obj.classList.add(state + class_suffix);
    };
    _nodes.forEach(function (el) {
        el.addEventListener('mouseover', function (ev) {
            addClass(ev, this, 'in');
        }, false);
        el.addEventListener('mouseout', function (ev) {
            addClass(ev, this, 'out');
        }, false);
    });
}
//调用动画
caAnimates();
