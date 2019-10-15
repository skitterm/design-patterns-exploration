# Singleton

Only one instance of a class is allowed at a time.

## Details

The singleton pattern can be implemented as a class with the following characteristics:

- Private constructor
- Private static `instance` class field (the actual single instance of the class)
- Public `getInstance` method (returning the single instance, creating it if it hasn't been created yet)

## Notes

The singleton doesn't have to limit to one instance. It could be used to limit to any number of instances (though in practice, I don't see this happening often).
