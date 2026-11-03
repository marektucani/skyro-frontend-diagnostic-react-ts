# Fáza 2 – tri karty a interakcie

Podľa [`design/product-cards-active-sketch.png`](design/product-cards-active-sketch.png) zobraz tri produktové karty z `src/data/products.ts`.

- každá karta začína s quantity `1`,
- `+` zvýši quantity o `1`; `−` ju nezníži pod `1`,
- maximum je `9` a `+` je na maxime deaktivované,
- favourite tlačidlo prepína viditeľný aktívny stav,
- text tlačidla „Pridať do košíka“ zodpovedá aktuálnej quantity,
- každá karta sa správa nezávisle,
- po každej zmene sa UI okamžite aktualizuje,
- ovládanie je použiteľné klávesnicou a zrozumiteľné pre asistenčné technológie.

Použi primerané React state a rozdeľ príliš veľké komponenty na zmysluplné menšie časti.
