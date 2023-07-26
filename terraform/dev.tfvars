ServiceName          = "my-service" # Replace with your service name
EnvScheme            = "dev" # Replace with your environment scheme
TaskDefImage         = "ecr-repo-image" # Replace with the image definition to be used (idealy an image from AWS ECR)
zone_id              = "zoneid" # Replace with the zone id from Route53
zone                 = "zonename.net." # Replace with the zone name from Route53
Subnets              = ["subnet-1", "subnet-2"] # Replace with your Subnets
SecurityGroups       = ["sg-1"] # Replace with your Security groups

# Those can be personaliced as needed
TaskDefRoleArn       = "arn:aws:iam::accountid:role/default-ecs-role" 
EcsServiceRole       = "arn:aws:iam::accountid:role/ecsServiceRole"
AutoScaleRole        = "arn:aws:iam::accountid:role/ecsAutoscaleRole"

Vpc                  = "vpc-1" # Replace with your VPC
Cluster              = "dev-ecs" # Replace with your ECS cluster

# Personalice those values as needed for your service
TaskDefMemory        = 2048
TaskDefCpu           = 1024
TaskDefContainerPort = 8080
DesiredCount         = 2

LBCertificateArn     = "arn:aws:acm:region:accountid:certificate/certid" # Add your certificate as needed
AlbScheme            = true # This flag is to let the lb know if will be internal or external