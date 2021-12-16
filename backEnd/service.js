const axios = require('axios');

let arrayNames 

class ActionHttp {
  getNames =()=>{
      axios.get('http://localhost:3000/nomeCad')
      .then(function (response) {
          // handle success
          arrayNames = response.data

          for(let i of arrayNames){
              let id = i.id
              let name = i.nome

              let a = document.createElement('i')
              a.classList.add('edit')

              let a2 = document.createElement('i')
              a2.classList.add('remove')

              let li = document.createElement('li')
              li.setAttribute('id',id)
              li.innerText = name
              li.appendChild(a)
              li.appendChild(a2)


              document.querySelector('.getNames ul').appendChild(li)
          }
      })
      .catch(function (error) {
      // handle error
      console.log(error);
      })
      .then(function () {
        
      });
  }
  postName = (id,nome ) => {
      axios.post('http://localhost:3000/nomeCad/', {
          id: id,
          nome: nome
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log('erro post ' +error);
        });
  }
  deleteName = (id) => {
    axios.delete('http://localhost:3000/nomeCad/'+id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('erro delete -> ' +error);
    });
  }
}

export default ActionHttp