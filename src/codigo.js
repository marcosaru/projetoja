$('#log').hide()
$(document).ready(function(){
    $('#menuLogar').on({
       mouseenter: function (){$('#log').show(800)},
       click: function() {$('#log').toggle(800)}
        
    })
            $('.carrossel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
            })
            $('.off').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true
            })
            $('.off2').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true
            })
      
        
            function escrever(vetor){
                const vet = vetor.innerHTML.split('')
                vetor.innerHTML = ''
                
                vet.forEach((elemento,indice)=>{
                    setTimeout(()=>{
                        vetor.innerHTML += elemento
                        
                    },50*indice)
                    
                })
                return 1
            }
            let contador = 1;
            const area = document.getElementById('textoInicio')
            contador += escrever(area)
            const conteudo = document.querySelector('d')
            if (contador == 2)
            await
            
        })