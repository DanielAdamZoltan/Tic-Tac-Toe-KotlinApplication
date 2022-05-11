import kotlinx.serialization.Serializable

@Serializable
data class Board(val name: String, val turn: String) {
    val id: Int = name.hashCode()

    companion object {
        const val path = "/ticTacToe"
    }
}