import docker
client = docker.from_env()
containers = client.containers.list(all=True)

for container in containers:
    print(f"Container ID: {container.id}")
    print(f"Container Name: {container.name}")
    print(f"Image: {container.image}")
    print(f"Status: {container.status}")
    print(f"Created At: {container.created}")
    print(f"Ports: {container.ports}")
    print("----------------------------------")
