resource "mongodbatlas_project" "nspehler" {
  name   = local.name
  org_id = var.mongodbatlas_org_id
}

resource "mongodbatlas_project_ip_access_list" "nspehler" {
  project_id = mongodbatlas_project.nspehler.id
  cidr_block = "0.0.0.0/0"
}

resource "mongodbatlas_database_user" "nspehler" {
  username           = "nspehler"
  project_id         = mongodbatlas_project.nspehler.id
  auth_database_name = "admin"

  roles {
    role_name     = "atlasAdmin"
    database_name = "admin"
  }
}

resource "mongodbatlas_advanced_cluster" "nspehler" {
  project_id             = mongodbatlas_project.nspehler.id
  name                   = "nspehler"
  cluster_type           = "REPLICASET"
  mongo_db_major_version = "8.0"

  replication_specs = [
    {
      region_configs = [
        {
          provider_name         = "TENANT"
          backing_provider_name = "AWS"
          region_name           = "EU_WEST_1"
          priority              = 7
          electable_specs = {
            instance_size = "M2"
          }
        }
      ]
    }
  ]
}

output "mongodbatlas_srv_address" {
  value       = mongodbatlas_advanced_cluster.nspehler.connection_strings.standard_srv
  description = "Connection string for connecting to the Atlas cluster"
}
