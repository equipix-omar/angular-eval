export const environment = {
  production: true,
  apisVersion: "v1",
  // baseUrl: 'http://127.0.0.1:8000',
   baseUrl: 'https://staging.backend.equipix.com',
  //baseUrl: 'http://dev.backend.equipix.com',
  // baseUrl: 'http://ec2-35-84-212-242.us-west-2.compute.amazonaws.com/equipix_backend/public',

  defaultauth: 'fackbackend',
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  },

  url: function url(version = null) : string {
    return environment.baseUrl + '/api/' + ((version) ? version + '/' : '');
  },
};

