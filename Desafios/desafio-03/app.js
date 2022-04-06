new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    watch:{
        resultado(){            
            setTimeout(() => {
                this.valor = 0
            }, 5000); 
        },
        valor(novo, antigo) {
            console.log(novo+' | '+antigo)
        }      
    },
    computed:{
        resultado(){
            if (this.valor != 37){
                return 'Valor diferente'
            }else if( this.valor == 37 ){
                return 'Valor igual'
            }
        }
    },
    methods:{
        incrementar(passo){
            this.valor += passo
        }
    }
});