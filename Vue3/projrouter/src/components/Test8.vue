<template>
    <div class="template">
        <div class="container" style="padding-top:50px;">
            <div v-bind:class="[enableRoundedClass ? roundedClass: '', squareClass]"></div>
            
        </div>
        <button :style="myStyle" @click="enableRoundedClass = !enableRoundedClass">Cambiar</button>
        <hr>
        <hr>
        <div>
            <input type="text" v-model="n1">
            <input type="text" v-model="n2">
            <h5>La suma es {{resultado}}</h5>
        </div>
        <hr>
        <div>
            <label for="">Escribe una fruta</label>
            <input type="text" @keyup.enter="agregarFruta" v-model="fruta">
            <button type="button" @click="agregarFruta">Agregar Fruta</button>
            <label for="">Ha agregado un total de {{total_frutas}} frutas</label>
            <br>
            <ul>
                <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
            </ul>
        </div>
    </div>
    

</template>

<script>
export default{
    name: 'TEjercicio8',
    data(){
        return{
            roundedClass: 'rounded red btn',
            squareClass: 'square',
            enableRoundedClass: true,

            myStyle: {'font-size': '20px', 'margin-top': '10px'},

            n1: 0,
            n2: 0,
            fruta: '',
            frutas:[]

        }
    },
    methods:{
        agregarFruta(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
    computed: {
        resultado: function(){
            return parseFloat(this.n1) + parseFloat(this.n2)
        },
        total_frutas: function(){
            return this.frutas.length
        }
    }

}
</script>

<style media="screen">
    .template{
        padding: 10px;
    }
    .rounded{
        border-radius: 50px;
    }
    .square{
        height: 50px;
        width: 50px;
    }
</style>