import './scss/form.scss'

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
}

export default FormCad