
  export default axios => ({
    login(payload) {
      return axios.post('auth/token', payload);
    },
    profile(payload) {
      return axios.get('auth/profile', payload);
    },
  });
  
