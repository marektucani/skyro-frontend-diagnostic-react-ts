# Fáza 3 – lokálny košík a odoslanie objednávky

Rozšír tri produktové karty o lokálny košík podľa [`design/product-grid-cart-sketch.png`](design/product-grid-cart-sketch.png). Tlačidlo „Pridať do košíka“ nemá volať API; zmení obsah lokálneho košíka.

Košík zobraz iba keď nie je prázdny, nad kartami, s produktmi, množstvami, celkovou cenou a tlačidlom „Odoslať objednávku“.

Tlačidlo odošle `POST /api/cart` s payloadom `{ "items": [{ "productId": 1, "quantity": 2 }] }`. Endpoint po približne 2 sekundách zámerne odpovie `500`. Počas requestu zobraz loading, znemožni opätovné odoslanie, ošetri chybu bez neodchyteného erroru v konzole a košík pri chybe zachovaj.

Priprav si vysvetlenie, kde je obsah košíka, ako sa mení a ako by si oddelil API logiku od UI.
