resource "aws_route53_record" "record-service" {
  depends_on = [aws_lb.lb-service]
  zone_id    = var.zone_id
  name       = "${var.ServiceName}-${var.EnvScheme}.${var.zone}"
  type       = "CNAME"
  ttl        = 60

  records = ["${join(".", ["dualstack", aws_lb.lb-service.dns_name])}"]
}
