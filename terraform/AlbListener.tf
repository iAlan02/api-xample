resource "aws_lb_listener" "alb-ltr-service" {
  load_balancer_arn = aws_lb.lb-service.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn   = var.LBCertificateArn

  depends_on = [aws_lb.lb-service]

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.alb-tg-service.arn
  }
}
