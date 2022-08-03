import Vue from 'vue'
Vue.filter('dateBRL', value => {
    let y, m, d, dateReceived, dateConvert;
    dateReceived = value.toString();
    dateReceived = dateReceived.split("-");
    y = dateReceived[0];
    m = dateReceived[1];
    d = dateReceived[2];
    dateConvert = d+'/'+m+'/'+y;
    return dateConvert;
})



