import csstype.CssDsl
import csstype.HtmlAttributes
import io.ktor.util.reflect.*
import react.*
import kotlinx.coroutines.*
import kotlinx.css.Color
import kotlinx.css.CssBuilder
import kotlinx.css.button
import kotlinx.css.color
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.style
import react.dom.html.ReactHTML.ul
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.input

private val scope = MainScope()


val App = FC<Props> {
    var board by useState(emptyList<Board>())

    useEffectOnce {
        scope.launch {
            board = getBoard()
        }
    }
    val stylesH1 = CssBuilder().apply {
        kotlinx.css.h1 {
            color= Color.darkGreen
        }
    }
    h1{
        +"Tic Tac Toe"

    }
    input{

    }

}


