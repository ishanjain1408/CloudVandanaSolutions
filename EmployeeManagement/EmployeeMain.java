import java.util.ArrayList;
import java.util.List;

public class EmployeeMain {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();

        employees.add(new Employee(101, "Ishan Jain", 60000));
        employees.add(new Employee(102, "Aarav Gupta", 75000));
        employees.add(new Employee(103, "Neha Sharma", 85000));

        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
