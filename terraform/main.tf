
################################################################################
# S3 Bucket used as backing store for Cloudfront.
################################################################################

resource "aws_s3_bucket" "nectary_cdn" {
  bucket = var.bucket_name
  tags = {
    Name        = "Nectary Components CDN"
  }
}

resource "aws_s3_bucket_versioning" "nectary_cdn" {
  bucket = aws_s3_bucket.nectary_cdn.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_public_access_block" "nectary_cdn" {
  bucket = aws_s3_bucket.nectary_cdn.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "nectary_cdn" {
  bucket = aws_s3_bucket.nectary_cdn.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipal"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.nectary_cdn.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.nectary_cdn.arn
          }
        }
      },
      {
        Sid       = "AllowCIRole"
        Effect    = "Allow"
        Principal = {
          AWS = "*",
        }
        Action = [
          "s3:Get*",
          "s3:List*",
          "s3:PutObject",
          "s3:DeleteObject",
        ]
        Resource = [
          aws_s3_bucket.nectary_cdn.arn,
          "${aws_s3_bucket.nectary_cdn.arn}/*"
        ]
      }
    ]
  })
}

################################################################################
# Cloudfront distribution.
################################################################################

resource "aws_cloudfront_origin_access_control" "nectary_oac" {
  name                              = "nectary-oac"
  description                       = "OAC for Nectary S3 origin"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "nectary_cdn" {
  origin {
    domain_name              = aws_s3_bucket.nectary_cdn.bucket_regional_domain_name
    origin_id                = "S3-nectary-cdn"
    origin_access_control_id = aws_cloudfront_origin_access_control.nectary_oac.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Nectary Components CDN Distribution"
  default_root_object = "index.html"

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-nectary-cdn"
    compress               = true
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 86400
    max_ttl     = 86400
  }

  # Removed JS-specific ordered_cache_behavior; default behavior now caches for 24 hours

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Name        = "Nectary Components CDN"
  }
}

# Output the CloudFront distribution domain name
output "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.nectary_cdn.domain_name
}

output "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.nectary_cdn.id
}

output "s3_bucket_name" {
  description = "The name of the S3 bucket"
  value       = aws_s3_bucket.nectary_cdn.bucket
}

output "cdn_url" {
  description = "The CDN URL for accessing components and assets"
  value       = "https://${aws_cloudfront_distribution.nectary_cdn.domain_name}"
}
