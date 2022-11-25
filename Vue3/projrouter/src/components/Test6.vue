<template>
    <div>
        <h5 v-if="numero_uno > numero_dos">El numero {{numero_uno}} es mayor que {{numero_dos}}</h5>
        <h4 v-else-if="numero_dos > numero_uno">El numero {{numero_dos}} es mayor que {{numero_uno}}</h4>

    </div>
    

</template>>

<script>
export default{
    name: 'TEjercicio6',
    data(){
        return{
            numero_uno: 1,
            numero_dos: 5
        }
    }
}
</script>

<style media="screen">
</style>