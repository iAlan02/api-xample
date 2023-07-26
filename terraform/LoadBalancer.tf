resource "aws_lb" "lb-service" {
  name               = "${var.ServiceName}-lb"
  internal           = var.AlbScheme
  load_balancer_type = "application"
  security_groups    = var.SecurityGroups
  subnets            = var.Subnets
}
