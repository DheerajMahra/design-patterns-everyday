# Singleton

Singleton is a **creational pattern** that lets you ensure that a class has one instance, while providing a global access point to the instance.

# Problem this pattern solves

1. **Ensure the class has only one instance thoughout the app** - The most common reason for this is to control access to some shared resource—for example, a database or a file.

2. **Provide a global access to the instance** - It acts as a global single source of truth of information. You don't want multiple instance to accidently change the global information.