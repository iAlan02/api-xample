resource "aws_ecs_service" "ecs-service" {
  name                              = "${var.ServiceName}-${var.EnvScheme}"
  cluster                           = var.Cluster
  task_definition                   = aws_ecs_task_definition.task-definition-service.arn
  desired_count                     = var.DesiredCount
  iam_role                          = var.EcsServiceRole
  depends_on                        = [aws_lb_listener.alb-ltr-service]
  health_check_grace_period_seconds = 30

  load_balancer {
    target_group_arn = aws_lb_target_group.alb-tg-service.arn
    container_name   = "${var.ServiceName}-${var.EnvScheme}"
    container_port   = var.TaskDefContainerPort
  }

  propagate_tags = "TASK_DEFINITION"
}
