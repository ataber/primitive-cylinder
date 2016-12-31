# primitive-cone

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![screen](http://i.imgur.com/i4gM4Jg.png)](http://ataber.github.io/primitive-cone/)

[(demo)](http://ataber.github.io/primitive-cone/)

A minimal 3D cone geometry, including normals, UVs, and mesh.

## Example

```js
var cone = require('primitive-cone')
var mesh = cone()

// the simplicial complex
console.log(mesh.positions, mesh.cells)

// rendering attributes
console.log(mesh.uvs)
console.log(mesh.normals)
```

## Usage

[![NPM](https://nodei.co/npm/primitive-cone.png)](https://www.npmjs.com/package/primitive-cone)

#### `mesh = cone(radiusTop, radiusBottom, height, radialSegments, heightSegments)`

Creates a new torus with options:

- `radiusTop` the radius of the cone at the top
- `radiusBottom` the radius of the cone at the bottom
- `height` the height of the cone
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

Note that you can build a cylinder by setting the radii at the top and bottom to be equal.

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## Credits

The algorithm here is from [ThreeJS CylinderGeometry](https://github.com/mrdoob/three.js/blob/5a24dac568520f6bf21901bf68dc4bdc2a9d8633/src/geometries/CylinderBufferGeometry.js).

## License

MIT. See [LICENSE.md](http://github.com/ataber/primitive-cone/blob/master/LICENSE.md) for details.
