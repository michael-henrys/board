import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const WhiteboardCanvas = ({ currentTool }) => {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    // Initialize Fabric canvas
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: window.innerWidth,
      height: window.innerHeight - 60, // Account for toolbar
      backgroundColor: '#ffffff',
    });

    fabricRef.current = canvas;

    // Handle window resize
    const handleResize = () => {
      canvas.setDimensions({
        width: window.innerWidth,
        height: window.innerHeight - 60,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = fabricRef.current;
    if (!canvas) return;

    // Disable selection by default except in select mode
    canvas.isDrawingMode = currentTool === 'pen';
    canvas.selection = currentTool === 'select';
    canvas.forEachObject(obj => {
      obj.selectable = currentTool === 'select';
      obj.evented = currentTool === 'select';
    });

    // Handle mouse down for shape drawing
    const handleMouseDown = (options) => {
      if (currentTool === 'select' || currentTool === 'pen') return;
      
      isDrawing.current = true;
      const pointer = canvas.getPointer(options.e);
      let shape;

      switch (currentTool) {
        case 'rectangle':
          shape = new fabric.Rect({
            left: pointer.x,
            top: pointer.y,
            width: 0,
            height: 0,
            fill: 'transparent',
            stroke: '#000000',
            strokeWidth: 2,
          });
          break;
        case 'ellipse':
          shape = new fabric.Ellipse({
            left: pointer.x,
            top: pointer.y,
            rx: 0,
            ry: 0,
            fill: 'transparent',
            stroke: '#000000',
            strokeWidth: 2,
          });
          break;
        case 'line':
          shape = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
            stroke: '#000000',
            strokeWidth: 2,
          });
          break;
        case 'text':
          shape = new fabric.IText('Type here', {
            left: pointer.x,
            top: pointer.y,
            fontSize: 20,
            fill: '#000000',
          });
          canvas.add(shape);
          shape.enterEditing();
          break;
      }

      if (shape && currentTool !== 'text') {
        canvas.add(shape);
        canvas.setActiveObject(shape);
      }
    };

    // Handle mouse move for shape drawing
    const handleMouseMove = (options) => {
      if (!isDrawing.current || currentTool === 'select' || currentTool === 'pen' || currentTool === 'text') return;

      const pointer = canvas.getPointer(options.e);
      const shape = canvas.getActiveObject();

      if (!shape) return;

      switch (currentTool) {
        case 'rectangle':
          shape.set({
            width: pointer.x - shape.left,
            height: pointer.y - shape.top,
          });
          break;
        case 'ellipse':
          shape.set({
            rx: Math.abs(pointer.x - shape.left) / 2,
            ry: Math.abs(pointer.y - shape.top) / 2,
          });
          break;
        case 'line':
          shape.set({
            x2: pointer.x,
            y2: pointer.y,
          });
          break;
      }

      canvas.renderAll();
    };

    // Handle mouse up
    const handleMouseUp = () => {
      isDrawing.current = false;
    };

    // Add event listeners
    canvas.on('mouse:down', handleMouseDown);
    canvas.on('mouse:move', handleMouseMove);
    canvas.on('mouse:up', handleMouseUp);

    return () => {
      canvas.off('mouse:down', handleMouseDown);
      canvas.off('mouse:move', handleMouseMove);
      canvas.off('mouse:up', handleMouseUp);
    };
  }, [currentTool]);

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default WhiteboardCanvas; 