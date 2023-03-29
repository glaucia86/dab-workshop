/**
 * file: src/services/Api.js
 * data: 01/03/2023
 * description: file responsible for initializing 'axios' and
 * HTTP base url requests
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import axios from 'axios';

export default () => axios.create({
  // ==> DAB request
  // baseURL: 'http://localhost:5000/api',

  // ==> ASWA request
  baseURL: 'http://localhost:4280/data-api/rest',
});
