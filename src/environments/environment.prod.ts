export const environment = {
  production: true,
  apisVersion: "v1",
  baseUrl:  'https://backend.equipix.com',

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

