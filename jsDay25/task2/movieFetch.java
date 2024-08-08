import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import org.json.JSONObject;

public class movieFetch {
    public static void main(String[] args) {
        String API_URL = "http://www.omdbapi.com/?apikey=[YourAPIKey]&s=Inception";
        
        try {
            URL url = new URL(API_URL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();

            //Check if connect is made
            int responseCode = conn.getResponseCode();

            // 200 OK
            if (responseCode != 200) {
                throw new RuntimeException("HttpResponseCode: " + responseCode);
            } else {
                StringBuilder informationString = new StringBuilder();
                Scanner scanner = new Scanner(url.openStream());

                while (scanner.hasNext()) {
                    informationString.append(scanner.nextLine());
                }
                scanner.close();

                // Parse JSON data
                JSONObject json = new JSONObject(informationString.toString());
                System.out.println("Movie Data: " + json);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
