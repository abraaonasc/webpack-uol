import Heading from './heading'
import Forming from './form'
import NamesService from '../backEnd/service'
import GetNames from '../src/getNames'
import Click from './clickEvents'
import './scss/style.scss'


const heading = new Heading()
const form = new Forming()
const nameService = new NamesService()
const getNames = new GetNames() 
const clickEvents = new Click() 

heading.create('Cadastro - Sistema')
form.form()
getNames.showForm()
nameService.getNames()
clickEvents.clickEvents()
clickEvents.clickEnviar()
clickEvents.clickRemoveName()


