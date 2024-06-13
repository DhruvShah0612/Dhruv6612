<?php
// Start the session
session_start();

// Placeholder for adding new user information to a predefined list or database
// This is a simplified example and should be replaced with actual database interaction
$users = array();

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $password = $_POST['password'];
    // Additional user information can be added here

    // Simulate adding user to a list (in a real scenario, this should be a database insert)
    $users[$id] = $password;

    // Redirect to the login page upon successful registration
    header("Location: login.php");
    exit;
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <h2>Sign Up</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        ID: <input type="text" name="id">
        Password: <input type="password" name="password">
        <!-- Additional fields for user information can be added here -->
        <input type="submit" value="Register">
    </form>
</body>
</html>
