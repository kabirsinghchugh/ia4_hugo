---
title: "3Blue1Brown: Topology"
date: 2026-02-13T15:19:35+05:30
description: "A transcript-style lecture proving that every closed continuous curve contains an inscribed rectangle, developed through Möbius strips and Klein bottles."
draft: false
tags: ["topology", "mathematics", "geometry"]
portfolio_types: ["Lecture"]
featured_image: "/images/dashboard/logo.jpg"
featured_image_alt: "Abstract cover image for a topology lecture"
gallery: []
---

## 3blue1brown - Topology

Here's a transcript of the 3blue1brown video on topology, incorporating formal equations and mathematical notation where appropriate:

**Introduction**

Here's a question that nobody in the world knows the answer to. Suppose you have some closed continuous curve, which essentially means some squiggle you could draw on paper without lifting the pen that ends where it starts. Formally, this can be represented as a continuous function:

- **Closed Continuous Curve:** γ:[0,1]→R2, with γ(0)=γ(1)

If you can find four points somewhere on this loop that make the vertices of a square, it's called an inscribed square of the loop. And the unsolved question is whether every possible closed continuous loop like this necessarily has an inscribed square. The question was originally posed by Otto Toeplitz in 1911, and it's commonly known as the inscribed square problem.

One of my all-time favorite pieces of math, easily in the top five, is a very beautiful proof for a simpler version of this question, asking instead whether you can necessarily find an inscribed rectangle. The argument is originally due to Herbert Vaughan, and as a spoiler, our discussion here is going to lead you to think about this shape right here, what's known as a Klein bottle, but it won't come up as some curiosity or a trinket. It arises as a natural problem-solving tool.

**Reframing the Problem: Rectangles and Pairs of Points**

The first step in proving that any closed loop contains a rectangle is going to be to reframe the question just a little bit. Instead of thinking about four points that are the vertices of a rectangle, think about searching for two distinct pairs of points such that the lines connecting each pair have the same midpoint and they have the same length.

- **Rectangle Condition:** Find distinct pairs {a,b} and {c,d} on the curve γ such that:  
		1. Midpoint Equality: (a+b)/2=(c+d)/2  
		2. Length Equality: ∥a−b∥=∥c−d∥

Hopefully it's not too hard to convince yourself that this really is the same thing as searching for a rectangle. If I told you, hey, I found two line segments somewhere out in space, and I further specify that both of them have the same center, and also that both segments have the same length, then the four endpoints of those two different lines have to form a rectangle.

**Mapping Pairs of Points to 3D Space**

Given some arbitrary closed loop γ, what you and I are going to do is somehow think about all possible pairs of points on that loop. For any one of these pairs, we care about two things. The first is where its midpoint sits, which you might think of as two numbers worth of data, like the _xy_ coordinates on the plane where the loop sits. The other thing we care about is the distance between those points, which is another data point.

Now if you're a mathematician and you see three numbers worth of information like this, it is a very natural step to try packaging them together and think of that data as being a single point in a three-dimensional space.

- **Mapping Function (M):** Define a function M that takes an _unordered_ pair of points on the curve and maps it to R3:  
		- M({γ(s),γ(t)}) = ((γ(s)+γ(t))/2, ∥γ(s)−γ(t)∥), Where:  
				 - s,t∈[0,1] are parameters representing points on the curve.  
				 - (γ(s)+γ(t))/2 is the midpoint (a 2D point).  
				 - ∥γ(s)−γ(t)∥ is the distance between the points (a scalar).  
				 - M: {{p, q} | p,q in gamma} -> R^3

In our example, if you imagine the loop sitting on kind of an _xy_ plane inside that space, and its midpoint has some coordinates _xy_, then this 3d point that we care about, the one packaging _xy_ and _d_, could be thought about as a point directly above that midpoint such that the distance off the plane matches the distance between the pair of points on the loop.

The important feature of this mapping that we're going to rely on is that it's continuous.

- **Continuity of M:** For any ε>0, there exists a δ>0 such that if ∥{γ(s1),γ(t1)}−{γ(s2),γ(t2)}∥<δ, then ∥M({γ(s1),γ(t1)})−M({γ(s2),γ(t2)})∥<ε. (This uses a suitable notion of distance between unordered pairs).

**The Surface of Outputs and Self-Intersection**

In our search for inscribed rectangles, with respect to this mapping, it amounts to searching for a kind of coincidence when two distinct pairs of points map to the same output, since by definition that would mean they have to have the same midpoint and be the same distance apart.

- **Rectangle as Self-Intersection:** Find distinct pairs {γ(s1),γ(t1)} and {γ(s2),γ(t2)} such that:  
 M({γ(s1),γ(t1)})=M({γ(s2),γ(t2)})

If you imagine yourself as a mathematician mulling this over, you want to know how you can prove that this kind of collision would happen. Looking over all possible pairs of points on the loop, and all their corresponding three-dimensional outputs, how could you know for sure that a collision must happen?

The set of all possible outputs of this map forms a surface in 3D space. Every point you see in the surface that feels like self-intersection in this way corresponds to some inscribed rectangle in the loop. So far all of this has just been illustrated with a single example loop, but keep in mind every possible loop that you could draw on the plane has its own corresponding unique surface sitting above it. Proving that this kind of self-intersection has to happen no matter what loop you start with really comes down to getting to know this surface and who it really is and what it's all about.

**The "Gun Hanging on the Wall": Limiting Behavior**

I want to draw your attention to a certain gun hanging on the wall. I mentioned how near the plane of the curve the cross sections of the surface look approximately like the curve itself. Why is that? Well, think about a pair of points that are really close together. Because the distance between them is small, the output has a very small z-coordinate, and the midpoint is close to both of those points themselves. In the extreme, if you have a pair of points that's really just the same spot on the curve listed twice, then the output of this mapping is that same point on the curve.

- **Limit Condition:** As t→s, M({γ(s),γ(t)})→(γ(s)). This lies on the original curve in the xy-plane.

**The Torus and Unordered Pairs**

The next step for how we're going to do this is to come up with a second, very natural way to associate pairs of points on a loop with a certain other surface. To set this up, it helps to give the loop a kind of internal coordinate system, let's say associating each point on the loop with a number between 0 and 1.

Now of course we don't care about single points on the loop, our whole study here is about pairs of points on the loop.

If you have some second point, naturally you might think of a second unit interval maybe along a y-axis.

We can represent all _ordered_ pairs of points on the loop using a unit square:

- **Ordered Pairs:** (s,t)∈[0,1]×[0,1], where s and t are the parameters of the two points on the curve.

However, due to the closed nature of the loop (γ(0)=γ(1)), we need to identify the edges of the square:

- (0,t) is identified with (1,t) for all t∈[0,1].
- (s) is identified with (s) for all s∈[0,1].

Gluing these edges together forms a torus.

- **Torus (T^2):** T2=[0,1]×[0,1]/∼, where ∼ is the equivalence relation defined by the edge identifications.

**The Mobius Strip: Unordered Pairs**

But it matters whether we care about the order of a pair of points.

Clearly what we want is to prove that there are non-trivial rectangles, and for that you need to think of the pair of points as being unordered, in the sense that a,b and b,a should really refer to the same thing.

To represent _unordered_ pairs, we identify points across the diagonal of the unit square:

- (s,t) is identified with (t,s) for all s,t∈[0,1].

This identification, combined with the previous edge identifications, leads to the construction of a Mobius strip.

- **Mobius Strip (M):** The quotient space of the unit square under _both_ sets of identifications.

**The Key Connection: Mapping the Mobius Strip**

We now have two important mappings:

1. The mapping M from unordered pairs on the curve to 3D space.
2. A continuous bijection (homeomorphism) between unordered pairs on the curve and points on the Mobius strip.

Combining these, we have a continuous function from the Mobius strip to the surface in 3D space:

- **Composition:** f:M→R3, where f is the composition of the mapping from the Mobius strip to unordered pairs and the mapping M.

The "gun hanging on the wall" becomes crucial here: The edge of the Mobius strip corresponds to pairs of the form {γ(s),γ(s)}, which map to points on the original curve in the xy-plane under M.

- **Edge Constraint:** The image of the edge of the Mobius strip under f must lie in the xy-plane.

**The Impossibility Argument (and the Caveat)**

The core of the argument is that it's _impossible_ to embed a Mobius strip in 3D space such that its edge lies in a plane _and_ the rest of the strip lies strictly _above_ that plane, without self-intersections.

- **Claim:** There is no continuous injective function f:M→R3 such that:  
		- f(edge(M)) lies in the xy-plane.  
		- For all p∈M∖edge(M), the z-coordinate of f(p) is strictly positive.

If this claim is true, then our function f _must_ have self-intersections, which means there exist distinct pairs of points on the curve that map to the same point in 3D space under M, and thus form a rectangle.

**The Klein Bottle and the Reflection Argument**

To prove the impossibility claim, we consider the reflection of the surface (the image of the Mobius strip) across the xy-plane. Gluing the original surface and its reflection together along their common boundary (the original curve) creates a closed surface. This closed surface is a Klein bottle.

- **Reflection:** Let R:R3→R3 be the reflection across the xy-plane: R(x,y,z)=(x,y,−z). Then R(f(M)) is the reflected surface.
- **Gluing:** The union f(M)∪R(f(M)), with the edges identified, forms a Klein bottle.

It is a known fact that a Klein bottle cannot be embedded in 3D space without self-intersections. This is a more general property of closed, non-orientable surfaces.

- **Klein Bottle Impossibility:** There is no continuous injective function K:K→R3, where K is a Klein bottle.

Since the Klein bottle formed by our construction _must_ have self-intersections, and these intersections cannot occur on the xy-plane (because the original surface and its reflection are distinct except on the boundary), the original Mobius strip must have had self-intersections. This completes the proof.

**Inscribed Squares and Smoothness**

For smooth curves, the inscribed rectangle problem can be extended. Smoothness means that curve's coordinate function gamma is infinitely differentiable.

- **smooth curves:** gamma is an element of C^infinity
- **Smooth Curve Tangent:** For a smooth curve γ, the tangent vector γ′(s) is well-defined for all s.

Greene and Lobb's 2020 result uses embeddings of Mobius strips and Klein bottles in 4D space, leveraging the smoothness of the curves to handle the angle between the line segments forming the rectangle.

**Conclusion**

The main takeaway is that topological objects like Mobius strips and Klein bottles are not just curiosities. They arise naturally as tools for solving problems, even problems that seem purely geometric at first glance. Topology is about understanding continuous relationships and the constraints they impose, providing a powerful framework for proving existence and impossibility results.

