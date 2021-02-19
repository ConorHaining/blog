# Layered File System

- Containers have their own thin Read+Write layer filesystem, called the "Container layer". Any changes that are written to the writable layer go away if a container is removed.

# Volume
It's a type of directory associated with a container that is referred to as a "data volume". It can store all types of data like code, logs, database files. Volumes can be shared and reused among containers. Any changes to an image don't affect a data volume and they are persisted after a container is deleted.