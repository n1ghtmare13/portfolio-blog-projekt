---
title: 'Wstęp do Rust: Bezpieczne i szybkie programowanie systemowe'
slug_override: 'wstep-do-rust'
pubDate: 2025-09-16
description: 'Poznaj Rust, język stawiający na bezpieczeństwo i wydajność, i odkryj, jak tworzyć szybkie oraz niezawodne aplikacje.'
coverImage: './wstep-do-rust/rust-cover.png'
coverAlt: 'Rust language logo'
---

Rust to język programowania systemowego, który zdobywa coraz większą popularność dzięki swojej szybkości i bezpieczeństwu pamięci. W tym poradniku pokażemy, jak zacząć przygodę z Rustem, tworzyć proste programy i zrozumieć jego podstawowe koncepcje.

## Dlaczego Rust?

Rust łączy wydajność języków niskiego poziomu, takich jak C i C++, z nowoczesnym podejściem do bezpieczeństwa pamięci. Jego system własności (ownership) i reguły borrowingu sprawiają, że wiele typowych błędów w zarządzaniu pamięcią jest wykrywanych już na etapie kompilacji.

## Instalacja

Aby rozpocząć pracę z Rust, najlepiej zainstalować `rustup`, narzędzie zarządzające wersjami Rust:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Po instalacji sprawdź wersję:

```bash
rustc --version
```

## Pierwszy program

Tworzymy prosty program „Hello, Rust!”:

```rust
fn main() {
    println!("Hello, Rust!");
}
```

Zapisz plik jako `main.rs` i uruchom:

```bash
rustc main.rs
./main
```

## Podstawy składni

- **Zmienne i mutowalność:** Rust domyślnie traktuje zmienne jako niemutowalne. Aby zmienić wartość, używamy `mut`.

```rust
let mut x = 5;
x = 6;
```

- **Funkcje:** Funkcje definiujemy przez `fn`:

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

- **Kontrola przepływu:** Rust obsługuje `if`, `else`, `loop`, `while` i `for`.

## Kolekcje

Rust oferuje m.in. `Vec` (wektory) i `HashMap`:

```rust
let mut numbers = vec![1, 2, 3];
numbers.push(4);

use std::collections::HashMap;
let mut scores = HashMap::new();
scores.insert("Alice", 10);
```

## Moduły i pakiety

Organizacja kodu w moduły (`mod`) i pakiety (`crate`) pozwala na łatwe zarządzanie większymi projektami.

## Podsumowanie

Rust to doskonały wybór, jeśli zależy Ci na bezpieczeństwie pamięci i wydajności. Dzięki prostym narzędziom i systemowi typów nauka języka staje się przyjemna, nawet dla początkujących.
