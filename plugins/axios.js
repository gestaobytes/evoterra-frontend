export default function ({ $axios, store, redirect }) {

    // $axios.onError(error => {
    //     const code = parseInt(error.response.status)

    //     if (code === 400) {
    //         store.dispatch("validation/setErrors", error.response);
    //     }
    //     if (code === 401) {
    //         store.dispatch("validation/setErrors", error.response.data.error);
    //         $auth.logout();
    //         redirect('/login');
    //     }
    //     if (code === 422) {
    //         store.dispatch("validation/setErrors", error.response.data.errors);
    //     }
    //     return Promise.reject(error);
    // });

    // $axios.onRequest(() => {
    //     store.dispatch("validation/clearErrors");
    // });
}
