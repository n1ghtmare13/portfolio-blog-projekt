---
title: 'Wprowadzenie do React: Budowa interaktywnych interfejsów użytkownika'
slug_override: 'wprowadzenie-do-react'
pubDate: 2025-10-20
description: 'Odkryj React, bibliotekę do tworzenia nowoczesnych UI. Naucz się, jak budować komponenty, zarządzać stanem i renderować dynamiczne listy.'
coverImage: './wprowadzenie-do-react/react-cover.svg'
coverAlt: 'Logo React'
---

React to biblioteka JavaScript, która zrewolucjonizowała sposób tworzenia interfejsów użytkownika (UI). Dzięki podejściu opartemu na komponentach i deklaratywnej składni, React pozwala budować złożone i wydajne aplikacje internetowe w prosty i zorganizowany sposób.

## Dlaczego React?

React łączy elastyczność JavaScript z potężnym modelem komponentowym. Zamiast bezpośrednio manipulować elementami DOM, opisujesz, jak interfejs powinien wyglądać w danym stanie, a React sam dba o jego aktualizację. To sprawia, że kod jest bardziej przewidywalny i łatwiejszy w debugowaniu.

## Instalacja

Aby rozpocząć pracę z React, najprościej jest użyć narzędzia takiego jak Vite, które błyskawicznie tworzy gotowy projekt:

```bash
# Wymaga zainstalowanego Node.js
npm create vite@latest moj-projekt -- --template react
```

Po utworzeniu projektu przejdź do folderu i uruchom serwer deweloperski:

```bash
cd moj-projekt
npm install
npm run dev
```

## Pierwszy komponent

Oto jak wygląda podstawowy komponent w React, który wyświetla powitanie:

```jsx
// src/App.jsx
function App() {
  return (
    <h1>Witaj, React!</h1>
  );
}

export default App;
```

Ten kod używa składni JSX, która pozwala mieszać HTML z logiką JavaScript w jednym pliku.

## Podstawy składni

- **Komponenty i `props`:** React opiera się na komponentach – niezależnych, reużywalnych kawałkach UI. Dane przekazuje się do nich za pomocą `props` (właściwości).

```jsx
function Greeting({ name }) {
  return <p>Cześć, {name}!</p>;
}

// Użycie w innym komponencie
<Greeting name="Anna" />
```

- **Stan i mutowalność (`useState`):** Aby komponent mógł przechowywać i zmieniać swoje własne dane, używamy hooka `useState`.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Kliknięto {count} razy
    </button>
  );
}
```

- **Renderowanie warunkowe:** Wyświetlanie elementów w zależności od warunków jest bardzo proste.

```jsx
function UserStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? 'Jesteś zalogowany' : 'Proszę się zalogować'}</p>;
}
```

## Kolekcje

Renderowanie list (kolekcji) danych to częste zadanie. W React używamy metody `.map()` do transformacji tablicy danych na tablicę elementów JSX.

```jsx
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Myszka' },
  { id: 3, name: 'Klawiatura' },
];

function ProductList() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```
**Ważne:** Każdy element na liście musi mieć unikalny atrybut `key`, aby React mógł efektywnie zarządzać aktualizacjami.

## Moduły i organizacja kodu

Każdy komponent zazwyczaj znajduje się w osobnym pliku. Używamy składni `export` i `import`, aby organizować kod w moduły i budować z nich złożone aplikacje.

## Podsumowanie

React to potężne narzędzie do budowania nowoczesnych interfejsów użytkownika. Jego komponentowa architektura, zarządzanie stanem i ogromny ekosystem sprawiają, że jest to doskonały wybór zarówno dla małych, jak i dużych projektów. Rozpoczęcie pracy jest szybkie, a społeczność oferuje niezliczone zasoby do nauki.
