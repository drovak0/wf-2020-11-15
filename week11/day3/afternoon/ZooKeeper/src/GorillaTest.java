import com.zookeeper.mammal.Gorilla;

public class GorillaTest {
    public static void main(String[] args) throws Exception {
        Gorilla george = new Gorilla();
        // throw three things, eat bananas twice, and climb once.
        george.throwSomething("an error");
        george.throwSomething("a rock");
        george.throwSomething("an apple");
        george.eatBananas();
        george.eatBananas();
        george.climb();
    }
}
