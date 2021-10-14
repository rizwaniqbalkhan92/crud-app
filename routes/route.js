import express from 'express'
import {getUser} from '../controller/user.js'
const route=express.Router()
route.get('/',getUser)

    export default route