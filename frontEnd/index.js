import Heading from './js/heading'
import Forming from './js/form'
import NamesService from '../backEnd/service'
import GetNames from './js/getNames'
import Click from './js/clickEvents'
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


