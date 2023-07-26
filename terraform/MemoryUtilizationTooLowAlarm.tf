resource "aws_cloudwatch_metric_alarm" "memory-scale-down-alarm" {
  depends_on          = [aws_appautoscaling_policy.ecs-scale-memory-down-policy]
  alarm_name          = "${var.ServiceName}-${var.EnvScheme}-memory-utilization-low"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 10
  period              = 60
  threshold           = 20
  alarm_description   = "Service is wasting CPU"
  alarm_actions       = [aws_appautoscaling_policy.ecs-scale-memory-down-policy.arn]

  metric_name = "MemoryScaleDownPolicy"
  namespace   = "AWS/ECS"
  statistic   = "Average"
  dimensions = {
    ClusterName = var.Cluster
    ServiceName = aws_ecs_service.ecs-service.name
  }

}
