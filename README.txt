Udemy course: Microservices with Node JS and React, Stephen Grider

*** Blog app ***
GitHub: git@github.com:nirgluzman/Microservice-Blog-App-Kubernetes.git

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
Kubernetes - General
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


------------------------
Ingress-Nginx
------------------------
https://github.com/kubernetes/ingress-nginx
https://kubernetes.github.io/ingress-nginx/deploy/
https://kubernetes.github.io/ingress-nginx/deploy/#quick-start

Nginx vs. Ingress-Nginx:
https://www.udemy.com/course/docker-kubernetes-the-practical-guide/learn/lecture/22627951#questions/20986912
https://medium.com/@hagaibarel/kubernetes-and-elbs-the-hard-way-c59a15779caf


*) Update host file in Windows -> posts.com
C:\Windows\System32\drivers\etc\hosts

*) Ingress-Nginx config:
https://kubernetes.github.io/ingress-nginx/user-guide/basic-usage/
https://kubernetes.io/docs/concepts/services-networking/ingress/
https://stackoverflow.com/questions/72224230/error-resource-mapping-not-found-make-sure-crds-are-installed-first


------------------------
Skaffold
------------------------
https://skaffold.dev/

# enable continuous local development on an application:
skaffold dev  -> https://skaffold.dev/docs/workflows/dev/

# Kubernetes resource cleanup:
skaffold delete  -> https://skaffold.dev/docs/cleanup/


Automates many tasks in a Kubernetes dev environment.
Making it easy to:
- update code in running Pods
- create/delete all objects tied to a project at once

Skaffold watches an application's source files.
When it detects changes, it rebuilds the images (or sync files to your running containers), pushes any new images,
tests built images, and redeploys the application to the cluster.

** It is important that all services should be running in DEV mode (e.g. nodemon, create-react-app), so that changes can be incorporated into the code while executing (auto restart).
** Sometime we've challenges to detect files changes in containers.