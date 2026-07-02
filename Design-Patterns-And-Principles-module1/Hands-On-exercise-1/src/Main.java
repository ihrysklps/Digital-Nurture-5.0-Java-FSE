public class Main {
    public static void main(String[] args) {
        System.out.println("--- Testing Singleton Pattern Implementation ---");

        // Step 4: Request the Logger instance multiple times
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Use the instances to log messages
        logger1.log("This is a message from logger1.");
        logger2.log("This is a message from logger2.");

        // Verify that both references point to the exact same object in memory
        System.out.println("\nChecking instance equality...");
        System.out.println("Do logger1 and logger2 point to the same instance? " + (logger1 == logger2));

        if (logger1 == logger2) {
            System.out.println("SUCCESS: Both references are identical. Singleton Pattern works perfectly!");
        } else {
            System.out.println("FAILURE: Different instances exist. Singleton Pattern broken!");
        }
    }
}
