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

suspend fun getGame(): List<Game> {
    return jsonClient.get(endpoint + Game.path)
}

suspend fun addGame(game: Game) {
    jsonClient.post<Unit>(endpoint + Game.path) {
        contentType(ContentType.Application.Json)
        body = game
    }
}
