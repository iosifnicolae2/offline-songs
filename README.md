# Offline Songs

A sample web app that lets you browse a list of songs on your mobile even without a permanent internet connection.

## Installing

Whilst you don't need to use the build process, if you want to host this publicly it is recommended
that you optimise all the assets for deployment and as such it is recommended that you run the
following command in the current working directory:

    npm install

## Building

If you want to run this app locally, you don't have to build the app, the build process is just there
to optimize everything for deployment.

There is a build process that will optimize the images, styles and JS ready for deployment.  To run this
simple execute the following command from the root directory:

    gulp

## Running

There are number of ways to run Airhorner.  The simplest (if you have Python installed) is to
start a simple web server up is to use Python's SimpleHTTPServer.  Run the following:

    npm start

This will just load the existing contents of the directory up and it won't support things like live
reload and inline optimizations.  To run the project with optimizations in place and to support live reload
run the following command:

    gulp serve
