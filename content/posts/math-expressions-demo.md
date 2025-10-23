---
title: "Mathematical Expressions in Hugo"
date: 2024-01-10T14:30:00Z
tags: ["math", "katex", "hugo"]
categories: ["Technology", "Mathematics"]
---

This post demonstrates the mathematical typesetting capabilities of our Hugo site using KaTeX.

## Inline Mathematics

You can include inline mathematical expressions like $\alpha + \beta = \gamma$ directly within your text. This makes it easy to discuss mathematical concepts naturally.

## Display Mathematics

For more complex expressions, you can use display mode:

$$\frac{d}{dx}\left( \int_{0}^{x} f(u) \, du\right) = f(x)$$

## Complex Equations

Here's a more complex example showing the Schrödinger equation:

$$i\hbar\frac{\partial}{\partial t} \Psi(\mathbf{r},t) = \hat{H} \Psi(\mathbf{r},t)$$

## Matrix Notation

KaTeX also supports matrices and other advanced mathematical notation:

$$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix}$$

The integration of KaTeX makes this Hugo site perfect for technical blogs, academic content, or any site that needs to display mathematical expressions clearly and beautifully.

