resource "aws_appautoscaling_policy" "ecs-scale-cpu-down-policy" {
  depends_on         = [aws_appautoscaling_target.ecs-target-service]
  name               = "${var.ServiceName}-${var.EnvScheme}-CPU-scale-up"
  policy_type        = "StepScaling"
  resource_id        = aws_appautoscaling_target.ecs-target-service.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs-target-service.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs-target-service.service_namespace

  step_scaling_policy_configuration {
    adjustment_type          = "PercentChangeInCapacity"
    cooldown                 = 900
    min_adjustment_magnitude = 1
    metric_aggregation_type  = "Average"

    step_adjustment {
      metric_interval_lower_bound = 0
      scaling_adjustment          = 1
    }
  }
}
