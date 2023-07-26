resource "aws_cloudwatch_metric_alarm" "cpu-scale-up-alarm" {
  depends_on          = [aws_appautoscaling_policy.ecs-scale-cpu-up-policy]
  alarm_name          = "${var.ServiceName}-${var.EnvScheme}-CPU-utilization-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  period              = 300
  threshold           = 90
  alarm_description   = "Average CPU utilization over last 10 minutes higher than 80%"
  alarm_actions       = [aws_appautoscaling_policy.ecs-scale-cpu-up-policy.arn]

  metric_name = "CPUUtilization"
  namespace   = "AWS/ECS"
  statistic   = "Average"
  dimensions = {
    ClusterName = var.Cluster
    ServiceName = aws_ecs_service.ecs-service.name
  }
}
