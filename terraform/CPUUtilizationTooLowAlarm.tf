resource "aws_cloudwatch_metric_alarm" "cpu-scale-down-alarm" {
  depends_on          = [aws_appautoscaling_policy.ecs-scale-cpu-down-policy]
  alarm_name          = "${var.ServiceName}-${var.EnvScheme}-CPU-utilization-low"
  comparison_operator = "LessThanThreshold"
  evaluation_periods  = 2
  period              = 300
  threshold           = 40
  alarm_description   = "Service is wasting CPU"
  alarm_actions       = [aws_appautoscaling_policy.ecs-scale-cpu-down-policy.arn]

  metric_name = "CPUUtilization"
  namespace   = "AWS/ECS"
  statistic   = "Average"
  dimensions = {
    ClusterName = var.Cluster
    ServiceName = aws_ecs_service.ecs-service.name
  }
}
