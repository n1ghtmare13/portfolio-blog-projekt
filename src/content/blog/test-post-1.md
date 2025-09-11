---
title: Wprowadzenie do JavaScript – Poradnik dla Początkujących
pubDate: 2025-09-11T15:32:00
description: JavaScript (JS) to język programowania, który pozwala tworzyć dynamiczne i interaktywne strony internetowe.
coverImage: ../../assets/images/post-1.avif
coverAlt: JavaScript logo with a "JavaScript programming language" text
---
JavaScript (JS) to język programowania, który pozwala tworzyć dynamiczne i interaktywne strony internetowe. Jeśli HTML i CSS odpowiadają za strukturę i wygląd strony, JavaScript dodaje jej „życie”.

## 1. Podstawy JavaScript

##### 1.1. Dodawanie JS do strony

JavaScript można dodać na trzy sposoby:

**Wewnątrz HTML – w tagu&#32;`<script>`:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Moja strona</title>
</head>
<body>
    <h1>Witaj w świecie JS!</h1>

    <script>
        alert("Cześć!");
    </script>
</body>
</html>
```

**Zewnętrzny plik JS:**

```html
<script src="script.js"></script>
```

gdzie `script.js` zawiera kod JS.

##### 1.2. Zmienne

W JS używamy `let`, `const` lub `var` (rzadziej) do przechowywania danych.

```javascript
let imie = "Mateusz";
const wiek = 25;
```

- `let` – zmienna, którą można zmieniać.
- `const` – stała, której wartość nie może się zmienić.

##### 1.3. Typy danych

Najczęściej spotykane:

- `String` – tekst `"Hello"`
- `Number` – liczba `42`
- `Boolean` – prawda/fałsz `true/false`
- `Array` – lista elementów `[1, 2, 3]`
- `Object` – obiekt `{ imie: "Mateusz", wiek: 25 }`

##### 1.4. Funkcje

Funkcje pozwalają wykonywać określone czynności:

```javascript
function przywitaj(imie) {
    console.log("Cześć, " + imie + "!");
}

przywitaj("Mateusz");
```

## 2. Manipulacja DOM

DOM (Document Object Model) to struktura Twojej strony. JS pozwala ją modyfikować:

```javascript
document.getElementById("mojNaglowek").textContent = "Nowy tekst!";
```

```html
<h1 id="mojNaglowek">Stary tekst</h1>
```

## 3. Zdarzenia

JS reaguje na działania użytkownika, np. kliknięcia:

```javascript
document.getElementById("przycisk").addEventListener("click", function() {
    alert("Kliknąłeś przycisk!");
});
```

```html
<button id="przycisk">Kliknij mnie!</button>
```

## 4. Prosta logika

Instrukcje warunkowe i pętle:

```javascript
let liczba = 10;

if (liczba > 5) {
    console.log("Liczba jest większa niż 5");
} else {
    console.log("Liczba jest mniejsza lub równa 5");
}

// Pętla
for (let i = 0; i < 5; i++) {
    console.log("i =", i);
}
```

## 5. Co dalej?

- Poznaj **funkcje strzałkowe** (`()=>{}`)
- Naucz się **fetch()** do pobierania danych z internetu
- Zacznij używać bibliotek jak **React** lub **Vue.js**

---
