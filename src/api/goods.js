/**
 * Created by yanxs on 2017/9/28.
 */
import Vue from 'vue'

var goods = {
    getList : function(callback){
        Vue.http.post('http://api.yly.com/flash/goods/get-list',{size:4, index:0},{emulateJSON :true}).then(({data}) => {
            callback(data['result'][0])
        });
    }
}

export default goods;