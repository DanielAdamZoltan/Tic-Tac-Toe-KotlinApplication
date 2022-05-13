import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.html.respondHtml
import io.ktor.http.content.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.javatime.CurrentDateTime
import org.jetbrains.exposed.sql.javatime.datetime
import org.jetbrains.exposed.sql.transactions.transaction
import java.sql.DriverManager
import java.util.*
import java.sql.*
import kotlinx.html.*

internal var conn: Connection? = null
internal var username = "madam666"
internal var password = "A@DC3tXme$/P3x_"

//fun getConnection() {
//    val connectionProperties = Properties()
//    connectionProperties.put("user", username)
//    connectionProperties.put("password", password)
//    try {
////        Class.forName("com.mysql.jdbc.Driver").newInstance()
//        conn = DriverManager.getConnection(
//            "jdbc:" + "mysql" + "://" +
//                    "127.0.0.1" +
//                    ":" + "3306" + "/" +
//                    "tic_tac_toe",
//            connectionProperties)
//    } catch (exception: SQLException) {
//// handle any errors
//        exception.printStackTrace()
//    } catch (exception: Exception) {
//// handle any errors
//        exception.printStackTrace()
//    }
//}


object Steps : Table() {
    val id = integer("id")
    val step = varchar("step", 1)
    val dateCreated = datetime("date_created").defaultExpression(CurrentDateTime())
    val gameId = (integer("game_id") references Games.id).nullable()

    override val primaryKey = PrimaryKey(id, name = "PK_Steps_ID")
}

object Games : Table(){
    val id = integer("id").autoIncrement()
    val winner = varchar("winner", 50)

    override val primaryKey = PrimaryKey(id, name = "PK_Games_ID")
}


fun main() {

//    getConnection()

    Database.connect("jdbc:mysql://localhost:3306/tic_tac_toe", user = username, password = password)



    transaction {
        addLogger(StdOutSqlLogger)

        SchemaUtils.create(Games, Steps)
    }
    embeddedServer(Netty, 8090, host = "127.0.0.1") {
        install(ContentNegotiation) {
            json()
        }
        install(CORS) {
            method(HttpMethod.Get)
            method(HttpMethod.Post)
            anyHost()
        }
        install(Compression) {
            gzip()
        }


        val conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/tic_tac_toe", username, password)

        val query = conn.prepareStatement("Select * from games")

        val result = query.executeQuery()

        val games = mutableListOf<Game>()

        routing {
            get("/") {
                call.respondHtml(HttpStatusCode.OK, HTML::index)
//                call.respondText(
//                    this::class.java.classLoader.getResource("index.html")!!.readText(),
//                    ContentType.Text.Html
                )
            }
            static("/static") {
                resources()
            }
            route(Game.path) {

                get {
//                    call.respond(collection.find().toList())
//                    while (result.next()) {
//                        val id = result.getInt("id")
//
//                        val winner = result.getString("winner")
//
//                        games.add(Game(id, winner))
//                    }
                    println("mukodik")
                }
                post {
//                    collection.insertOne(call.receive<Game>())
                    call.respond(HttpStatusCode.OK)
                }
            }

        }
    }.start(wait = true)
    //println("Hello, JVM!")
}