---
title: Awesome Title
description: Describe this awesome content
tags:
  - "great"
  - "awesome"
  - "rad"
---

The game runs at 60 fps, keep this in mind when creating animations. Each frame will be on the screen for ~16.66ms.

Skeletons are named in snake_case, for example, blue_fish, huge_win.

Spine events allow the frontend to play sounds or run some code segment. Events should have names in camelCase and start with on , for example, onBeforeReelStop or onWin.

We try to avoid float values ​​in events, as there may be situations with incorrect rounding of the number. If use is necessary, we limit ourselves to three decimal places.
You can use animation folders, the names are also in snake_case.

Animations can be of any length. When running animations in different objects at the same time, a desynchronization of 1-2 frames is possible, the player will not notice this, but do not try to make perfect synchronization.

For one object displayed on the screen (for example, a symbol), we use one skeleton. If you need independent effects that should be played directly under/above this object, the animation of which cannot be played simultaneously with the main idle or winning animation for some reason, then you need to remove them to a separate skeleton bone. These effects will be played in parallel on another track at the right time. In code, this is easier to do than several separate Spine objects.

We can play any number of animations in parallel on one skeleton. If these animations modify the same keys, animation conflicts are possible (something will twitch). Therefore, for example, you can separately animate the body and arms of a character to simplify parallel playback. Mesh spine transformations cannot be run in parallel, since the entire deformation of the mesh is described by one key.
