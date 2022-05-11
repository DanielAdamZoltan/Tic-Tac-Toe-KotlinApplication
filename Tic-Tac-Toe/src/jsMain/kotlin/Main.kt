import io.ktor.http.*
import kotlinx.browser.document
import react.dom.render
import react.create

fun main() {
    val container = document.getElementById("root") ?: error("Nem található a konténer!")
    render(App.create(), container)
//    document.getElementById("root")?.innerHTML = "Hello, Kotlin/JS!"
}
