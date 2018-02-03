# primitive-cylinder

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![screen](http://i.imgur.com/i4gM4Jg.png)](http://ataber.github.io/primitive-cylinder/)

[(demo)](http://ataber.github.io/primitive-cylinder/)

A minimal 3D cylindrical geometry, including normals, UVs, and mesh.

## Example

```js
var cylinder = require('primitive-cylinder')
var mesh = cylinder(10, 10, 50, 10, 10)

// the simplicial complex
console.log(mesh.positions, mesh.cells)

// rendering attributes
console.log(mesh.uvs)
console.log(mesh.normals)
```

## Usage

[![NPM](https://nodei.co/npm/primitive-cylinder.png)](https://www.npmjs.com/package/primitive-cylinder)

#### `mesh = cylinder(radiusTop, radiusBottom, height, radialSegments, heightSegments)`

Creates a new torus with options:

- `radiusTop` the radius of the cylinder at the top
- `radiusBottom` the radius of the cylinder at the bottom
- `height` the height of the cylinder
- `radialSegments` the number of segments for the radial axis
- `heightSegments` the number of segments for the height axis

The returned mesh is an object with the following data:

```
{
  positions: [ [x, y, z], [x, y, z], ... ],
  cells: [ [a, b, c], [a, b, c], ... ],
  uvs: [ [u, v], [u, v], ... ],
  normals: [ [x, y, z], [x, y, z], ... ]
}
```

Note that you can build a cone by setting one of the radii to be zero.

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## Credits

The algorithm here is from [ThreeJS CylinderGeometry](https://github.com/mrdoob/three.js/blob/5a24dac568520f6bf21901bf68dc4bdc2a9d8633/src/geometries/CylinderBufferGeometry.js).

## License

MIT. See [LICENSE.md](http://github.com/ataber/primitive-cylinder/blob/master/LICENSE.md) for details.
