<!-- // Example 16 - _COOKIE PHP Part - Page 1 -->

<?php
$c_name = "ParBackColor";
$c_value = $_POST["favorite_color"];
setcookie($c_name, $c_value, time() + (86400 * 30), "/"); // 86400 = 1 day
?>

<!DOCTYPE html>
<html>

    <body>
        <h1> saveColor.php Page</h1>
<?php ?>



    </body>

</html>
