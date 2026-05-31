function restaurantBill(
    items,
    isWednesday = false,
    hasTip = false
) {

    let total = 0;

    for (let item of items) {

        total +=
        item.price *
        item.qty;
    }

    let discount = 0;

    if (total > 1000000) {
        discount = total * 0.15;
    }
    else if (total > 500000) {
        discount = total * 0.10;
    }

    if (isWednesday) {
        discount += total * 0.05;
    }

    let afterDiscount =
        total - discount;

    let vat =
        afterDiscount * 0.08;

    let tip =
        hasTip
        ? afterDiscount * 0.05
        : 0;

    let final =
        afterDiscount +
        vat +
        tip;

    console.log("Tổng:", total);
    console.log("Giảm:", discount);
    console.log("VAT:", vat);
    console.log("Tip:", tip);
    console.log("Thanh toán:", final);
}

restaurantBill(
[
    {
        name:"Phở bò",
        price:65000,
        qty:2
    },
    {
        name:"Trà đá",
        price:5000,
        qty:3
    },
    {
        name:"Bún chả",
        price:55000,
        qty:1
    }
],
true,
true
);