resource "aws_lb_target_group" "alb-tg-service" {
  name        = "${var.ServiceName}-${var.EnvScheme}-tg"
  target_type = "instance"
  port        = var.TaskDefContainerPort
  protocol    = "HTTP"
  vpc_id      = var.Vpc
  health_check {
    path     = "/isActive"
    protocol = "HTTP"
    matcher  = "200-499"
    interval               = 10
    timeout                = 5
    healthy_threshold      = 2
    unhealthy_threshold = 5
  }

  deregistration_delay = 20
}
