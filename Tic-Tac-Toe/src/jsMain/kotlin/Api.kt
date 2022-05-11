import io.ktor.client.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*
import kotlinx.browser.window

val endpoint = window.location.origin

val jsonClient = HttpClient {
    install(JsonFeature) { serializer = KotlinxSerializer()}
}

suspend fun getBoard(): List<Board> {
    return jsonClient.get(endpoint + Board.path)
}

suspend fun addBoard(board: Board) {
    jsonClient.post<Unit>(endpoint + Board.path) {
        contentType(ContentType.Application.Json)
        body = board
    }
}

suspend fun deleteBoard(board: Board) {
    jsonClient.delete<Unit>(endpoint + Board.path + "/${board.id}")
}