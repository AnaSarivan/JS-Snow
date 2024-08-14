# Snow Animation Project - JS-Snow

This project creates a charming snowfall effect using JavaScript, perfect for adding a touch of winter or holiday cheer to a web page.

**What It Does**

The heart of the animation is the Flake class, which handles everything from making each snowflake appear on the screen to letting it gently fall and eventually disappear. This animation adds a cozy, festive vibe to any website, making it feel more inviting and seasonal.

**Key Features**

_Unique Snowflakes:_ Each snowflake has its size, speed, and starting point, making the snowfall look natural and varied. 

_Smooth Falling:_ The snowflakes gently drift from the top of the screen, mimicking real snow. 

_Natural Disappearance:_ When a snowflake reaches the bottom of the screen, it gracefully vanishes, making space for new snowflakes to fall.


**The Flake Class**

The Flake class is responsible for managing the lifecycle of a snowflake. Here is a breakdown of its methods:

_Constructor:_ constructor(n, left, top, speed, size)

Initializes a new snowflake instance with specific properties: 

n: A unique identifier for the snowflake.

left: The horizontal position where the snowflake starts.

top: The vertical position where the snowflake starts.

speed: The speed at which the snowflake falls.

size: The size of the snowflake, affecting its scale.

_Method:_ fall(cw, ch, cb) 

Starts the falling motion of the snowflake. The parameters are:

cw: The width of the container.

ch: The height of the container (usually the height of the screen or viewport).

cb: A callback function to handle the disappearance of the snowflake once it reaches the bottom.

_Method:_ disappear(cb)

Stops the snowflake's movement and hides it from view. The callback function cb can be used to trigger additional actions upon disappearance.

_Method:_ update()

Updates the position of the snowflake on the screen based on its current properties.

_Method:_ render(root) 

Renders the snowflake as an HTML element within the specified root container. The snowflake is represented by a div element with a class of flake and styles applied for positioning and scaling.


 
