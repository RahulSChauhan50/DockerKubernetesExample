# to build a docker image

## `docker build -t <IMAGE_NAME> .`

# to run a docker image

## `docker run -d -p 8000:8000 --name <CONTAINER_NAME> -ti <IMAGE_NAME>`

# To create image and run multiple applications in multiple docker container using single docker-compose.yaml file

## `docker-compose up --build`

# To run the docker image in kube cluster

## `kubectl apply -f deployment.yaml`

# Get all deployments

## `kubectl get deployments --all-namespaces`

# delete deployment

## `kubectl delete deployment <deployment-name>`

# List running containers

## `kubectl get pods --all-namespaces`

# Delete pod in namespace

## `kubectl delete pods --all -n <namespace>`
