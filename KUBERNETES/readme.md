
# Kubernetes

### Cluster
    Conjunto de nós com pod's que executam aplicações em contêineres.

### Pod 
    Unidade que contém os containers. No Pod é onde de fato sua aplicação será executada

### Deployment 
    É responsável por criar e gerenciar um replicaset.

### ReplicaSet
    É o responsável pela manutenção de estado dos pod's. Podendo escalar, deixando sempre a quantidade de pod's pré-definida, em execução

# Utilizando Kind

### Criar um cluster 
    kind create cluster

### Criar um cluster usando um arquivo de configurações
    kind create cluster --config=kind.yaml --name=fullcycle

### Exibe todos os clusters 
    kind get clusters

### Para conectar com o cluster
    kubectl cluster-info --context kind-kind    

### Exibe todos os nodes
    kubectl get nodes

### Exclui um cluster 
    kind delete clusters kind

### Muda o contexto para utliziar outro cluster. No exemplo, mudamos para utilizar o minikube
    kubectl config use-context minikube

# Pod

### Criar um pod 
    kubectl apply -f k8s/pod.yaml 

### Excluir um pod
    kubectl delete pod goserver

### Exibe todos os pods
    kubectl get pods

### Descreve detalhes do pod 
    kubectl describe pod goserver-2mrg4

# ReplicaSet

### Criar um replicaset 
    kubectl apply -f k8s/replicaset.yaml 

### Exibe todos os replicasets
    kubectl get replicasets

### Excluir um replicaset
    kubectl delete replicaset goserver

# Deployment

### Criar um deployment 
    kubectl apply -f k8s/deployment.yaml 

### Exibe todos os deployments
    kubectl get deployments

### Excluir um deployment
    kubectl delete deployment goserver

# Rollout
- Permite retornar para uma revisão anterior de um deployment

### Exibindo as revisões de um deployment 
    kubectl rollout history deployment goserver

### Retornando para a revisão anterior
    kubectl rollout undo deployment goserver

### Retornando para uma revisão específica com `--to-revision`
    kubectl rollout undo deployment goserver --to-revision=5

# Service
- Atua como load balance ao direcionar a conexão aos pods

### Criar um service 
    kubectl apply -f k8s/service.yaml 

### Exibe todos os services
    kubectl get svc

### Excluir um service
    kubectl delete svc goserver-service

# port-forward
- Redireciona portas para acessarmos a aplicação externamente

###
    kubectl port-forward svc/goserver-service 9000:80

