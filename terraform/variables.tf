variable "region" {
  type        = string
  description = "The region where resources will be created"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for hosting components and assets"
  type        = string
}

variable "system_account_id" {
  type        = string
  description = "The AWS system account where resources will be created"
}
