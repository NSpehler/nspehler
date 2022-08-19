resource "mongodbatlas_project" "nspehler" {
  name   = local.name
  org_id = "5e7f114da0f1a505a754b20c"
}

resource "mongodbatlas_project_ip_access_list" "nspehler" {
  project_id = mongodbatlas_project.nspehler.id
  cidr_block = "0.0.0.0/0"
}

resource "mongodbatlas_database_user" "nspehler" {
  username           = "nspehler"
  password           = "ac7VCyvsB6eZYPmNvF3e"
  project_id         = mongodbatlas_project.nspehler.id
  auth_database_name = "admin"

  roles {
    role_name     = "atlasAdmin"
    database_name = "admin"
  }
}

resource "mongodbatlas_cluster" "nspehler" {
  project_id   = mongodbatlas_project.nspehler.id
  name         = "nspehler"
  disk_size_gb = "2"

  provider_name               = "TENANT"
  backing_provider_name       = "AWS"
  provider_region_name        = "EU_WEST_1"
  provider_instance_size_name = "M2"

  mongo_db_major_version       = "5.0"
  auto_scaling_disk_gb_enabled = "false"
}

output "mongodbatlas_srv_address" {
  value       = mongodbatlas_cluster.nspehler.srv_address
  description = "Connection string for connecting to the Atlas cluster"
}
