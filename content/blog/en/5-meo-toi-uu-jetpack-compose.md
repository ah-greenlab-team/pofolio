---
title: "Five Jetpack Compose optimisation tips from a junior Android developer"
description: "Avoiding extra recomposition, using remember in the right places, keying LazyColumn, handling side-effects and hoisting state — what I learned after wrestling with Compose."
date: "2026-02-03"
tags: ["Android", "Jetpack Compose", "Kotlin"]
source: "https://www.linkedin.com/posts/m%E1%BA%A1nh-h%C3%B9ng-%C4%91%E1%BB%97_androiddev-jetpackcompose-kotlin-share-7424282767477100544-hGrK/"
---

After a while wrestling with Jetpack Compose, I collected five practical lessons that made my code smoother, cut unnecessary recomposition, and noticeably reduced lag on complex screens.

## 1. Avoid unnecessary recomposition

- Read only the state a composable genuinely needs
- Use `derivedStateOf` to cache computed values
- Split state into smaller pieces so recomposition stays local

The difference is most obvious on screens with many UI elements.

## 2. Use `remember` in the right places

Reach for `remember` when you have:

- A local `mutableStateOf`
- A computed value
- An object that does not change (`Paint`, `CoroutineScope`, and so on)

Do not use it for values that change constantly — the current time, for example.

Using `remember` in the wrong place causes bugs that are genuinely hard to track down.

## 3. Always pass `key` in LazyColumn / LazyRow

- Add `key = { it.id }` for every item
- Item state stays correct when you add, remove or reorder the list
- Prevents broken animations and UI jumping around

## 4. Handle side-effects properly with `LaunchedEffect` and `DisposableEffect`

A side-effect should run when its key changes, not on every recomposition.

- `LaunchedEffect(key)` — network calls, logging, animation
- `DisposableEffect` — setup and cleanup (listeners, lifecycle)

This is where I hit the most recomposition bugs myself.

## 5. State hoisting

- Lift state up to the highest sensible parent composable
- Keep child composables stateless
- Pass two things down: `value` and `onChange`

What you get:

- Easier testing
- Easier reuse
- Fewer callback-related bugs

---

What about you? Do you run into unnecessary recomposition more often, or forgetting `key` in `LazyColumn`?
