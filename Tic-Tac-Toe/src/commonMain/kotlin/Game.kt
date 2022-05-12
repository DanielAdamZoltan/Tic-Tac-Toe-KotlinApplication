import kotlinx.serialization.Serializable

@Serializable
data class Game(val id: Int, val winner: String) {

    companion object {
        const val path = "/game"
    }
}