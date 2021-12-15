

class getName {
     showForm = () =>{
        console.log('form')

        let section = document.createElement('section')
        section.classList.add('getNames')

        let ul = document.createElement('ul')
        
        section.appendChild(ul)

        document.querySelector('body').appendChild(section)
    }
}

export default getName