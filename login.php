<?php
// Start the session
session_start();

// Define hardcoded users for demonstration purposes
$users = array(
    "user1" => "password1",
    "user2" => "password2"
);

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $password = $_POST['password'];

    // Validate user ID and password
    if (isset($users[$id]) && $users[$id] == $password) {
        // Set session variable
        $_SESSION['loggedin'] = true;
        $_SESSION['userid'] = $id;

        // Redirect to welcome page
        header("Location: welcome.php");
        exit;
    } else {
        // Display error message
        echo "<p>Incorrect ID or password.</p>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        ID: <input type="text" name="id">
        Password: <input type="password" name="password">
        <input type="submit" value="Login">
    </form>
</body>
</html>
