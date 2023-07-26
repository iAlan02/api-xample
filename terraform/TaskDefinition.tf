resource "aws_ecs_task_definition" "task-definition-service" {
  family = "${var.ServiceName}-${var.EnvScheme}"
  container_definitions = jsonencode([
    {
      name   = "${var.ServiceName}-${var.EnvScheme}"
      image  = "${var.TaskDefImage}:${var.ServiceVersion}"
      cpu    = var.TaskDefCpu
      memory = var.TaskDefMemory
      portMappings = [
        {
          containerPort = "${var.TaskDefContainerPort}"
          hostPort      = 0
          protocol      = "tcp"
        }
      ]
      mountPoints = [
        {
          "sourceVolume" : "volume-0",
          "containerPath" : "/var/log/hotwire"
        }
      ]
      environment = [
        {
          "name" : "SERVICE_ENV",
          "value" : var.EnvScheme,
        },
        {
          "name" : "SERVICE_VERSION",
          "value" : "PRODUCTION"
        }
      ]
      logConfiguration = {
        "logDriver" : "awslogs",
        "options" : {
          "awslogs-group" : "/aws/ecs",
          "awslogs-region" : "us-west-1",
          "awslogs-stream-prefix" : "${var.ServiceName}-${var.ServiceVersion}"
        }
      }
    }
  ])

  volume {
    name      = "volume-0"
    host_path = "/var/log/hotwire"
  }

  task_role_arn = var.TaskDefRoleArn
}
