#!groovy

node('chase-dev') {
    try {
        stage('Checkout') {
            echo 'configure started'
            git branch: '${BRANCH_NAME}', credentialsId: '1ec53419-3239-427e-a64a-d77a95d56682', url: 'https://git.heroku.com/saloon-management.git'
            echo 'configure done'
        }
        stage('Build Dev Image') {
            if (isUnix()) {
                // sh 'sudo -S true'
                sh 'sudo docker-compose --project-name sample_service_apis build dev-app'
            } else {
                bat 'sudo docker-compose --project-name sample_service_apis build dev-app'
            }
        }

        stage('Code coverage') {
             if (isUnix()) {
               //sh 'sudo docker-compose --project-name companies_management_domain_apis  run --rm dev-app npm run code_coverage'
             }else {
               //bat 'sudo docker-compose --project-name companies_management_domain_apis  run --rm dev-app npm run code_coverage'
             }
            //publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: './coverage', reportFiles: 'index.html', reportName: 'Code Coverage', reportTitles: 'Code Coverage'])
        }


        stage('Code Quality') {
            if (isUnix()) {
                 sh 'sudo docker-compose --project-name sample_service_apis run --rm dev-app npm run code_quality'
            } else {
               bat 'sudo docker-compose --project-name sample_service_apis run --rm dev-app npm run code_quality'
            }

            // publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: './reports/plato', reportFiles: 'index.html', reportName: 'Code Quality', reportTitles: 'Code Quality'])
            // echo 'Code Quality ended'
        }

    }

    finally {
        stage('Shutingdown Container') {
            if (isUnix()) {
                sh 'sudo docker-compose --project-name sample_service_apis down'
            } else {
                bat 'sudo docker-compose --project-name sample_service_apis down'
            }

        }

    }

}




