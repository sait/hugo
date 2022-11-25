<template>
    <div>
        <label for="">Contador manual</label>
        <br>
        <button @click="increment" >count is: {{count}}</button>
        <hr>
        <div>
            <label for="">Aparece lo que se escribe</label>
            <input v-model="text" placeholder="Type here">
            <p>{{text}}</p>
        </div>
        <hr>
        <div>
            <label for="">Contador automatico</label>
            <br>
            Este contador lleva {{count2}}
            <button v-on:click="stopinterval">{{btnMessage}}</button>
        </div>
        <hr>
        <div>
            <label v-bind:title="titulo" v-bind:data-hola="titulo">Hola Mundo</label>
            <br>
            <button @click="mostrarImagen('@/assets/logo.png')">Mostrar Imagen</button>
            <br>
            <img :src="imagen">
            <img src="@/assets/logo.png">
        </div>
        <hr>
        <label for="">Escribe tu nombre aquí</label>
        <input type="text" v-model="nombre">
        <br>
        <h5>Hola mi nombre es {{nombre}}</h5>
        <br>
        <select class="browser-default" v-model="fruta">
            <option value="Manzana">Manzana</option>
            <option value="Pera">Pera</option>
            <option value="Uva">Uva</option>
        </select>
        <br>
        <p>Fruta Seleccionada: {{fruta}}</p>
        <br>
        <input type="checkbox" v-model="activo">{{activo}}
    </div>
    

</template>>

<script>
export default{
    name: 'TEjercicio1',
    data(){
        return{
            count: 0,
            text: '',
            count2: 0,
            interval: null,
            isRunning: false,
            btnMessage: 'Detener',
            titulo: 'Esto es un titulo dinamico',
            imagen: '',
            nombre: '',
            fruta: '',
            activo: true
        }
    },
    methods:{
        increment(){
            this.count++
        },
        onInput(e){
            this.text = e.target.value
        },
        stopinterval(){
            if(this.isRunning){
                clearInterval(this.interval)
                this.isRunning = false
                this.btnMessage = 'Continuar'
            }
            else{
                this.interval = setInterval(() => {
                    this.count2++;
                }, 1000);
                this.isRunning = true
                this.btnMessage = 'Detener'
            }
        },
        mostrarImagen(imagen){
            this.imagen = imagen
        }
    },
    mounted(){
        this.interval = setInterval(() =>{
            this.count2++
        }, 1000)
        this.isRunning = true
    },
}
</script>

<style media="screen">
    .title{
        color: red;
    }
</style>