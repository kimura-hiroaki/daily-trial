<?php
function calcPriceIncludeTax($price)
{
    $taxRate = 0.1;
    return $price * (1 + $taxRate);
}

function displayPrice($price)
{
    $priceIncludeTax = calcPriceIncludeTax($price);
    return $priceIncludeTax . "円";
}
