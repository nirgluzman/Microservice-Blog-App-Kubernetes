Udemy course: Microservices with Node JS and React, Stephen Grider

*** Blog app ***
GitHub: git@github.com:nirgluzman/Microservice-Blog-App.git

------------------------
Docker
------------------------
# build a docker image with a customized tag
docker build -t nirgluzman/posts:0.0.1 .

# create and run a new container from an image with a customized name
docker run -p 4000:4000 --detach --rm --name <container> <image>

# create start a new container from an image, but override the default command -> in this example: start an interactive shell in the container
docker run -p 4000:4000 -it --name <container> <image> sh


------------------------
Kubernetes
------------------------
Pod vs. Deployment vs. Service
*) Pods - single container or a group of related containers that share storage and networking resources.
*) Deployment - management tool used to control the way Pods behave; defines a pod's desired behavior or characteristics.
*) Services - sets up networking in a Kubernetes cluster; responsible for enabling network access to a set of pods.



Steps:
1) Build an image for the Event Bus:  docker build -t nirgluzman/event-bus .
2) Push the image to Docker Hub:  docker push nirgluzman/event-bus
3) Create a deployment for Event Bus:  kubectl apply -f event-bus-depoloyment.yaml
4) Create a Cluster IP service for Event Bus and Posts
5) Wire it all up!