import mockAdapter from 'axios-mock-adapter'
import axios from './axios'

const mockAdapterInstance = new mockAdapter(axios, { delayResponse: 0})

export default mockAdapterInstance