var _ = require('koa-route');
var Koa = require('koa');

const {random,happy} =require('./util')
const {haha} = require("./wenshu");

var app = new Koa();

var wenshu = {
    random: (ctx, size) => {
        ctx.body = random(size)
    },
    happy: (ctx) => {
        ctx.body = happy()
    },
    haha:(ctx)=>{
        ctx.body = haha();
    }

};
app.use(_.get('/wenshu/random/:size',wenshu.random));
app.use(_.get('/wenshu/happy',wenshu.happy));
app.use(_.get('/wenshu/haha',wenshu.haha));

app.listen(30021);
console.log('listening on port 3000');
