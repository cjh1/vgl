//////////////////////////////////////////////////////////////////////////////
/**
 * @module vgl
 */

/*jslint devel: true, forin: true, newcap: true, plusplus: true*/
/*jslint white: true, continue:true, indent: 2*/

/*global vgl, ogs, vec4, Uint16Array, gl, inherit, $*/
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
/**
 * Vertex attribute keys
 *
 * @type {{Position: number, Normal: number, TextureCoordinate: number,
 *         Color: number, Scalar: number}}
 */
//////////////////////////////////////////////////////////////////////////////
var vertexAttributeKeys = {
  "Position" : 0,
  "Normal" : 1,
  "TextureCoordinate" : 2,
  "Color" : 3,
  "Scalar" : 4
};

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class primitive
 *
 * @class
 * @return {vgl.primitive}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.primitive = function() {
  'use strict';

  if (!(this instanceof vgl.primitive)) {
    return new vgl.primitive();
  }

  /** @private */
  var m_indicesPerPrimitive = 0,
      m_primitiveType = 0,
      m_indicesValueType = 0,
      m_indices = null;

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Get indices of the primitive
   *
   * @returns {null}
   */
  ////////////////////////////////////////////////////////////////////////////
  this.indices = function() {
    return m_indices;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Create indices array for the primitive
   * @param type
   */
  ////////////////////////////////////////////////////////////////////////////
  this.createIndices = function(type) {
    // TODO Check for the type
    m_indices = new Uint16Array();
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return the number of indices
   */
  ////////////////////////////////////////////////////////////////////////////
  this.numberOfIndices = function() {
    return m_indices.length;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return size of indices in bytes
   */
  ////////////////////////////////////////////////////////////////////////////
  this.sizeInBytes = function() {
    return m_indices.length * Uint16Array.BYTES_PER_ELEMENT;
  };

  ////////////////////////////////////////////////////////////////////////////
  /*
   * Return primitive type g
   */
  ////////////////////////////////////////////////////////////////////////////
  this.primitiveType = function() {
    return m_primitiveType;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Set primitive type
   */
  ////////////////////////////////////////////////////////////////////////////
  this.setPrimitiveType = function(type) {
    m_primitiveType = type;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return count of indices that form a primitives
   */
  ////////////////////////////////////////////////////////////////////////////
  this.indicesPerPrimitive = function() {
    return m_indicesPerPrimitive;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Set count of indices that form a primitive
   */
  ////////////////////////////////////////////////////////////////////////////
  this.setIndicesPerPrimitive = function(count) {
    m_indicesPerPrimitive = count;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return indices value type
   */
  ////////////////////////////////////////////////////////////////////////////
  this.indicesValueType = function() {
    return m_indicesValueType;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Set indices value type
   */
  ////////////////////////////////////////////////////////////////////////////
  this.setIndicesValueType = function(type) {
    m_indicesValueType = type;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Set indices from a array
   */
  ////////////////////////////////////////////////////////////////////////////
  this.setIndices = function(indicesArray) {
    // TODO Check for the type
    m_indices = new Uint16Array(indicesArray);
  };

  return this;
};

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class triangleStrip
 *
 * @returns {vgl.triangleStrip}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.triangleStrip = function() {
  'use strict';

  if (!(this instanceof vgl.triangleStrip)) {
    return new vgl.triangleStrip();
  }

  vgl.primitive.call(this);

  this.setPrimitiveType(gl.TRIANGLE_STRIP);
  this.setIndicesValueType(gl.UNSIGNED_SHORT);
  this.setIndicesPerPrimitive(3);

  return this;
};

inherit(vgl.triangleStrip, vgl.primitive);

////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class triangles
 *
 * @returns {vgl.triangles}
 */
////////////////////////////////////////////////////////////////////////////
vgl.triangles = function() {
  'use strict';

  if (!(this instanceof vgl.triangles)) {
    return new vgl.triangles();
  }
  vgl.primitive.call(this);

  this.setPrimitiveType(gl.TRIANGLES);
  this.setIndicesValueType(gl.UNSIGNED_SHORT);
  this.setIndicesPerPrimitive(3);

  return this;
};

inherit(vgl.triangles, vgl.primitive);

//////////////////////////////////////////////////////////////////////////////
/**
 * create a instance of lines primitive type
 *
 * @returns {vgl.lines}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.lines = function() {
  'use strict';

  if (!(this instanceof vgl.lines)) {
    return new vgl.lines();
  }
  vgl.primitive.call(this);

  this.setPrimitiveType(gl.LINES);
  this.setIndicesValueType(gl.UNSIGNED_SHORT);
  this.setIndicesPerPrimitive(2);

  return this;
};
inherit(vgl.lines, vgl.primitive);

//////////////////////////////////////////////////////////////////////////////
/**
 * create a instance of line strip primitive type
 *
 * @returns {vgl.lineStrip}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.lineStrip = function() {
  'use strict';

  if (!(this instanceof vgl.lineStrip)) {
    return new vgl.lineStrip();
  }
  vgl.primitive.call(this);

  this.setPrimitiveType(gl.LINE_STRIP);
  this.setIndicesValueType(gl.UNSIGNED_SHORT);
  this.setIndicesPerPrimitive(2);

  return this;
};
inherit(vgl.lineStrip, vgl.primitive);

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class points
 *
 * @returns {vgl.points}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.points = function() {
  'use strict';

  if (!(this instanceof vgl.points)) {
    return new vgl.points();
  }
  vgl.primitive.call(this);

  this.setPrimitiveType(gl.POINTS);
  this.setIndicesValueType(gl.UNSIGNED_SHORT);
  this.setIndicesPerPrimitive(1);

  return this;
};

inherit(vgl.points, vgl.primitive);

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class vertexDataP3f
 *
 * @returns {vgl.vertexDataP3f}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.vertexDataP3f = function() {
  'use strict';

  if (!(this instanceof vgl.vertexDataP3f)) {
    return new vgl.vertexDataP3f();
  }

  /** @private */
  this.m_position = [];

  return this;
};

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class vertexDataP3N3f
 *
 * @class
 * @returns {vgl.vertexDataP3N3f}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.vertexDataP3N3f = function() {
  'use strict';

  if (!(this instanceof vgl.vertexDataP3N3f)) {
    return new vgl.vertexDataP3N3f();
  }

  this.m_position = [];
  this.m_normal = [];

  return this;
};

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class vertexDataP3T3f
 *
 * @class
 * @returns {vgl.vertexDataP3T3f}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.vertexDataP3T3f = function() {
  'use strict';

  if (!(this instanceof vgl.vertexDataP3T3f)) {
    return new vgl.vertexDataP3T3f();
  }

  this.m_position = [];
  this.m_texCoordinate = [];

  return this;
};

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class sourceData
 * @class
 * @returns {vgl.sourceData}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.sourceData = function() {
  'use strict';

  if (!(this instanceof vgl.sourceData)) {
    return new vgl.sourceData();
  }

  var m_attributesMap = {},
      m_data = [],

      ////////////////////////////////////////////////////////////////////////////
      /**
       * Attribute data for the source
       */
      ////////////////////////////////////////////////////////////////////////////
      vglAttributeData = function() {
        // Number of components per group
        // Type of data type (GL_FLOAT etc)
        this.m_numberOfComponents = 0;
            // Size of data type
        this.m_dataType = 0;
        this.m_dataTypeSize = 0;
        // Specifies whether fixed-point data values should be normalized
        // (true) or converted directly as fixed-point values (false)
        // when they are accessed.
        this.m_normalized = false;
        // Strides for each attribute.
        this.m_stride = 0;
        // Offset
        this.m_offset = 0;
      };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return raw data for this source
   *
   * @returns {Array}
   */
  ////////////////////////////////////////////////////////////////////////////
  this.data = function() {
    return m_data;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Add new attribute data to the source
   */
  ////////////////////////////////////////////////////////////////////////////
  this.addAttribute = function(key, dataType, sizeOfDataType, offset, stride,
                               noOfComponents, normalized) {

    if (!m_attributesMap.hasOwnProperty(key)) {
      var newAttr = new vglAttributeData();
      newAttr.m_dataType = dataType;
      newAttr.m_dataTypeSize = sizeOfDataType;
      newAttr.m_offset = offset;
      newAttr.m_stride = stride;
      newAttr.m_numberOfComponents = noOfComponents;
      newAttr.m_normalized = normalized;
      m_attributesMap[key] = newAttr;
    }
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return size of the source data
   */
  ////////////////////////////////////////////////////////////////////////////
  this.sizeOfArray = function() {
    return Object.size(m_data);
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return length of array
   */
  ////////////////////////////////////////////////////////////////////////////
  this.lengthOfArray = function() {
    return m_data.length;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return size of the source data in bytes
   */
  ////////////////////////////////////////////////////////////////////////////
  /*
    * TODO: code below is probably wrong.
    *   Example:
    *            format P3N3f
    *            m_data = [ 1, 2, 3, 4, 5, 6 ]; // contains one vertex, one normal, m_data.length == 6
    *
    *       The inner loop computes:
    *             sizeInBytes += 3 * 4; // for position
    *             sizeInBytes += 3 * 4; // for normal
    *
    *        Then sizeInBytes *= 6; // m_data.length == 6
    *        which gives sizeInBytes == 144 bytes when it should have been 4*6 = 24
    */
  this.sizeInBytes = function() {
    var sizeInBytes = 0,
        keys = this.keys(), i;

    for (i = 0; i < keys.length(); ++i) {
      sizeInBytes += this.numberOfComponents(keys[i])
                     * this.sizeOfAttributeDataType(keys[i]);
    }

    sizeInBytes *= this.sizeOfArray();

    return sizeInBytes;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Check if there is attribute exists of a given key type
   */
  ////////////////////////////////////////////////////////////////////////////
  this.hasKey = function(key) {
    return m_attributesMap.hasOwnProperty(key);
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return keys of all attributes
   */
  ////////////////////////////////////////////////////////////////////////////
  this.keys = function() {
    return Object.keys(m_attributesMap);
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return number of attributes of source data
   */
  ////////////////////////////////////////////////////////////////////////////
  this.numberOfAttributes = function() {
    return Object.size(m_attributesMap);
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return number of components of the attribute data
   */
  ////////////////////////////////////////////////////////////////////////////
  this.attributeNumberOfComponents = function(key) {
    if (m_attributesMap.hasOwnProperty(key)) {
      return m_attributesMap[key].m_numberOfComponents;
    }

    return 0;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return if the attribute data is normalized
   */
  ////////////////////////////////////////////////////////////////////////////
  this.normalized = function(key) {
    if (m_attributesMap.hasOwnProperty(key)) {
      return m_attributesMap[key].m_normalized;
    }

    return false;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return size of the attribute data type
   */
  ////////////////////////////////////////////////////////////////////////////
  this.sizeOfAttributeDataType = function(key) {
    if (m_attributesMap.hasOwnProperty(key)) {
      return m_attributesMap[key].m_dataTypeSize;
    }

    return 0;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return attribute data type
   */
  ////////////////////////////////////////////////////////////////////////////
  this.attributeDataType = function(key) {
    if (m_attributesMap.hasOwnProperty(key)) {
      return m_attributesMap[key].m_dataType;
    }

    return undefined;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return attribute offset
   */
  ////////////////////////////////////////////////////////////////////////////
  this.attributeOffset = function(key) {
    if (m_attributesMap.hasOwnProperty(key)) {
      return m_attributesMap[key].m_offset;
    }

    return 0;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return attribute stride
   */
  ////////////////////////////////////////////////////////////////////////////
  this.attributeStride = function(key) {
    if (m_attributesMap.hasOwnProperty(key)) {
      return m_attributesMap[key].m_stride;
    }

    return 0;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Virtual function to insert new vertex data at the end
   */
  ////////////////////////////////////////////////////////////////////////////
  this.pushBack = function(vertexData) {
    // Should be implemented by the base class
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Insert new data block to the raw data
   */
  ////////////////////////////////////////////////////////////////////////////
  this.insert = function(data) {
    m_data = m_data.concat(data);
  };

  this.insertAt = function(index, data) {
    var i;

    if (!data.length) {
      m_data[index] = data;
    } else {
      for (i = 0; i < data.length; i++) {
        m_data[index*data.length+i] = data[i];
      }
    }
  };

  return this;
};

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class sourceDataP3T3f
 *
 * @returns {vgl.sourceDataP3T3f}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.sourceDataP3T3f = function() {
  'use strict';

  if (!(this instanceof vgl.sourceDataP3T3f)) {
    return new vgl.sourceDataP3T3f();
  }
  vgl.sourceData.call(this);

  this.addAttribute(vgl.vertexAttributeKeys.Position, gl.FLOAT, 4, 0, 6 * 4, 3,
                    false);
  this.addAttribute(vgl.vertexAttributeKeys.TextureCoordinate, gl.FLOAT, 4, 12,
                    6 * 4, 3, false);

  this.pushBack = function(value) {
    this.insert(value.m_position);
    this.insert(value.m_texCoordinate);
  };

  return this;
};

inherit(vgl.sourceDataP3T3f, vgl.sourceData);

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class sourceDataP3N3f
 *
 * @returns {vgl.sourceDataP3N3f}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.sourceDataP3N3f = function() {
  'use strict';

  if (!(this instanceof vgl.sourceDataP3N3f)) {
    return new vgl.sourceDataP3N3f();
  }

  vgl.sourceData.call(this);

  this.addAttribute(vgl.vertexAttributeKeys.Position, gl.FLOAT, 4, 0, 6 * 4, 3,
                    false);
  this.addAttribute(vgl.vertexAttributeKeys.Normal, gl.FLOAT, 4, 12, 6 * 4, 3,
                    false);

  this.pushBack = function(value) {
    this.insert(value.m_position);
    this.insert(value.m_normal);
  };

  return this;
};

inherit(vgl.sourceDataP3N3f, vgl.sourceData);

/////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class sourceDataP3fv
 *
 * @returns {vgl.sourceDataP3fv}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.sourceDataP3fv = function() {
  'use strict';

  if (!(this instanceof vgl.sourceDataP3fv)) {
    return new vgl.sourceDataP3fv();
  }

  vgl.sourceData.call(this);

  this.addAttribute(vgl.vertexAttributeKeys.Position, gl.FLOAT, 4, 0, 3 * 4, 3,
                    false);

  this.pushBack = function(value) {
    this.insert(value);
  };

  return this;
};

inherit(vgl.sourceDataP3fv, vgl.sourceData);

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class sourceDataT2fv
 *
 * @returns {vgl.sourceDataT2fv}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.sourceDataT2fv = function() {
  'use strict';

  if (!(this instanceof vgl.sourceDataT2fv)) {
    return new vgl.sourceDataT2fv();
  }

  vgl.sourceData.call(this);

  this.addAttribute(vgl.vertexAttributeKeys.TextureCoordinate, gl.FLOAT, 4, 0,
                    2 * 4, 2, false);

  this.pushBack = function(value) {
    this.insert(value);
  };

  return this;
};

inherit(vgl.sourceDataT2fv, vgl.sourceData);

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class sourceDataC3fv
 *
 * @returns {vgl.sourceDataC3fv}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.sourceDataC3fv = function() {
  'use strict';

  if (!(this instanceof vgl.sourceDataC3fv)) {
    return new vgl.sourceDataC3fv();
  }

  vgl.sourceData.call(this);

  this.addAttribute(vgl.vertexAttributeKeys.Color, gl.FLOAT, 4, 0, 3 * 4, 3, false);

  this.pushBack = function(value) {
    this.insert(value);
  };

  return this;
};

inherit(vgl.sourceDataC3fv, vgl.sourceData);

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class sourceDataSf meant to hold scalar float values
 *
 * @class
 * @returns {vgl.sourceDataSf}
 */
//////////////////////////////////////////////////////////////////////////////
vgl.sourceDataSf = function() {
  'use strict';

  if (!(this instanceof vgl.sourceDataSf)) {
    return new vgl.sourceDataSf();
  }

  var m_min = null,
      m_max = null,
      m_fixedmin = null,
      m_fixedmax = null;

  vgl.sourceData.call(this);

  this.addAttribute(vgl.vertexAttributeKeys.Scalar, gl.FLOAT, 4, 0, 4, 1, false);

  this.pushBack = function(value) {
    if (m_max === null || value > m_max) {
      m_max = value;
    }
    if (m_min === null || value < m_min) {
      m_min = value;
    }
    this.insert(value);
  };

  this.insertAt = function(index, value) {
    if (m_max === null || value > m_max) {
      m_max = value;
    }
    if (m_min === null || value < m_min) {
      m_min = value;
    }
    //call superclass ??
    //vgl.sourceData.insertAt.call(this, index, value);
    this.data()[index] = value;
  };

  this.scalarRange = function() {
    if (m_fixedmin === null || m_fixedmax === null) {
      return [m_min, m_max];
    }

    return [m_fixedmin, m_fixedmax];
  };

  this.setScalarRange = function(min, max) {
    m_fixedmin = min;
    m_fixedmax = max;
  };

  return this;
};

inherit(vgl.sourceDataSf, vgl.sourceData);

//////////////////////////////////////////////////////////////////////////////
/**
 * Create a new instance of class geometryData
 *
 * @class
 * @returns {vgl.geometryData}
 */
 /////////////////////////////////////////////////////////////////////////////
vgl.geometryData = function() {
  'use strict';

  if (!(this instanceof vgl.geometryData)) {
    return vgl.geometryData();
  }
  vgl.data.call(this);

  /** @private */
  var m_name = "",
      m_primitives = [],
      m_sources = [],
      m_bounds = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      m_computeBoundsTimestamp = vgl.timestamp(),
      m_boundsDirtyTimestamp = vgl.timestamp();

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return type
   */
  ////////////////////////////////////////////////////////////////////////////
  this.type = function() {
    return vgl.data.geometry;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return ID of the geometry data
   */
  ////////////////////////////////////////////////////////////////////////////
  this.name = function() {
    return m_name;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Set name of the geometry data
   */
  ////////////////////////////////////////////////////////////////////////////
  this.setName = function(name) {
    m_name = name;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Add new source
   */
  ////////////////////////////////////////////////////////////////////////////
  this.addSource = function(source) {
    // @todo Check if the incoming source has duplicate keys

    // NOTE This might not work on IE8 or lower
    if (m_sources.indexOf(source) === -1) {
      m_sources.push(source);

      if (source.hasKey(vgl.vertexAttributeKeys.Position)) {
        m_boundsDirtyTimestamp.modified();
      }
      return true;
    }

    return false;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return source for a given index. Returns 0 if not found.
   */
  ////////////////////////////////////////////////////////////////////////////
  this.source = function(index) {
    if (index < m_sources.length) {
      return m_sources[index];
    }

    return 0;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return number of sources
   */
  ////////////////////////////////////////////////////////////////////////////
  this.numberOfSources = function() {
    return m_sources.length;
  };

  /**
   * Return source data given a key
   */
  this.sourceData = function(key) {
    var i;

    for (i = 0; i < m_sources.length; ++i) {
      if (m_sources[i].hasKey(key)) {
        return m_sources[i];
      }
    }

    return null;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Add new primitive
   */
  ////////////////////////////////////////////////////////////////////////////
  this.addPrimitive = function(primitive) {
    m_primitives.push(primitive);
    return true;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return primitive for a given index. Returns null if not found.
   */
  ////////////////////////////////////////////////////////////////////////////
  this.primitive = function(index) {
    if (index < m_primitives.length) {
      return m_primitives[index];
    }

    return null;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return number of primitives
   */
  ////////////////////////////////////////////////////////////////////////////
  this.numberOfPrimitives = function() {
    return m_primitives.length;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Return bounds [minX, maxX, minY, maxY, minZ, maxZ]
   */
  ////////////////////////////////////////////////////////////////////////////
  this.bounds = function() {
    if (m_boundsDirtyTimestamp.getMTime() > m_computeBoundsTimestamp.getMTime()) {
      this.computeBounds();
    }
    return m_bounds;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Reset bounds
   */
  ////////////////////////////////////////////////////////////////////////////
  this.resetBounds = function() {
    m_bounds[0] = 0.0;
    m_bounds[1] = 0.0;
    m_bounds[2] = 0.0;
    m_bounds[3] = 0.0;
    m_bounds[4] = 0.0;
    m_bounds[5] = 0.0;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Set bounds
   */
  ////////////////////////////////////////////////////////////////////////////
  this.setBounds = function(minX, maxX, minY, maxY, minZ, maxZ) {
    m_bounds[0] = minX;
    m_bounds[1] = maxX;
    m_bounds[2] = minY;
    m_bounds[3] = maxY;
    m_bounds[4] = minZ;
    m_bounds[5] = maxZ;

    m_computeBoundsTimestamp.modified();

    return true;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Compute bounds
   */
  ////////////////////////////////////////////////////////////////////////////
  this.computeBounds = function() {
    if (m_boundsDirtyTimestamp.getMTime() > m_computeBoundsTimestamp.getMTime()) {
      var attr = vgl.vertexAttributeKeys.Position,
          sourceData = this.sourceData(attr),
          data = sourceData.data(),
          numberOfComponents = sourceData.attributeNumberOfComponents(attr),
          stride = sourceData.attributeStride(attr),
          offset = sourceData.attributeOffset(attr),
          sizeOfDataType = sourceData.sizeOfAttributeDataType(attr),
          count = data.length,
          ib = 0,
          jb = 0,
          value = null,
          vertexIndex,
          j;

      // We advance by index, not by byte
      stride /= sizeOfDataType;
      offset /= sizeOfDataType;

      this.resetBounds();

      for (vertexIndex = offset; vertexIndex < count; vertexIndex += stride) {
        for (j = 0; j < numberOfComponents; ++j) {
          value = data[vertexIndex + j];
          ib = j * 2;
          jb = j * 2 + 1;

          if (vertexIndex === offset) {
            m_bounds[ib] = value;
            m_bounds[jb] = value;
          } else {
            if (value > m_bounds[jb]) {
              m_bounds[jb] = value;
            }
            if (value < m_bounds[ib]) {
              m_bounds[ib] = value;
            }
          }
        }
      }

      m_computeBoundsTimestamp.modified();
    }
  };


  ////////////////////////////////////////////////////////////////////////////
  /**
   * Returns the vertex closest to a given position
   */
  ////////////////////////////////////////////////////////////////////////////
  this.findClosestVertex = function(point) {
    var attr = vgl.vertexAttributeKeys.Position,
        sourceData = this.sourceData(attr),
        sizeOfDataType = sourceData.sizeOfAttributeDataType(attr),
        numberOfComponents = sourceData.attributeNumberOfComponents(attr),
        data = sourceData.data(),
        stride = sourceData.attributeStride(attr) / sizeOfDataType,
        offset = sourceData.attributeOffset(attr) / sizeOfDataType,
        minDist = Number.MAX_VALUE,
        minIndex = null,
        vi, vPos, dx, dy, dz, dist, i;

    // assume positions are always triplets
    if (numberOfComponents !== 3) {
      console.log('[warning] Find closest vertex assumes three' +
        'component vertex ');
    }

    if (!point.z) {
      point = {x:point.x, y:point.y, z:0};
    }

    for (vi = offset, i = 0; vi < data.length; vi += stride, i++) {
      vPos = [data[vi],
              data[vi + 1],
              data[vi + 2]];

      dx = vPos[0] - point.x;
      dy = vPos[1] - point.y;
      dz = vPos[2] - point.z;
      dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
      if (dist < minDist) {
        minDist = dist;
        minIndex = i;
      }
    }
    return minIndex;
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Returns the requested vertex position
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getPosition = function(index) {
    var attr = vgl.vertexAttributeKeys.Position,
        sourceData = this.sourceData(attr),
        sizeOfDataType = sourceData.sizeOfAttributeDataType(attr),
        numberOfComponents = sourceData.attributeNumberOfComponents(attr),
        data = sourceData.data(),
        stride = sourceData.attributeStride(attr) / sizeOfDataType,
        offset = sourceData.attributeOffset(attr) / sizeOfDataType;

    // assume positions are always triplets
    if (numberOfComponents !== 3) {
      console.log("[warning] getPosition assumes three component data");
    }

    return [ data[offset + index*stride],
             data[offset + index*stride + 1],
             data[offset + index*stride + 2] ];
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Returns the scalar corresponding to a given vertex index
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getScalar = function(index) {
    var attr = vgl.vertexAttributeKeys.Scalar,
        sourceData = this.sourceData(attr),
        numberOfComponents, sizeOfDataType, data, stride, offset;

    if (!sourceData) {
      return null;
    }

    numberOfComponents = sourceData.attributeNumberOfComponents(attr);
    sizeOfDataType = sourceData.sizeOfAttributeDataType(attr);
    data = sourceData.data();
    stride = sourceData.attributeStride(attr) / sizeOfDataType;
    offset = sourceData.attributeOffset(attr) / sizeOfDataType;

    //console.log("index for scalar is " + index);
    //console.log("offset for scalar is " + offset);
    //console.log("stride for scalar is " + stride);

    //console.log("have " + data.length + " scalars");

    if (index * stride + offset >= data.length) {
      console.log("access out of bounds in getScalar");
    }

    return data[index * stride + offset];
  };

  return this;
};

inherit(vgl.geometryData, vgl.data);
