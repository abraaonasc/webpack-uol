const axios = require('axios');

let arrayNames 

class HAI {
    getNames =()=>{
        axios.get('http://localhost:3000/nomeCad')
        .then(function (response) {
            // handle success
            arrayNames = response.data
           

            for(let i of arrayNames){
                let id = i.id
                let name = i.nome
                console.log(id,name);

                let li = document.createElement('li')
                li.setAttribute('id',id)
                li.innerText = name

                document.querySelector('.getNames ul').appendChild(li)
            }
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
    }
    postName = (id,nome ) => {
        axios.post('http://localhost:3000/nomeCad/', {
            id: id,
            nome: nome
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log('erro post ' +error);
          });
    }
}

export default HAI