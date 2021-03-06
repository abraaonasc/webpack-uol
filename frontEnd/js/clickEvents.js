import '../scss/form.scss'
import NameCad from '../../backEnd/service'

const post = new NameCad()

window.enviar = function (){
    let id 
    let name = document.querySelector('#name').value 

    if (name != ''){
        post.postName(id,name)

        let lis = document.querySelectorAll('.getNames ul li')
        lis.forEach(element => {
            element.remove()
        });

        setTimeout(() => {
          //  post.getNames()
            window.location.href='/'
        }, 500);
    } else {
        alert('o campo está vázio, por favor preencha um nome')
    }
}

class Click {

    clickEnviar =()=>{
        let button = document.getElementById("enviar")
        button.onclick = function (event) {
            event.preventDefault()
            let id 
            let name = document.querySelector('#name').value 

            if (name != ''){
                post.postName(id,name)

                let lis = document.querySelectorAll('.getNames ul li')
                lis.forEach(element => {
                    element.remove()
                });
    
                setTimeout(() => {
                  //  post.getNames()
                    window.location.href='/'
                }, 500);
            } else {
                alert('o campo está vázio, por favor preencha um nome')
            }
        }
    }

    clickRemoveName = () =>{
        setTimeout(() => {
            let removeName = document.querySelectorAll('.getNames ul li.remove i.remove')
            removeName.forEach(element => {
                element.onclick  = function(){
                    let id = element.parentNode.getAttribute('id')
                    let name = element.parentNode.innerText
                    console.log(id,name)
                    post.deleteName(parseInt(id))

                    let lis = document.querySelectorAll('.getNames ul li')
                    lis.forEach(element => {
                        element.remove()
                    });

                    setTimeout(() => {
                      //  post.getNames()
                        window.location.href='/'
                    }, 500);

                }
            });
        }, 500);
    }

    clickEvents =()=>{

        setTimeout(() => {
            let edit = document.querySelectorAll('.getNames ul li .edit')
            edit.forEach(element => {

                element.onclick = function () {
                    
                    let hassCass = element.parentNode.classList.contains('remove')
                    
                    if(hassCass){
                        element.parentNode.classList.remove('remove')
                    } else {
                        element.parentNode.classList.remove('remove')
                        element.parentNode.classList.add('remove')
                        console.log(element.parentNode)
                        let removeName = document.querySelectorAll('.getNames ul li.remove i.remove')
                        removeName.forEach(element => {
                            element.onclick  = function(){
                                let id = element.parentNode.getAttribute('id')
                                let name = element.parentNode.innerText
                                console.log(id,name)
                                post.deleteName(parseInt(id))
            
                                let lis = document.querySelectorAll('.getNames ul li')
                                lis.forEach(element => {
                                    element.remove()
                                });
            
                                setTimeout(() => {
                                    //post.getNames()
                                    window.location.href='/'
                                }, 500);
            
                            }
                        });
                    }
                }
            });
        }, 500);
    }

}

export default Click