terraform {
  backend "http" {}
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 6.0.0"
    }
  }
  required_version = ">= 1.0"
}

provider "aws" {
  region = var.region
  allowed_account_ids = [var.system_account_id]
}
