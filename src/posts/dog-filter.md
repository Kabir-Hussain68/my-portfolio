---
title: Post-Processing : Difference of Gaussians
date: 2026-11-14
type: Blog
featured: true
order: 2
thumb: assets/dog-thumb.jpg
image: assets/dog-cover.jpg
titled: true
excerpt: Aesthetically pleasing edge lines by blurring twice.
---
Effective edge detection is a never-ending rabbit hole of research in computer graphics. There are many different edge detection algorithms, such as the industry-standard Sobel operator and the Canny edge detector. All of these algorithms look distinctly different and have their own benefits and drawbacks, but what if I told you that effective and stylistically pleasing edge detection can be achieved by blurring an image twice? This method is known as the **"difference of Gaussians"**, or **"DOG"** for short.

## Basic DOG

Let's take an image and apply a Gaussian blur with any standard deviation. The image is effectively blurred. Now we take the same image and blur it again, using a scalar on the standard deviation. This gives us two images, where one is more blurred than the other. Now we subtract the two images.

$$
D = G_\sigma - G_{k\sigma}
$$

Before showing the output, let's pass it through a threshold function, where anything greater than the threshold is white and anything below it is black. This threshold function further accentuates the edge lines.

$$
T_{\varepsilon}(u) = \begin{cases} 1 & : u \ge \varepsilon \\ 0 & : \text{otherwise} \end{cases}
$$

Now, time for the output.

![DOG-Basic-Comparison](/assets/dog/DOG-Basic-Comparison.png)

But how is it possible that the difference of two blurs results in effective edge detection?

## Why the DOG Gives Edge Lines

In signal processing, the Gaussian function is known as a "low-pass filter," which means that, given a signal, high frequencies are suppressed while low frequencies are often left unchanged. This suppression is determined by the standard deviation of the Gaussian function. Since we have two different Gaussian filters applied with differing standard deviations, the difference nets us a band-pass filter that only lets select frequencies through. Conveniently, these frequencies tend to be areas of high contrast, which usually correspond to edges.

![Gaussain-Difference](/assets/dog/Gaussain-Difference.png)

## Extended DOG

The basic DOG filter lay dormant until 2012, when Holger Winnemöller and his team sought to add more artistic control and to unlock the DOG's true potential. They started by adding a simple scalar to the second blur, which already allows for a wider range of outputs.

$$
D = G_\sigma - \tau \cdot G_{k\sigma}
$$

This change was accompanied by a change to the threshold function, where anything below the threshold is now run through a parameterized hyperbolic tangent function.

$$
T_{\varepsilon}(u) = \begin{cases} 1 & : u \ge \varepsilon \\ 1 + \tanh\big(\varphi \cdot (u - \varepsilon)\big) & : \text{otherwise} \end{cases}
$$

These changes already improved the output, but there was a problem: this version of the DOG is very finicky. When "tau" increases, the average brightness of the output decreases, but the only way to emphasize edge lines is to increase "tau," which requires us to compensate by changing the other parameters. Winnemöller, unhappy with these interwoven parameters, decided to rewrite the DOG function so that the smaller blur increases alongside the larger Gaussian.

$$
D = (1 + \tau) \cdot G_\sigma - \tau \cdot G_{k\sigma}
$$

This simple change allows us to sharpen the edge lines without any change to the brightness. Here was born the **"Extended difference of Gaussians"**.

Now, time for an example:

![Extended-DOG-Comparison](/assets/dog/Extended-DOG-Comparison.jpg)

To add color to the image, we can sample the original image and multiply it with the output of the DOG. We can then add a scalar to control how much color we want in the output. This gives us a very stylized image.

![DOG-Extended-Color](/assets/dog/DOG-Extended-Color.png)

## Conclusion

The difference of Gaussians allows us to create very stylized images and gives us multiple looks. There are endless possibilities for the images we can create with this, but a problem remains: certain images have a lot of noise when the Extended DOG is applied. To fix this, we have to look into another version of the DOG that deals with "vector flow fields."

I haven't come to implementing that yet, but when I do, I will update this blog.

The code for this project is available on my GitHub.

## References

- <https://users.cs.northwestern.edu/~sco590/winnemoeller-cag2012.pdf>
- <https://www.youtube.com/watch?v=5EuYKEvugLU&t=6s>
