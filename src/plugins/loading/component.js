import "./style.scss"

export default {
    name: "loading",
    data () {
        return {
            message: "加载中..."
        }
    },

    render () {

        const { message } = this

        return (
            <section class="vue-loading" loading-component>
                
                <div class="loading" > { message } </div>

            </section>
        )
    }
}