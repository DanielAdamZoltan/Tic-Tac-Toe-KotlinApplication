import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*


val board = mutableListOf(
    Board("X","1"),
    Board("o","2"),
    Board("X","3"),
    Board("o","4"),
    Board("X","5"),
    Board("o","6"),
    Board("X","7"),
    Board("o","8"),
    )

fun main() {
    embeddedServer(Netty, 8090) {
        install(ContentNegotiation) {
            json()
        }
        install(CORS) {
            method(HttpMethod.Get)
            method(HttpMethod.Post)
            method(HttpMethod.Delete)
            anyHost()
        }
        install(Compression) {
            gzip()
        }
        routing {
            get("/") {
                call.respondText(
                    this::class.java.classLoader.getResource("index.html")!!.readText(),
                    ContentType.Text.Html
                )
            }
            static("/") {
                resources("")
            }
            route(Board.path) {

                get {
                    call.respond(board)
                }
                post {
                    board += call.receive<Board>()
                    call.respond(HttpStatusCode.OK)
                }
                delete("/{id}"){
                    val id = call.parameters["id"]?.toInt() ?: error("invalid delete request")
                    board.removeIf{ it.id == id}
                    call.respond(HttpStatusCode.OK)
                }
            }

        }
    }.start(wait = true)
    //println("Hello, JVM!")
}