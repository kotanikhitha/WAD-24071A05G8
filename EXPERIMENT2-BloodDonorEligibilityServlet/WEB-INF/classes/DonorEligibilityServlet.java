import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/checkEligibility")
public class DonorEligibilityServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        try {
            // Retrieve parameters from HTML form
            int age = Integer.parseInt(request.getParameter("age"));
            double weight = Double.parseDouble(request.getParameter("weight"));
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head><title>Eligibility Result</title></head>");
            out.println("<body>");
            out.println("<h2>Eligibility Result</h2>");
            
            // Check eligibility logic (Age 18-65, Weight >= 50kg)
            if (age >= 18 && age <= 65) {
                if (weight >= 50.0) {
                    out.println("<p>Status: <b>Eligible</b></p>");
                    out.println("<p>You are eligible to donate blood.</p>");
                } else {
                    out.println("<p>Status: <b>Not Eligible</b></p>");
                    out.println("<p>You are not eligible to donate blood because your weight is below 50 kg.</p>");
                }
            } else {
                out.println("<p>Status: <b>Not Eligible</b></p>");
                out.println("<p>You are not eligible to donate blood because your age must be between 18 and 65 years.</p>");
            }
            
            out.println("<br><a href='index.html'>Go Back</a>");
            out.println("</body>");
            out.println("</html>");
            
        } catch (NumberFormatException e) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head><title>Error</title></head>");
            out.println("<body>");
            out.println("<p>Error: Please enter valid numeric values for age and weight.</p>");
            out.println("<br><a href='index.html'>Go Back</a>");
            out.println("</body>");
            out.println("</html>");
        } finally {
            out.close();
        }
    }
}
