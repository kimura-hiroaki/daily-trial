<?php
class Cart
{
    private static $items = [];

    public static function add($product, $count)
    {
        self::$items[] = ["product" => $product, "count" => $count];
    }

    public static function calcTotalPrice()
    {
        $sum = 0;
        foreach (self::$items as $item) {
            $price = $item["product"]->getPrice() * $item["count"];
            $sum += $price;
        }
        return $sum;
    }
}
