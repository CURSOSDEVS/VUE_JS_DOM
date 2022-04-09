new Vue({
	el: '#desafio',
	data: {
		classeCss: 'destaque',
		aplicarDestaque: true,
		classe1: 'classe1',
		classe2: 'classe2',
		alterandoClasse: 'c1',
		alterarClasse: true,
		estilo:'',
		barra: 'barra',
		largura: '',
		cont: 1
	},
	methods: {
		iniciarEfeito() {
			setTimeout(() => {
				if(this.aplicarDestaque==true){
					this.classeCss = 'encolher';
				}else{
					this.classeCss = 'destaque'					
				}
				
				this.aplicarDestaque = !this.aplicarDestaque;
				this.iniciarEfeito();
			}, 3000);
		},		
		mudarClasses(){
			if(this.alterarClasse){
				this.alterandoClasse='c1';
			}else{
				this.alterandoClasse='c2';
			}
			this.alterarClasse = !this.alterarClasse;
		},
		mudarClasses2(){
			if(this.alterarClasse){
				const css = document.querySelector('#css');

				this.alterandoClasse= css.value;
				
				//console.log(css.value +' + '+ this.alterarClasse);
			}
		},
		aplicarEstilos(){
			const css = document.querySelector('#estiloCss');
			this.estilo += css.value;
			document.querySelector('#estiloCss').value='';
			
			console.log(this.estilo);
		},
		iniciarProgresso() {

			const div = document.querySelector('#progressBar');

			div.style.display = 'block';

			const intervalo = setInterval(() => {

					const larg = 'width: '+this.cont+'px;';
					this.largura = larg;
									
					this.cont = this.cont + 1;
			 		//console.log(this.cont);

					if(this.cont == 700){
						clearInterval(intervalo);
						this.cont = 0;
					}
				}, 10);

				
		}
	}
})
