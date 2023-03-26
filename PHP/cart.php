<?php
require_once "products.php";
require_once "./classes/cart.php";
foreach ($products as $product) {
    Cart::add($product, $_POST[$product->getId()]);
}
// $totalPrice = Cart::calcTotalPrice();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css">
    <title>デイトラ PHP</title>
</head>

<body>
    <div class="container">
        <div class="app-container">
            <h1 class="title">Shopping Cart</h1>
            <div class="carts-container">
                <?php foreach ($products as $product) : ?>
                <?php if ($_POST[$product->getId()] > 0) : ?>
                <div class="cart-item">
                    <div class="flex">
                        <img class="cart-item-img" src="<?php echo $product->getImage(); ?>">
                        <div class="cart-item-detail">
                            <p class="cart-item-title"><?php echo $product->getName(); ?></p>
                            <p><?php echo $_POST[$product->getId()]; ?> × <?php echo $product->getPrice(); ?></p>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
                <?php endforeach; ?>
                <form action="payment.php" method="post">
                    <div class="btn-footer bg-gray">
                        <input class="checkout-btn" type="submit"
                            value="<?php echo Cart::calcTotalPrice() . "円 決済する"; ?>">
                    </div>
                </form>
            </div>
        </div>
</body>

</html>