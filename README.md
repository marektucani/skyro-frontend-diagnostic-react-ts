# Frontend diagnostické zadanie (React + TypeScript)

## Kontext

Toto zadanie slúži na praktické overenie práce s Reactom, TypeScriptom a frontendovým rozhraním. Nehodnotí sa iba výsledný screenshot, ale aj spôsob uvažovania, kvalita implementácie a schopnosť vysvetliť a upraviť vlastný kód.

Všetky štyri fázy zadania sú známe od začiatku. Implementuj ich postupne a po každej fáze absolvuj krátke 1:1 review.

## Technológie a spustenie

Projekt používa React, TypeScript a Vite.

```bash
npm install
npm run dev
```

## Čas

Na celé zadanie máš približne 90 minút. Nemusíš dokončiť všetko. Funkčné a zrozumiteľné riešenie je hodnotnejšie než množstvo nedokončených detailov.

## Fázy

Detailné zadania a low-fi sketche sú vo priečinku [`phases`](phases/).

1. Layout a vizuál: vytvor znovupoužiteľnú produktovú kartu z dát v `src/data/product.ts`.
2. Interakcie: zobraz tri produkty z `src/data/products.ts` a doplň nezávislý stav kariet.
3. Lokálny košík a API: spravuj obsah košíka a ošetri zámerne neúspešný request na `/api/cart`.
4. Správa košíka a potvrdenie: upravuj položky, odošli objednávku na `/api/orders` a zobraz potvrdenie.

## 1:1 review po každej fáze

Priprav si krátke vysvetlenie, čo si implementoval, kde sa nachádza meniaci sa stav, ako sa prenášajú informácie medzi komponentmi a čo by si ďalej zlepšil.

## Git workflow

Pracuj vo vlastnej branchi a fázy odovzdávaj samostatnými commitmi. Po každej fáze udržuj aplikáciu spustiteľnú a commit správu zrozumiteľnú.

## Pomoc a AI

Dokumentáciu, internet alebo AI používaj tak, ako by si ich bežne použil pri práci. Ak použiješ AI, musíš vedieť vysvetliť každú časť kódu, ktorú odovzdáš.
