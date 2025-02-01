This is an example of using a web bundler to combine javascript files into a single one that can be transmitted over the network. The static web page is under the /dist folder. I've used the bundler Parcel and ran: npx parcel build index.html --no-optimize to create an unminified production build.

Here is the network trace:

![image info](./images/network-trace.jpg)

Unlike in the ES6 module example, only one javascript file is fetched that contains the bundle.