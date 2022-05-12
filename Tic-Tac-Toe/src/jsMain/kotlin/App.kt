import csstype.NamedColor
import react.*
import kotlinx.coroutines.*
import react.css.css
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.input

private val scope = MainScope()


val App = FC<Props> {
    var game by useState(emptyList<Game>())

    useEffectOnce {
        scope.launch {
            game = getGame()
        }
    }
    h1{
        +"Tic Tac Toe"
        css{
                color = NamedColor.white;

        }

    }
    input{

    }

}


