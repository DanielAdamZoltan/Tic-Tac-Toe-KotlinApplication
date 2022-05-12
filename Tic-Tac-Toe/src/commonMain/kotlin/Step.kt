import kotlinx.serialization.Serializable
import kotlin.random.Random
import kotlin.time.TimeMark

@Serializable
data class Step(val step: String, val dateCreated: Int) {
    val id: Int = Random.nextInt()

    companion object {
        const val path = "/step"
    }
}