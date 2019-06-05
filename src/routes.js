import Sajt from './Sajt'
import LogIn  from './components/LogIn'
import Register  from './components/Register'
import Password  from './components/Password'
import Password2 from './components/Password2'
import Users from './components/Users'
import RegistrationSucces from './components/RegistrationSucces'
import Messages from './components/Messages'

export const routes = [
    {
        path: '',
        name:'Sajt',
        component:Sajt
    },
    {
        path: '/login',
        name:'LogIn',
        component:LogIn
    }, 
    {
        path: '/Register',
        name:'Register',
        component:Register
    },
    {
        path: '/Password',
        name:'Password',
        component:Password
    },
    {
        path: '/Password2',
        name:'Password2',
        component:Password2
    },
    {
        path: '/RegistrationSucces',
        name:'RegistrationSucces',
        component:RegistrationSucces
    },
    {
        path: '/Users',
        name:'Users',
        component:Users
    },
      {
        path: '/Messages',
        name:'Messages',
        component:Messages
     }

]