var InspectElementConfig = { ClippingNode: 
   { alphaThreshold: { desc: 'Threshold for alpha value.', type: 'number', value: 0 },
     inverted: 
      { desc: 'Indicate whether in inverted mode.',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  AtlasNode: 
   { texture: { desc: 'Current used texture', type: 'image', value: null },
     quadsToDraw: { desc: 'Number of quads to draw', type: 'number', value: 0 },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  NodeRGBA: 
   { opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  LabelTTF: 
   { string: { desc: 'Content string of label', type: 'string', value: '' },
     textAlign: 
      { desc: 'Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT',
        type: 'number',
        value: 0 },
     verticalAlign: 
      { desc: 'Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM',
        type: 'number',
        value: 0 },
     fontSize: { desc: 'Font size of label', type: 'number', value: 0 },
     fontName: { desc: 'Font name of label', type: 'string', value: '' },
     font: 
      { desc: 'The label font with a style string: e.g. "18px Verdana"',
        type: 'string',
        value: '' },
     boundingWidth: 
      { desc: 'Width of the bounding box of label, the real content width is limited by boundingWidth',
        type: 'number',
        value: 0 },
     boundingHeight: 
      { desc: 'Height of the bounding box of label, the real content height is limited by boundingHeight',
        type: 'number',
        value: 0 },
     fillStyle: { desc: 'The fill color', type: 'color', value: null },
     strokeStyle: { desc: 'The stroke color', type: 'color', value: null },
     lineWidth: { desc: 'The line width for stroke', type: 'number', value: 0 },
     shadowOffsetX: { desc: 'The x axis offset of shadow', type: 'number', value: 0 },
     shadowOffsetY: { desc: 'The y axis offset of shadow', type: 'number', value: 0 },
     shadowOpacity: { desc: 'The opacity of shadow', type: 'number', value: 0 },
     shadowBlur: { desc: 'The blur size of shadow', type: 'number', value: 0 },
     dirty: 
      { desc: 'Indicates whether the sprite needs to be updated.',
        type: 'boolean',
        value: false },
     flippedX: 
      { desc: 'Indicates whether or not the spirte is flipped on x axis.',
        type: 'boolean',
        value: false },
     flippedY: 
      { desc: 'Indicates whether or not the spirte is flipped on y axis.',
        type: 'boolean',
        value: false },
     offsetX: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     offsetY: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     atlasIndex: 
      { desc: 'The index used on the TextureAtlas.',
        type: 'number',
        value: 0 },
     texture: 
      { desc: 'Texture used to render the sprite.',
        type: 'image',
        value: null },
     textureRectRotated: 
      { desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
        type: 'boolean',
        value: false,
        readonly: true },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Layer: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  LayerRGBA: 
   { opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  LayerColor: 
   { opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  LayerGradient: 
   { startColor: 
      { desc: 'Start color of the color gradient',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'End color of the color gradient',
        type: 'color',
        value: null },
     startOpacity: 
      { desc: 'Start opacity of the color gradient',
        type: 'number',
        value: 0 },
     endOpacity: 
      { desc: 'End opacity of the color gradient',
        type: 'number',
        value: 0 },
     vector: 
      { desc: 'Direction vector of the color gradient',
        type: 'number',
        value: 0 },
     compresseInterpolation: 
      { desc: 'Indicate whether or not the interpolation will be compressed',
        type: 'number',
        value: 0 },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  LayerMultiplex: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Scene: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Sprite: 
   { dirty: 
      { desc: 'Indicates whether the sprite needs to be updated.',
        type: 'boolean',
        value: false },
     flippedX: 
      { desc: 'Indicates whether or not the spirte is flipped on x axis.',
        type: 'boolean',
        value: false },
     flippedY: 
      { desc: 'Indicates whether or not the spirte is flipped on y axis.',
        type: 'boolean',
        value: false },
     offsetX: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     offsetY: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     atlasIndex: 
      { desc: 'The index used on the TextureAtlas.',
        type: 'number',
        value: 0 },
     texture: 
      { desc: 'Texture used to render the sprite.',
        type: 'image',
        value: null },
     textureRectRotated: 
      { desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
        type: 'boolean',
        value: false,
        readonly: true },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  SpriteBatchNode: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  LabelAtlas: 
   { string: { desc: 'Content string of label', type: 'string', value: '' },
     texture: { desc: 'Current used texture', type: 'image', value: null },
     quadsToDraw: { desc: 'Number of quads to draw', type: 'number', value: 0 },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  LabelBMFont: 
   { string: { desc: 'Content string of label', type: 'string', value: '' },
     boundingWidth: 
      { desc: 'Width of the bounding box of label, the real content width is limited by boundingWidth',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Menu: 
   { enabled: 
      { desc: 'Indicates whether or not the menu is enabled',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  MenuItem: 
   { enabled: 
      { desc: 'Indicate whether item is enabled',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  MenuItemLabel: 
   { string: 
      { desc: 'Content string of label item',
        type: 'string',
        value: '' },
     disabledColor: 
      { desc: 'Color of label when it\'s diabled',
        type: 'color',
        value: null },
     enabled: 
      { desc: 'Indicate whether item is enabled',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  MenuItemAtlasFont: 
   { string: 
      { desc: 'Content string of label item',
        type: 'string',
        value: '' },
     disabledColor: 
      { desc: 'Color of label when it\'s diabled',
        type: 'color',
        value: null },
     enabled: 
      { desc: 'Indicate whether item is enabled',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  MenuItemFont: 
   { fontSize: { desc: 'Font size of font item', type: 'number', value: 0 },
     fontName: { desc: 'Font name of font item', type: 'string', value: '' },
     string: 
      { desc: 'Content string of label item',
        type: 'string',
        value: '' },
     disabledColor: 
      { desc: 'Color of label when it\'s diabled',
        type: 'color',
        value: null },
     enabled: 
      { desc: 'Indicate whether item is enabled',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  MenuItemSprite: 
   { enabled: 
      { desc: 'Indicate whether item is enabled',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  MenuItemImage: 
   { enabled: 
      { desc: 'Indicate whether item is enabled',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  MenuItemToggle: 
   { selectedIndex: { desc: 'Index of selected sub item', type: 'number', value: 0 },
     enabled: 
      { desc: 'Indicate whether item is enabled',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  MotionStreak: 
   { texture: 
      { desc: 'Texture used for the motion streak.',
        type: 'image',
        value: null },
     fastMode: 
      { desc: 'Indicate whether use fast mode.',
        type: 'boolean',
        value: false },
     startingPositionInitialized: 
      { desc: 'Indicate whether starting position initialized.',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParallaxNode: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleBatchNode: 
   { texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleFire: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleFireworks: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleSun: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleGalaxy: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleFlower: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleMeteor: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleSpiral: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleExplosion: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleSmoke: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleSnow: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleRain: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ParticleSystem: 
   { opacityModifyRGB: 
      { desc: 'Indicate whether the alpha value modify color.',
        type: 'boolean',
        value: false },
     active: 
      { desc: '<@readonly> Indicate whether the particle system is activated.',
        type: 'boolean',
        value: false,
        readonly: true },
     shapeType: 
      { desc: 'ShapeType of ParticleSystem : cc.ParticleSystem.BALL_SHAPE | cc.ParticleSystem.STAR_SHAPE.',
        type: 'number',
        value: 0 },
     atlasIndex: 
      { desc: 'Index of system in batch node array.',
        type: 'number',
        value: 0 },
     particleCount: 
      { desc: 'Current quantity of particles that are being simulated.',
        type: 'number',
        value: 0 },
     duration: 
      { desc: 'How many seconds the emitter wil run. -1 means \'forever\'',
        type: 'number',
        value: 0 },
     sourcePos: 
      { desc: 'Source position of the emitter.',
        type: 'point',
        value: null },
     posVar: 
      { desc: 'Variation of source position.',
        type: 'point',
        value: null },
     life: 
      { desc: 'Life of each particle setter.',
        type: 'number',
        value: 0 },
     lifeVar: { desc: 'Variation of life.', type: 'number', value: 0 },
     angle: 
      { desc: 'Angle of each particle setter.',
        type: 'number',
        value: 0 },
     angleVar: 
      { desc: 'Variation of angle of each particle setter.',
        type: 'number',
        value: 0 },
     startSize: 
      { desc: 'Start size in pixels of each particle.',
        type: 'number',
        value: 0 },
     startSizeVar: 
      { desc: 'Variation of start size in pixels.',
        type: 'number',
        value: 0 },
     endSize: 
      { desc: 'End size in pixels of each particle.',
        type: 'number',
        value: 0 },
     endSizeVar: 
      { desc: 'Variation of end size in pixels.',
        type: 'number',
        value: 0 },
     startSpin: 
      { desc: 'Start angle of each particle.',
        type: 'number',
        value: 0 },
     startSpinVar: { desc: 'Variation of start angle.', type: 'number', value: 0 },
     endSpin: { desc: 'End angle of each particle.', type: 'number', value: 0 },
     endSpinVar: { desc: 'Variation of end angle.', type: 'number', value: 0 },
     gravity: { desc: 'Gravity of the emitter.', type: 'point', value: null },
     speed: { desc: 'Speed of the emitter.', type: 'point', value: null },
     speedVar: { desc: 'Variation of the speed.', type: 'point', value: null },
     tangentialAccel: 
      { desc: 'Radial acceleration of each particle. Only available in \'Gravity\' mode.',
        type: 'number',
        value: 0 },
     tangentialAccelVar: 
      { desc: 'Variation of the radial acceleration.',
        type: 'number',
        value: 0 },
     rotationIsDir: 
      { desc: 'Indicate whether the rotation of each particle equals to its direction. Only available in \'Gravity\' mode.',
        type: 'boolean',
        value: false },
     startRadius: 
      { desc: 'Starting radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     startRadiusVar: 
      { desc: 'Variation of the starting radius.',
        type: 'number',
        value: 0 },
     endRadius: 
      { desc: 'Ending radius of the particles. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     endRadiusVar: 
      { desc: 'Variation of the ending radius.',
        type: 'number',
        value: 0 },
     rotatePerS: 
      { desc: 'Number of degress to rotate a particle around the source pos per second. Only available in \'Radius\' mode.',
        type: 'number',
        value: 0 },
     rotatePerSVar: 
      { desc: 'Variation of the degress to rotate a particle around the source pos per second.',
        type: 'number',
        value: 0 },
     startColor: 
      { desc: 'Start color of each particle.',
        type: 'color',
        value: null },
     startColorVar: 
      { desc: 'Variation of the start color.',
        type: 'color',
        value: null },
     endColor: 
      { desc: 'Ending color of each particle.',
        type: 'color',
        value: null },
     endColorVar: 
      { desc: 'Variation of the end color.',
        type: 'color',
        value: null },
     emissionRate: 
      { desc: 'Emission rate of the particles.',
        type: 'number',
        value: 0 },
     emitterMode: 
      { desc: 'Emitter modes: CCParticleSystem.MODE_GRAVITY: uses gravity, speed, radial and tangential acceleration; CCParticleSystem.MODE_RADIUS: uses radius movement + rotation.',
        type: 'number',
        value: 0 },
     positionType: 
      { desc: 'Particles movement type: cc.ParticleSystem.TYPE_FREE | cc.ParticleSystem.TYPE_GROUPED.',
        type: 'number',
        value: 0 },
     totalParticles: 
      { desc: 'Maximum particles of the system.',
        type: 'number',
        value: 0 },
     autoRemoveOnFinish: 
      { desc: 'Indicate whether the node will be auto-removed when it has no particles left.',
        type: 'boolean',
        value: false },
     texture: 
      { desc: 'Texture of Particle System.',
        type: 'image',
        value: null },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  PhysicsDebugNode: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ProgressTimer: 
   { midPoint: 
      { desc: '<p>- Midpoint is used to modify the progress start position.<br/>\n                                         If you\'re using radials type then the midpoint changes the center point<br/>\n                                         If you\'re using bar type the the midpoint changes the bar growth<br/>\n                                             it expands from the center but clamps to the sprites edge so:<br/>\n                                             you want a left to right then set the midpoint all the way to cc.p(0,y)<br/>\n                                             you want a right to left then set the midpoint all the way to cc.p(1,y)<br/>\n                                             you want a bottom to top then set the midpoint all the way to cc.p(x,0)<br/>\n                                             you want a top to bottom then set the midpoint all the way to cc.p(x,1)</p>',
        type: 'point',
        value: null },
     barChangeRate: 
      { desc: 'This allows the bar type to move the component at a specific rate.',
        type: 'point',
        value: null },
     percentage: 
      { desc: 'Percentage to change progress, from 0 to 100.',
        type: 'number',
        value: 0 },
     reverseDir: 
      { desc: 'Indicate whether the direction is reversed.',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  RenderTexture: 
   { clearDepthVal: { desc: 'Clear depth value.', type: 'number', value: 0 },
     clearStencilVal: { desc: 'Clear stencil value.', type: 'number', value: 0 },
     clearColorVal: 
      { desc: 'Clear color value, valid only when "autoDraw" is true.',
        type: 'color',
        value: null },
     autoDraw: 
      { desc: 'Indicate auto draw mode activate or not.',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  DrawNode: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TextFieldTTF: 
   { charCount: 
      { desc: '<@readonly> Characators count',
        type: 'number',
        value: 0,
        readonly: true },
     placeHolder: { desc: 'Place holder for the field', type: 'string', value: '' },
     colorSpaceHolder: { desc: undefined, type: 'color', value: null },
     string: { desc: 'Content string of label', type: 'string', value: '' },
     textAlign: 
      { desc: 'Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT',
        type: 'number',
        value: 0 },
     verticalAlign: 
      { desc: 'Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM',
        type: 'number',
        value: 0 },
     fontSize: { desc: 'Font size of label', type: 'number', value: 0 },
     fontName: { desc: 'Font name of label', type: 'string', value: '' },
     font: 
      { desc: 'The label font with a style string: e.g. "18px Verdana"',
        type: 'string',
        value: '' },
     boundingWidth: 
      { desc: 'Width of the bounding box of label, the real content width is limited by boundingWidth',
        type: 'number',
        value: 0 },
     boundingHeight: 
      { desc: 'Height of the bounding box of label, the real content height is limited by boundingHeight',
        type: 'number',
        value: 0 },
     fillStyle: { desc: 'The fill color', type: 'color', value: null },
     strokeStyle: { desc: 'The stroke color', type: 'color', value: null },
     lineWidth: { desc: 'The line width for stroke', type: 'number', value: 0 },
     shadowOffsetX: { desc: 'The x axis offset of shadow', type: 'number', value: 0 },
     shadowOffsetY: { desc: 'The y axis offset of shadow', type: 'number', value: 0 },
     shadowOpacity: { desc: 'The opacity of shadow', type: 'number', value: 0 },
     shadowBlur: { desc: 'The blur size of shadow', type: 'number', value: 0 },
     dirty: 
      { desc: 'Indicates whether the sprite needs to be updated.',
        type: 'boolean',
        value: false },
     flippedX: 
      { desc: 'Indicates whether or not the spirte is flipped on x axis.',
        type: 'boolean',
        value: false },
     flippedY: 
      { desc: 'Indicates whether or not the spirte is flipped on y axis.',
        type: 'boolean',
        value: false },
     offsetX: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     offsetY: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     atlasIndex: 
      { desc: 'The index used on the TextureAtlas.',
        type: 'number',
        value: 0 },
     texture: 
      { desc: 'Texture used to render the sprite.',
        type: 'image',
        value: null },
     textureRectRotated: 
      { desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
        type: 'boolean',
        value: false,
        readonly: true },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TileMapAtlas: 
   { texture: { desc: 'Current used texture', type: 'image', value: null },
     quadsToDraw: { desc: 'Number of quads to draw', type: 'number', value: 0 },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TMXLayer: 
   { layerOrientation: { desc: 'Layer orientation', type: 'number', value: 0 },
     layerName: { desc: 'Name of the layer', type: 'string', value: '' },
     layerWidth: { desc: 'Width of the layer', type: 'number', value: 0 },
     layerHeight: { desc: 'Height of the layer', type: 'number', value: 0 },
     tileWidth: { desc: 'Width of a tile', type: 'number', value: 0 },
     tileHeight: { desc: 'Height of a tile', type: 'number', value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TMXTiledMap: 
   { mapOrientation: { desc: 'Map orientation', type: 'number', value: 0 },
     mapWidth: { desc: 'Width of the map', type: 'number', value: 0 },
     mapHeight: { desc: 'Height of the map', type: 'number', value: 0 },
     tileWidth: { desc: 'Width of a tile', type: 'number', value: 0 },
     tileHeight: { desc: 'Height of a tile', type: 'number', value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionScene: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionSceneOriented: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionRotoZoom: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionJumpZoom: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionMoveInL: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionMoveInR: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionMoveInT: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionMoveInB: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionSlideInL: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionSlideInR: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionSlideInB: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionSlideInT: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionShrinkGrow: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionFlipX: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionFlipY: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionFlipAngular: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionZoomFlipX: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionZoomFlipY: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionZoomFlipAngular: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionFade: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionCrossFade: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionTurnOffTiles: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionSplitCols: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionSplitRows: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionFadeTR: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionFadeBL: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionFadeUp: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionFadeDown: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionPageTurn: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionProgress: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionProgressRadialCCW: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionProgressRadialCW: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionProgressHorizontal: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionProgressVertical: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionProgressInOut: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TransitionProgressOutIn: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Widget: 
   { xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Layout: 
   { clippingEnabled: 
      { desc: 'Indicate whether clipping is enabled',
        type: 'boolean',
        value: false },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Node: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ListView: 
   { innerWidth: 
      { desc: 'Inner container width of the scroll view',
        type: 'number',
        value: 0 },
     innerHeight: 
      { desc: 'Inner container height of the scroll view',
        type: 'number',
        value: 0 },
     bounceEnabled: 
      { desc: 'Indicate whether bounce is enabled',
        type: 'boolean',
        value: false },
     inertiaScrollEnabled: 
      { desc: 'Indicate whether inertiaScroll is enabled',
        type: 'boolean',
        value: false },
     clippingEnabled: 
      { desc: 'Indicate whether clipping is enabled',
        type: 'boolean',
        value: false },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  PageView: 
   { clippingEnabled: 
      { desc: 'Indicate whether clipping is enabled',
        type: 'boolean',
        value: false },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ScrollView: 
   { innerWidth: 
      { desc: 'Inner container width of the scroll view',
        type: 'number',
        value: 0 },
     innerHeight: 
      { desc: 'Inner container height of the scroll view',
        type: 'number',
        value: 0 },
     bounceEnabled: 
      { desc: 'Indicate whether bounce is enabled',
        type: 'boolean',
        value: false },
     inertiaScrollEnabled: 
      { desc: 'Indicate whether inertiaScroll is enabled',
        type: 'boolean',
        value: false },
     clippingEnabled: 
      { desc: 'Indicate whether clipping is enabled',
        type: 'boolean',
        value: false },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Button: 
   { titleText: 
      { desc: 'The content string of the button title',
        type: 'string',
        value: '' },
     titleFont: 
      { desc: 'The content string font of the button title',
        type: 'string',
        value: '' },
     titleFontSize: 
      { desc: 'The content string font size of the button title',
        type: 'number',
        value: 0 },
     titleFontName: 
      { desc: 'The content string font name of the button title',
        type: 'string',
        value: '' },
     pressedActionEnabled: 
      { desc: 'Indicate whether button has zoom effect when clicked',
        type: 'boolean',
        value: false },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 },
     titleColor: 
      { desc: 'The content string font color of the button title',
        type: 'color',
        value: null } },
  CheckBox: 
   { selected: 
      { desc: 'Indicate whether the check box has been selected',
        type: 'boolean',
        value: false },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ImageView: 
   { xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  LoadingBar: 
   { percent: 
      { desc: 'The current progress of loadingbar',
        type: 'number',
        value: 0 },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  RichText: 
   { xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Slider: 
   { percent: 
      { desc: 'The current progress of loadingbar',
        type: 'number',
        value: 0 },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Text: 
   { boundingWidth: 
      { desc: 'Width of the bounding area of label, the real content width is limited by boundingWidth',
        type: 'number',
        value: 0 },
     boundingHeight: 
      { desc: 'Height of the bounding area of label, the real content height is limited by boundingHeight',
        type: 'number',
        value: 0 },
     string: 
      { desc: 'The content string of the label',
        type: 'string',
        value: '' },
     stringLength: 
      { desc: '<@readonly> The content string length of the label',
        type: 'number',
        value: 0,
        readonly: true },
     font: 
      { desc: 'The label font with a style string: e.g. "18px Verdana"',
        type: 'string',
        value: '' },
     fontName: { desc: 'The label font name', type: 'string', value: '' },
     fontSize: { desc: 'The label font size', type: 'number', value: 0 },
     textAlign: 
      { desc: 'Horizontal Alignment of label, cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT',
        type: 'number',
        value: 0 },
     verticalAlign: 
      { desc: 'Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM',
        type: 'number',
        value: 0 },
     touchScaleEnabled: 
      { desc: 'Indicate whether the label will scale when touching',
        type: 'boolean',
        value: false },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TextAtlas: 
   { string: 
      { desc: 'Content string of the label',
        type: 'string',
        value: '' },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TextBMFont: 
   { string: 
      { desc: 'Content string of the label',
        type: 'string',
        value: '' },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  UICCTextField: 
   { maxLengthEnabled: 
      { desc: 'Indicate whether max length limit is enabled',
        type: 'boolean',
        value: false },
     maxLength: 
      { desc: 'The max length of the text field',
        type: 'number',
        value: 0 },
     passwordEnabled: 
      { desc: 'Indicate whether the text field is for entering password',
        type: 'boolean',
        value: false },
     charCount: 
      { desc: '<@readonly> Characators count',
        type: 'number',
        value: 0,
        readonly: true },
     placeHolder: { desc: 'Place holder for the field', type: 'string', value: '' },
     colorSpaceHolder: { desc: undefined, type: 'color', value: null },
     string: { desc: 'Content string of label', type: 'string', value: '' },
     textAlign: 
      { desc: 'Horizontal Alignment of label: cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT',
        type: 'number',
        value: 0 },
     verticalAlign: 
      { desc: 'Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM',
        type: 'number',
        value: 0 },
     fontSize: { desc: 'Font size of label', type: 'number', value: 0 },
     fontName: { desc: 'Font name of label', type: 'string', value: '' },
     font: 
      { desc: 'The label font with a style string: e.g. "18px Verdana"',
        type: 'string',
        value: '' },
     boundingWidth: 
      { desc: 'Width of the bounding box of label, the real content width is limited by boundingWidth',
        type: 'number',
        value: 0 },
     boundingHeight: 
      { desc: 'Height of the bounding box of label, the real content height is limited by boundingHeight',
        type: 'number',
        value: 0 },
     fillStyle: { desc: 'The fill color', type: 'color', value: null },
     strokeStyle: { desc: 'The stroke color', type: 'color', value: null },
     lineWidth: { desc: 'The line width for stroke', type: 'number', value: 0 },
     shadowOffsetX: { desc: 'The x axis offset of shadow', type: 'number', value: 0 },
     shadowOffsetY: { desc: 'The y axis offset of shadow', type: 'number', value: 0 },
     shadowOpacity: { desc: 'The opacity of shadow', type: 'number', value: 0 },
     shadowBlur: { desc: 'The blur size of shadow', type: 'number', value: 0 },
     dirty: 
      { desc: 'Indicates whether the sprite needs to be updated.',
        type: 'boolean',
        value: false },
     flippedX: 
      { desc: 'Indicates whether or not the spirte is flipped on x axis.',
        type: 'boolean',
        value: false },
     flippedY: 
      { desc: 'Indicates whether or not the spirte is flipped on y axis.',
        type: 'boolean',
        value: false },
     offsetX: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     offsetY: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     atlasIndex: 
      { desc: 'The index used on the TextureAtlas.',
        type: 'number',
        value: 0 },
     texture: 
      { desc: 'Texture used to render the sprite.',
        type: 'image',
        value: null },
     textureRectRotated: 
      { desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
        type: 'boolean',
        value: false,
        readonly: true },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  TextField: 
   { string: 
      { desc: 'The content string of the label',
        type: 'string',
        value: '' },
     placeHolder: 
      { desc: 'The place holder of the text field',
        type: 'number',
        value: 0 },
     font: 
      { desc: 'The text field font with a style string: e.g. "18px Verdana"',
        type: 'string',
        value: '' },
     fontName: { desc: 'The text field font name', type: 'string', value: '' },
     fontSize: { desc: 'The text field font size', type: 'number', value: 0 },
     maxLengthEnabled: 
      { desc: 'Indicate whether max length limit is enabled',
        type: 'boolean',
        value: false },
     maxLength: 
      { desc: 'The max length of the text field',
        type: 'number',
        value: 0 },
     passwordEnabled: 
      { desc: 'Indicate whether the text field is for entering password',
        type: 'boolean',
        value: false },
     xPercent: 
      { desc: 'Position x in percentage of width',
        type: 'number',
        value: 0 },
     yPercent: 
      { desc: 'Position y in percentage of height',
        type: 'number',
        value: 0 },
     widthPercent: 
      { desc: 'Width in percentage of parent width',
        type: 'number',
        value: 0 },
     heightPercent: 
      { desc: 'Height in percentage of parent height',
        type: 'number',
        value: 0 },
     enabled: 
      { desc: 'Indicate whether the widget is enabled',
        type: 'boolean',
        value: false },
     focused: 
      { desc: 'Indicate whether the widget is focused',
        type: 'boolean',
        value: false },
     touchEnabled: 
      { desc: 'Indicate whether touch events are enabled',
        type: 'boolean',
        value: false },
     updateEnabled: 
      { desc: 'Indicate whether the update function is scheduled',
        type: 'boolean',
        value: false },
     bright: 
      { desc: 'Indicate whether the widget is bright',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the widget', type: 'string', value: '' },
     actionTag: 
      { desc: 'The action tag of the widget',
        type: 'number',
        value: 0 },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Armature: 
   { name: { desc: 'The name of the armature', type: 'string', value: '' },
     version: { desc: 'The version', type: 'number', value: 0 },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Bone: 
   { transformDirty: 
      { desc: 'Indicate whether the transform is dirty',
        type: 'boolean',
        value: false },
     ignoreMovementBoneData: 
      { desc: 'Indicate whether force the bone to show When CCArmature play a animation and there isn\'t a CCMovementBoneData of this bone in this CCMovementData.',
        type: 'boolean',
        value: false },
     name: { desc: 'The name of the bone', type: 'string', value: '' },
     blendDirty: 
      { desc: 'Indicate whether the blend is dirty',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Skin: 
   { displayName: 
      { desc: '<@readonly> The displayed name of skin',
        type: 'string',
        value: '',
        readonly: true },
     dirty: 
      { desc: 'Indicates whether the sprite needs to be updated.',
        type: 'boolean',
        value: false },
     flippedX: 
      { desc: 'Indicates whether or not the spirte is flipped on x axis.',
        type: 'boolean',
        value: false },
     flippedY: 
      { desc: 'Indicates whether or not the spirte is flipped on y axis.',
        type: 'boolean',
        value: false },
     offsetX: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     offsetY: 
      { desc: '<@readonly> The offset position on x axis of the sprite in texture. Calculated automatically by editors like Zwoptex.',
        type: 'number',
        value: 0,
        readonly: true },
     atlasIndex: 
      { desc: 'The index used on the TextureAtlas.',
        type: 'number',
        value: 0 },
     texture: 
      { desc: 'Texture used to render the sprite.',
        type: 'image',
        value: null },
     textureRectRotated: 
      { desc: '<@readonly> Indicate whether the texture rectangle is rotated.',
        type: 'boolean',
        value: false,
        readonly: true },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  EditBox: 
   { string: { desc: 'Content string of edit box', type: 'string', value: '' },
     maxLength: 
      { desc: 'Max length of the content string',
        type: 'string',
        value: '' },
     font: 
      { desc: '<@writeonly> Config font of edit box',
        type: 'string',
        value: '' },
     fontName: 
      { desc: '<@writeonly> Config font name of edit box',
        type: 'string',
        value: '' },
     fontSize: 
      { desc: '<@writeonly> Config font size of edit box',
        type: 'number',
        value: 0 },
     fontColor: 
      { desc: '<@writeonly> Config font color of edit box',
        type: 'color',
        value: null },
     placeHolder: { desc: 'Place holder of edit box', type: 'string', value: '' },
     placeHolderFont: 
      { desc: '<@writeonly> Config font of place holder',
        type: 'string',
        value: '' },
     placeHolderFontName: 
      { desc: '<@writeonly> Config font name of place holder',
        type: 'string',
        value: '' },
     placeHolderFontSize: 
      { desc: '<@writeonly> Config font size of place holder',
        type: 'number',
        value: 0 },
     placeHolderFontColor: 
      { desc: '<@writeonly> Config font color of place holder',
        type: 'color',
        value: null },
     inputFlag: 
      { desc: '<@writeonly> Input flag of edit box, one of the EditBoxInputFlag constants. e.g.cc.EDITBOX_INPUT_FLAG_PASSWORD',
        type: 'number',
        value: 0 },
     inputMode: 
      { desc: '<@writeonly> Input mode of the edit box. Value should be one of the EditBoxInputMode constants.',
        type: 'number',
        value: 0 },
     returnType: 
      { desc: '<@writeonly> Return type of edit box, value should be one of the KeyboardReturnType constants.',
        type: 'number',
        value: 0 },
     adjustBackgroundImage: 
      { desc: 'Indicate whether the background image will be adjusted',
        type: 'boolean',
        value: false },
     zoomOnTouchDown: 
      { desc: 'Indicate whether the button will be zoomed while touch down',
        type: 'boolean',
        value: false },
     preferredSize: 
      { desc: 'The preferred size of the control button',
        type: 'size',
        value: null },
     labelAnchor: 
      { desc: 'The anchor point for the label of the control button',
        type: 'boolean',
        value: false },
     state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Control: 
   { state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ControlButton: 
   { adjustBackgroundImage: 
      { desc: 'Indicate whether the background image will be adjusted',
        type: 'boolean',
        value: false },
     zoomOnTouchDown: 
      { desc: 'Indicate whether the button will be zoomed while touch down',
        type: 'boolean',
        value: false },
     preferredSize: 
      { desc: 'The preferred size of the control button',
        type: 'size',
        value: null },
     labelAnchor: 
      { desc: 'The anchor point for the label of the control button',
        type: 'boolean',
        value: false },
     state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ControlColourPicker: 
   { state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ControlHuePicker: 
   { hue: { desc: 'The hue value', type: 'number', value: 0 },
     huePercent: { desc: 'The hue value in percentage', type: 'number', value: 0 },
     startPos: 
      { desc: '<@readonly> The start position of the picker',
        type: 'point',
        value: null,
        readonly: true },
     state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ControlPotentiometer: 
   { value: 
      { desc: 'The current value of the potentionmeter',
        type: 'number',
        value: 0 },
     minValue: 
      { desc: 'The minimum value of the potentionmeter',
        type: 'number',
        value: 0 },
     maxValue: 
      { desc: 'The maximum value of the potentionmeter',
        type: 'number',
        value: 0 },
     prevLocation: 
      { desc: 'The previous location of the potentionmeter',
        type: 'point',
        value: null },
     state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ControlSaturationBrightnessPicker: 
   { saturation: 
      { desc: '<@readonly> Saturation value of the picker',
        type: 'number',
        value: 0,
        readonly: true },
     brightness: 
      { desc: '<@readonly> Brightness value of the picker',
        type: 'number',
        value: 0,
        readonly: true },
     startPos: 
      { desc: '<@readonly> The start position of the picker',
        type: 'point',
        value: null,
        readonly: true },
     state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ControlSlider: 
   { value: { desc: 'The value of the slider', type: 'number', value: 0 },
     minValue: 
      { desc: 'The minimum value of the slider',
        type: 'number',
        value: 0 },
     maxValue: 
      { desc: 'The maximum value of the slider',
        type: 'number',
        value: 0 },
     minAllowedValue: 
      { desc: 'The minimum allowed value of the slider',
        type: 'number',
        value: 0 },
     maxAllowedValue: 
      { desc: 'The maximum allowed value of the slider',
        type: 'number',
        value: 0 },
     thumbSprite: 
      { desc: '<@readonly> Brightness value of the picker',
        type: 'number',
        value: 0,
        readonly: true },
     state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  ControlStepper: 
   { wraps: 
      { desc: 'Indicate whether the stepper wraps',
        type: 'boolean',
        value: false },
     value: 
      { desc: 'The value of the stepper control',
        type: 'number',
        value: 0 },
     minValue: 
      { desc: 'The minimum value of the stepper control',
        type: 'number',
        value: 0 },
     maxValue: 
      { desc: 'The maximum value of the stepper control',
        type: 'number',
        value: 0 },
     stepValue: 
      { desc: 'The interval value for each step of the stepper control',
        type: 'number',
        value: 0 },
     continuous: 
      { desc: '<@readonly> Indicate whether the stepper value is continuous',
        type: 'boolean',
        value: false,
        readonly: true },
     state: 
      { desc: '<@readonly> The current control state: cc.CONTROL_STATE_NORMAL | cc.CONTROL_STATE_HIGHLIGHTED | cc.CONTROL_STATE_DISABLED | cc.CONTROL_STATE_SELECTED | cc.CONTROL_STATE_INITIAL',
        type: 'number',
        value: 0,
        readonly: true },
     enabled: 
      { desc: 'Indicate whether the control node is enbaled',
        type: 'boolean',
        value: false },
     selected: 
      { desc: 'Indicate whether the control node is selected',
        type: 'boolean',
        value: false },
     highlighted: 
      { desc: 'Indicate whether the control node is highlighted',
        type: 'boolean',
        value: false },
     opacity: { desc: 'Opacity of layer', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of layer', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Spacer: 
   { x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } },
  Scale9Sprite: 
   { preferredSize: 
      { desc: 'The preferred size of the 9-slice sprite',
        type: 'size',
        value: null },
     insetLeft: 
      { desc: 'The left inset of the 9-slice sprite',
        type: 'number',
        value: 0 },
     insetTop: 
      { desc: 'The top inset of the 9-slice sprite',
        type: 'number',
        value: 0 },
     insetRight: 
      { desc: 'The right inset of the 9-slice sprite',
        type: 'number',
        value: 0 },
     insetBottom: 
      { desc: 'The bottom inset of the 9-slice sprite',
        type: 'number',
        value: 0 },
     opacity: { desc: 'Opacity of node', type: 'number', value: 0 },
     opacityModifyRGB: 
      { desc: 'Indicate whether or not the opacity modify color',
        type: 'boolean',
        value: false },
     cascadeOpacity: 
      { desc: 'Indicate whether or not it will set cascade opacity',
        type: 'boolean',
        value: false },
     color: { desc: 'Color of node', type: 'color', value: null },
     cascadeColor: 
      { desc: 'Indicate whether or not it will set cascade color',
        type: 'boolean',
        value: false },
     x: { desc: 'x axis position of node', type: 'number', value: 0 },
     y: { desc: 'y axis position of node', type: 'number', value: 0 },
     width: { desc: 'Width of node', type: 'number', value: 0 },
     height: { desc: 'Height of node', type: 'number', value: 0 },
     anchorX: 
      { desc: 'Anchor point\'s position on x axis',
        type: 'number',
        value: 0 },
     anchorY: 
      { desc: 'Anchor point\'s position on y axis',
        type: 'number',
        value: 0 },
     skewX: { desc: 'Skew x', type: 'number', value: 0 },
     skewY: { desc: 'Skew y', type: 'number', value: 0 },
     zIndex: 
      { desc: 'Z order in depth which stands for the drawing order',
        type: 'number',
        value: 0 },
     vertexZ: 
      { desc: 'WebGL Z vertex of this node, z order works OK if all the nodes uses the same openGL Z vertex',
        type: 'number',
        value: 0 },
     rotation: { desc: 'Rotation of node', type: 'number', value: 0 },
     rotationX: { desc: 'Rotation on x axis', type: 'number', value: 0 },
     rotationY: { desc: 'Rotation on y axis', type: 'number', value: 0 },
     scale: { desc: 'Scale of node', type: 'number', value: 0 },
     scaleX: { desc: 'Scale on x axis', type: 'number', value: 0 },
     scaleY: { desc: 'Scale on y axis', type: 'number', value: 0 },
     childrenCount: 
      { desc: '<@readonly> Number of children',
        type: 'number',
        value: 0,
        readonly: true },
     visible: 
      { desc: 'Indicate whether node is visible or not',
        type: 'boolean',
        value: false },
     running: 
      { desc: '<@readonly> Indicate whether node is running or not',
        type: 'boolean',
        value: false,
        readonly: true },
     ignoreAnchor: 
      { desc: 'Indicate whether ignore the anchor point property for positionning',
        type: 'boolean',
        value: false },
     tag: { desc: 'Tag of node', type: 'number', value: 0 },
     arrivalOrder: 
      { desc: 'The arrival order, indicates which children is added previously',
        type: 'number',
        value: 0 },
     glServerState: 
      { desc: 'The state of OpenGL server side',
        type: 'number',
        value: 0 } } };