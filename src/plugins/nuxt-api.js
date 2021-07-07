

import axios from 'axios';
import _ from 'lodash';
import apiAuth from '@/modules/api/auth';

function cleanRestApi(obj) {
  for (const propName in obj) {
    if (!obj.hasOwnProperty(propName)) continue;
  }
}
export default (ctx, inject) => {
  let client = axios.create({
    baseURL: process.env.NUXT_APP_API_URL || 'http://localhost:5000/api/v1/',
    withCredentials: process.env.NUXT_AXIOS_CREDENTIALS || false
  })
  client.interceptors.request.use(async config => {
    if (config.method === 'put' || config.method === 'post') {
      cleanRestApi(config.data);
    }
    if (ctx.app.$cookies.get('token')) {
      config.headers.common['Authorization'] = `Bearer $\{ctx.app.$cookies.get('token')\}`;
    }
    return config;
  }, async error => {
    return Promise.reject(error);
  });

  client.interceptors.response.use(async response => {
    return response;
  }, async (error) => {

    let code = error.response && error.response.status ? error.response.status : 500;

    if (code === 422) {
      let errors = {}
      _.forEach(error.response.data.errors, el => { Object.assign(errors, { [el.param]: [el.msg] }) });
      ctx.error({
        status: 422,
        errors: errors
      })
    }
    if (code === 404) {
      ctx.error({
        status: 404
      });
    }

    if (code === 401) {
      ctx.error({
        status: 401
      });
    }

    return Promise.reject(error);
  });

  const repositories = {
    auth: apiAuth(client)
  };

  inject('rest_api', repositories);
  inject('host_uploads', process.env.NUXT_APP_HOST_UPLOADS || '');

  ctx.app.$rest_api = repositories;
  ctx.app.$host_uploads = process.env.NUXT_APP_HOST_UPLOADS || '';
  return ctx;
}

  
