<template>
    <div>
        <ul>
            <li v-for="(fruta, index) in frutas_con_id" :key="fruta">
                {{index}} - {{fruta.id}} - {{fruta.nombre}}
                <ul>
                    <li v-for="pais in fruta.paises_origen" :key="pais"> {{pais.pais}}</li>
                </ul>
            </li>
        </ul>
        <ul>
            <li v-for="l in letras" :key="l">{{l}}</li>
        </ul>
        <ul>
            <li v-for="numero in 100" :key="numero">{{numero}}</li>
        </ul>
    </div>
    

</template>>

<script>
export default{
    name: 'TEjercicio3',
    data(){
        return{
            index: '',
            letras: 'abcde',
            frutas_con_id: [
                {
                    id: 1,
                    nombre: 'Manzana',
                    paises_origen:[
                        {
                            id_pais: 1,
                            pais: 'El Salvador'
                        },
                        {
                            id_pais: 2,
                            pais: 'Guatemala'
                        }
                    ]
                },
                {
                    id: 2,
                    nombre: 'Pera',
                    paises_origen:[
                        {
                            id_pais: 3,
                            pais: 'Honduras'
                        },
                        {
                            id_pais: 4,
                            pais: 'Nicaragua'
                        }
                    ]
                },
                {
                    id: 3,
                    nombre: 'Uva',
                    paises_origen: null
                }
            ]

        }
    }
}
</script>

<style media="screen">
</style>