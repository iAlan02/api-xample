resource "aws_cloudwatch_metric_alarm" "memory-scale-up-alarm" {
  depends_on          = [aws_appautoscaling_policy.ecs-scale-memory-up-policy]
  alarm_name          = "${var.ServiceName}-${var.EnvScheme}-memory-utilization-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 10
  period              = 60
  threshold           = 70
  alarm_description   = "Average memory utilization over last 10 minutes higher than 70%"
  alarm_actions       = [aws_appautoscaling_policy.ecs-scale-memory-up-policy.arn]

  metric_name = "MemoryUtilization"
  namespace   = "AWS/ECS"
  statistic   = "Average"
  dimensions = {
    ClusterName = var.Cluster
    ServiceName = aws_ecs_service.ecs-service.name
  }
}
