const app = Vue.createApp ({
    data(){
        return{
            userInput:'',
            message: ''
        }
    },
    methods:{
        showMessage(){
            return this.message = `Hello and welcome, ${this.userInput}` 
        }
    }
})

app.mount('#container')
