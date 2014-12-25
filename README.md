Leap Motion Expirements
===========
This is a playground application to experiment with Leap Motion's [client side Javascript API](https://developer.leapmotion.com/documentation/javascript/api/Leap_Classes.html). The application is a static HTML5, CSS, and Javascript site served up by a NodeJS server. The Javascript files are concatenated and minified by a Grunt task and served up from the public directory. See below for installation instructions.

Here's what it looks like in action:
![image](http://g.recordit.co/K4rpRkEms1.gif)

Pre-requisites
---------------
- NodeJS
- NPM
- [A Leap Motion controller](https://www.leapmotion.com/)

Installation
--------------
1. Install the Leap Motion controller software found at [https://www.leapmotion.com/setup](https://www.leapmotion.com/setup).
2. Clone the repo and install its dependencies:
```sh
$ git clone http://github.com/Diasporism/leap_motion.git
$ cd leap_motion/
$ npm install
```
3. Plug in the Leap Motion controller.

Concatenate and Minify Javascript Files
---------------
```sh
$ grunt
```

Run the Server
---------------
Just type...
```sh
$ node server.js
```
and visit [localhost:3000](http://localhost:3000).

Production URL
---------------
If you don't feel like cloning the repo and running the server locally, you can visit the production website at [http://leap-motion.herokuapp.com/](http://leap-motion.herokuapp.com/) and play with it there.

Warning/Disclaimer
---------------
Currently, the website takes up a lot of computer resources due to the high framerate at which Leap Motion gathers data (up to 200 fps). If your computer starts to experience slowness, close the web page and things should go back to normal.

I'm still working on optimizing and tweaking the way Leap Motion gathers and displays data. Stay tuned for updates.
