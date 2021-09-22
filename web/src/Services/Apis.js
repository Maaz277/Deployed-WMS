import axios from 'axios'
const constant = require('./Constants')
export default{
    
    DEPOT_COUNT : function(num){
        return axios.get(constant.URL + constant.DEPOT_COUNT + num ,{
            params : {
                depot: num
            }
        })
    },

    TYPE_COUNT : function(name){
        return axios.get(constant.URL + constant.TYPE_COUNT + name ,{
            params : {
                type: name
            }
        })
    },

    TOTAL : function(){
        return axios.get(constant.URL + constant.TOTAL)
    },

    TYPE_DEPOT_COUNT : function(depot, type){
        return axios.get(constant.URL + constant.TYPE_DEPOT_COUNT + depot + "/" + type , {
            params : {
                type: type,
                depot: depot
            }
        })
    }
}