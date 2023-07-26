**AWS ECS Deployment with Auto Scaling and ALB - Readme**

## Introduction

This Terraform deployment sets up an AWS ECS (Elastic Container Service) cluster for hosting a scalable containerized application. The infrastructure includes an Application Load Balancer (ALB) with a DNS name, ALB listener, target group, auto scaling policies, CloudWatch alarms, and task definition.

## Prerequisites

Before running the Terraform scripts, ensure you have the following:

- An AWS account set up with appropriate permissions to create ECS resources.
- Terraform installed on your local machine.

## Deployment Steps

1. Clone the repository to your local machine.
2. Navigate to the root folder of the Terraform configuration.

### AWS Credentials

Make sure your AWS credentials are set up correctly, either by exporting them as environment variables or using an AWS profile with appropriate access.

### Configure Variables

Review and modify the `variables.tf` file as needed to set the desired configuration parameters. Some variables you might need to configure include the region, VPC ID, subnet IDs, desired container image, and other ECS-related settings.

### Initialize and Apply Terraform

1. Initialize Terraform:

   ```bash
   terraform init
   ```

2. Review the deployment plan to ensure everything looks correct:

   ```bash
   terraform plan -var-file=dev.tfvars -out dev.tfplan
   ```

3. Apply the Terraform configuration to create the ECS cluster and associated resources:

   ```bash
   terraform apply dev.tfplan
   ```

### Accessing the Application

Upon successful deployment, Terraform will output the DNS name of the ALB. You can access your application using this DNS name.

## Auto Scaling and CloudWatch Alarms

The deployment includes auto scaling policies for both CPU and memory utilization.

- **CPU Scaling Policies and Alarms**: The ECS service scales up or down based on CPU utilization. CloudWatch alarms trigger the scaling actions when CPU usage exceeds or falls below the defined thresholds.

- **Memory Scaling Policies and Alarms**: Similar to CPU scaling, ECS scales based on memory utilization. CloudWatch alarms are used to trigger scaling actions when memory usage exceeds or falls below the specified thresholds.

## Cleanup

To destroy the infrastructure and remove all resources, run:

```bash
terraform destroy
```

Note that this will remove all created ECS resources, including the cluster, ALB, target group, and scaling policies.

## Contribution

Contributions to this Terraform configuration are welcome! If you encounter any issues or have suggestions for improvements, feel free to create a pull request or open an issue.
