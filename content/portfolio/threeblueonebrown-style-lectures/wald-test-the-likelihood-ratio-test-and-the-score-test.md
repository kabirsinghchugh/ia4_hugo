---
title: "Wald Test, the Likelihood Ratio Test, and the Score Test"
date: 2026-02-25T09:00:00+05:30
description: "A short lecture comparing the Wald, likelihood ratio, and score tests of a null hypothesis and what distinguishes them."
draft: false
tags: ["statistics", "hypothesis-testing", "econometrics"]
portfolio_types: ["Lecture"]
featured_image: "/images/dashboard/logo.jpg"
featured_image_alt: "Abstract cover image for a statistics lecture"
gallery: []
---

## Wald Test, the Likelihood Ratio Test, and the Score Test

Alright today, we're exploring the three classic statistical inference tests: the Wald test, the Likelihood Ratio test, and the Score test. If you're wondering why there are three tests that do the same thing, don't worry, so am I.

⸻

The Setup: Hypothesis Testing, Because Why Not

Let's say you have some parameter called $\theta$ (that's "theta" for people who use Greek letters to sound smart) and the null hypothesis says $\theta$ equals some value, $\theta_0$. It could be zero, but we're being fancy, so let's leave it general. Your job: try to show that $\theta$ is not $\theta_0$, which in the world of statistics is the equivalent of stirring up drama for fun.

You have a likelihood function centred around whatever number your sample spat out—call that $\hat{\theta}$. But of course, it's statistics, so everything comes with a side of "variance". The question is: how far away is $\hat{\theta}$ from the null value, if the null hypothesis were true? Basically, is your sample so weird that you can justify publishing a paper?

⸻

Quick Detour: Log-Likelihood, Because That's What All the Cool Kids Do

Now, statisticians like to take the log of the likelihood function. Why? Because it makes the maths easier and lets you sound smug at parties. The point that maximises the likelihood is the same as the one that maximises the log-likelihood, so don't worry, your life's work isn't in vain.

⸻

Three Ways to Judge Your Data: The Unholy Trinity

So, how do you check just how "extreme" your result is? Turns out, there are three ways, because mathematicians get bored easily:

1. Wald Test (Horizontal Distance—The Lazy Eyeballing Method)

Take the horizontal distance between your sample estimate $\hat{\theta}$ and the null value $\theta_0$. Square it, then divide by the "information" (which, if you have one variable, is just the variance, or its evil twin, the inverse of variance).

$$
\text{Wald statistic} = \frac{(\hat{\theta} - \theta_0)^2}{\text{Variance under null}}
$$

This is $\chi^2$-distributed with 1 degree of freedom, which means it'll haunt you in every statistics class forever. If you have more parameters, degrees of freedom go up and so does your pain.

If you want to sound clever, you can use the "approximate" Wald test, which just means you use your sample estimate instead of the theoretical null value. In large samples, it doesn't matter. Like most things in statistics, as $n$ gets big, all sins are forgiven.

Also, if you want to simplify even more, take the square root and you get the standard Z-test, which you've probably already seen and traumatised yourself with in first year.

⸻

2. Likelihood Ratio Test (Vertical Distance—The Sophisticated Hand-Wave)

Now, imagine looking at the heights of your log-likelihood function at $\hat{\theta}$ and at $\theta_0$. Take the difference, multiply by two, and you've got yourself a test statistic:

$$
\text{LRT statistic} = 2 \left[ \log L(\hat{\theta}) - \log L(\theta_0) \right]
$$

This is also $\chi^2$-distributed. Now, you might be wondering, "Where's the ratio?" Don't worry, it's hiding in the logs. Logs turn division into subtraction, which is why they're your friend—unlike whoever wrote your exam.

If you re-parameterise (change how you express $\theta$), the likelihood ratio test doesn't care. The other two tests? They'll throw a fit. That's why the LRT is sometimes the teacher's pet.

⸻

3. Score Test (Slope at the Null—The Tryhard Approach)

Finally, you can look at the slope of the log-likelihood at $\theta_0$. At the peak (MLE), the slope is always zero, because, well, that's what "maximum" means. But at the null value, the slope might not be zero. The score test asks: how non-zero is that slope? Square it, divide by the information, and that's your statistic:

$$
\text{Score statistic} = \frac{[\text{Score at } \theta_0]^2}{\text{Information at } \theta_0}
$$

Also $\chi^2$-distributed. If you're keeping score (no pun intended), that's three different ways to get the same result. Because why make life simple.

⸻

### So… Why Three Tests?

Good question. In large samples, it barely matters which you use—your result will be the same and you can pick whichever test has the sexiest name. In small samples, there are subtle differences, but if you're working with small samples in real research, you've got bigger problems anyway.

One edge: the likelihood ratio test plays nice when you mess with parameters. Otherwise, just use what's convenient or what your textbook says.

⸻

### Conclusion

That's it for the three musketeers of hypothesis testing. If you want proofs, look in your textbook. Or don't. Either way, good luck rejecting your null hypotheses

