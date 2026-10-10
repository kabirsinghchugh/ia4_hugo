---
title: "General Relativity Lectures Rewritten"
date: 2026-02-13T15:19:35+05:30
description: "A six-part visual lecture series on general relativity in classic lecture style — from worldlines and the metric tensor through geodesics, curvature, and Einstein's field equations."
draft: false
tags: ["physics", "general-relativity", "spacetime"]
portfolio_types: ["Lecture"]
featured_image: "/images/dashboard/logo.jpg"
featured_image_alt: "Abstract cover image for a general relativity lecture series"
gallery: []
---

## Einstein General Relativity

**Lecture 1: The Geometry of Spacetime**

General Relativity views gravity, space, and time differently than we might expect. Let us explore this view.

Consider a surface, perhaps curved. This surface represents **spacetime** – not merely space, nor only time, but a unified, four-dimensional fabric. We picture two dimensions here for clarity, though spacetime itself has three of space and one of time.

A curve drawn on this surface traces the history of an object, perhaps an apple, through spacetime. This path is its **worldline**. We can mark intervals along this worldline, like milestones on a road. Starting from an origin point, we number them: 1, 2, 3, and so on.

These marks represent **proper time**, denoted τ (tau). This is the time measured by a clock the apple itself carries; each tick marks an equal interval of the apple's own experienced time. The worldline, marked by proper time, now shows the apple's motion – its journey through spacetime.

To describe this journey mathematically, we lay a **coordinate system** – a grid – upon spacetime. This grid has an origin and axes, allowing us to assign a set of numbers, or **coordinates**, to each point on the apple's worldline. In our two-dimensional picture, we need two numbers; in four-dimensional spacetime, we need four.

This grid, however, is merely a tool for description; it is arbitrary. We could choose another grid, perhaps warped or rotated, and the apple's actual path, its worldline, would remain unchanged. Only our numerical description, the coordinates, would differ.

Consider an apple falling towards Earth. We, watching from afar, can measure its distance *r* from Earth's center and the time *t* elapsed on our clock. These measurements, *r* and *t*, serve as coordinates locating the apple in spacetime from our viewpoint. For example, the apple might pass the point where *t* = 1 second and *r* = 7000 kilometers. Note that *t* is our coordinate time, distinct from the apple's proper time τ.

In spacetime, nothing is truly stationary. An apple resting on Earth still travels forward through time. Every object moves through spacetime; its "speed" is simply distributed between space and time.

---

**Lecture 2: Velocity in Spacetime**

How, then, do we describe velocity in this four-dimensional spacetime?

The apple traces its worldline, described by coordinates like *t* and *r*. Yet these coordinates are just labels. Velocity requires more. At any point on the worldline, a tangent **vector** points in the direction of the apple's motion through spacetime. This is its **spacetime velocity**, denoted **v**.

The length, or magnitude, of this velocity vector is constant for all objects: the **speed of light**, *c*. We write this as ||**v**|| = *c*.

Physicists often simplify calculations by using units where *c* = 1 (measuring distance in light-seconds, for instance). In such units, ||**v**|| = 1, showing time as a measure of distance in spacetime.

We relate this spacetime velocity to our coordinates using **basis vectors**, **e**₀ and **e**₁, aligned with the coordinate axes (say, the *t* and *r* axes) at the point of interest. The velocity vector **v** can be written as a sum of these basis vectors, each scaled by a **component**: **v** = *v*⁰**e**₀ + *v*¹**e**₁.

The component *v*⁰ = d*t*/dτ shows how coordinate time *t* changes per unit of the apple's proper time τ. Likewise, *v*¹ = d*r*/dτ shows how the radial coordinate *r* changes per unit of τ.

**Einstein summation notation** simplifies writing sums over coordinates. Instead of **v** = *v*⁰**e**₀ + *v*¹**e**₁, we write **v** = *v*<sup>α</sup>**e**<sub>α</sub>. A repeated Greek index (like α), one superscript and one subscript, implies summation over all its possible values (here, 0 and 1).

Consider a satellite orbiting Earth, described by coordinate time *t* and angle φ. Its worldline spirals through spacetime. Its velocity vector has components *v*<sup>t</sup> = d*t*/dτ (temporal speed relative to proper time) and *v*<sup>φ</sup> = dφ/dτ (angular speed relative to proper time).

Can we find the magnitude *c* using the Pythagorean theorem on these components: (*v*<sup>t</sup>)² + (*v*<sup>φ</sup>)² = *c*²? No. This fails because coordinates are arbitrary and do not necessarily represent true distances. Two satellites at different heights might have the same angular speed component *v*<sup>φ</sup>, yet the outer one covers more distance and moves faster. The coordinate component *v*<sup>φ</sup> alone does not capture the true speed.

---

**Lecture 3: Geodesics - The Straightest Paths**

How, then, do we determine the path of an object moving freely? We explore **geodesics** – the straightest possible paths in curved spacetime.

On a flat surface, an object free from external forces follows a straight line. Its velocity vector remains unchanged as it moves along this path. On a curved surface, like a sphere, the straightest possible path is one where the velocity vector changes as little as possible relative to the surface itself. This path is a geodesic. On a sphere, these geodesics are great circles. The velocity vector, moving along a great circle, stays aligned with the surface's curve.

An object following a geodesic experiences no spacetime acceleration; its velocity vector is constant relative to spacetime's geometry. Mathematically, d**v**/dτ = 0 along a geodesic.

Recall that the velocity vector decomposes into components: **v** = *v*<sup>α</sup>**e**<sub>α</sub>. Taking the derivative with respect to proper time τ, using the product rule, yields: d**v**/dτ = (d*v*<sup>α</sup>/dτ)**e**<sub>α</sub> + *v*<sup>α</sup>(d**e**<sub>α</sub>/dτ).

The second term, *v*<sup>α</sup>(d**e**<sub>α</sub>/dτ), is crucial. In a curved coordinate system, or on a curved surface, the basis vectors **e**<sub>α</sub> themselves change direction as we move. The change in a basis vector **e**<sub>α</sub> depends on how it varies along each coordinate direction x<sup>μ</sup> and how fast we move in that direction (*v*<sup>μ</sup>): d**e**<sub>α</sub>/dτ = (∂**e**<sub>α</sub>/∂x<sup>μ</sup>) *v*<sup>μ</sup>. (Summation over μ is implied).

The rate of change of basis vector **e**<sub>α</sub> along coordinate direction x<sup>μ</sup>, namely ∂**e**<sub>α</sub>/∂x<sup>μ</sup>, is itself a vector. Its components in the basis **e**<sub>λ</sub> define the **Christoffel symbols**, Γ<sup>λ</sup><sub>μα</sub>: ∂**e**<sub>α</sub>/∂x<sup>μ</sup> = Γ<sup>λ</sup><sub>μα</sub> **e**<sub>λ</sub>. These symbols measure how the coordinate basis vectors twist and turn.

Substituting this back into the condition for zero acceleration (d**v**/dτ = 0) gives the **geodesic equation**:
d²x<sup>λ</sup>/dτ² + Γ<sup>λ</sup><sub>μα</sub> (dx<sup>μ</sup>/dτ)(dx<sup>α</sup>/dτ) = 0.
(Summation over α and μ is implied).

This equation describes how an object's coordinates x<sup>λ</sup> change as it follows a geodesic. The term d²x<sup>λ</sup>/dτ² is coordinate acceleration, while the term with the Christoffel symbols accounts for the changing coordinate system and spacetime curvature.

An airplane following a great circle (a geodesic) on Earth moves 'straight' relative to the spherical surface, yet its latitude and longitude coordinates change in a complex way, described by the geodesic equation with the appropriate Christoffel symbols for spherical coordinates.

Note that non-zero Christoffel symbols indicate the curvedness of the chosen *coordinate system*. Even flat spacetime can have non-zero Christoffel symbols if described using curved coordinates (like polar coordinates).

---

**Lecture 4: The Metric Tensor - Measuring Spacetime**

The geodesic equation requires the Christoffel symbols. How do we find them? The answer lies in the **metric tensor**, which defines the geometry of spacetime itself.

Recall that coordinate differences, like *dx*⁰ and *dx*¹, do not directly give the physical distance *ds* between nearby points if the coordinate system is distorted. The simple Pythagorean formula, (*ds*)² = (*dx*⁰)² + (*dx*¹)²?, fails unless the coordinates are Cartesian on a flat surface.

The general relationship between the squared distance (*ds*)² and small coordinate differences *dx*<sup>μ</sup> involves coefficients, *g*<sub>μν</sub>, organised into the **metric tensor**:

```markdown
[ g₀₀  g₀₁ ]
[ g₁₀  g₁₁ ]
```
(In 4D, this would be a 4x4 matrix).

Using Einstein notation (summing over repeated indices μ and ν), this relationship is concisely written as:
(*ds*)² = *g*<sub>μν</sub> *dx*<sup>μ</sup> *dx*<sup>ν</sup>.

The metric tensor, *g*<sub>μν</sub>, connects abstract coordinates to physical distances and angles.

For flat spacetime with Cartesian coordinates, the metric is the identity matrix ([1, 0], [0, 1]), yielding the standard Pythagorean theorem: (*ds*)² = (*dx*⁰)² + (*dx*¹)² (or the Minkowski equivalent in 4D). In polar coordinates (r, φ) on a flat plane, the metric is ([1, 0], [0, r²]), giving (*ds*)² = (*dr*)² + r²(*d*φ)². The *g*<sub>φφ</sub> = r² term shows that an angular step *d*φ corresponds to a larger distance *ds* when *r* is larger.

With the metric, we can correctly calculate the squared magnitude of the spacetime velocity vector **v** (which we know is *c*²): *c*² = *g*<sub>μν</sub> *v*<sup>μ</sup> *v*<sup>ν</sup>. This generalized Pythagorean theorem holds in any coordinate system for any spacetime geometry defined by *g*<sub>μν</sub>.

Furthermore, the metric tensor determines the Christoffel symbols. Since the metric defines the geometry and the coordinate system's properties, it contains the information needed to find how the basis vectors change. The Christoffel symbols Γ<sup>λ</sup><sub>μα</sub> can be calculated directly from the partial derivatives of the metric tensor components *g*<sub>μν</sub> using the formula:
Γ<sup>λ</sup><sub>μα</sub> = (1/2) *g*<sup>λρ</sup> (∂*g*<sub>ρα</sub>/∂x<sup>μ</sup> + ∂*g*<sub>ρμ</sub>/∂x<sup>α</sup> - ∂*g*<sub>μα</sub>/∂x<sup>ρ</sup>),
where *g*<sup>λρ</sup> is the inverse metric tensor. Knowing the metric tensor allows us to find the Christoffel symbols.

Thus, we have a clear path: the **Metric Tensor** (*g*<sub>μν</sub>) defines the geometry; from it, we compute the **Christoffel Symbols** (Γ<sup>λ</sup><sub>μα</sub>); these symbols enter the **Geodesic Equation**, which we solve to find the **Trajectories** of freely moving objects.

For instance, the metric for a sphere allows calculation of the Christoffel symbols needed to find great circles (geodesics). The simplest metric, the **Minkowski metric**, describes flat spacetime; its Christoffel symbols are all zero, leading to straight-line motion in Cartesian coordinates.

---

**Lecture 5: Einstein's Field Equations - Geometry Meets Matter**

What determines the metric tensor *g*<sub>μν</sub>? What shapes spacetime's geometry? The answer lies in the distribution of energy and momentum, described by the **Einstein field equations**.

The metric tensor *g*<sub>μν</sub> allows us to calculate distances and Christoffel symbols, defining the 'stage' of spacetime. But what dictates the form of this stage? Think of spacetime as a flexible sheet. Placing mass or energy onto it causes the sheet to curve. This illustrates the core idea: matter and energy curve spacetime.

Mathematically, how do we quantify curvature? On a flat surface, initially parallel lines stay parallel. On a curved surface, like a sphere, they converge or diverge – a sign of curvature. A precise measure involves parallel transport: slide a vector around a closed loop, keeping it parallel to itself at every step. On a flat surface, it returns unchanged. On a curved surface, its final direction differs from its initial one. This change reveals the curvature enclosed by the loop.

The **Riemann curvature tensor**, *R*<sup>ρ</sup><sub>σμν</sub>, quantifies this effect. It measures the change in a vector parallel-transported around a tiny loop and is calculated from the second derivatives of the metric tensor (and thus involves derivatives of the Christoffel symbols).

Contracting (summing over pairs of indices) the Riemann tensor yields the simpler **Ricci tensor**, *R*<sub>μν</sub>. It captures key aspects of curvature, relating to how volumes are distorted in curved spacetime. A further contraction gives the **Ricci scalar**, *R* = *g*<sup>μν</sup>*R*<sub>μν</sub>, a single number representing the average spacetime curvature at a point.

What causes this curvature? Energy and momentum do. Their distribution is described by the **energy-momentum tensor**, *T*<sub>μν</sub>. Its components represent physical quantities: *T*⁰⁰ is energy density, *T*⁰ⁱ is momentum density in the *i*-direction, *T*ⁱⁱ is pressure in the *i*-direction, and *T*ⁱʲ (for i ≠ j) represents shear stresses.

Einstein connected geometry and matter with his **field equations**:
*R*<sub>μν</sub> - (1/2)*R*g<sub>μν</sub> = (8πG/*c*⁴)*T*<sub>μν</sub>.

The left side, involving the Ricci tensor, Ricci scalar, and metric tensor, describes spacetime geometry. The right side, containing the energy-momentum tensor, describes the distribution of energy and momentum. The constant (8πG/*c*⁴) links the two, ensuring agreement with Newtonian gravity in weak fields.

As John Wheeler put it: "Spacetime tells matter how to move; matter tells spacetime how to curve." The field equations express the latter; the geodesic equation expresses the former.

An alternative form of the field equations, derived by taking the trace, is *R*<sub>μν</sub> = (8πG/*c*⁴)(*T*<sub>μν</sub> - (1/2)*T*g<sub>μν</sub>), where *T* is the trace of the energy-momentum tensor.

These are ten coupled, nonlinear partial differential equations, notoriously difficult to solve. Exact solutions exist only for highly symmetric situations. The **Schwarzschild solution** is a key exact solution describing the spacetime outside a spherical, non-rotating mass like a star or black hole. Its metric tensor, in standard coordinates (t, r, θ, φ), is:
(*ds*)² = -(1 - 2GM/*c*²r)*c*²(*dt*)² + (1 - 2GM/*c*²r)<sup>-1</sup>(*dr*)² + r²(*dθ*)² + r²sin²(θ)(*dφ*)².

---

**Lecture 6: Solving Problems in General Relativity**

Let us now review the procedure for applying General Relativity and look at some examples. To solve a problem using General Relativity, we generally follow these steps:

1.  **Select the Metric Tensor (g<sub>μν</sub>):** Identify the spacetime geometry appropriate to the situation. Common metrics include Minkowski (flat spacetime), Schwarzschild (spherical mass), Kerr (rotating mass), or Friedmann–Lemaître–Robertson–Walker (homogeneous, isotropic universe).
2.  **Choose Coordinates (x<sup>μ</sup>):** Select a coordinate system that simplifies the problem, often exploiting symmetries (e.g., spherical coordinates for a spherical mass).
3.  **Use Symmetries:** Simplify the mathematics by identifying constants of motion (like conserved energy or angular momentum arising from symmetries in the metric).
4.  **Determine the Motion:** Two main paths exist:
    * Use the velocity norm: For massive particles, *g*<sub>μν</sub> *v*<sup>μ</sup> *v*<sup>ν</sup> = *c*² (using a convention where this is positive; sometimes -c² is used), relating velocity components.
    * Use the Geodesic Equation: d²x<sup>λ</sup>/dτ² + Γ<sup>λ</sup><sub>μα</sub>(dx<sup>μ</sup>/dτ)(dx<sup>α</sup>/dτ) = 0. This requires computing the Christoffel symbols Γ<sup>λ</sup><sub>μα</sub> from the metric *g*<sub>μν</sub>. For light, the norm is zero, and proper time τ is replaced by an affine parameter λ.

Consider time dilation for an astronaut on the International Space Station (ISS). We use the Schwarzschild metric in spherical coordinates. Assuming a circular orbit simplifies the problem (r=constant, θ=π/2). The velocity norm equation *c*² = *g*<sub>tt</sub>(*v*<sup>t</sup>)² + *g*<sub>φφ</sub>(*v*<sup>φ</sup>)² connects the rate of coordinate time passage d*t*/dτ (*v*<sup>t</sup>) to the known orbital speed and metric components. Solving yields *v*<sup>t</sup> = d*t*/dτ = (1 - 2GM/*c*²r)<sup>-1/2</sup> (1 - *v*²/ *c*² )<sup>-1/2</sup>, where *v* is the orbital speed. This value, being greater than 1, shows that coordinate time *t* (measured far away) passes faster than the astronaut's proper time τ.

Next, consider a satellite falling radially towards the Sun. Again, we use the Schwarzschild metric. For radial infall (θ, φ constant), the relevant geodesic equations simplify. The equation for the radial coordinate *r* becomes: d²r/dτ² = -GM/r² + (3GM/*c*²r²)(dr/dτ)². This describes the satellite's acceleration, including a relativistic correction to the Newtonian -GM/r² term.

Lastly, examine light bending near a massive object. Using the Schwarzschild metric and setting the motion within a plane (θ=π/2), we solve the geodesic equation for light. Since light follows null paths, we use an affine parameter λ instead of proper time τ, and the velocity norm is zero: *g*<sub>μν</sub>(dx<sup>μ</sup>/dλ)(dx<sup>ν</sup>/dλ) = 0. The resulting trajectory equation can be written as d²u/dφ² + u = 3GMu²/*c*², where u = 1/r. This describes how the light path bends from a straight line (d²u/dφ² + u = 0).

These examples show how General Relativity accurately describes phenomena from time dilation and orbital mechanics to the bending of light by gravity. General Relativity provides a framework for understanding gravity as the geometry of spacetime, shaped by matter and energy – a profound view of the cosmos.
