function createCylinderMesh(
  radiusTop,
  radiusBottom,
  height,
  radialSegments,
  heightSegments
) {
  var index = 0
  var indexOffset = 0
  var indexArray = []

  var capCount = 0
  if (radiusTop > 0) {
    capCount++
  }
  if (radiusBottom > 0) {
    capCount++
  }

  var vertexCount = ((radialSegments + 1) * (heightSegments + 1)) +
    ((radialSegments + 2) * capCount)
  var cellCount = (radialSegments * heightSegments * 2) + (radialSegments * capCount)

  var normals = new Array(vertexCount)
  var vertices = new Array(vertexCount)
  var uvs = new Array(vertexCount)
  var cells = new Array(cellCount)

  var slope = (radiusBottom - radiusTop) / height
  var thetaLength = 2.0 * Math.PI

  for (var y = 0; y <= heightSegments; y++) {
    var indexRow = []
    var v = y / heightSegments
    var radius = v * (radiusBottom - radiusTop) + radiusTop

    for (var x = 0; x <= radialSegments; x++) {
      var u = x / radialSegments
      var theta = u * thetaLength
      var sinTheta = Math.sin(theta)
      var cosTheta = Math.cos(theta)
      vertices[index] = [radius * sinTheta, -v * height + (height / 2), radius * cosTheta]
      normals[index] = [sinTheta, slope, cosTheta]
      uvs[index] = [u, 1 - v]

      indexRow.push(index)
      index++
    }

    indexArray.push(indexRow)
  }

  for (var x = 0; x < radialSegments; x++) {
    for (var y = 0; y < heightSegments; y++) {
      var i1 = indexArray[y][x]
      var i2 = indexArray[y + 1][x]
      var i3 = indexArray[y + 1][x + 1]
      var i4 = indexArray[y][x + 1]

      // face one
      cells[indexOffset] = [i1, i2, i4]
      indexOffset++

      // face two
      cells[indexOffset] = [i2, i3, i4]
      indexOffset++
    }
  }

  var generateCap = function (top) {
    var vertex = new Array(3).fill(0)

    var radius = (top === true) ? radiusTop : radiusBottom
    var sign = (top === true) ? 1 : -1

    var centerIndexStart = index

    for (var x = 1; x <= radialSegments; x++) {
      vertices[index] = [0, height * sign / 2, 0]
      normals[index] = [0, sign, 0]
      uvs[index] = [0.5, 0.5]
      index++
    }

    var centerIndexEnd = index

    for (var x = 0; x <= radialSegments; x++) {
      var u = x / radialSegments
      var theta = u * thetaLength
      var cosTheta = Math.cos(theta)
      var sinTheta = Math.sin(theta)
      vertices[index] = [radius * sinTheta, height * sign / 2, radius * cosTheta]
      normals[index] = [0, sign, 0]
      uvs[index] = [(cosTheta * 0.5) + 0.5, (sinTheta * 0.5 * sign) + 0.5]
      index++
    }

    for (var x = 0; x < radialSegments; x++) {
      var c = centerIndexStart + x
      var i = centerIndexEnd + x

      if ( top === true ) {
        // face top
        cells[indexOffset] = [i, i + 1, c]
        indexOffset++
      } else {
        // face bottom
        cells[indexOffset] = [i + 1, i, c]
        indexOffset++
      }
    }
  }

  if (radiusTop > 0) {
    generateCap(true)
  }

  if (radiusBottom > 0) {
    generateCap(false)
  }

  return {
    uvs: uvs,
    cells: cells,
    normals: normals,
    positions: vertices
  }
}

module.exports = createCylinderMesh
