<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" v-bind:key="fruta">{{fruta}}</li>
        </ul>
        <hr>
        <ul>
            <li v-for="(fruta, index) in frutas_con_id" :key="fruta">Indice: {{index}} -- {{fruta.id}} - {{fruta.nombre}}</li>
        </ul>
        <select v-model="frutaId">
            <option v-for="fruta in frutas_con_id" v-bind:value="fruta.id" :key="fruta.id">{{fruta.nombre}}</option>
        </select>
    </div>
    

</template>>

<script>
export default{
    name: 'TEjercicio2',
    data(){
        return{
            frutaId: 2,
            frutas:['Manzana','Pera','Uva'],
            frutas_con_id: [
                {
                    id: 1,
                    nombre: 'Manzana'
                },
                {
                    id: 2,
                    nombre: 'Pera'
                },
                {
                    id: 3,
                    nombre: 'Uva'
                }
            ]

        }
    }
}
</script>

<style media="screen">
</style>