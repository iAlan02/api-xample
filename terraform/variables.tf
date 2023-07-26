variable "EnvScheme" {
  type    = string
}

variable "ServiceVersion" {
  type = string
}

variable "ServiceName" {
  type = string
}
variable "TaskDefImage" {
  type = string
}
variable "zone_id" {
  type = string
}
variable "zone" {
  type = string
}
variable "Subnets" {
  type = list(any)
}
variable "SecurityGroups" {
  type = list(any)
}
variable "TaskDefRoleArn" {
  type = string
}
variable "EcsServiceRole" {
  type = string
}
variable "AutoScaleRole" {
  type = string
}
variable "Vpc" {
  type = string
}
variable "Cluster" {
  type = string
}
variable "TaskDefMemory" {
  type = number
}
variable "TaskDefCpu" {
  type = number
}
variable "TaskDefContainerPort" {
  type = number
}
variable "DesiredCount" {
  type = number
}
variable "LBCertificateArn" {
  type = string
}
variable "AlbScheme" {
  type = bool
}
