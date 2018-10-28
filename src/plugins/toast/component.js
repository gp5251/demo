import "./style.scss"

export default {
    name: "toast",
    data () {
        return {
            message: "",
            visible: false
        }
    },
    render () {

        const { message, visible } = this

        return (
            <section class="toast-container" >
                <div class="vue-toast" style={ {opacity : visible ? 1 : 0} } >
                    { message }
                </div>
            </section>
        )
    }
}