# Fáza 4 – správa košíka a potvrdenie objednávky

Podľa [`design/cart-management-confirmation-sketch.png`](design/cart-management-confirmation-sketch.png) rozšír košík.

- opakované pridanie produktu upraví existujúcu položku namiesto duplikátu,
- pri každej položke možno zmeniť množstvo alebo ju odstrániť,
- množstvo neklesne pod `1` a cena sa vždy správne prepočíta,
- po odstránení poslednej položky sa košík skryje.

Tlačidlo „Odoslať objednávku“ teraz volá `POST /api/orders` s aktuálnym obsahom vo formáte `{ "items": [{ "productId": 1, "quantity": 2 }] }`. Počas odosielania zobraz loading a zabráň opakovaniu. Po úspešnej odpovedi vyčisti košík, zobraz potvrdenie s `orderId` a tlačidlom „Pokračovať v nákupe“, ktoré potvrdenie zavrie a opäť zobrazí produkty.
