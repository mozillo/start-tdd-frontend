## Table of Contents

- [Start TDD from a simple code](#start-tdd-from-a-simple-code)


## Start TDD from a simple code

Create React App is divided into two packages:

* [`enzyme`](https://github.com/airbnb/enzyme) is a javaScript testing utilities.

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

[Ejecting](#npm-run-eject) lets you customize anything, but from that point on you have to maintain the configuration and scripts yourself. This can be daunting if you have many similar projects. In such cases instead of ejecting we recommend to *fork* `react-scripts` and any other packages you need.
