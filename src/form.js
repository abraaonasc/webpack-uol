import './scss/style.scss'
import NameCad from '../backEnd/service'

const post = new NameCad()

class FormCad {
     form = () =>{
        console.log('form')

        let section = document.createElement('section')
        section.classList.add('cadastro')

        let form = document.createElement('form')
        let fieldSet = document.createElement('fieldSet')
        let input = document.createElement('input')
        let button = document.createElement('button')


        //input
        input.setAttribute('type','text')
        input.setAttribute('placeholder','nome')
        input.setAttribute('id','name')

        //fieldeset
        fieldSet.appendChild(input)
        fieldSet.appendChild(button)


        //button
        button.innerText = 'Cadastrar'
        button.setAttribute('type','submit')
        button.setAttribute('id','enviar')

        
        section.appendChild(form)
        form.appendChild(fieldSet)

        document.querySelector('body').appendChild(section)
    }

    clickEvents =()=>{
        let button = document.getElementById("enviar")
        button.onclick = function (event) {
            event.preventDefault()
            let id 
            let name = document.querySelector('#name').value 
            post.postName(id,name)
        }
    }
}

export default FormCad