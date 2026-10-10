---
title: "Gödel's Incompleteness Theorem: When Logic Looks in the Mirror"
date: 2026-02-25T09:00:00+05:30
description: "A 3Blue1Brown-style lecture explaining Gödel's incompleteness theorem, from formal systems and interpretation through Gödel numbering to the limits of provability."
draft: false
tags: ["logic", "mathematics", "godel"]
portfolio_types: ["Lecture"]
featured_image: "/images/dashboard/logo.jpg"
featured_image_alt: "Abstract cover image for a logic lecture"
gallery: []
---

# 3b1b lecture - Gödel's Incompleteness Theorem: when Logic Looks in the Mirror

Imagine you're playing a game. You have some symbols, a starting position, and rules for making moves. Your goal is to reach certain configurations. This game is a perfect analogy for what mathematicians call a formal system—the playground where mathematical reasoning happens.

## Formal Systems: the Building Blocks of Logic

A formal system consists of three components:

1. A collection of allowable characters to form strings
2. A set of special strings called "axioms" (our starting positions)
3. Rules for transforming strings into other strings

Let's explore these ideas through a concrete example—a system I'll call the MIU-system.

In this system, we have just three characters: M, I, and U. Our starting axiom is the string MI. And we have four transformation rules:

1. If you have a string ending in I, you can add a U to the end
2. If you have a string of form Mx, you can add another copy of x to the end
3. If III appears in your string, you can replace it with U
4. If UU appears in your string, you can remove it

For example, starting with MI (our axiom), we can apply rule 2 to get MII, then rule 2 again to get MIIII, then rule 1 to get MIIIIU, and so on.

Here's a complete proof that MUIIU is a theorem of our system:

1. MI (axiom)
2. MII (using rule 2)
3. MIIII (using rule 2)
4. MIIIIU (using rule 1)
5. MUIU (using rule 3)
6. MUIUUIU (using rule 2)
7. MUIIU (using rule 4)

But what does this all mean? As it stands, not much. These are just abstract symbol manipulations. But that's about to change.

## Interpretation: Breathing Meaning into Symbols

Let's look at another formal system—the tq-system:

Characters: t, q, and -

Axiom: -t-q-

Rules:

1. From xtyqz, form x-tyqzy
2. From xtyqz, form xty-qzx

This might seem equally meaningless. But what if I told you this system is actually modeling multiplication? Let's establish an interpretation:

- A sequence of n hyphens represents the number n
- t means "times"
- q means "equals"

Suddenly, the axiom -t-qtransforms into "1 times 1 equals 1." And the theorem --t---q------ becomes "2 times 3 equals 6."

An interpretation maps the formal strings to meaningful statements in some context. It's like a decoder ring that transforms abstract symbols into meaningful assertions.

What's remarkable is that every theorem in our tq-system corresponds to a true multiplication statement. And every true multiplication statement has a corresponding theorem. The system perfectly captures multiplication!

## Stepping outside the System

But how do we know that every theorem represents a true multiplication? We can't prove this within the tq-system itself. We have to step outside the system and reason about it.

This is a crucial insight: there's a fundamental difference between working inside a system (following its rules mechanically) and reasoning about a system (analyzing its properties from the outside).

A calculator follows rules inside a system. It will dutifully compute 2×3=6 and 7×8=56. But it will never stand back and say, "Aha! I notice I'm computing products!"

Intelligence seems to require this ability to step outside, to shift levels, to recognize patterns in our own reasoning.

## Truth vs. Provability: a Critical Distinction

This brings us to a fundamental distinction:

- A string is **provable** if it can be derived from the axioms using the rules (i.e., it's a theorem)
- A string is **true** if, under our interpretation, it represents a true statement

For valid interpretations, if a string is provable, then it must be true. This is why mathematics works! We manipulate symbols according to rules, and somehow this tells us truths about the world.

But is the converse also true? If a statement is true, must it be provable?

Consider our tqCP-system, which extends the tq-system with new symbols C and P, where:

- Cx means "x is composite"
- Px means "x is prime"

The string P-- (representing "2 is prime") is certainly true, but it can't be proven in this system because none of our rules allow us to produce theorems starting with P.

You might think this is just a flaw in our specific system, but Gödel showed something much deeper.

## Gödel's Incompleteness Theorem

Gödel proved that in any formal system rich enough to express basic arithmetic, there will always be statements that are true but unprovable within that system.

How did he do this? By creating a statement that essentially says: "This statement is not provable."

Let's think about what this means. If this statement were false, then it would be provable, which would make it true (since provable statements must be true). That's a contradiction!

So the statement must be true—which means it truly is unprovable. We've found our true but unprovable statement!

## Gödel's Ingenious Encoding

But how can a mathematical statement refer to itself? This is where Gödel's genius comes in.

First, he developed a way to encode any mathematical statement as a number (now called a Gödel number). For instance, in a simplified version:

- M → 3
- I → 1
- U → 0

So the string MIU becomes the number 310, and the axiom MI becomes 31.

Once mathematical statements are encoded as numbers, arithmetic itself can make statements about these encodings. And since arithmetic can talk about whether certain computational processes terminate, it can indirectly talk about whether certain statements are provable.

This self-reference isn't direct like the liar paradox ("This statement is false"). It's more like two mirrors positioned to reflect each other—a system rich enough to model itself indirectly.

## The Broader Implications

Gödel's theorem shattered a dream—the hope that mathematics could be a complete, consistent formal system where every true statement could be proven.

This isn't merely a mathematical curiosity. It suggests something profound about the nature of knowledge, proof, and perhaps even consciousness itself.

Formal systems, despite their power, can never fully capture their own reasoning. There's always something that escapes formalization—some truth that can be seen from the outside but never proven from within.

Just as we can step outside the MIU-system to prove that MU is not a theorem, our minds seem capable of stepping outside formal systems to see truths that cannot be proven within those systems.

Perhaps this suggests something essential about intelligence—the ability to transcend formal systems, to create new ones, to dance between levels of abstraction. Mathematics isn't just the execution of rules; it's the creative act of seeing beyond them.

Gödel showed that no matter how sophisticated our formal systems become, there will always be truths that transcend them—reminding us that understanding may always be richer than proof, and that the quest for knowledge may be unbounded.

