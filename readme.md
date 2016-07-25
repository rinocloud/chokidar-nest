

# Chokidar-nest

work in progress

```
npm install chokidar-nest
```

## Example

```
import chokidar from 'chokidar'
import nest from 'chokidar-nest'

var watcher = chokidar.watch('file, dir, glob, or array', {
  ignored: /[\/\\]\./,
  persistent: true
});

nest(watcher.getWatched())
```

## Example output

Say we have the following output from `getWatched`

```
{
 "/test": [
  "test-fixtures"
 ],
 "/test/test-fixtures": [
  "1",
  "rino.yaml"
 ],
 "/test/test-fixtures/1": [
  "2",
  "test1.txt",
  "test2.txt",
  "test3.txt"
 ],
 "/test/test-fixtures/1/2": [
  "test1.txt",
  "test2.txt",
  "test3.txt"
  ]
}
```

`nest` will produce the following object

```
{
  "name": "/test/test-fixtures",
  "children": [
    {
      "name": "/test/test-fixtures/1",
      "children": [
        {
          "name": "/test/test-fixtures/1/2",
          "children": [
            {
              "name": "/test/test-fixtures/1/2/test1.txt"
            },
            {
              "name": "/test/test-fixtures/1/2/test2.txt"
            },
            {
              "name": "/test/test-fixtures/1/2/test3.txt"
            }
          ]
        },
        {
          "name": "/test/test-fixtures/1/test1.txt"
        },
        {
          "name": "/test/test-fixtures/1/test2.txt"
        },
        {
          "name": "/test/test-fixtures/1/test3.txt"
        }
      ]
    },
    {
      "name": "/test/test-fixtures/rino.yaml"
    }
  ]
}
```
