pipeline {
    agent any

    environment {
        IMAGE_NAME = "minhnhat24112001/portfolio"
        TAG = "${BUILD_NUMBER}"
        KUBECONFIG = "/etc/rancher/k3s/k3s.yaml"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Nhatktvn/portfolio.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh """
                docker build -t $IMAGE_NAME:$TAG .
                """
            }
        }

        stage('Push Docker') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh """
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push $IMAGE_NAME:$TAG
                    """
                }
            }
        }

        stage('Deploy to k3s') {
            steps {
                sh """
                sed -i 's|image: .*|image: $IMAGE_NAME:$TAG|g' k8s/deployment.yaml

                kubectl --kubeconfig=$KUBECONFIG apply -f k8s/
                """
            }
        }
    }
}