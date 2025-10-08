---
title: 'Wstęp do programowania w Kotlin: Tworzenie aplikacji na Androida'
slug_override: 'wstep-do-kotlin'
pubDate: 2025-07-07
description: 'Poznaj Kotlin, nowoczesny język programowania, i odkryj, jak tworzyć wydajne, bezpieczne oraz nowoczesne aplikacje mobilne i webowe.'
coverImage: './wstep-do-kotlin/kotlin-cover.svg'
coverAlt: 'Kotlin language logo'
---

Kotlin to język stworzony przez JetBrains, który stał się oficjalnym językiem Androida. W tym poradniku pokażemy, jak zacząć pisać aplikacje w Kotlin dla początkujących.

## Instalacja

Najwygodniej zainstalować Android Studio, które zawiera środowisko do tworzenia aplikacji w Kotlin.

## Pierwszy program

Tworzymy prostą aplikację konsolową:

```kotlin
fun main() {
    println("Hello, Kotlin!")
}
```

Uruchomienie w Android Studio lub IntelliJ IDEA wyświetli komunikat w konsoli.

## Podstawy składni

- **Zmienne:** `val` dla niemutowalnych, `var` dla mutowalnych:

```kotlin
val name: String = "Alice"
var age: Int = 25
```

- **Funkcje:**

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}
```

- **Kontrola przepływu:** `if`, `when`, `for`, `while`

```kotlin
for (i in 1..5) {
    println(i)
}
```

## Tworzenie prostej aplikacji Android

Tworzymy prosty `Activity` z przyciskiem:

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val button: Button = findViewById(R.id.myButton)
        button.setOnClickListener {
            Toast.makeText(this, "Hello Kotlin!", Toast.LENGTH_SHORT).show()
        }
    }
}
```

## Podsumowanie

Kotlin jest świetnym językiem dla początkujących Android developerów. Prosta składnia, interoperacyjność z Javą i wsparcie Android Studio pozwalają szybko tworzyć funkcjonalne aplikacje.
