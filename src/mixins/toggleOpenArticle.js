export default {
    getInitialState() {
        return {
            openArticleId: null
        }
    },

    toggleOpenArticle(id) {
        return function(ev) {
            if (ev) ev.preventDefault()
            if (id === this.state.openArticleId) {
                id = null
            }
            this.setState({
                openArticleId: id
            })
        }.bind(this)
    }

}