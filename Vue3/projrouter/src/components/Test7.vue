<template>
    <div>
        <button class="btn indigo darken-4" @mouseout="estado = false" v-on:mouseover="estado = true">Coloca el puntero aqui</button>
        <hr>
        {{contador}}
        <hr>
        {{estado}}
    </div>
    

</template>>

<script>
export default{
    name: 'TEjercicio7',
    data(){
        return{
            contador: 0,
            estado: false
        }
    }
}
</script>

<style media="screen">
</style>