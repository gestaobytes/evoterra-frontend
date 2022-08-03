import Vue from 'vue'
/* production, homologation, development */
var developmentMode = 'development';

export const keyApplicationGB = '_keyapplicationGB'
export const configsApplication = '_settingsapplicationGB'
export const adminSuper = "super"
export const storageClient = "loopmais"

export const company = "EVOTERRA"
export const titlePage = "EVOTERRA - Consultoria Agronômica"
export const description = "EVOTERRA - Pesquisa e Consultoria Agronômica"
export const keywords = "consultoria agronômica, consultoria agronômica estratégica, pesquisa e desenvolvimento agronômico, agricultura de precisão"

var url;
var storage;

if (developmentMode == 'development') {
  url = "http://localhost:8901/api/v1";
  storage = "https://storage.googleapis.com/" + storageClient + "/development/";
} else if (developmentMode == 'homologation') {
  url = "http://localhost:8901/api/v1";
  storage = "https://storage.googleapis.com/" + storageClient + "/homologation/";
} else {
  url = "http://localhost:8901/api/v1";
  storage = "https://storage.googleapis.com/" + storageClient + "/";
}

export const urlApi = url;
export const urlStorage = storage;

// export function showError(e) {
//   if (e && e.response && e.response.data) {
//     var message = Object.values(e.response.data)
//     Vue.toasted.global.defaultError({
//       msg: message[0]
//     })
//   } else if (typeof e === 'string') {
//     Vue.toasted.global.defaultError({
//       msg: e
//     })
//   } else {
//     Vue.toasted.global.defaultError()
//   }
// }

export default {
  keyApplicationGB,
  configsApplication,
  titlePage,
  company,
  adminSuper,
  keywords,
  urlApi,
  urlStorage,
  // showError
}
