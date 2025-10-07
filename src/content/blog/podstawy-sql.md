---
title: 'Podstawy SQL: Jak zacząć pracę z bazami danych'
slug_override: 'podstawy-sql'
pubDate: 2025-09-06
description: 'Naucz się podstaw SQL, odkryj tajniki baz danych i zdobądź praktyczne umiejętności potrzebne do efektywnej pracy z danymi.'
coverImage: ./podstawy-sql/sql-cover.jpg
coverAlt: SQL image
---

SQL (Structured Query Language) to język służący do pracy z bazami danych. W tym poradniku pokażemy, jak zacząć, tworzyć tabele, wstawiać dane i wykonywać podstawowe zapytania.

## Instalacja i narzędzia
Do nauki SQL można użyć lokalnej bazy np. SQLite lub MySQL/PostgreSQL. Warto także zainstalować narzędzia typu DBeaver lub pgAdmin.

## Tworzenie bazy danych i tabel

```sql
CREATE DATABASE moja_baza;
USE moja_baza;

CREATE TABLE uzytkownicy (
    id INT PRIMARY KEY,
    imie VARCHAR(50),
    wiek INT
);
```

## Wstawianie danych

```sql
INSERT INTO uzytkownicy (id, imie, wiek) VALUES (1, 'Alice', 25);
INSERT INTO uzytkownicy (id, imie, wiek) VALUES (2, 'Bob', 30);
```

## Podstawowe zapytania

```sql
-- Pobranie wszystkich danych
SELECT * FROM uzytkownicy;

-- Filtrowanie
SELECT * FROM uzytkownicy WHERE wiek > 25;

-- Aktualizacja danych
UPDATE uzytkownicy SET wiek = 26 WHERE imie = 'Alice';

-- Usuwanie danych
DELETE FROM uzytkownicy WHERE id = 2;
```

## Podsumowanie
SQL to podstawowe narzędzie dla każdego, kto pracuje z bazami danych. Nauka prostych zapytań pozwala szybko tworzyć, aktualizować i pobierać dane w efektywny sposób.
