resource "aws_appautoscaling_target" "ecs-target-service" {
  max_capacity       = 6
  min_capacity       = 1
  resource_id        = "service/${var.Cluster}/${aws_ecs_service.ecs-service.name}"
  role_arn = var.AutoScaleRole
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}