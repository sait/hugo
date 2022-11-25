<template>
    <div>
        <table class="table stripped bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" v-bind:id="usuario.id" :key="usuario">
                    <td>{{usuario.name}}</td>
                    <td>{{usuario.username}}</td>
                    <td>{{usuario.email}}</td>
                    <td>
                        <ul>
                            <li>Ciudad: {{usuario.address.city}}</li>
                            <li>Calle: {{usuario.address.street}}</li>
                            <li>ZIP: {{usuario.address.zipcode}}</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    

</template>>

<script>
export default{
    name: 'TEjercicio5',
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