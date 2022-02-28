pipeline {
  agent { label 'agent1' }
  stages {
    stage('build') {
      steps {
        sh 'yarn up'
      }
    }
    stage('Generate SBOM') {
      steps {
        sh 'syft packages dir:. --scope AllLayers'
      }
    }
  }
}
