import java.util.Scanner;

public class movieDetails {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter movie name for more details: ");
        String movieName = sc.nextLine();

        // Call the function to fetch detailed information
        fetchAndDisplayMovieDetails(movieName);
    }

    public static void fetchAndDisplayMovieDetails(String movieName) {
        // Function implementation to fetch and display detailed movie info
    }
}
