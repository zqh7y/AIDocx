import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import EditStyle from '../style/EditStyle';

const Edit = ({ setTextStyle }) => {
  const [textSize, setTextSize] = useState(16);
  const [textColor, setTextColor] = useState('#000');
  const [textAlign, setTextAlign] = useState('left');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const applyTextStyle = () => {
    setTextStyle({
      fontSize: textSize,
      color: textColor,
      textAlign,
      fontWeight: isBold ? 'bold' : 'normal',
      fontStyle: isItalic ? 'italic' : 'normal',
    });
  };

  const changeTextSize = (delta) => {
    setTextSize((prevSize) => {
      const newSize = Math.min(Math.max(prevSize + delta, 8), 30);
      applyTextStyle(); // Call applyTextStyle after size change
      return newSize;
    });
  };

  const handleTextAlignChange = (alignment) => {
    setTextAlign(alignment); // Update alignment state
    // Apply the text style immediately upon button press
    applyTextStyle(); 
  };

  const colorGrid = [
    '#000000', '#999999', '#ff7f00', '#0000ff', 
    '#4b0082', '#9400d3', '#ff0000', '#ff1493',
  ];

  return (
    <View style={EditStyle.container}>
      <Text style={EditStyle.label}>Text Settings</Text>
      <View style={EditStyle.sizeRow}>
        <TouchableOpacity onPress={() => changeTextSize(-1)}>
          <Text style={EditStyle.sizeSymbol}>−</Text>
        </TouchableOpacity>
        <Text style={EditStyle.sizeText}>{textSize}px</Text>
        <TouchableOpacity onPress={() => changeTextSize(1)}>
          <Text style={EditStyle.sizeSymbol}>+</Text>
        </TouchableOpacity>
        <View style={EditStyle.textStyleOptions}>
          <TouchableOpacity onPress={() => { 
            setIsBold((prev) => !prev); 
            applyTextStyle(); 
          }} style={[EditStyle.styleButton, isBold && EditStyle.selectedStyle]}>
            <Text style={EditStyle.styleText}>BOLD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { 
            setIsItalic((prev) => !prev); 
            applyTextStyle(); 
          }} style={[EditStyle.styleButton, isItalic && EditStyle.selectedStyle]}>
            <Text style={EditStyle.styleText}>ITALIC</Text>
          </TouchableOpacity>
        </View>
        <View style={EditStyle.alignRow}>
          <TouchableOpacity onPress={() => handleTextAlignChange('left')} style={[EditStyle.alignButton, textAlign === 'left' && { borderColor: '#d9d9d9', borderWidth: 1 }]}>
            <Image source={require('../image/left2.jpeg')} style={EditStyle.alignIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTextAlignChange('center')} style={[EditStyle.alignButton, textAlign === 'center' && { borderColor: '#d9d9d9', borderWidth: 1 }]}>
            <Image source={require('../image/center.png')} style={EditStyle.alignIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTextAlignChange('right')} style={[EditStyle.alignButton, textAlign === 'right' && { borderColor: '#d9d9d9', borderWidth: 1 }]}>
            <Image source={require('../image/right2.png')} style={EditStyle.alignIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={EditStyle.label}>Select Color:</Text>
      <View style={EditStyle.colorGrid}>
        {colorGrid.map((color, index) => (
          <TouchableOpacity key={index} onPress={() => {
            setTextColor(color);
            applyTextStyle();
          }} style={[EditStyle.colorButton, { backgroundColor: color }]} />
        ))}
      </View>
    </View>
  );
};

export default Edit;
