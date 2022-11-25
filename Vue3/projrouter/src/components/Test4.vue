<template>
    <div>
        {{usuarios[0]}}
        <hr>
        {{posts[1]}}
    </div>
    

</template>>

<script>
export default{
    name: 'TEjercicio4',
    data(){
        return{
            usuarios:[],
            posts: []
        }
    },
    methods:{
        getUsuarios(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>{
                this.usuarios = data
            })
        },
        getPosts(){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data =>{
                this.posts = data
            })
        }
    },
    mounted(){
        this.getUsuarios()
        this.getPosts()
    }
}
</script>

<style media="screen">
</style>