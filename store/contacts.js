export const state = () => ({
    visible: false
})

export const getters = {
    visible(state) {
        return state.visible
    }
}

export const mutations = {
    changeState(state, visible) {
        state.visible = visible
    },
}