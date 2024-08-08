import java.util.Scanner;

public class movieSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter movie name to search: ");
        String movieName = sc.nextLine();

        // Call the function that interacts with the API
        fetchAndDisplayMovieData(movieName);
    }

    public static void fetchAndDisplayMovieData(String movieName) {
        // Function implementation for API call and display
    }
}
