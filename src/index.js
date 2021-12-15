import Heading from './heading'
import Forming from './form'
import NamesService from '../backEnd/service'
import GetNames from '../src/getNames'

console.log('testando webpack 2')


const heading = new Heading()
const form = new Forming()
const nameService = new NamesService()
const getNames = new GetNames() 

heading.create('Cadastro')
form.form()
form.clickEvents()
getNames.showForm()
nameService.getNames()


