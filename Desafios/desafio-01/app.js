
    new Vue({
        el: '#desafio',
        data: {
            nome: 'Claudisnei',
            idade: 49,
            imagem: '<img src="https://static.todamateria.com.br/upload/58/45/5845613f4b7d9-o-que-e-paisagem.jpg" height="400">',
            imagem2: 'https://static.todamateria.com.br/upload/58/45/5845613f4b7d9-o-que-e-paisagem.jpg'
        },
        
        methods: {
            idade3x(){
                return  this.idade * 3 
            },
            randon(){
                return Math.random()
            }
        }
    })
