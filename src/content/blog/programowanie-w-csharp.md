---
title: 'Wprowadzenie do programowania w C#: Twoja pierwsza aplikacja desktopowa'
slug_override: 'programowanie-w-csharp'
pubDate: 2025-10-01
description: 'Naucz się podstaw C#, odkryj możliwości programowania obiektowego i zdobądź praktyczne umiejętności potrzebne do tworzenia aplikacji.'
coverImage: ./programowanie-w-csharp/C_image2.png
coverAlt: C# image
---

C# to język stworzony przez Microsoft, popularny w tworzeniu aplikacji desktopowych, gier i aplikacji webowych. W tym poradniku pokażemy, jak rozpocząć przygodę z C# i stworzyć prostą aplikację desktopową.

## Instalacja
Najwygodniej zainstalować [Visual Studio Community](https://visualstudio.microsoft.com/), które zawiera wszystkie potrzebne narzędzia.

## Pierwszy program
Tworzymy prostą aplikację konsolową:

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, C#!");
    }
}
```

Uruchomienie w Visual Studio lub przez `dotnet run` wyświetli komunikat w konsoli.

## Podstawy składni
- **Zmienne:** Deklaracja typów:

```csharp
int age = 25;
string name = "Alice";
```

- **Funkcje:** Metody w C#:

```csharp
int Add(int a, int b)
{
    return a + b;
}
```

- **Kontrola przepływu:** `if`, `else`, `for`, `while` działają standardowo.

## Tworzenie prostego formularza
Dodajemy prosty formularz Windows Forms:

```csharp
using System;
using System.Windows.Forms;

class MyForm : Form
{
    public MyForm()
    {
        Text = "Hello C# Form";
        Button button = new Button();
        button.Text = "Click me";
        button.Click += (sender, e) => MessageBox.Show("Hello!");
        Controls.Add(button);
    }
}

class Program
{
    static void Main()
    {
        Application.Run(new MyForm());
    }
}
```

## Podsumowanie
C# jest idealny dla początkujących, którzy chcą tworzyć aplikacje desktopowe lub gry. Dzięki Visual Studio nauka i tworzenie projektów staje się intuicyjne i przyjemne.
