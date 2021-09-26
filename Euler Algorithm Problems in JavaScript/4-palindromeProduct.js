var x, y, product, max = 0;

for (x = 100; x <= 999; x++) {
    for (y = x; y <= 999; y++) {
        product = x * y;
        if (Palindromic(product)) {
          if( max < product ) { // this is new
            max = product;
            console.log(x + '*' + y + '=' + product);
          }
        }
    }
}
