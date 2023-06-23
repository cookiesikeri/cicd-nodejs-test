# cicd-nodejs-test by ikeri ebenezer.

this is a simple nodejs app  deployted to aws, i will explain the pipeline flow below;

*Tools*:
1. version control: github
2. CI: github actions 
3. container registry: Elastic container repository (ECR)
4. container runtime: Elastic container service (ECS)
5. Auto-Testing tools: SonarQube
6. Image scanner: Trivy scanner.

*pipeline flow*:
1. push to maain branch to trigger pipeline
2. added OIDC for token security from aws IAM
3. when code is pushed to main branch, sonarqube is triggered to scan code for vulnerabilitues, code smell, duplicated codes and outdated packages.
if the code doesnt meet the standard, then its been sent back as a FAILED push with reason or reasons the code was flagged and tht can be seen in the github actions page.
5. if code passes all this then build starts immediately.
6. after a successful build, trivy scanner is triggered to scan the docker image properly for vulnerabilities and breakage that could affect the image in production and also for security checks.
7. after the scan by trivy, then image is then pushed to ECR
8. immediately the image gets to ECR, a scan is also triggered to scan the image by activating auto scan while creating the ECR in the terraform module.
9. once that is done, the latest image ID is sent to ECS task definition which has the container name already setup in the ECS Task definition.
10. then the following happnes;
a. a new service task is created with the latest task ID.
b. a task then runs the latest servcice tag.

*Networking*:
the app can be accessed using a load balancer connected to the EC2 using the target group which has the port of the app.

this should run in a live server .



