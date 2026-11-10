---
title: Understanding Graphics : Silksong
date: 2026-11-06
type: Blog
featured: true
order: 1
thumb: assets/silksong-thumb.jpg
image: assets/silksong-cover.jpg
titled: true
excerpt: A high-level walk through of how Unity renders a single Silksong frame.
---
In 2025, Team Cherry released Hollow Knight: Silksong to universal acclaim. The gameplay is fair but challenging, with tough bosses and enemies. It shows what Team Cherry learned in the 8 years since they released Hollow Knight: they built on the already excellent world building and design, and they've mostly perfected the Metroidvania style of game. In this blog we'll look at what makes Silksong so pleasing to look at, and why my games look like Super Mario Bros on the NES.

> **Note**: This is a high-level dive into Unity's render pipeline, not an in-depth analysis. I used RenderDoc for the frame capture.

The frame is from an early part of the game, so this article is spoiler free.

![Silksong frame](/assets/silksong/Silksong-base-frame.png)


## 1. Background
Unity renders the frame upside down, so I'm showing the flipped images to avoid headaches.

After clearing the screen, Unity draws the background assets one by one using the painter's algorithm. It's the same problem painters have: drawing over a section they've already painted. In graphics terms, that's wasted work, because the renderer draws pixels and then overwrites them with other pixels. That's inefficient, but Silksong is mostly 2D sprites, so it still renders insanely fast. The background takes roughly 400 nanoseconds.

![Silksong frame](/assets/silksong/Silksong-Background.png)

However, the render doesn't look right and the assets look terrible. That's because the background assets are rendered at `640 x 360`, which is a third of the game's `1920 x 1080` resolution in each direction. They get upscaled in a later render pass.

## 2. Depth of Field and Parallax
To give the world a sense of depth, a depth of field pass runs over the assets and blurs the background. This does two things: it adds to the grandiosity of the world, and it puts the focus on Hornet.

![Silksong frame](/assets/silksong/Silksong-DOF.png)

In games like Silksong, when the player moves, the background moves a little. This is called parallax. Think of looking out of a car window: nearby objects like trees fly past, while faraway objects like mountains barely seem to move. The closer something is, the more parallax it shows. In games, parallax adds a sense of depth.

## 3. Particles, Lighting, Vignette and Bloom
The renderer keeps drawing the assets closer to the camera one by one. Particles use Unity's built-in particle renderer, which draws each particle as a single sprite with its color changing depending on location.

![Silksong frame](/assets/silksong/Silksong-Particles.png)

To create ambiance and pull the player's focus towards the center of the screen, a vignette post-processing pass runs over the frame. It isn't a normal vignette, though, because it's centered on Hornet instead of the camera. If she jumps, the vignette moves with her.

![Silksong frame](/assets/silksong/Silksong_Vignette.png)

Silksong also uses light sources. The game has no shadows and no PBR model. Lighting is just used to brighten things up and pull the player's eye towards points of interest. There's also a bloom buffer, which is very slight but adds much needed contrast.

![Silksong frame](/assets/silksong/Silksong-lightning.png)

This gives us the base Silksong render, but the colors look off compared to the final image we see when playing.

## 4. Post Processing and Color Grading
To make the colors more pleasing to the eye, Team Cherry applies post-processing effects, including color grading for stylization. Tone mapping converts the HDR values to 0 - 255 RGB values for the display, and the grading gives the final image its look.

![Silksong frame](/assets/silksong/Silksong-Color-Grading.png)


## 5. Final Render Pass
All the HUD elements are stacked over the rendered image in a final render pass. Then Unity flips the image on the Y axis.

![Silksong frame](/assets/silksong/Silksong-Final-Render.png)


## 6. Conclusion: Is Hollow Knight: Silksong 2D or 3D?
Silksong's render passes are inefficient because they redraw pixels that were already drawn, but that's fine because GPUs are powerful enough to render 2D sprites without any trouble.

Now, is Hollow Knight: Silksong 2D or 3D? It has the vibe of a 2D game, since Hornet moves along 2 axes. But the assets are layered on top of one another in 3D space, and because the camera is fixed on the Z axis, the game gets projected to look 2D. So Silksong isn't a 2D game like Shovel Knight or Celeste. It's a 3D game that looks 2D.

This was a very interesting case study of Silksong's and Unity's render pipeline. One side note: no amount of shader effects can replicate the game's hand-drawn sprites and animation. It's a testament to Team Cherry that they made such beautiful and unique art for every section of the game. More articles breaking down games are coming soon.
