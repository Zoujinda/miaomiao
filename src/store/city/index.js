const state = {
    nm: window.localStorage.getItem('nownm') || "北京",
    id: Number.parseInt(window.localStorage.getItem('nowid')) || 3

};
const actions = {

};
const mutations = {
    //mutations中定义的方法第一个参数为state对象，第二个是调用mutations的方法时传递过来的参数
    CITY_INFO(state,dataobject){
        state.nm = dataobject.nm;
        state.id = dataobject.id;
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
}