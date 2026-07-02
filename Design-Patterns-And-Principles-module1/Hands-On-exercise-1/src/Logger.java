public class Logger {
    // Step 2a: Private static instance of itself
    private static Logger instance;

    // Step 2b: Private constructor prevents instantiation from other classes
    private Logger() {
        System.out.println("Logger initialized for the first time.");
    }

    // Step 2c & 3: Public static method providing global access with lazy initialization
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Utility method to simulate logging activity
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
